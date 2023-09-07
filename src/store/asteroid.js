const state = () => ({
    miners: JSON.parse(localStorage.getItem('miners')) || [],
    asteroids: JSON.parse(localStorage.getItem('asteroids')) || [],
    planets: JSON.parse(localStorage.getItem('planets')) || []
})

const mutations = {
    updateMiners(state, miners) {
        state.miners = miners
        localStorage.setItem('miners', JSON.stringify(state.miners))
    },
    clearMiners(state) {
        state.miners = null
        localStorage.removeItem('miners')
    },
    updateAsteroids(state, asteroids) {
        state.asteroids = asteroids
        localStorage.setItem('asteroids', JSON.stringify(state.asteroids))
    },
    clearAsteroids(state) {
        state.asteroids = null
        localStorage.removeItem('asteroids')
    },
    updatePlanets(state, planets) {
        state.planets = planets
        localStorage.setItem('planets', JSON.stringify(state.planets))
    },
    clearPlanets(state) {
        state.planets = null
        localStorage.removeItem('planets')
    }
}

export default {
    namespaced: true,
    state,
    mutations
};