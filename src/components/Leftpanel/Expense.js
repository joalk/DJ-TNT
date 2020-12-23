import React from 'react'

export default function Expense(props) {
  return (
    <div>
      <div>
        <form>
          <input 
            type="number"
            name="nameOfExpense"
            value={this.state.nameOfExpense}
            onChange={this.handleChange}
          />
          <input 
            type="number"
            name="amountOfExpense"
            value={this.state.amountOfExpense}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit}>Click Me I Do Nothing</button>
        </form>
      </div>
    </div>
  )
}
