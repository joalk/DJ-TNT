import React, { useState }from 'react'

const ExpenseHooks = () => {
  const [nameOfExpense, setNameOfExpense] = useState('');
  const [amountOfExpense, setAmountOfExpense] = useState(0);

  const handleExpenseChange = (e) => {
   setNameOfExpense(e.target.value);
   setAmountOfExpense(e.target.value);
  }

  
  
  return (
    <div>
       <form>
          <input 
            type="text"
            name="nameOfExpense"
            value={nameOfExpense}
            onChange={handleExpenseChange}
          />
          <input 
            type="number"
            name="amountOfExpense"
            value={amountOfExpense}
            onChange={handleExpenseChange}
          />
          <button onClick={handleExpenseSubmit}>Click Me I Do Nothing</button>
        </form>
    </div>
  )
}

export default ExpenseHooks;