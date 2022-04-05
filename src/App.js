import React from "react";
import { hot } from 'react-hot-loader/root';

class App extends React.Component{
  render(){
    const {city} = this.props
    return(
      <div className="shopping-list">
      <h1>Shopping List for {this.props.name}</h1>
      <ul>
        <li> Mobile </li>
        <li> Laptop </li>
        <li> T-Shirt </li>
        <li> Jeans </li>
      </ul>
    </div>
    )
  }
}

export default hot(App);
