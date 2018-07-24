//console.log = function(){}  //Uncomment for production
require('dotenv').config()
const express = require('express')
const mqtt = require('mqtt')

const app = express()
const http = require('http').Server(app);
const io = require('socket.io')(http)
const cors = require('cors')
app.use(cors())

//Cities as an array of topics we expect data from
const cities = ['houston', 'sonoma', 'miami', 'atlanta', 'boston', 'denver']

//MQTT broker connection options
var options = {
  keepalive: 0,
  clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
  reconnectPeriod: 5000,
  connectTimeout: 20 * 1000,
  username: process.env.MQTT_USERNAME,
  password: process.env.MQTT_PASSWORD,
  rejectUnauthorized: false //False if broker uses self-signed certs
}
const host =  process.env.MQTT_SERVER
var connectedClients = 0

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

client.subscribe(cities)
client.on('message', (topic, message) => {
  const verifyJSON = (json) => {  //Catch invlaid JSON
    let parsed
    try {
      parsed = JSON.parse(json)
    } catch (err) {
      console.error('error', err)
    }
    return parsed
  }
  var received = verifyJSON(message)
  console.log('Topic: '+topic+'\nMessage: ', JSON.stringify(received))
  io.emit(topic, received)  //emit topic(city name) and json data to React
})

http.listen(8080, () => {
  console.log('Listening on port 8080')
})
