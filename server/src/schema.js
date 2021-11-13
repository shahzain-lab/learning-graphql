const {gql} = require('apollo-server');


const typeDefs = gql`
 "Get tracks array for homepage grid"
type Query{
    tracksForHome: [Track!]!
    track(id: ID!): Track
}

type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse{
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
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
    "The track's complete description, can be in Markdown format"
     description: String
    "The number of times a track has been viewed"
     numberOfViews: Int
     "the track approximatly length to complete"
     length: Int
     "no. of module the trks use"
     modulesCount: Int
     "The track's complete array of Modules"
     modules: [Module!]!
 } 

 "A Module is a single unit of teaching. Multiple Modules compose a Track"
 type Module{
     "The module's ID"
    id: ID!
  "The Module's title"
  title: String!
  "The Module's length in minutes"
  length: Int
 }

"Author of a complete Track or a Module"
 type Author{
     id: ID!
     name: String!
     photo: String
 }

`;

module.exports = typeDefs;