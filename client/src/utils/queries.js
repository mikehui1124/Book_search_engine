import { gql } from '@apollo/client';

// to Get all record(ie [{tech}] ) from user collect
export const GET_ME = gql`
query me {
  me {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      image
      description
      title
      link
    }
  }
}
`;


