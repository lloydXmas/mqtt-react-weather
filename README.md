<p align="center">
<img src="https://github.com/lloydXmas/pubsub-spa/blob/master/icons/app-icon.png" width=200 />
</p>

# MQTT React Weather

This is a demonstration of how Message Queuing Telemetry Transport (MQTT) network messaging can be integrated with React to create a simple single page application that displays live weather data.


## Flow of Data
1. WiFi or other mobile sensors publish data to an MQTT broker
2. Node.js back-end subscribes to the MQTT broker and receives the data using MQTT.js
3. Node.js forwards the data over Socket.IO to React
4. React's state is updated and the data is passed down to stateless components


## Prerequisites
* An MQTT broker needs to be accessible for this project. I'm using [Eclipse Mosquitto](https://mosquitto.org/) deployed to a VPS, but cloud-baed MQTT brokers are available such as [AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html).
  * Server environment variables:
   ```javascript
    MQTT_SERVER='wss://your.server.com:port'
    MQTT_USERNAME=username
    MQTT_PASSWORD=password
    ```

* WiFi equipped sensors: e.g. [Particle Photon](https://www.particle.io/products/hardware/photon-wifi/) or [Adafruit WICED Feather](https://www.adafruit.com/product/3056). Alternatively, MQTT publishing can be done from a shell, see [notes on running](#running).


## Running
This app expects any of the following JSON parameters from the broker:

```sh
name: [STRING]
temp: [INT or FLOAT]
humidity: [INT or FLOAT]
pressure: [INT or FLOAT]
windspeed: [INT or FLOAT]
winddirection: [STRING]

```

The publish `topic` MUST be set to `app`; data will not be received from any other topics.

To publish to the MQTT broker from a shell, install [MQTT.js](https://github.com/mqttjs/MQTT.js) globally:

```sh
npm install mqtt -g
```

Here is an example of a valid publish command:

```sh
mqtt pub -u 'USERNAME' -P 'PASSWORD' -h 'SERVER' -t 'app' -m '{"name": "houston", "temp": 79, "humidity": 88, "pressure": 28.95, "windspeed": 7.5, "winddirection": "SW"}'
```


## Technologies
![React](icons/react.png) React &nbsp;|&nbsp; ![Express](icons/express.png) Express &nbsp;|&nbsp; ![Node.js](icons/nodejs.png) Node.js

![MQTT.js](icons/mqttjs.png) MQTT.js &nbsp;|&nbsp; ![SOCKET.IO](icons/socketio.png) SOCKET.IO &nbsp;|&nbsp; ![Mosquitto](icons/mosquitto.png) Eclipse Mosquitto &nbsp;|&nbsp; ![Bootstrap](icons/bootstrap.png) Bootstrap

---
<p align="center">
<img src="icons/demo.gif?raw=true" />
</p>
