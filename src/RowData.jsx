import React from 'react'

function TitleCase (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function RowData (props) {
  return (
    <div className='col-lg-4 col-md-6 col-12 mb-3' key={props.id}>
      <div className='card'>
        <div className='card-body'>
          <h2 className='card-title text-primary'>{TitleCase(props.name)}</h2>
          <div className='row'>
            <div className='col-12'>
              <h1 className='field-temp'>{props.temp}<span className='temp-unit'>{props.temp ? '\u2109' : ''}</span></h1>
            </div>
            <div className='col-12'>
              <h1 className='field-title'>Humidity:</h1>
              <h1 className='field-val'>{props.humidity}<span className='unit'>{props.humidity ? '%' : ''}</span></h1>
            </div>
            <div className='col-12'>
              <h1 className='field-title'>Pressure:</h1>
              <h1 className='field-val'>{props.pressure}<span className='unit'>{props.pressure ? 'in' : ''}</span></h1>
            </div>
          </div>
          <div className='row'>
            <div className='col-12'>
              <h1 className='field-title'>Wind:</h1>
              <h1 className='field-val'>{props.windspeed}<span className='unit'>{props.windspeed ? 'mph' : ''}</span></h1>
              <h1 className='field-val'>{props.winddirection}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RowData
