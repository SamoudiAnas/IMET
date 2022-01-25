const authResolver = require("./auth");
const messageResolver = require("./message");
const subscriptionResolver = require("./subscription");
const itemResolver = require("./item");

module.exports = {
  ...authResolver,
  ...messageResolver,
  ...subscriptionResolver,
  ...itemResolver,
};
