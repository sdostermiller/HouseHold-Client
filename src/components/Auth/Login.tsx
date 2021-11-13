import React from "react";
import { ILogin } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface LoginProps {
  clearToken(): void;
  updateToken(newToken: string): string;
}

export default class Login extends React.Component<
  LoginProps, 
  ILogin
> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      passwordhash: "",
      sessionToken: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendAccount = this.sendAccount.bind(this);
  }

  sendAccount() {
    // setTimeout(function () {
    //   window.location.href = "./myhouse";
    // }, 1000);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost:3050/user/login`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        passwordhash: this.state.passwordhash,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.user);
        this.setState({
          email: this.state.email,
          passwordhash: this.state.passwordhash,
        });
        localStorage.setItem('UserId', data.user.id);
        console.log("sessionToken:", data.sessionToken);
        this.props.updateToken(data.sessionToken);
        this.setState({
          sessionToken: data.sessionToken
        });
      })
      .catch((err) => console.log(err));
    return (
      console.log("testing login")
    );
  };




  render() {
    const { email, passwordhash } = this.state;

    return (
      <div>
        <div className="login">
          <h1>Login</h1>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
              this.sendAccount();
            }}
          >
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
            <br />

            <Button label="Login" icon="pi pi-user" type="submit" />
          </form>
          <hr />
          Need to create an account? <a href="/register">Register</a>
        </div>
      </div>
    );
  }
}
