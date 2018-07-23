require('dotenv').config()
const express = require('express')
const mqtt = require('mqtt')

const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http)

const cors = require('cors')
app.use(cors())

const host =  process.env.MQTT_SERVER
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
var connectedClients = 0
var options = {
  keepalive: 1800,
  clientId: clientId,
  protocolId: 'MQTT',
  protocolVersion: 4,
  clean: true,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
  rejectUnauthorized: false
}

console.log(options)
var client = mqtt.connect(host, options)
client.on('error', function (err) {
  console.log(err)
  client.end()
})

io.on('connection', socket => {
  socket.on('disconnect', () => {
    connectedClients--
    console.log("Client left: ", connectedClients);
  })
  connectedClients++
  console.log("New client: ", connectedClients)
})
client.subscribe(['houston', 'sonoma', 'miami', 'atlanta', 'boston', 'denver'])

client.on('message', (topic, message) => {
  var inc = message.toString()
  var received = JSON.parse(message.toString())
  console.log('Topic: '+topic+'\nMessage: ', received)
  io.emit(topic, received)

})

http.listen(8080, () => {
  console.log('Listening on port 8080')
})
