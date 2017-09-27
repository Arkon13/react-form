import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
window.jQuery = window.$ = $;





class UserForm extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            tel: '',
            nameError: false,
            emailError: false,
            telError: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

      componentDidMount() {
        
    }
    sendForm() {
        alert('run')
    }
   

    formValid() {
        if(/[a-zA-Z0-9]/.test(this.state.name)) {
            this.setState(
                {
                    nameError: false  
                }
            )
        }
        else{
            this.setState(
                {
                    nameError: true  
                }
            )     
        }
         
        if(/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/.test(this.state.email)) {
            this.setState(
                {
                    emailError: false  
                }
            )
        }
        else{
            this.setState(
                {
                    emailError: true  
                }
            )     
        }
        if(/[0-9]/.test(this.state.tel)) {
            this.setState(
                {
                    telError: false  
                }
            )
        }
        else{
            this.setState(
                {
                    telError: true  
                }
            )     
        }
    }

    

    handleSubmit(event) {
        event.preventDefault()
        this.formValid()
        if(this.state.nameError === false) {
            this.sendForm()
        }
        else if(this.state.emailError === false) {
            this.sendForm()
        }
        else if(this.state.telError === false) {
            this.sendForm()
        }
      }
     

    handleChange(event, fieldName) {
        this.setState({[fieldName]: event.target.value})
      }
      



  render() {
    console.log(this.state.nameError)
    return (
      <form   onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.value} onChange={(e) => this.handleChange(e, 'name')} ref="name"/> 
          {this.state.nameError && <p>Неверные символы</p>}
          <input type="e-mail" placeholder="Email" value={this.state.value} onChange={(e) => this.handleChange(e, 'email')} ref="email"/>
          {this.state.emailError && <p>Неверные символы</p>}  
          <input type="tel" placeholder="Tel." value={this.state.value} onChange={(e) => this.handleChange(e, 'tel')} ref="tel"/>
          {this.state.telError && <p>Неверные символы</p>} 
          <button type="submit">Submit</button>
      </form>
      
    );
  }
}

export default UserForm;