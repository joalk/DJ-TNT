import React, { Component } from 'react'

export default class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      budget: 0,
      expenses: []
    }
  }
  handleChange(e) {
    this.setState({budget:e.target.value})
  }
  render() {
    return (
      <div>
      <input 
        type="text"
        value={this.state.budget}
        onChange={this.handleChange}
        />
       <h1>{`$${this.state.budget}`}</h1>
      </div>
    )
  }
}
