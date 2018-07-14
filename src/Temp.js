import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'


class Temp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      temp: false,
      endpoint: 'http://127.0.0.1:8080'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('temp', tempdata => this.setState({ temp: tempdata }))

  }

  render() {
    var tempdata = this.state.temp
    return (
      <div className="ml-3 mt-4">
        <h1 className="display-3 comp-data">Temp:&nbsp;</h1>
        {tempdata ? <h1 className="display-4 comp-data">{ tempdata }&#8457;</h1>: <span></span>}
      </div>
    )
  }
}

export default Temp
