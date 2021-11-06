import {gql} from "@apollo/client";
 
 
 export const GET_USER_PROFILE_DETAIL = gql`
    query getUser($username: String!) {
        user(login: $username) {
          avatarUrl
          name
          bio
         
          followers {
            totalCount
          }
          following {
            totalCount
          }
          createdAt
        }
      }
    `;