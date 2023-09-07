<template>
    <div class="list-container">
        <!-- Miner List -->
        <table v-if="tab===0" class="table table-dark">
            <thead>
                <tr>
                    <th class="th" scope="col">Name</th>
                    <th class="th" scope="col">Planet</th>
                    <th class="th" scope="col">carryCapacity</th>
                    <th class="th" scope="col">travelSpeed</th>
                    <th class="th" scope="col">miningSpeed</th>
                    <th class="th" scope="col">Position</th>
                    <th class="th" scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(miner, index) in miners" :key="index">
                    <th scope="row">{{ miner.name }}</th>
                    <td>{{ checkStrLengh(miner.planet) }}</td>
                    <td :class="{ 'td-green': miner.carryCapacity>=200 }">{{ miner.carryCapacity }}/200</td>
                    <td>{{ miner.travelSpeed }}</td>
                    <td>{{ miner.miningSpeed }}</td>
                    <td>{{ parseInt(miner.x) }},{{ parseInt(miner.y) }}</td>
                    <td>{{ miner.status }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Asteroid List -->
        <table v-if="tab===1" class="table table-dark">
            <thead>
                <tr>
                    <th class="th" scope="col">Name</th>
                    <th class="th" scope="col">Minerals</th>
                    <th class="th" scope="col">Current miner</th>
                    <th class="th" scope="col">Position</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(asteroid, index) in asteroids" :key="index">
                    <th scope="row">{{ asteroid.name }}</th>
                    <td :class="{ 'td-red': asteroid.minerals<=0 }">{{ asteroid.minerals }}</td>
                    <td>{{ asteroid.currentMiner?checkStrLengh(asteroid.currentMiner):'none' }}</td>
                    <td>{{ parseInt(asteroid.position.x) }},{{ parseInt(asteroid.position.y) }}</td>
                </tr>
            </tbody>
        </table>

        <!-- Planet List -->
        <table v-if="tab===2" class="table table-dark">
            <thead>
                <tr>
                    <th class="th" scope="col">Name</th>
                    <th class="th" scope="col">Miners</th>
                    <th class="th" scope="col">Minerals</th>
                    <th class="th" scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(planet, index) in planets" :key="index">
                    <th scope="row">{{ planet.name }}</th>
                    <td>{{ planet.miners }}</td>
                    <td :class="{ 'td-green': planet.minerals>=1000 }">{{ planet.minerals }}/1000</td>
                    <td v-if="planet.minerals>=1000" class="td-create">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <g clip-path="url(#clip0_6_9006)">
                            <path d="M4.49996 5.99997H5.99996H4.49996ZM7.49996 5.99997H5.99996H7.49996ZM5.99996 5.99997V4.49997V5.99997ZM5.99996 5.99997V7.49997V5.99997ZM5.84996 0.586575C5.94276 0.53299 6.05716 0.53299 6.14996 0.58658L10.6131 3.16337C10.7059 3.21696 10.7631 3.316 10.7631 3.42318V8.57678C10.7631 8.68393 10.7059 8.78298 10.6131 8.83658L6.14996 11.4134C6.05716 11.467 5.94276 11.467 5.84996 11.4134L1.38682 8.83658C1.294 8.78298 1.23682 8.68393 1.23682 8.57678V3.42318C1.23682 3.316 1.294 3.21696 1.38682 3.16337L5.84996 0.586575Z" fill="#00F0FF" stroke="#00F0FF" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M4 6H6M6 6H8M6 6V4M6 6V8" stroke="#191A29" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_6_9006">
                            <rect width="12" height="12" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        Create a miner</td>
                    <td v-else></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "StatusList",
    props: {
        tab: Number
    },
    computed: {
        ...mapState({
            miners: state => state.asteroid.miners,
            asteroids: state => state.asteroid.asteroids,
            planets: state => state.asteroid.planets
        }),
        checkStrLengh(){
            return (v)=>{
                let res = v.toString().length>10?v.substring(0,7)+"...":v
                return res
            }
        }
    },
    mounted() {
        console.log("status list loaded. ")
    }
}
</script>

<style scoped lang="scss">
.list-container {
    width: 543px;

    table, table td, table th {
        background-color: #191A29;
    }

    table, .table-dark td {
        color: #9499C3;
        text-overflow: ellipsis;
    }

   .table-dark .td-green {
        color: #00CF67;
    }

    .table-dark .td-red {
        color: #EB5757;
    }

    table th {
        font-weight: 700;
    }

    table .th {
        font-size: 10px;
    }
}

</style>