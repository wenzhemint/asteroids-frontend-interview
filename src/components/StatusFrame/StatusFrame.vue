<template>
    <div class="frame-container">
        <div v-if="planets.length>0">
            <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800" fill="none">
                <path d="M800 0H0.000488281V800H800V0Z" fill="url(#paint0_radial_6_7)"/>
                <defs>
                    <radialGradient id="paint0_radial_6_7" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(647.145 96.0938) rotate(68.4169) scale(724.561 675.2)">
                    <stop stop-color="#1A000E"/>
                    <stop offset="0.5056" stop-color="#540048"/>
                    <stop offset="1" stop-color="#000027"/>
                    </radialGradient>
                </defs>
            </svg>
        </div>

        <!-- Print out all planets -->
        <div v-for="(planet, index) in planets" :key="index">
            <PlanetComponent :x="getFramePosition(planet.position.x)" :y="getFramePosition(planet.position.y)" />
        </div>

        <!-- Print out all asteroids -->
        <div v-for="(asteroid, index) in asteroids" :key="index">
            <AsteroidComponent :x="getFramePosition(asteroid.position.x)" :y="getFramePosition(asteroid.position.y)" />
        </div>

        <!-- Print out all miners -->
        <div v-for="(miner, index) in miners" :key="index">
            <MinerComponent :x="getFramePosition(miner.x)" :y="getFramePosition(miner.y)" />
        </div>
    </div>
</template>

<script>
import PlanetComponent from '../PlanetComponent/PlanetComponent.vue'
import AsteroidComponent from '../AsteroidComponent/AsteroidComponent'
import MinerComponent from '../MinerComponent/MinerComponent'
import { mapState } from 'vuex'

export default {
    name: "StatusFrame",
    components: {
        PlanetComponent,
        AsteroidComponent,
        MinerComponent
    },
    data() {
        return {
            x: 200,
            y: 200
        }
    },
    computed: {
        ...mapState({
            miners: state => state.asteroid.miners,
            asteroids: state => state.asteroid.asteroids,
            planets: state => state.asteroid.planets
        })
    },
    mounted() {
        console.log("status frame loaded. ")
    },
    methods: {
        getFramePosition(position) {
            let positionInt = parseInt(position)

            positionInt = parseInt(positionInt * 0.8)

            return positionInt
        }
    }
}
</script>

<style scoped lang="scss">
.frame-container {
    position: relative;
    // z-index: 20;
    width: 800px;
    height: 800px;
    background-image: url("../../assets/images/StatusFrameBg.png");
}

</style>