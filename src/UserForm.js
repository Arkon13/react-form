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
            formErrors: {name: '', email: '', tel: ''},
            nameValid: false,
            emailValid: false,
            telValid: false 

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

      componentDidMount() {
        
    }

    



    handleSubmit(event) {
        function call() {
            var msg   = $('#formx').serialize();
             $.ajax({
               type: 'POST',
               url: '',
               data: msg,
               success: function(data) {
                 alert("Отправленно");
               },
               error:  function(xhr, str){
             alert('Возникла ошибка: ' + xhr.responseCode);
               }
             });
        
         }
      }

    handleChange(event, fieldName) {
        this.setState({[fieldName]: event.target.value}),
        () => {this.validateField(fieldName, event.target.value)}
      }
      validateField(fieldName, value)
      {
          let fieldValidationErrors = this.state.formErrors;
          let nameValid = this.state.namValid
          let emailValid = this.state.emailValid
          let telValid = this.state.telValid
          switch(fieldName) {
              case 'name': 
                nameValid = /[a-zA-Z0-9]{3,}/;
                fieldValidationErrors.name = nameValid ? '' : ' is invalid';
                break;
              case 'email': 
                emailValid = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
              case 'tel':
                telValid = /^\d+$/
                fieldValidationErrors.tel = telValid ? '' : ' is invalid';
                break;
              default:
                break;
            }
      }



  render() {
    return (
      <form method="POST" id="formx"  onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Name" value={this.state.value} onChange={(e) => this.handleChange(e, 'name')} ref="name"/> 
          <input type="e-mail" placeholder="Email" value={this.state.value} onChange={(e) => this.handleChange(e, 'email')} ref="email"/>  
          <input type="tel" placeholder="Tel." value={this.state.value} onChange={(e) => this.handleChange(e, 'tel')} ref="tel"/> 
          <button type="submit">Submit</button>
      </form>
      
    );
  }
}

export default UserForm;