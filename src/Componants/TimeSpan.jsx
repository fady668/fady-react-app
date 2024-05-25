import React from 'react'

const TimeSpan = (props) => {
  return (
      <div className="time-span">
          <h2>0-</h2>
          <h2>{props.time}</h2>
          <p>{props.title}</p>
    </div>
  )
}

export default TimeSpan
