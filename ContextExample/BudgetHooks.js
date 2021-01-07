import React, { useState }from 'react'

const BudgetHooks = () => {
  const [budget, setBudget] = useState(0);
  const [text, setText] = useState(0);

  const handleBudgetChange = (e) => {
    let newText = e.target.value
    setText(newText)
  }

  const handleBudgetClick = (e) => {
    e.preventDefault();
      setBudget(text);
      setText('');
      
  }
  return (
    <div>
      <input 
        type="number"
         value={text}
        onChange={handleBudgetChange}
        />
        <button
        type="submit"
        onClick={handleBudgetClick}
        >Add Budget</button>
       <h1>{`$${budget}`}</h1>
      </div>
  )
}

export default BudgetHooks