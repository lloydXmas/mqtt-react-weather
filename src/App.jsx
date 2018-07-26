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

  componentDidMount() {
    this.socket.on('app', (received) => {
      this.updateData(received)
    })
  }

  componentWillUnmount() {
    this.socket.close()
  }

  updateData(received) {
    var city = received.city
    const fields = ['temp', 'humidity', 'pressure', 'windspeed', 'winddirection']
    if (typeof(city) !== 'undefined') {  //Omit data if city wasn't specifed
      this.setState((prevState) => {
        var data = prevState
        for (let field of fields) {
          //If a field's value wasn't published, don't overwrite existing data
          if (!(field in received)) {
            received[field] = prevState[city][field]
          } else {
            received[field] = received[field]
          }
        }
        data[city] = received
        return {data}
      })
    }
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
