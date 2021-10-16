import React, { useState } from 'react';
import axios from 'axios';
// import styled from 'styled-components';

// const PageContainer = styled.div`
//   background: yellow
// `
class Auth extends React.Component {
  constructor() {
    super();
    this.state = {
      role: '',
      username: '',
      email: '',
      password: '',
      isNewUser: false
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
  onChangeHandler(e) {
    const val = e.target.value;
    this.setState({ [e.target.name]: val });
  }
  onSubmitHandler(e) {
    e.preventDefault();
    const newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      role: this.state.role
    }
    if (this.state.isNewUser) {
      axios.post('/api/signup', newUser)
        .catch(err => console.log(err))
        .then(res => {
          if (res.data === 'exist') {
            alert('username exist')
          } else {
            document.cookie = `username=${res.data}`;
            window.location = "https://google.com/";
          }
        })
    }else{
      const oldUser={
        username:this.state.username,
        password:this.state.password
      }
      axios.post('/api/signin', oldUser)
      .catch(err => console.log(err))
      .then(res => {
        if (res.data === 'incorrect') {
          alert('incorrect username or password')
        } else {
          document.cookie = `username=${res.data}`;
          window.location = "https://google.com/";
        }
      })
    }

  }
  render() {
    const { username, email, password, isNewUser } = this.state;
    return (
      <div>
        <h1>{isNewUser ? 'Sign Up' : 'Sign In'}</h1>
        <h3>Welcome {isNewUser ? '' : 'back'} to JobSite</h3>
        <h4>Connect people with jobs and jobs with people</h4>
        <form onSubmit={this.onSubmitHandler}>
          {isNewUser ? <div onChange={this.onChangeHandler}>
            <input type="radio" value="seeker" name="role" /> Seeker
            <input type="radio" value="employer" name="role" /> Employer
          </div> : ''}
          <div>
            <label>username: </label>
            <input type='text' name="username" onChange={this.onChangeHandler} />
          </div>
          {isNewUser ? <div><label>email: </label>
            <input type='email' name="email" onChange={this.onChangeHandler} /></div> : ''}

          <div>
            <label>password: </label>
            <input type='password' name="password" onChange={this.onChangeHandler} />
          </div>
          <div>
            <button type='submit' id="signup" >{isNewUser ? 'Create' : 'Go'}</button>
          </div>
        </form>
      </div>
    )
  }

}

export default Auth;



