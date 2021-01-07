import React, { Component } from 'react'
import Budget from "./components/Leftpanel/Budget"
import Expense from "./components/Leftpanel/Expense"
import List from "./components/Rightpanel/List"

export default class Container extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      text: '',
      budget: 0,
      expenses: [],
      nameOfExpense: '',
      amountOfExpense: '',
    
    }
    this.handleBudgetClick = this.handleBudgetClick.bind(this);
    this.handleBudgetChange = this.handleBudgetChange.bind(this);
    this.handleExpenseSubmit = this.handleExpenseSubmit.bind(this);
    this.handleExpenseChange = this.handleExpenseChange.bind(this);
    this.handleExpenseDelete = this.handleExpenseDelete.bind(this);
    // this.handleExpenseEdit = this.handleExpenseEdit.bind(this);
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
  const newExpense = { id: Math.random().toString(), name:this.state.nameOfExpense, amount: this.state.amountOfExpense}
  this.setState({expenses: this.state.expenses.concat(newExpense),
    budget: this.state.budget - this.state.amountOfExpense
  })
  console.log(this.state)
}
//CREATE A METHOD THAT UPDATES STATE WITH THE CURRENT USERS INPUT 
handleExpenseChange(e) {
  this.setState({[e.target.name] : e.target.value})
}

handleExpenseDelete(itemId) {
  const targetObject = this.state.expenses.filter(item => item.id === itemId)
  const newExpenseList = this.state.expenses.filter(item => item.id !== itemId);
  this.setState({ expenses: newExpenseList,
  budget: this.state.budget + parseFloat(targetObject[0].amount)
  });
}

// STREATCH FEATURE
// handleExpenseEdit() {
//   for (let i = 0; i < this.state.expenses.length; i++) {
//     if (this.state.expenses[i].id === itemId) {
//       this.state.expenses[i].amount
//     }
//   }
// }

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