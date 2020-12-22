import React, { Component } from 'react'
export default class Budget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      budget: 0,
      expenses: []
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let newText = e.target.value
    this.setState({text: newText})
  }
    // why doesn't arrow functions work here?
  handleClick(e) {
    e.preventDefault();
    this.setState({budget: this.state.text})
  }
  render() {
    return (
      <div>
      <input 
        type="text"
        // value={this.state.budget}
        onChange={this.handleChange}
        />
        <button
        type="submit"
        onClick={this.handleClick}
        >Add Budget</button>
       <h1>{`$${this.state.budget}`}</h1>
      </div>
    )
  }
}