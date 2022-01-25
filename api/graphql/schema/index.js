const { buildSchema } = require("graphql");

module.exports = buildSchema(`
        type User {
          _id: ID!
          fullName: String!
          email: String!
          password: String
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

        type RootQuery {
          items:[Item!]!
          messages:[Message!]!
          subscriptions:[Subscription!]!
          login(email: String!, password: String!): AuthData!
          getUserData: User!
        }

        type RootMutation {
          createUser(userInput: UserInput): User
          
          createMessage(messageInput: MessageInput): Message

          createSubscription(email: String!): Subscription
          
          createItem(name: String!): Item
          addInterest(name: String!,email: String!): Item
        }

        schema {
            query: RootQuery
            mutation: RootMutation
        }

`);
