const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
       // the homepage grid of our web client
       tracksForHome: (_, __, {dataSources}) => {
           return dataSources.trackAPI.getTrackForHome();
       }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
        return dataSources.trackAPI.getAuther(authorId);
    }
}
};

module.exports = resolvers;
