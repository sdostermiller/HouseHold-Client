import React from "react";
import { ILogin } from "../../Interfaces";
import "./Login.css";

interface LoginProps {
  clearToken(): void;
  sessionToken: string;
  updateToken(newToken: string): string;

}

export default class Login extends React.Component<LoginProps, ILogin> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      email: "",
      passwordhash: "",
 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendAccount = this.sendAccount.bind(this);
  }

  sendAccount() {
    setTimeout(function () {
      window.location.href = "./myhouse";
    }, 1000);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http:localhost3050/user/login`, {
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
        console.log(data);
        this.setState({
          email: this.state.email,
          passwordhash: this.state.passwordhash,
        });
        this.props.updateToken(data.sessionToken);
      })
      .catch((err) => console.log(err));
    return (
      console.log("testing login"), this.state.email, this.state.passwordhash
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
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => this.setState({ email: e.target.value}) }
                name="email"
                value={email}
              />
            </div>
            <div className="FormGroup">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => this.setState({ passwordhash: e.target.value}) }
                name="password"
                value={passwordhash}
              />
            </div>
            <br />

            <button type="submit">Login</button>
          </form>
          <hr />
          Need to create an account? <a href="/register">Register</a>
        </div>
      </div>
    );
  }
}
