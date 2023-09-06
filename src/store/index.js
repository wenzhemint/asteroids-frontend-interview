import { createStore } from "vuex"
import asteroid from './asteroid.js'

const store = createStore({
    modules: {
        asteroid
    }
})

export default store