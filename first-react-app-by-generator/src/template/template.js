import React from 'react';
import TopSection from '../moleculs/TopSection';
import logo from '../logo.svg';
import '../App.css';

export default class Template extends React.Component {
  constructor(){
    super()
    this.state = {
      num: 0,
      amount: "10000"
    }
  }

  increment = () => {
    this.setState({
      num: 1
    })
  }
  
  decrement = () => {
    this.setState({
      num: -1
    })
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TopSection
          amount={this.state.amount}
          number={this.state.num} 
          increment={this.increment}  
          decrement={this.decrement}
        />
      </header>
    )
  }
}