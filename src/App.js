import React, { Component } from 'react'
import Budget from "./components/Leftpanel/Budget"
import Expense from "./components/Leftpanel/Expense"
export default class App extends Component {
  render() {
    return (
      <div>
        <Budget />
        <Expense />
      </div>
    )
  }
}
