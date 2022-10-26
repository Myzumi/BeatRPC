const net = require('net')
require('dotenv').config()
const ms = require('ms')
const fs = require('fs')
const RPC = require('discord-rpc')
const chalk = require('chalk')

let responded = true;
let update_cooldown = false;
let data_cooldown = false;
let rpc_testing = true;
setInterval(() => {
  data_cooldown = false;
}, ms('1s'));
setInterval(() => {
  update_cooldown = false;
}, ms('15s'));
const Client = new RPC.Client({
  transport: 'ipc'
})
const socket = net.connect({
  host: process.env.IP,
  port: process.env.PORT,
})

setInterval(() => {
  if (rpc_testing) return;
  if (responded) {
    responded = false
  } else {
    console.log(chalk.red(`Last HeartBeat was 1 minute ago, exiting app!`))
    process.exit()
  }
}, ms('30s'));

let mock = true;
socket.on('data', async (data) => {
  if (data_cooldown) return;
  data_cooldown = true;
  if (mock) {
    console.log(chalk.redBright(`HeartBeat ❤`));
    responded = true;
    return mock = false;
  }
  mock = true;
  if (update_cooldown) return;
  //fs.writeFileSync(`./raw.json`, JSON.stringify(data.toJSON()))
  let ReadableData = await data.subarray(4, data.length).toString();
  let JsonValidator = /\{[A-z-0-9-"-:- ]{1,}\}/gm
  PreparedData = JsonValidator.exec(ReadableData);
  if (PreparedData === null || PreparedData.length === 0) {
    console.log(chalk.red("An Error appeared when reading data {Error 1}"));
    return fs.appendFileSync(`./data.txt`, `JSON ORIGINAL: ${ReadableData}\nJSON ERROR: ${PreparedData}\n`)
  }

  console.log(`Data: \n\n${PreparedData}`)
  fs.appendFileSync(`./data.txt`, PreparedData + `\n`)
  
  update_cooldown = true;
})



Client.on('ready', () => {

})

if (rpc_testing) RPCTesting()

function RPCTesting() {
  Client.connect("1034549018459656343").then(() => {
    Client.setActivity({
      details: "Experimenting with RPC",
      state: "BeatRPC WIP!",
      largeImageKey: "beat-logo"
    })
  })
}

socket.on('connect', () => {
  console.log(`Connected to ${process.env.IP}:${process.env.PORT}`)
})

process.on('uncaughtException', (error) => {
  if (error.message === `connect ETIMEDOUT ${process.env.IP}:${process.env.PORT}`)
  return console.log(chalk.red(`Failed to connect to Streamer Tools Mod on ${process.env.IP}\nPlease check that you have BeatSaber open and Streamer Tools Installed.`))
  
  console.log(error.message)
  console.log(error)
  if (!rpc_testing) process.exit()
})
