import React, { Component } from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import { IApp } from './Interfaces';

interface AppProps {
  sessionToken: string,
}

interface AppState {
  sessionToken: string,

}

export default class App extends React.Component<AppProps, AppState, IApp>{
  constructor(props: AppProps) {
    super(props)
    this.state = {
      sessionToken: ''
    }
    this.updateToken = this.updateToken.bind(this);
    this.clearToken = this.clearToken.bind(this)
  }
    
    componentDidUpdate() {
      if(localStorage.getItem('token') && localStorage.getItem('token') !== undefined){
        let storedToken : string | null = localStorage.getItem('token');
        if (storedToken !== null && this.state.sessionToken !== storedToken){
          this.setState({
            sessionToken: storedToken
          })
        }
      }
    }

    updateToken = (newToken: string): string => {
      localStorage.setItem('token', newToken);
      this.setState({
        sessionToken: newToken
      })
      return(
        newToken
      )
    }

    clearToken = () => {
      localStorage.clear();
      this.setState({
        sessionToken: ''
      })
    };

    render(){
      return(
          <div className="App">
            <h1>Just Testing Home Page.</h1>
            <Login clearToken={this.clearToken} updateToken={this.updateToken} sessionToken={this.state.sessionToken}  />
            <Register sessionToken={this.state.sessionToken} updateToken={this.updateToken} />
          </div>
        )
      }
  


}