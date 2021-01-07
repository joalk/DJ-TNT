
import React from 'react';


export default function Budget(props) {
 
  return (
    <div>
      <input 
        placeholder="Enter Budget Here"
        type="number"
        value={props.text}
        onChange={props.handleBudgetChange}
        />
        <button className="addBudget"
        type="submit"
        onClick={props.handleBudgetClick}
        >Add Budget</button>
       <h1 className="totalBudget">{`$${props.budget}`}</h1>
      </div>
  )
}
