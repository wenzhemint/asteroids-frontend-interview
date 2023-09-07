import axios from 'axios';

class AsteroidService {
    // Get all miners
    getAllMiners() {
        return axios.get(`/miners`)
    }
    // Get all asteroids
    getAllAsteroids() {
        return axios.get(`/asteroids`)
    }
    // Get all planets
    getAllPlanets() {
        return axios.get(`/planets`)
    }
}

export default new AsteroidService()
