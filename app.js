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

client.on('connect', () => {
  client.subscribe(['motion', 'temp'])
  console.log('subscribed')
})

io.on('connection', socket => {
  console.log("New client connected")

  client.on('message', (topic, message) => {
    console.log(message.toString())
    var inc = message.toString()
    switch (inc) {
      case 'motion01':
        io.emit('motion', 'Zone 1')
        console.log(message.toString())
        break
      case 'motion02':
        io.emit('motion', 'Zone 2')
        break
      case 'motion03':
        io.emit('motion', 'Zone 3')
        break
      case 'motion04':
        io.emit('motion', 'Zone 4')
        break
      }
      if (topic == 'temp') {
        var tempd = message.toString()
        io.emit('temp', tempd)
      }
    })
})

http.listen(8080, () => {
  console.log('Listening on port 8080')
})
