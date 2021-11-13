import React from "react";
import { IFindUser } from "../../Interfaces";
import APIURL from '../../helpers/environment';
// import ListCreate from '../List/ListCreate';

interface FindUserProps {}

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
      houseName: "",
      passwordhash: "",
      userRole: "",
    };
  }

  componentDidMount() {
    const userId = localStorage.getItem("UserId");
    const sessionToken = localStorage.getItem("sessionToken");
    this.setState({
      userId,
      sessionToken,
    });

    // console.log(userId)
    // console.log(sessionToken);

    fetch(`${APIURL}/User/${userId}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((userData) => {
        console.log("test fetch find user", userData);
        this.setState({
          email: this.state.email,
          firstName: this.state.firstName,
          userId: this.state.userId,
          lastName: this.state.lastName,
          userName: this.state.userName,
          houseId: this.state.houseId,
          houseName: this.state.houseName,
          passwordhash: this.state.passwordhash,
          userRole: this.state.userRole,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // const { email, firstName, userId, lastName, userName, houseId, houseName, passwordhash, userRole } = this.state

    return <div></div>;
  }
}
