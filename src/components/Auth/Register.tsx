import React from "react";
import { IRegister, RegisterAlerts } from "../../Interfaces";

interface RegisterProps {
  sessionToken: string;
  updateToken(): string
}

export default class Register extends React.Component<
  RegisterProps,
  IRegister,
  RegisterAlerts
> {
  constructor(props: RegisterProps) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      userRole: "",
      passwordhash: "",
      houseId: "",
      successCheck: false,
      sessionToken: ''
    };


}


  passAlert() {
    alert("Oops! Password must contain at least 5 characters!");
  }

  emailAlert() {
    alert("Oops! Email format invalid! Try anything@anything.com");
  }

  sendAccount = () => {
    if (this.state.successCheck === true) {
      setTimeout(function () {
        window.location.href = "./account";
      }, 1000);
    }
  };

  handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const passwordEx = /^[A-Za-z_0-9_!@#$%^&* .]{5,30}$/;
    const emailEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (passwordEx.test(this.state.passwordhash) !== true) {
      return this.passAlert();
    }
    if (emailEx.test(this.state.email) !== true) {
      return this.emailAlert();
    }
    fetch(`http://localhost3050/user/register`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        userRole: this.state.userRole,
        houseId: this.state.houseId,
        passwordhash: this.state.passwordhash,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("sessionToken:", data.user.sessionToken);
        this.setState({ successCheck: true, sessionToken: data.user.sessionToken });
      });
  };

  render() {
    return <div>

    </div>;
  }
}
