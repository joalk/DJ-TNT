import React, { useState }from 'react'

const ListHooks = () => {
  const expenses = [expenses, setExpenses] = useState([]);

  const handleExpenseDelete = (itemId) => {
    const targetObject = expenses.filter(item => item.id === itemId)
    const newExpenseList = expenses.filter(item => item.id !== itemId);
    this.setState({ expenses: newExpenseList,
    budget: this.state.budget + parseFloat(targetObject[0].amount)
    });
  }

  return (
    <div>
      <ul>{expenses.map((item, i) => (
                <li key={item.id}>{item.name} 
                <span>{`$${item.amount}`}</span> 
                <button onClick={handleExpenseDelete.bind(null, item.id)}>X</button></li>
            ))}
            </ul>
    </div>
  )
}
