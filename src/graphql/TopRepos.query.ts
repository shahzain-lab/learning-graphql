import {gql} from '@apollo/client';

export const GET_USER_TOP_REPOS = gql`
query getUser($username: String!) {
  user(login: $username) {
    topRepositories(first: 8, orderBy: {field: UPDATED_AT, direction: DESC}) {
      edges {
        node {
          name
          description
          languages(first: 4) {
            edges {
              node {
                id
                name
                color
              }
            }
          }
          updatedAt
          id
          url
        }
      }
    }
  }

  }
`;