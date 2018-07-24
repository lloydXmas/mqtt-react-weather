import React from 'react'

function RowData(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mb-3">
      <div className="card">
          <div className="card-body">
              <h2 className="card-title text-primary">{props.city}</h2>
              <div className="row">
                  <div className="col-12">
                      <h1 className="field-temp">{props.temp}<span className="temp-unit">{props.temp ? '\u2109' : ''}</span></h1>
                  </div>
                  <div className="col-12">
                      <h1 className="field-title">Humidity:</h1>
                      <h1 className="field-val">{props.hum}<span className="unit">{props.hum ? '%' : ''}</span></h1>
                  </div>
                  <div className="col-12">
                      <h1 className="field-title">Pressure:</h1>
                      <h1 className="field-val">{props.baro}<span className="unit">{props.baro ? 'in' : ''}</span></h1>
                  </div>
              </div>
              <div className="row">
                  <div className="col-12">
                      <h1 className="field-title">Wind:</h1>
                      <h1 className="field-val">{props.wspd}<span className="unit">{props.wspd ? 'mph' : ''}</span></h1>
                      <h1 className="field-val">{props.wdir}</h1>
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default RowData
