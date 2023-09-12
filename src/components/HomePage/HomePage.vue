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
                            <svg v-if="currentTab===0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M7.1067 21.2386C6.81318 19.9576 6.66558 18.6475 6.6667 17.3333C6.6667 10.5493 10.5374 4.75195 16 2.42395C21.4627 4.75195 25.3334 10.5493 25.3334 17.3333C25.3334 18.68 25.1814 19.988 24.8934 21.2386L27.5867 23.6333C27.7026 23.7364 27.779 23.8767 27.8026 24.03C27.8262 24.1833 27.7956 24.3401 27.716 24.4733L24.4387 29.9346C24.3865 30.0214 24.3153 30.0951 24.2304 30.1503C24.1454 30.2054 24.0491 30.2405 23.9486 30.2528C23.8481 30.2652 23.7461 30.2544 23.6504 30.2215C23.5546 30.1885 23.4676 30.1342 23.396 30.0626L20.3907 27.0573C20.1407 26.8072 19.8016 26.6667 19.448 26.6666H12.552C12.1984 26.6667 11.8594 26.8072 11.6094 27.0573L8.60404 30.0626C8.53243 30.1342 8.44546 30.1885 8.34972 30.2215C8.25398 30.2544 8.152 30.2652 8.0515 30.2528C7.951 30.2405 7.85464 30.2054 7.76971 30.1503C7.68479 30.0951 7.61354 30.0214 7.56137 29.9346L4.28404 24.4746C4.20414 24.3413 4.17333 24.1842 4.19695 24.0306C4.22057 23.877 4.29712 23.7365 4.41337 23.6333L7.1067 21.2386ZM16 17.3333C16.7073 17.3333 17.3856 17.0523 17.8857 16.5522C18.3858 16.0521 18.6667 15.3739 18.6667 14.6666C18.6667 13.9594 18.3858 13.2811 17.8857 12.781C17.3856 12.2809 16.7073 12 16 12C15.2928 12 14.6145 12.2809 14.1144 12.781C13.6143 13.2811 13.3334 13.9594 13.3334 14.6666C13.3334 15.3739 13.6143 16.0521 14.1144 16.5522C14.6145 17.0523 15.2928 17.3333 16 17.3333Z" fill="#38D9A9"/>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M7.10646 21.2386C6.81294 19.9576 6.66533 18.6475 6.66646 17.3333C6.66646 10.5493 10.5371 4.75195 15.9998 2.42395C21.4625 4.75195 25.3331 10.5493 25.3331 17.3333C25.3331 18.68 25.1811 19.988 24.8931 21.2386L27.5865 23.6333C27.7024 23.7364 27.7787 23.8767 27.8023 24.03C27.8259 24.1833 27.7953 24.3401 27.7158 24.4733L24.4385 29.9346C24.3863 30.0214 24.315 30.0951 24.2301 30.1503C24.1452 30.2054 24.0488 30.2405 23.9483 30.2528C23.8478 30.2652 23.7459 30.2544 23.6501 30.2215C23.5544 30.1885 23.4674 30.1342 23.3958 30.0626L20.3905 27.0573C20.1405 26.8072 19.8014 26.6667 19.4478 26.6666H12.5518C12.1982 26.6667 11.8591 26.8072 11.6091 27.0573L8.60379 30.0626C8.53218 30.1342 8.44521 30.1885 8.34947 30.2215C8.25374 30.2544 8.15175 30.2652 8.05125 30.2528C7.95076 30.2405 7.85439 30.2054 7.76947 30.1503C7.68455 30.0951 7.6133 30.0214 7.56113 29.9346L4.28379 24.4746C4.20389 24.3413 4.17309 24.1842 4.19671 24.0306C4.22032 23.877 4.29687 23.7365 4.41313 23.6333L7.10646 21.2386ZM15.9998 17.3333C16.707 17.3333 17.3853 17.0523 17.8854 16.5522C18.3855 16.0521 18.6665 15.3739 18.6665 14.6666C18.6665 13.9594 18.3855 13.2811 17.8854 12.781C17.3853 12.2809 16.707 12 15.9998 12C15.2926 12 14.6143 12.2809 14.1142 12.781C13.6141 13.2811 13.3331 13.9594 13.3331 14.6666C13.3331 15.3739 13.6141 16.0521 14.1142 16.5522C14.6143 17.0523 15.2926 17.3333 15.9998 17.3333Z" fill="white"/>
                            </svg>
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
                            <svg v-if="currentTab===1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M25.8801 14.4732H28.6623C28.5774 13.047 28.2636 11.6438 27.733 10.3175L25.2903 11.7297C25.6019 12.5973 25.8064 13.5165 25.8801 14.4732ZM21.0351 3.22473C19.6831 2.58007 18.2315 2.17036 16.7423 2.01311V4.82768C17.7427 4.9584 18.719 5.23279 19.6412 5.64238L21.0351 3.22473ZM24.0133 9.25077L26.4352 7.85115C25.6092 6.63165 24.5885 5.55654 23.4138 4.66892L22.0144 7.09493C22.7774 7.71722 23.4501 8.4428 24.0133 9.25077ZM15.3498 25.8917C12.5459 25.8917 9.85687 24.7766 7.87422 22.7916C5.89157 20.8067 4.77773 18.1146 4.77773 15.3074C4.77773 10.3648 8.16457 6.22354 12.7398 5.06078C13.4292 4.8856 13.9601 4.29464 13.9601 3.58342C13.9601 2.7429 13.2293 2.08093 12.4093 2.26541C6.44811 3.60643 1.99561 8.93582 1.99561 15.3074C1.99542 17.0634 2.34075 18.8022 3.01187 20.4245C3.68298 22.0468 4.66674 23.5209 5.90696 24.7625C7.14718 26.0042 8.61956 26.9891 10.24 27.661C11.8605 28.3328 13.5973 28.6786 15.3512 28.6784C21.4953 28.6784 26.6587 24.5185 28.2115 18.8595C28.4398 18.0277 27.7732 17.2586 26.9106 17.2586C26.2294 17.2586 25.6548 17.7482 25.4562 18.3998C24.1352 22.7355 20.113 25.8917 15.3498 25.8917Z" fill="#38D9A8"/>
                                <circle cx="15.5" cy="15.5" r="4.5" fill="#38D9A8"/>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M25.8804 14.4732H28.6625C28.5776 13.047 28.2639 11.6438 27.7333 10.3175L25.2906 11.7297C25.6022 12.5973 25.8067 13.5165 25.8804 14.4732ZM21.0353 3.22473C19.6834 2.58007 18.2317 2.17036 16.7425 2.01311V4.82768C17.7429 4.9584 18.7193 5.23279 19.6415 5.64238L21.0353 3.22473ZM24.0136 9.25077L26.4354 7.85115C25.6095 6.63165 24.5887 5.55654 23.414 4.66892L22.0146 7.09493C22.7776 7.71722 23.4504 8.4428 24.0136 9.25077ZM15.35 25.8917C12.5462 25.8917 9.85711 24.7766 7.87446 22.7916C5.89181 20.8067 4.77797 18.1146 4.77797 15.3074C4.77797 10.3648 8.16481 6.22354 12.7401 5.06078C13.4294 4.8856 13.9604 4.29464 13.9604 3.58342C13.9604 2.7429 13.2296 2.08093 12.4095 2.26541C6.44836 3.60643 1.99585 8.93582 1.99585 15.3074C1.99567 17.0634 2.34099 18.8022 3.01211 20.4245C3.68323 22.0468 4.66699 23.5209 5.9072 24.7625C7.14742 26.0042 8.6198 26.9891 10.2403 27.661C11.8607 28.3328 13.5975 28.6786 15.3514 28.6784C21.4956 28.6784 26.659 24.5185 28.2118 18.8595C28.44 18.0277 27.7734 17.2586 26.9108 17.2586C26.2296 17.2586 25.655 17.7482 25.4565 18.3998C24.1354 22.7355 20.1132 25.8917 15.35 25.8917Z" fill="white"/>
                                <circle cx="15.5" cy="15.5" r="4.5" fill="white"/>
                            </svg>
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
                            <svg v-if="currentTab===2" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M26.6667 20.4134L29.2 17.88C30.24 16.84 30.24 15.1467 29.2 14.1067L26.6667 11.5867V8.00002C26.6667 6.53335 25.4667 5.33335 24 5.33335H20.4134L17.88 2.80002C16.84 1.76002 15.1467 1.76002 14.1067 2.80002L11.5867 5.33335H8.00002C6.53335 5.33335 5.33335 6.53335 5.33335 8.00002V11.5867L2.80002 14.12C1.76002 15.16 1.76002 16.8534 2.80002 17.8934L5.33335 20.4267V24C5.33335 25.4667 6.53335 26.6667 8.00002 26.6667H11.5867L14.12 29.2C15.16 30.24 16.8534 30.24 17.8934 29.2L20.4267 26.6667H24C25.4667 26.6667 26.6667 25.4667 26.6667 24V20.4134Z" fill="#38D9A9"/>
                            </svg>
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M26.6667 20.4134L29.2 17.88C30.24 16.84 30.24 15.1467 29.2 14.1067L26.6667 11.5867V8.00002C26.6667 6.53335 25.4667 5.33335 24 5.33335H20.4134L17.88 2.80002C16.84 1.76002 15.1467 1.76002 14.1067 2.80002L11.5867 5.33335H8.00002C6.53335 5.33335 5.33335 6.53335 5.33335 8.00002V11.5867L2.80002 14.12C1.76002 15.16 1.76002 16.8534 2.80002 17.8934L5.33335 20.4267V24C5.33335 25.4667 6.53335 26.6667 8.00002 26.6667H11.5867L14.12 29.2C15.16 30.24 16.8534 30.24 17.8934 29.2L20.4267 26.6667H24C25.4667 26.6667 26.6667 25.4667 26.6667 24V20.4134Z" fill="white"/>
                                <path d="M23.6299 19.1569L25.4421 17.3448C26.186 16.6009 26.186 15.3896 25.4421 14.6457L23.6299 12.8431V10.2775C23.6299 9.22842 22.7716 8.37005 21.7225 8.37005H19.1569L17.3448 6.55794C16.6009 5.81402 15.3896 5.81402 14.6457 6.55794L12.8431 8.37005H10.2775C9.22842 8.37005 8.37005 9.22842 8.37005 10.2775V12.8431L6.55794 14.6552C5.81402 15.3991 5.81402 16.6104 6.55794 17.3543L8.37005 19.1664V21.7225C8.37005 22.7716 9.22842 23.6299 10.2775 23.6299H12.8431L14.6552 25.4421C15.3991 26.186 16.6104 26.186 17.3543 25.4421L19.1664 23.6299H21.7225C22.7716 23.6299 23.6299 22.7716 23.6299 21.7225V19.1569Z" fill="white"/>
                            </svg>
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

export default {
    name: "HomePage",
    components: {
        StatusList,
        StatusFrame
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