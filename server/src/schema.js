const {gql} = require('apollo-server');


const typeDefs = gql`
 "Get tracks array for homepage grid"
type Query{
    tracksForHome: [Track!]!
}

 "tracks is a group of module that teaches about a specific topic"
 type Track{
     id: ID!
     "the tracks title"
     title: String!
     "the tracks chractr author"
     author: Author!
     "the track img or illuatrtion"
     thumbnail: String
     "the track approximatly length to complete"
     length: Int
     "no. of module the trks use"
     modulesCount: Int
 } 

"Author of a complete Track or a Module"
 type Author{
     id: ID!
     name: String!
     photo: String
 }

`;

module.exports = typeDefs;