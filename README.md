<p align="center">
<img src="https://github.com/lloydXmas/pubsub-spa/blob/master/icons/app-icon.png" width=200 />
</p>

# Pub/Sub SPA

This is a demonstration of how a React single-page application can serve as a front-end for Message Queuing Telemetry Transport (MQTT) network messaging. It connects WiFi endpoints with sensors to a Node backend via Pub/Sub subscribing and uses Socket IO to push the data to React's UI.

## MVP Goals
- [x] Deploy an MQTT broker to a VPS for private publish-subscribe messaging.
- [x] An Express Node backend capable of subscribing to the MQTT broker and parsing messages to send data to the front.
- [x] React application whose components' states are updated based on incoming data.

## Stretch Goals
- [ ] Integrate MQTT publishing into React so handler functions and publish data to the broker.
- [ ] Use JSON web tokens to manage/track subscribed topics.
- [ ] Integrate React Router to manage subscribed topics.


## Prerequisites
* An MQTT broker needs to be accessible for this project. I'm using [Eclipse Mosquitto](https://mosquitto.org/) deployed on a VPS, but there are cloud-baed MQTT brokers available such as [AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html).

* WiFi equipped sensors: e.g. [Particle Photon](https://www.particle.io/products/hardware/photon-wifi/) or [Adafruit WICED Feather](https://www.adafruit.com/product/3056).


## Technologies
![React](icons/react.png) React &nbsp;|&nbsp; ![Express](icons/express.png) Express &nbsp;|&nbsp; ![Node.js](icons/nodejs.png) Node.js

![MQTT.js](icons/mqttjs.png) MQTT.js &nbsp;|&nbsp; ![SOCKET.IO](icons/socket-io.png) SOCKET.IO &nbsp;|&nbsp; ![Mosquitto](icons/mosquitto.png) Eclipse Mosquitto
