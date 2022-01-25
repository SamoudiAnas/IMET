//models
const User = require("../../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async (args) => {
    try {
      //verify if the user already exists
      const existingUser = await User.findOne({ email: args.userInput.email });
      if (existingUser) {
        throw new Error("User already exists");
      }

      //hash the password
      const hashedPassword = await bcrypt.hash(args.userInput.password, 12);

      //create the user
      const user = new User({
        fullName: args.userInput.fullName,
        email: args.userInput.email,
        password: hashedPassword,
        isAdmin: args.userInput.isAdmin,
      });

      //save to db
      const result = await user.save();
      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  login: async ({ email, password }) => {
    //check if the entered email is valid
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }

    //compare the entered password to the user's password
    const isEqual = await bcrypt.compare(password, user.password);

    //if not equal
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }

    //else : create a token for the user
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "just-vin-things@token",
      {
        expiresIn: "1h",
      }
    );

    return {
      userId: user.id,
      token: token,
      tokenExpiration: 1,
      isAdmin: user.isAdmin,
    };
  },
  getUserData: async (args, req) => {
    //check if logged in
    if (!req.isAuth) {
      return;
    }

    //check if the user doesn't exists
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      throw new Error("User wasn't found!");
    }

    return {
      ...user._doc,
      password: null,
    };
  },
};
