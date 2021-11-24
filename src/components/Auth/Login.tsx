import React from "react";
import APIURL from "../../helpers/environment";
import { ILogin } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

interface LoginProps {
  clearToken(): void;
  updateToken(newToken: string): string;
}

export default class Login extends React.Component<LoginProps, ILogin> {
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
    setTimeout(function () {
      window.location.href = "./";
    }, 1000);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${APIURL}/user/login`, {
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
        // localStorage.setItem('UserId', data.user.id);
        console.log("sessionToken:", data.sessionToken);
        this.props.updateToken(data.sessionToken);
        this.setState({
          sessionToken: data.sessionToken,
        });
      })
      .catch((err) => console.log(err));
    return console.log("testing login");
  };

  render() {
    const { email, passwordhash } = this.state;

    return (
      <div>
        <div className="login p-grid  p-fluid p-justify-around p-align-center p-p-6">
          <Card className="p-shadow-3 p-col-4 p-p-3">
            <div>
              <div className="p-field">
                <h2>Login or Change User</h2>
              </div>
              <div className="p-field">
                <form
                  onSubmit={(event) => {
                    this.handleSubmit(event);
                    this.sendAccount();
                  }}
                >
                  <div className="p-field">
                    <span className="p-float-label">
                      <InputText
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        name="email"
                        value={email}
                      />
                      <label htmlFor="email">Email</label>
                    </span>
                  </div>

                  
                  <div className="p-field">
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

                  <Button label="Go" icon="pi pi-user" type="submit" />
                </form>
                <br />
                <hr />
                Need to create an account? <a href="/register">Register</a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
