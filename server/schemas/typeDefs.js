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
    bookId: String!
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
      authors: [String], 
      description: String!, 
      title: String!, 
      bookId: String!,
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
    saveBook(bookData: BookInput) : User
    removeBook(bookId: String!): User

  }
`;

module.exports = typeDefs;
