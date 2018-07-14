import React, { Component } from 'react'
import Motion from './Motion'
import Temp from './Temp'
import socketLogo from './socketLogo.png'
import mqttLogo from './mqttLogo.png'


class App extends Component {
  render() {
    return (
			<div className="container-fluid">
        <div className="pb-4 pt-4 bg-white border-bottom box-shadow">
          <img src={socketLogo} className="float-left logo" alt="logo" />
          <img src={mqttLogo} className="float-right logo" alt="logo" />
          <div className="clearfix"></div>
        </div>
        <span className="spacer"></span>
        <div className="row">
        	<Motion />
				</div>
        <span className="spacer"></span>
				<div className="row">
					<Temp />
      	</div>
			</div>
    )
  }
}

export default App
