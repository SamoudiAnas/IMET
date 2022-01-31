const { buildSchema } = require('graphql');

module.exports = buildSchema(`
        type User {
          _id: ID!
          fullName: String!
          email: String!
          password: String
          address:String
          bio:String
          profilePic:String
          phoneNumber:String
          instagram:String
          facebook:String
          twitter:String
          linkedIn:String
          customLink:String
          snapshat:String
          whatsapp:String
          discord:String
          map:String
          youtube:String
          isAdmin: Boolean!
        }

        type Message{
          _id: ID!
          fullName: String!
          email: String!
          message: String!
          createdAt: String!
        }

        type Item{
          _id: ID!
          name: String!
          interestedPeople: [String!]
        }

        type Subscription{
          _id: ID!
          email: String!
          createdAt: String!
        }

        type AuthData{
          userId: ID!
          token: String!
          tokenExpiration: Int!
          isAdmin: Boolean!
        }

        input UserInput {
          fullName: String!
          email: String!
          password: String!
          isAdmin: Boolean!
        }

        input MessageInput {
          fullName: String!
          email: String!
          message: String!
        }

        input ProfileInfoInput{
          address:String
          bio:String
          profilePic:String
          phoneNumber:String
          instagram:String
          facebook:String
          linkedIn:String
          customLink:String
          snapshat:String
          whatsapp:String
          twitter:String
          discord:String
        }

        type RootQuery {
          items:[Item!]!
          messages:[Message!]!
          subscriptions:[Subscription!]!
          login(email: String!, password: String!): AuthData!
          getUserData: User
        }

        type RootMutation {
          createUser(userInput: UserInput): User
          login(email:String!, password:String!): AuthData
          createMessage(messageInput: MessageInput): Message
          updateProfile(profileInfoInput: ProfileInfoInput) :User
          createSubscription(email: String!): Subscription
          createItem(name: String!): Item
          addInterest(name: String!,email: String!): Item
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }

`);
