import React, { Component } from 'react';
import './App.css';





class UserForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {value: ''};
        
    }

      componentDidMount() {
        
    }
    handleChange(event) {
        this.setState({value: event.target.value});
      }




  render() {
    return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.value} onChange={this.handleChange} ref="name"/> 
          <input type="e-mail" placeholder="Email" value={this.state.value} onChange={this.handleChange} ref="email"/>  
          <input type="tel" placeholder="Tel." value={this.state.value} onChange={this.handleChange} ref="tel"/> 
          <button type="submit">Submit</button>
      </form>
      
    );
  }
}

export default UserForm;