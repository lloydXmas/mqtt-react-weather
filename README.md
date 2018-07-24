<p align="center">
<img src="https://github.com/lloydXmas/pubsub-spa/blob/master/icons/app-icon.png" width=200 />
</p>

# MQTT React Weather

This is a demonstration of integrating Message Queuing Telemetry Transport (MQTT) network messaging with a Node backend and React. WiFi or mobile sensors publish data to an MQTT broker of which Node is subscribed to. Node then forwards that data using Socket.IO to React's UI, where the data is passed as props into stateless components.

## MVP Goals
- [x] Deploy an MQTT broker to a VPS for private publish-subscribe messaging.
- [x] A functional Express + Node backend that's subscribed to the MQTT broker: it parsing incoming messages and emits the data through a socket.
- [x] React component whose state is updated from incoming Socket data.


## Prerequisites
* An MQTT broker needs to be accessible for this project. I'm using [Eclipse Mosquitto](https://mosquitto.org/) deployed on a VPS, but there are cloud-baed MQTT brokers available such as [AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html).
  * Server environment variables: 
   ```javascript
    MQTT_SERVER='wss://your.server.com:port'
    MQTT_USERNAME=username
    MQTT_PASSWORD=password
    ```

* WiFi equipped sensors: e.g. [Particle Photon](https://www.particle.io/products/hardware/photon-wifi/) or [Adafruit WICED Feather](https://www.adafruit.com/product/3056).


## Technologies
![React](icons/react.png) React &nbsp;|&nbsp; ![Express](icons/express.png) Express &nbsp;|&nbsp; ![Node.js](icons/nodejs.png) Node.js

![MQTT.js](icons/mqttjs.png) MQTT.js &nbsp;|&nbsp; ![SOCKET.IO](icons/socketio.png) SOCKET.IO &nbsp;|&nbsp; ![Mosquitto](icons/mosquitto.png) Eclipse Mosquitto &nbsp;|&nbsp; ![Bootstrap](icons/bootstrap.png) Bootstrap
