import React from "react";
import { IRegister, RegisterAlerts } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface RegisterProps {
  sessionToken: string,
  updateToken(newToken: string): string;
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
      userRole: "Member",
      passwordhash: "",
      houseId: "",
      successCheck: false,
      sessionToken: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendAccount = this.sendAccount.bind(this);
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

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const passwordEx = /^[A-Za-z_0-9_!@#$%^&* .]{5,30}$/;
    const emailEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (passwordEx.test(this.state.passwordhash) !== true) {
      return this.passAlert();
    }
    if (emailEx.test(this.state.email) !== true) {
      return this.emailAlert();
    }
    fetch(`http://localhost:3050/user/register/`, {
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
      // headers: new Headers({
      //   "Content-Type": "application/json",
      // }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("sessionToken:", data.user.sessionToken);
        this.props.updateToken(data.user.sessionToken);
        this.setState({
          successCheck: true,
          // sessionToken: data.user.sessionToken,
        });
      });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      passwordhash,
      userName,
      userRole,
      houseId,
    } = this.state;

    return (
      <div>
        <div className="register">
          <h1>Register</h1>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
              this.sendAccount();
            }}
          >
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  onChange={(e) => this.setState({ firstName: e.target.value })}
                  name="firstName"
                  value={firstName}
                />
                <label htmlFor="firstName">First Name</label>
              </span>
            </div>
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  onChange={(e) => this.setState({ lastName: e.target.value })}
                  name="lastName"
                  value={lastName}
                />
                <label htmlFor="lastName">Last Name</label>
              </span>
            </div>
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  onChange={(e) => this.setState({ userName: e.target.value })}
                  name="userName"
                  value={userName}
                />
                <label htmlFor="userName">User Name</label>
              </span>
            </div>
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  onChange={(e) => this.setState({ email: e.target.value })}
                  name="email"
                  value={email}
                />
                <label htmlFor="email">Email</label>
              </span>
            </div>
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  onChange={(e) =>
                    this.setState({ passwordhash: e.target.value })
                  }
                  name="password"
                  value={passwordhash}
                />
                <label htmlFor="password">Password</label>
              </span>
            </div>
            <div className="FormGroup">
              <label htmlFor="userRole">House Role</label>
              <input
                onChange={(e) => this.setState({ userRole: e.target.value })}
                name="userRole"
                value={userRole}
              />
            </div>

            <br />

            <Button label="Register" icon="pi pi-user-plus" type="submit" />
          </form>
          <hr />
          Need to log in to your account? <a href="/login">Login</a>
        </div>
      </div>
    );
  }
}
