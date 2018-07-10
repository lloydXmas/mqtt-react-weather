require('dotenv').config()
const express = require('express')
const mqtt = require('mqtt')
const clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)
const host =  process.env.MQTT_SERVER

const app = express()

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

//console.log(options)
var client = mqtt.connect(host, options)
client.on('error', function (err) {
  console.log(err)
  client.end()
})
client.on('connect', function () {
  console.log('client connected:' + clientId)
})
client.subscribe('flex', { qos: 0 })
client.on('message', function (topic, message, packet) {
  console.log(message.toString())
  res.send(message.toString())
})
client.on('close', function () {
  console.log(clientId + ' disconnected')
})


app.listen(8080, function () {
  console.log('Listening on port 8080');
})
