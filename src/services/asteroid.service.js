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
    // Get miners by planet
    getMinersByPlanet(pid) {
        return axios.get(`/miners?planetId=${pid}`)
    }
    // Create a miner
    async createMiner(name, planetId, capacity, tspeed, mspeed, x, y) {
        return await axios.post(`miners`, {
            name: name,
            planet: planetId,
            x: x,
            y: y,
            angle: 0,
            carryCapacity: capacity,
            travelSpeed: tspeed,
            miningSpeed: mspeed,
            status: 0,
            minerals: 0,
            target: planetId,
            targetType: 'Planet'
        })
    }
}

export default new AsteroidService()
