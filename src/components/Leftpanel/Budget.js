import React from 'react'

export default function Budget(props) {
  return (
    <div>
      <input 
        type="number"
         value={props.text}
        onChange={props.handleBudgetChange}
        />
        <button
        type="submit"
        onClick={props.handleBudgetClick}
        >Add Budget</button>
       <h1>{`$${props.budget}`}</h1>
      </div>
  )
}
