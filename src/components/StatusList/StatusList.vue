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
                    <th class="th" scope="col" width="80">Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(miner, index) in miners" :key="index">
                    <th scope="row">{{ miner.name }}</th>
                    <td>{{ miner.planet.name }}</td>
                    <td :class="{ 'td-green': miner.carryCapacity>=200 }">{{ miner.carryCapacity }}/200</td>
                    <td>{{ miner.travelSpeed }}</td>
                    <td>{{ miner.miningSpeed }}</td>
                    <td>{{ parseInt(miner.x) }},{{ parseInt(miner.y) }}</td>
                    <td>{{ getMinerStatus(miner.status) }}</td>
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
                    <td>{{ asteroid.currentMiner?checkStrLengh(asteroid.currentMiner.name):'None' }}</td>
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
                    <th scope="row" @click="minerListInPlanet(planet._id)" data-toggle="modal" data-target="#getMinersModal">{{ planet.name }}</th>
                    <td @click="minerListInPlanet(planet._id)" data-toggle="modal" data-target="#getMinersModal">{{ planet.miners }}</td>
                    <td :class="{ 'td-green': planet.minerals>=1000 }" @click="minerListInPlanet(planet._id)" data-toggle="modal" data-target="#getMinersModal">{{ planet.minerals }}/1000</td>
                    <td v-if="planet.minerals>=1000" class="td-create" data-toggle="modal" data-target="#createMinerModal" @click="createMinerAction()">
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

    <!-- Modal for showing miners in the planet -->
    <div class="modal fade" id="getMinersModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">List of miners of Pl1</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div v-if="getMinersLoading" class="model-box">
                    <div class="spinner-border" role="status">
                        <span class="sr-only"></span>
                    </div>
                </div>
                <div v-else>
                    <!-- Miners in current planet -->
                    <table class="table table-dark">
                        <thead>
                            <tr>
                                <th class="th" scope="col">Name</th>
                                <th class="th" scope="col">carryCapacity</th>
                                <th class="th" scope="col">travelSpeed</th>
                                <th class="th" scope="col">miningSpeed</th>
                                <th class="th" scope="col">Position</th>
                                <th class="th" scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(miner, index) in minersInPlanet" :key="index">
                                <th scope="row">{{ miner.name }}</th>
                                <td :class="{ 'td-green': miner.carryCapacity>=200 }">{{ miner.carryCapacity }}/200</td>
                                <td>{{ miner.travelSpeed }}</td>
                                <td>{{ miner.miningSpeed }}</td>
                                <td>{{ parseInt(miner.x) }},{{ parseInt(miner.y) }}</td>
                                <td>{{ miner.status }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </div>
    </div>

    <!-- Modal for creating new miner -->
    <div class="modal fade" id="createMinerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
        <div v-if="createMinerSucceed" class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="message-box">
                        The miner was successfully created
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="modal-dialog" role="document">
            <div class="modal-content">
                <Form @submit="HandleCreateMiner" :validation-schema="createMinerSchema">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">Create a miner</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <div class="form-group">
                                <label for="pname">Name</label>
                                <Field name="pname" class="form-control" />
                                <ErrorMessage name="pname" class="error-feedback" />
                            </div>

                            <div class="form-group">
                                <label for="planet">Planet</label>
                                <Field name="planet" as="select" class="form-control">
                                    <option value="">Select Planet</option>
                                    <option v-for="(p, i) in planets" :key="i" :value="p._id">{{ p.name }}</option>
                                </Field>
                                <ErrorMessage name="planet" class="error-feedback" />
                            </div>
                        </div>
                    </div>

                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel2">Assign points</h5>
                    </div>
                    <div class="modal-body">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="capacity">carryCapacity</label>
                                <Field name="capacity" class="form-control" />
                                <ErrorMessage name="capacity" class="error-feedback" />
                            </div>

                            <div class="form-group">
                                <label for="tspeed">travelSpeede</label>
                                <Field name="tspeed" class="form-control" />
                                <ErrorMessage name="tspeed" class="error-feedback" />
                            </div>

                            <div class="form-group">
                                <label for="mspeed">miningSpeed</label>
                                <Field name="mspeed" class="form-control" />
                                <ErrorMessage name="mspeed" class="error-feedback" />
                            </div>
                        </div>

                        <div class="form-group button-box mt-4">
                            <button type="submit" class="submit-button btn btn-light btn-block" :disabled="createMinerLoading">
                                <span v-if="createMinerLoading">
                                    Saving...
                                </span>
                                <span v-else>
                                    Save
                                </span>
                            </button>
                        </div>

                        <div v-show="createMinerError" class="form-group">
                            <div class="alert alert-danger" role="alert">
                                {{ createMinerError }}
                            </div>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import AsteroidService from '../../services/asteroid.service'
import { Form, Field, ErrorMessage } from "vee-validate"
import * as yup from "yup"
import commonFunctions from '../../helpers/commonFunctions'
import {
    MINER_STATUS
} from '../../helpers/constants'

export default {
    name: "StatusList",
    props: {
        tab: Number
    },
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const createMinerSchema = yup.object().shape({
            pname: yup
                .string()
                .max(20, 'Name must be less than 20 characters')
                .required("Name is required!"),
            planet: yup
                .string()
                .required("Planet is required!"),
            capacity: yup.number()
                .required("Planet is required!")
                .positive()
                .integer()
                .max(200),
            tspeed: yup.number()
                .required("travelSpeed is required!")
                .positive()
                .integer()
                .max(200),
            mspeed: yup.number()
                .required("miningSpeed is required!")
                .positive()
                .integer()
                .max(200),
        })

        return {
            minersInPlanet: [],
            getMinersLoading: false,
            createMinerSchema,
            createMinerLoading: false,
            createMinerError: "",
            createMinerSucceed: false
        }
    },
    computed: {
        ...mapState({
            miners: state => state.asteroid.miners,
            asteroids: state => state.asteroid.asteroids,
            planets: state => state.asteroid.planets
        }),
        checkStrLengh(){
            return (v)=>{
                let res = v.toString()
                res = res.length>10?res.substring(0,10)+"..":res
                return res
            }
        },
        getMinerStatus() {
            return (v)=>{
                let sIndex = parseInt(v)

                let res = MINER_STATUS[sIndex]
                res = res.length>12?res.substring(0,12)+"..":res
                return res
            }
        }
    },
    mounted() {
        console.log("status list loaded. ")

        console.log("here", MINER_STATUS[0])
    },
    methods: {
        createNewMiner(planetId) {
            AsteroidService.createMiner(planetId).then(
                (response) => {
                    console.log("create miner res: ", response)
                },
                (error) => {
                    console.log(error)
                }
            )
        },
        minerListInPlanet(planetId) {
            this.getMinersLoading = true

            AsteroidService.getMinersByPlanet(planetId).then(
                (response) => {
                    console.log("miners by planet res: ", response)

                    this.getMinersLoading = false
                    this.minersInPlanet = response
                },
                (error) => {
                    console.log(error)
                }
            )
        },
        HandleCreateMiner(miner) {
            this.createMinerLoading = true
            let xSpot = commonFunctions.getRandomPosition(1000)
            let ySpot = commonFunctions.getRandomPosition(1000)

            AsteroidService.createMiner(miner.pname, miner.planet, miner.capacity, miner.tspeed, miner.mspeed, xSpot, ySpot).then(
                (response) => {
                    console.log("create miner res: ", response)

                    this.createMinerLoading = false
                    this.createMinerSucceed = true
                },
                (error) => {
                    console.log(error)

                    this.createMinerError = error
                }
            )
        },
        createMinerAction() {
            this.createMinerLoading = false
            this.createMinerError = ""
            this.createMinerSucceed = false
        }
    }
}
</script>

