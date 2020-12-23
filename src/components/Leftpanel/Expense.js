import React from 'react'

export default function Expense(props) {
  return (
    <div>
      <div>
        <form>
          <input 
            type="number"
            name="nameOfExpense"
            value={props.nameOfExpense}
            onChange={props.handleExpenseChange}
          />
          <input 
            type="number"
            name="amountOfExpense"
            value={props.amountOfExpense}
            onChange={props.handleExpenseChange}
          />
          <button onClick={props.handleExpenseSubmit}>Click Me I Do Nothing</button>
          <h1>{`$${props.expenses}`}</h1>
        </form>
      </div>
    </div>
  )
}
