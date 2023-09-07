import { reactive } from "vue"
import { io } from "socket.io-client"
import store from './store'

export const state = reactive({
  connected: false,
  tickEvents: [],
  currentTick: 0
})

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "https://asteroids.dev.mediasia.cn"

export const socket = io(URL)

socket.on("connect", () => {
  state.connected = true
  console.log("connected")
})

socket.on("disconnect", () => {
  state.connected = false
  console.log("disconnect")
})

// Listen to "tick" channel
socket.on("tick", (args) => {
  state.tickEvents.push(args)
  
  console.log("current state data: ", store.state.asteroid)
  console.log("tick event from socket: ", args)

  let minersArr = []
  let asteroidsArr = []
  let palnetArr = []
  minersArr = args.miners
  asteroidsArr = args.asteroids
  palnetArr = args.planets

  // Sync static data by the the data received from socket channel
  if(checkIfStatesValid() && checkArrayIsValid(minersArr) && checkArrayIsValid(asteroidsArr) && checkArrayIsValid(palnetArr)) {
    // Sync Miners data
    store.state.asteroid.miners = minersArr
    localStorage.setItem('miners', JSON.stringify(minersArr))

    // Sync Adteroids data
    store.state.asteroid.asteroids = asteroidsArr
    localStorage.setItem('asteroids', JSON.stringify(asteroidsArr))

    // Sync Planet data
    store.state.asteroid.planets = palnetArr
    localStorage.setItem('planets', JSON.stringify(palnetArr))
  }

  state.currentTick = args.currentTick
})

function checkIfStatesValid() {
  if(store.state && store.state.asteroid && store.state.asteroid.miners && store.state.asteroid.asteroids && store.state.asteroid.planets) {
    return true
  }

  return false
}

function checkArrayIsValid(arr) {
  if(arr && arr.length>0) {
    return true
  }

  return false
}