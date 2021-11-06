import {gql} from "@apollo/client";

export const GET_USER_REPOS = gql`
query repositories($username: String!, $cursor: String){
    user(login: $username) {
      repositories(first: 6, after: $cursor){
        edges {
          node {
            id
            name
            stargazerCount
            viewerHasStarred
            url
            updatedAt
            forkCount
            description
            createdAt
            isPrivate
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
  
`;


export const ADD_STAR_TO_REPO = gql`
mutation addStar($starableid: String!){
 addStar(input: {starrableId: $starableid}){
   starrable {
     stargazerCount
   }
 }
}
`;

export const REMOVE_STAR_FROM_REPO = gql`
mutation removeStar($starableid: String!){
 removeStar(input: {starrableId: $starableid}) {
   starrable {
     stargazerCount
   }
 }
}
`;