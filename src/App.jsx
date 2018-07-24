import React, { Component } from 'react'
import RowData from './RowData'

import logo from './logo.svg'
import io from 'socket.io-client'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houston: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
      miami: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
      atlanta: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
      sonoma: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
      boston: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
      denver: {temp: '', humidity: '', pressure: '', windspeed: '', winddirection: ''},
    }
    this.socket = io('http://127.0.0.1:8080')
    this.updateData = this.updateData.bind(this)
  }

  //Topics to listen for data
  componentDidMount() {
    this.socket.on('sonoma', (received) => {
      this.updateData('sonoma', received)
    })
    this.socket.on('miami', (received) => {
      this.updateData('miami', received)
    })
    this.socket.on('houston', (received) => {
      this.updateData('houston', received)
    })
    this.socket.on('atlanta', (received) => {
      this.updateData('atlanta', received)
    })
    this.socket.on('boston', (received) => {
      this.updateData('boston', received)
    })
    this.socket.on('denver', (received) => {
      this.updateData('denver', received)
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  updateData(city, received){
    let data = {...this.state}
    //Don't overwrite prior values if undefined
    received.temp = received.temp || this.state[city].temp
    received.humidity = received.humidity || this.state[city].humidity
    received.pressure = received.pressure || this.state[city].pressure
    received.windspeed = received.windspeed || this.state[city].windspeed
    data[city] = received
    this.setState(data)
  }

  render() {
    return (
			<div className="container">
        <div className="mt-3 text-center">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <span className="spacer"></span>
        <div className="row">
					<RowData city="Houston"
            temp={this.state.houston.temp}
            hum={this.state.houston.humidity}
            baro={this.state.houston.pressure}
            wspd={this.state.houston.windspeed}
            wdir={this.state.houston.winddirection}
          />
					<RowData city="Sonoma"
            temp={this.state.sonoma.temp}
            hum={this.state.sonoma.humidity}
            baro={this.state.sonoma.pressure}
            wspd={this.state.sonoma.windspeed}
            wdir={this.state.sonoma.winddirection}
          />
          <RowData city="Miami"
            temp={this.state.miami.temp}
            hum={this.state.miami.humidity}
            baro={this.state.miami.pressure}
            wspd={this.state.miami.windspeed}
            wdir={this.state.miami.winddirection}
          />
          <RowData city="Atlanta"
            temp={this.state.atlanta.temp}
            hum={this.state.atlanta.humidity}
            baro={this.state.atlanta.pressure}
            wspd={this.state.atlanta.windspeed}
            wdir={this.state.atlanta.winddirection}
          />
          <RowData city="Boston"
            temp={this.state.boston.temp}
            hum={this.state.boston.humidity}
            baro={this.state.boston.pressure}
            wspd={this.state.boston.windspeed}
            wdir={this.state.boston.winddirection}
          />
          <RowData city="Denver"
            temp={this.state.denver.temp}
            hum={this.state.denver.humidity}
            baro={this.state.denver.pressure}
            wspd={this.state.denver.windspeed}
            wdir={this.state.denver.winddirection}
          />
      	</div>
      </div>
    )
  }
}

export default App
