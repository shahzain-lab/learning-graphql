const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
       // the homepage grid of our web client
       tracksForHome: (_, __, {dataSources}) => {
           return dataSources.trackAPI.getTrackForHome();
       },
       track: (_, {id}, {dataSources}) => {
           return dataSources.trackAPI.getTracks(id)
       }
    },
    Track: {
        author: ({authorId}, _, {dataSources}) => {
        return dataSources.trackAPI.getAuther(authorId);
    },
        modules: ({id}, _, {dataSources}) => {
            return dataSources.trackAPI.getTrackModules(id);
        }
}
};

module.exports = resolvers;
