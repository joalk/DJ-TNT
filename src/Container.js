import React, { Component } from 'react'
import Budget from "./components/Leftpanel/Budget"
import Expense from "./components/Leftpanel/Expense"
import List from "./components/Rightpanel/List"

export default class Container extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      text: 0,
      budget: 0,
      expenses: [],
      nameOfExpense: '',
      amountOfExpense: 0,
    
    }
    this.handleBudgetClick = this.handleBudgetClick.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
    this.handleExpenseChange = this.handleExpenseChange.bind(this);
    this.handleExpenseDelete = this.handleExpenseDelete.bind(this);
  }
  //CREATE A METHOD TO UPDATE TEXT INSIDE OF STATE 
  handleBudgetChange(e) {
    let newText = e.target.value

    this.setState({text: newText})
  }
  // CREATE A METHOD TO UPDATE BUDGET WITH THE VALUE OF TEXT 
  // THIS METHOD ASSIGNS THE VALUE OF TEXT TO BUDGET
  // FIND OUT IF THERE IS A WAY TO SKIP THIS REDUNDENT STEP
 handleBudgetClick(e) {
  e.preventDefault();
    this.setState({budget: this.state.text, text: ''})
    
}
//THIS METHOD CLEARS THE INPUT FIELD ON THE EXPENSE PANEL
handleExpenseSubmit(e) {
  e.preventDefault();
  //THERE IS A PROBLEM HERE I HAVE FIXED IT SO IT CURRENTLY 
  //DOES NOT BREAKE THE APP BUT ALSO IT DOES NOTHING NOW
  const newExpense = {name:this.state.nameOfExpense, amount: this.state.amountOfExpense}
  this.setState({expenses: this.state.expenses.concat(newExpense),
    budget: this.state.budget - this.state.amountOfExpense
  })
  console.log(this.state)
}
//CREATE A METHOD THAT UPDATES STATE WITH THE CURRENT USERS INPUT 
handleExpenseChange(e) {
  this.setState({[e.target.name] : e.target.value})
}

handleExpenseDelete(e) {
  console.log(item.key)
}

  render() {
    return (
      <div>
        <Budget 
          handleBudgetChange={this.handleBudgetChange}
          handleBudgetClick={this.handleBudgetClick}
          text={this.state.text}
          budget={this.state.budget} 
          expense={this.state.expense} 
          />
          <Expense 
            handleExpenseSubmit={this.handleExpenseSubmit}
            handleExpenseChange={this.handleExpenseChange}
            nameOfExpense={this.state.nameOfExpense}
            amountOfExpense={this.state.amountOfExpense}
            expenses={this.state.expenses}
          />
          <List 
            expenses={this.state.expenses}
            handleExpenseDelete={this.handleExpenseDelete}/>
      </div>
    )
  }
}


// handleSubmit = (e) => {
//       e.preventDefault();
      
//       if(this.state.task.length === 0) {
//         return;
//       } else {
//         const newItem = this.state.task
//         this.setState({
//           item:  this.state.item.concat(newItem),
//           task: ""
//         })
//       }
//     }