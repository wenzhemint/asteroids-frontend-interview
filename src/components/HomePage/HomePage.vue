<template>
    <!-- Main Container -->
    <div class="home-container">
        <!-- The asteroids-mining status list section -->
        <div class="status-list">
            <!-- Status list menu buttons -->
            <div class="status-list-menu">
                <!-- Each menu button -->
                <div class="list-menu-block" :class="{ 'tabIsActive': currentTab===0 }" @click="updateCurrentTab(0)">
                    <div>
                        <div>
                            <div v-if="currentTab===0">
                                <IconComponent icon="tab-1-active" />
                            </div>
                            <div v-else>
                                <IconComponent icon="tab-1" />
                            </div>
                        </div>

                        <div class="mt-1">
                            Miners
                        </div>
                    </div>
                </div>
                <!-- Each menu button -->
                <div class="list-menu-block" :class="{ 'tabIsActive': currentTab===1 }" @click="updateCurrentTab(1)">
                    <div>
                        <div>
                            <div v-if="currentTab===1">
                                <IconComponent icon="tab-2-active" />
                            </div>
                            <div v-else>
                                <IconComponent icon="tab-2" />
                            </div>
                        </div>

                        <div class="mt-1">
                            Asteroids
                        </div>
                    </div>
                </div>
                <!-- Each menu button -->
                <div class="list-menu-block" :class="{ 'tabIsActive': currentTab===2 }" @click="updateCurrentTab(2)">
                    <div>
                        <div>
                            <div v-if="currentTab===2">
                                <IconComponent icon="tab-3-active" />
                            </div>
                            <div v-else>
                                <IconComponent icon="tab-3" />
                            </div>
                        </div>

                        <div class="mt-1">
                            Planets
                        </div>
                    </div>
                </div>

                <div class="section-hr"></div>
            </div>

            <StatusList :tab="currentTab" />
        </div>

        <!-- The astreroids-mining status frame section -->
        <!-- only show Status Frame component when the screen with is wide enough.  -->
        <div v-if="showFrame" class="status-frame">
            <!-- Frame header -->
            <div class="frame-header">
                {{ currentTick }} years
            </div>

            <!-- Frame component -->
            <StatusFrame />
        </div>
    </div>
</template>

<script>
import {
    DEFAULT_WIDTH
} from '../../helpers/constants'
import { mapState, mapMutations } from 'vuex'
import { socket, state } from "@/socket"
import StatusList from '../StatusList/StatusList.vue'
import StatusFrame from '../StatusFrame/StatusFrame.vue'
import AsteroidService from '../../services/asteroid.service'
import IconComponent from '../IconComponent/IconComponent.vue'

export default {
    name: "HomePage",
    components: {
        StatusList,
        StatusFrame,
        IconComponent
    },
    data() {
        return {
            currentTab: 0,
            // currentYear: 0,
            showFrame: false
        }
    },
    computed: {
        ...mapState({
            miners: state => state.asteroid.miners,
            ticks: state => state.asteroid.ticks
        }),
        currentTick() {
            return state.currentTick
        }
    },
    mounted() {
        // console.log('base url from env: ', process.env.VUE_APP_BASE_URL)

        // Check window width after loading. 
        this.getDimensions()

        // Get miners, asteroids, planets data
        this.getMiners()
        this.getAsteroids()
        this.getPlanets()
        
        // Connect to Sockeet after Home page has loaded. 
        socket.connect()

        // // count year
        // this.timer = setInterval(this.countYear, 1000)

        // Check if screen is resizing
        window.addEventListener('resize', this.getDimensions)
    },
    unmounted() {
        // remove event listener
        window.removeEventListener('resize', this.getDimensions)
        // // clear timmer
        // clearInterval(this.timer)
    },
    methods: {
        ...mapMutations('asteroid', ['updateMiners', 'updateAsteroids', 'updatePlanets']),
        getDimensions() {
            let screenWidth = document.documentElement.clientWidth

            this.showFrame = screenWidth>DEFAULT_WIDTH?true:false
        },
        // countYear() {
        //     this.currentYear++
        // },
        updateCurrentTab(index) {
            this.currentTab = index
        },
        getMiners() {
            AsteroidService.getAllMiners().then(
                (response) => {
                    console.log("miners res: ", response)

                    this.updateMiners(response)
                },
                (error) => {
                    console.log(error)
                }
            )
        },
        getAsteroids() {
            AsteroidService.getAllAsteroids().then(
                (response) => {
                    console.log("asteroids res: ", response)

                    this.updateAsteroids(response)
                },
                (error) => {
                    console.log(error)
                }
            )
        },
        getPlanets() {
            AsteroidService.getAllPlanets().then(
                (response) => {
                    console.log("palnets res: ", response)

                    this.updatePlanets(response)
                },
                (error) => {
                    console.log(error)
                }
            )
        }
    }
}
</script>

<style scoped lang="scss">
// Main container
.home-container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 32px;

    // Status List section
    .status-list {
        // Status list menu buttons
        .status-list-menu {
            display: flex;
            position: relative;
            padding-bottom: 24px;

            .section-hr {
                position: absolute;
                left: 0;
                bottom: 0;
                // z-index: 10;
                width: 100%;
                height: 1px;
                background-color: #33344B;
            }
            
            .tabIsActive {
                border-radius: 8px;
                border: 1px solid #32334A;
                background: #191A29;
                box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            }

            .list-menu-block {
                width: 70px;
                height: 66px;
                display: flex;
                justify-content: center;
                align-items: center;
                text-align: center;
                color: #9499C3;
                font-size: 12px;
            }
        }
    }

    // Status Frame section
    .status-frame {
        // Frame header
        .frame-header {
            padding-top: 3px;
            padding-bottom: 12px;
            font-size: 16px;
            line-height: 100%; /* 16px */
            text-transform: uppercase;
        }
    }
}

</style>