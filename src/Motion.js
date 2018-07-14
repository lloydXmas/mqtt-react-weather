import React, { Component } from 'react'
import socketIOClient from 'socket.io-client'

class Motion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      response: false,
      endpoint: 'http://127.0.0.1:8080'
    }
  }

  componentDidMount() {
    const { endpoint } = this.state
    const socket = socketIOClient(endpoint)
    socket.on('motion', data => this.setState({ response: data }))
  }

  componentDidUpdate(prevState) {
     var currentStateResponse = this.state
     var currentStateTemp = this.state.temp
     if (prevState !== currentStateResponse) {
       setTimeout(() => {
         this.setState({
         response: false
       })
     }, 3000)
   }
 }

render() {
  var response = this.state.response
  return (
    <div className="ml-3 mt-4 mb-2">
      <h1 className="display-3 comp-data">Motion:&nbsp;</h1>
      <h1 className="display-4 comp-data">{response ? <span>{ response }</span>:<span></span>}</h1>
    </div>
    )
  }
}

export default Motion
