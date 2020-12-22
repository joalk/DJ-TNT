import React, { Component } from 'react'

export default class Expense extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nameOfExpense: '',
      amountOfExpense: 0,
  
    }
    this.handleSubmit = this.handleSubmit.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    
    this.setState({nameOfExpense:'',
      amountOfExpense: ''
    })
  }
  handleChange(e) {
    this.setState({[e.target.name] : e.target.value})
  }
  render() {
    return (
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
    )
  }
}
