import { reactive } from "vue";
import { io } from "socket.io-client";

export const state = reactive({
  connected: false,
  fooEvents: [],
  tickEvents: []
});

// "undefined" means the URL will be computed from the `window.location` object
const URL = process.env.NODE_ENV === "production" ? undefined : "https://asteroids.dev.mediasia.cn";

export const socket = io(URL);

socket.on("connect", () => {
  state.connected = true;
  console.log("connected")
});

socket.on("disconnect", () => {
  state.connected = false;
  console.log("disconnect")
});

socket.on("tick", (...args) => {
  state.tickEvents.push(args);
  console.log("tick event from socket: ", args)
});