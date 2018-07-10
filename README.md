# Pub/Sub SPA
This is a demonstration of how a React single-page application can serve as a front-end for Message Queuing Telemetry Transport (MQTT) network messaging. It consists of WiFi connected endpoints, a Node backend for Pub/Sub subscribing, a central MQTT broker, and a React UI.

## MVP Goals
- [ ] Deploy an MQTT broker to a VPS for private publish-subscribe messaging.
- [ ] An Express Node backend capable of subscribing to the MQTT broker and parsing messages to send data to the front.
- [ ] React application whose components' states are updated based on incoming data.

## Stretch Goals
- [ ] Integrate MQTT publishing into React so handler functions and publish data to the broker.
- [ ] Use JSON web tokens to manage/track subscribed topics.
- [ ] Integrate React Router to manage subscribed topics.


## Prerequisites
* An MQTT broker needs to be accessible for this project. I'm using [Eclipse Mosquitto](https://mosquitto.org/) deployed on a VPS, but there are cloud-baed MQTT brokers available such as [AWS IoT](https://docs.aws.amazon.com/iot/latest/developerguide/what-is-aws-iot.html).

* WiFi equipped sensors: e.g. [Particle Photon](https://www.particle.io/products/hardware/photon-wifi/) or [Adafruit WICED Feather](https://www.adafruit.com/product/3056).
