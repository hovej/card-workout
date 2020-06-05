import React from 'react';

const InitialInput = props => {
  return (
    <div>
      <h3>{props.suit}</h3>
      <input type='text' value={props.value} onChange={(e) => props.changed(e, props.index)} />
    </div>
  )
}

export default InitialInput;