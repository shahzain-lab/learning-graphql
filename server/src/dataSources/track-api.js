const {RESTDataSource} = require('apollo-datasource-rest');


class TrackAPI extends RESTDataSource{
    constructor() {
        super()
        this.baseURL = 'https://odyssey-lift-off-rest-api.herokuapp.com/'
    }

    getTrackForHome() {
        return this.get('tracks')
    }

    getAuther(authorId) {
        return this.get(`author/${authorId}`)
    }

    getTracks(trackId) {
        return this.get(`track/${trackId}`)
    }

    getTrackModules(trackId) {
        return this.get(`track/${trackId}/modules`)
    }
}

module.exports = TrackAPI;