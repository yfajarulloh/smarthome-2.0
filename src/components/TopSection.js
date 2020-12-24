import React from 'react'

export default function TopSection(props) {
  return (
    <div>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>;
    </div>
  ) 
}
