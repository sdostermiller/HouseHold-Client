import React from 'react';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ItemCreate from './components/Item/ItemCreate';
import HouseCreate from './components/House/HouseCreate';
import ListCreate from './components/List/ListCreate';
import FindUser from './components/Auth/FindUser';
import HouseList from './components/House/HouseList';
import { IApp } from './Interfaces';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/tailwind-light/theme.css';

interface AppProps {

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
      localStorage.setItem('sessionToken', newToken);
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
            <Login clearToken={this.clearToken} updateToken={this.updateToken}  />
            <Register updateToken={this.updateToken} />
            <ItemCreate />
            <HouseCreate />
            <ListCreate />
            <FindUser />
            <HouseList />
          </div>
        )
      }
  


}