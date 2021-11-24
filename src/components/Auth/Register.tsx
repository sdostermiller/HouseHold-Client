import React from "react";
import APIURL from "../../helpers/environment";
import { IRegister, RegisterAlerts } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";

type RegisterProps = {
  updateToken(newToken: string): string;
};

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
      houseId: null,
      successCheck: false,
      sessionToken: "",
      roles: [
        {
          label: "Guest",
          value: "Guest",
        },
        {
          label: "Member",
          value: "Member",
        },
        {
          label: "Head",
          value: "Head",
        },
      ],
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

  sendAccount() {
    setTimeout(function () {
      window.location.href = "./";
    }, 1000);
  }

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
    fetch(`${APIURL}/user/register`, {
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
        console.log(data);

        this.props.updateToken(data.sessionToken);
        this.setState({
          successCheck: true,
          sessionToken: data.sessionToken,
        });
      });
  };

  

  render() {
    return (
      <div>
        <div className="register p-grid  p-fluid p-formgrid p-justify-around p-align-center p-p-6">
          <Card className="p-shadow-3 p-col-6 p-p-3">
          <div>
          <div className="p-field p-col">
          <h1>Register</h1>
          </div>
          <div >
          <form
          onSubmit={(event) => {
          this.handleSubmit(event);
          this.sendAccount();
        }}>
          <div className="p-formgroup-inline">
          <div className="p-field">
          <span className="p-float-label">
          <InputText
          onChange={(e) =>
          this.setState({ firstName: e.target.value })
        }
          name="firstName"
          />
          <label htmlFor="firstName">First Name</label>
          </span>
          </div>
          <div className="p-field">
          <span className="p-float-label">
          <InputText
          onChange={(e) =>
          this.setState({ lastName: e.target.value })
        }
          name="lastName"
          />
          <label htmlFor="lastName">Last Name</label>
          </span>
          </div>
          </div>
          <div className="p-formgroup-inline">
          <div className="p-field">
          <span className="p-float-label">
          <InputText
          onChange={(e) =>
          this.setState({ userName: e.target.value })
        }
          name="userName"
          />
          <label htmlFor="userName">UserName</label>
          </span>
          </div>
          <div className="p-field">
          <span className="p-float-label">
          <InputText
          onChange={(e) =>
            this.setState({ email: e.target.value })
          }
          name="email"
          type ="email"
          />
          <label htmlFor="email">Email</label>
          </span>
          </div>
          </div>
          <div className="p-formgroup-inline">
          <div className="p-field">
          <span className="p-float-label">
          <InputText
          onChange={(e) =>
          this.setState({ passwordhash: e.target.value })
        }
          name="password"
          />
          <label htmlFor="password">Password</label>
          </span>
          </div>
          <div className="p-fluid">
          <div className="p-field p-grid">
          <label htmlFor="userRole" className="p-col">House Role</label>
          <Dropdown
          value={this.state.userRole}
          options={this.state.roles}
          onChange={(e) =>
          this.setState({ userRole: e.target.value })
        }
          optionLabel="label"
          optionValue="value"
          placeholder="Select a User Role"
          ></Dropdown>
          </div>
          </div>
          </div>
          <br />

          <Button
          label="Register"
          icon="pi pi-user-plus"
          type ="submit"
          />
          </form>
          <br />
          <hr />

          Need to log in to your account?<a href="/login">Login</a>
          </div>
        </div>
      </Card>
        </div >
      </div >
    );
  }
}
