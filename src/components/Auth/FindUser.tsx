import React from "react";
import { IFindUser } from "../../Interfaces";
import HouseMembers from '../House/HouseMembers'
import APIURL from '../../helpers/environment';
// import ListCreate from '../List/ListCreate';

interface FindUserProps {
  sessionToken: string | null
}

export default class FindUser extends React.Component<
  FindUserProps,
  IFindUser
> {
  constructor(props: FindUserProps) {
    super(props);

    this.state = {
      userId: "",
      sessionToken: "",
      email: "",
      firstName: "",
      lastName: "",
      userName: "",
      houseId: "",
      passwordhash: "",
      userRole: "",
      userData: {}
    };
  }

  componentDidMount() {
 

    let sessionToken = 
    (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

    fetch(`${APIURL}/User/me`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log("test fetch find user", userData);
        this.setState({
          userData: userData,
          email: userData.email,
          firstName: userData.firstName,
          userId: userData.userId,
          lastName: userData.lastName,
          userName: userData.userName,
          houseId: userData.houseId,
          passwordhash: userData.passwordhash,
          userRole: userData.userRole
        
          
        })
      }).catch((err) => console.log(err)); 
console.log("test after fetch houseId", this.state.houseId);

    }

  render() {
    

    return <div>
        <HouseMembers sessionToken={this.props.sessionToken}  />
    </div>;
  }
}
