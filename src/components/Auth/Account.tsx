import React from 'react';
import { Redirect } from 'wouter';
import UserAccount from './UserAccount';



interface AccountTypes {
    sessionToken: string,
    shouldRedirect: boolean
}

interface AccountProps {
    sessionToken: string
}

export default class Account extends React.Component<AccountProps, AccountTypes> {
    constructor(props: AccountProps ) {
        super(props)
        this.state = {
            sessionToken: '',
            shouldRedirect: false
        }
    }
    

    

    noTokenRedirect = () => {
    if (this.state.sessionToken === ''){
        alert("We don't know you...please log in.");
        
        this.setState({ shouldRedirect: true });
    }
};
 render() {
     return (
         <div>
             {this.state.shouldRedirect ?
             
              <Redirect to ="/login" /> : 
              <div>
                  <h1>My Account</h1>
                  <UserAccount sessionToken={this.props.sessionToken} />
                  
                  </div>
            }  
         </div>
     );
    }
 
}