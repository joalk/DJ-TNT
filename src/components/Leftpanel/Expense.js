import React from 'react'

export default function Expense(props) {
  return (
  
      <div>
        <form>
          <input 
            placeholder="Name of Expense"
            type="text"
            name="nameOfExpense"
            value={props.nameOfExpense}
            onChange={props.handleExpenseChange}
          />
          <input 
            placeholder="Expense Amount"
            type="number"
            name="amountOfExpense"
            value={props.amountOfExpense}
            onChange={props.handleExpenseChange}
          />
          <button className="addExpense" onClick={props.handleExpenseSubmit}>Add Expense</button>
        </form>
      </div>
   
  )
}