<style scoped lang="scss">
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

.list-container {
    width: 543px;
}

#getMinersModal, #createMinerModal {
    .modal-dialog {
        margin-top: 30vh;
        
        .modal-content {
            padding-bottom: 10px;
            background-color: #191A29;

            .modal-header {
                position: relative;
                display: flex;
                justify-content: center;
                border-bottom: 0;

                .close {
                    position: absolute;
                    right: 16px;
                    top: 16px;
                    border: 0;
                    border-radius: 100%;
                    background-color: #31324B;
                    color: #FFFFFF;
                }
            }

            .modal-body {
                .message-box {
                    padding-top: 20px;
                    padding-bottom: 40px;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 700;
                }

                .model-box {
                    text-align: center;
                }

                .button-box {
                    padding-bottom: 10px;
                    text-align: center;
                }

                .form-group {
                    color: #9499C3;

                    .form-control {
                        border: #242538;
                        background-color: #242538;
                        color: #FFF;
                        font-size: 12px;
                        font-weight: 700;
                        line-height: 100%; /* 12px */
                    }
                    .error-feedback {
                        color: #EB5757;
                        font-family: Lato;
                        font-size: 9px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 100%; /* 9px */
                    }

                    .submit-button {
                        width: 91px;
                        color: #191A29;
                        font-family: Lato;
                        font-size: 12px;
                        font-style: normal;
                        font-weight: 900;
                        line-height: 12px; /* 100% */
                    }
                }

                .form-row {
                    display: flex;
                    justify-content: space-between;

                    .form-group {
                        width: 31%;
                    }
                }
            }
        }
    }
}
</style>