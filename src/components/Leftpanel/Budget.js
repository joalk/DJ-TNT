import React from 'react'

export default function Budget(props) {
  return (
    <div>
      <input 
        type="number"
        // value={this.state.budget}
        onChange={props.handleChange}
        />
        <button
        type="submit"
        onClick={props.handleClick}
        >Add Budget</button>
       <h1>{`$${props.budget}`}</h1>
      </div>
  )
}
