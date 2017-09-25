import React, { Component } from 'react';
import './App.css';

class UserForm extends Component {
  render() {
    return (
      <form>
          <input type="text" placeholder="Name" /> 
          <input type="e-mail" placeholder="Email" />  
          <input type="tel" placeholder="Tel." /> 
          <button type="submit">Submit</button>
      </form>
      
    );
  }
}

export default UserForm;