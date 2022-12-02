const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]    
  }

  type Book {
    bookId: ID!
    title: String!
    description: String!
    image: String
    link: String
    authors: [String]
  }

  type Auth {
    token: ID!
    user: User
  }

  input BookInput {
      bookId: ID!,      
      authors: [String], 
      title: String!, 
      description: String!, 
      image: String,      
      link: String 
  }


  type Query {
    # define 1 entry points according to query.js
    me: User
   
  }

  type Mutation {
    # define 2 entry points according to mutation.js

    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: BookInput!) : User
    removeBook(bookId: String!): User

  }
`;

module.exports = typeDefs;
