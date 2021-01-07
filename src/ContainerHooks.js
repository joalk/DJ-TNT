import React from 'react'
import BudgetHooks from './components/LeftPanel/BudgetHooks'
const ContainerHooks = () => {
  const handleExpenseSubmit = (e) => {
    e.preventDefault();
    //THERE IS A PROBLEM HERE I HAVE FIXED IT SO IT CURRENTLY 
    //DOES NOT BREAKE THE APP BUT ALSO IT DOES NOTHING NOW
    const newExpense = { id: Math.random().toString(), name:this.state.nameOfExpense, amount: this.state.amountOfExpense}
    this.setState({expenses: this.state.expenses.concat(newExpense),
      budget: this.state.budget - this.state.amountOfExpense
    })
    console.log(this.state)
  }
  //CREATE A METHOD THAT UPDATES STATE WITH THE CURRENT USERS INPUT 
  const handleExpenseChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  
  handleExpenseDelete = (itemId) => {
    const targetObject = this.state.expenses.filter(item => item.id === itemId)
    const newExpenseList = this.state.expenses.filter(item => item.id !== itemId);
    this.setState({ expenses: newExpenseList,
    budget: this.state.budget + parseFloat(targetObject[0].amount)
    });
  }
  setState({expenses: this.state.expenses.concat(newExpense),
    budget: this.state.budget - this.state.amountOfExpense});
   return (
    <div>
      <BudgetHooks />
    </div>
  )
}

export default ContainerHooks