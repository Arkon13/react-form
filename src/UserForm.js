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
            telError: false,
            noUser : false,
            hiUser: true,
            user: ''

        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.notUser = this.notUser.bind(this);
        
    }

    notUser(data) {
        if(data.message === "no2") {
            this.setState({
                noUser: true,
            })
        }
        else {
            this.setState({
                hiUser: false,
                users: data
            })
        }
    }

      componentDidMount() {
       
    }
    
    sendForm() {
        let data = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel
          }
        $.ajax({
            type: 'POST',
            url: 'http://localhost/index.php',
            data: data,
            success: (data) => {
                this.notUser(data) 
            }
            
          })
    }
    
   

    formValid() {
        let valid = true
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
            valid = false    
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
            valid = false    
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
            valid = false     
        }
        return valid
    }

    

    handleSubmit(event) {
        event.preventDefault()
        if (this.formValid()) this.sendForm()
      }
     

    handleChange(event, fieldName) {
        this.setState({[fieldName]: event.target.value})
      }
      



  render() {
    console.log(this.state.noUser)
    return (
        <div>
            {this.state.hiUser ?
      <form method="POST" id="formx" onSubmit={this.handleSubmit}>
          {this.state.noUser && <p>Такого пользователя нет!</p>}
          <input type="text" placeholder="Name" value={this.state.value} onChange={(e) => this.handleChange(e, 'name')} ref="name"/> 
          {this.state.nameError && <p>Неверные символы</p>}
          <input type="e-mail" placeholder="Email" value={this.state.value} onChange={(e) => this.handleChange(e, 'email')} ref="email"/>
          {this.state.emailError && <p>Неверные символы</p>}  
          <input type="tel" placeholder="Tel." value={this.state.value} onChange={(e) => this.handleChange(e, 'tel')} ref="tel"/>
          {this.state.telError && <p>Неверные символы</p>} 
          <button type="submit">Submit</button>
      </form>
                :
                    <p>Добрый день {"" + this.state.users.message}</p>  
            }
      </div>
    );
  }
}

export default UserForm;