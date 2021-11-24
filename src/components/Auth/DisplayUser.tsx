import React from "react";
import { IDisplayUser } from "../../Interfaces";
import APIURL from "../../helpers/environment";
import EditUser from "./EditUser";

interface DisplayUserProps {
  sessionToken: string | null;
}

interface DisplayUserFunction {
  onShow(): void;
  onHide(): void;
}

export default class DisplayUser extends React.Component<
  DisplayUserProps,
  IDisplayUser,
  DisplayUserFunction
> {
  constructor(props: DisplayUserProps) {
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
      updateActive: false,
      displayResponsive: false,
      userData: {},
      // userData: {
      //     id: '',
      //     email: '',
      //     userName: '',
      //     passwordhash: '',
      //     firstName: '',
      //     lastName: '',
      //     houseId: '',
      //     userRole: ''
      // },
      userToUpdate: {},
    };

    this.onShow = this.onShow.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    console.log("display user pre-fetch check, sessionToken:", sessionToken);

    fetch(`${APIURL}/User/me`, {
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
          userData: userData,
          email: userData.email,
          firstName: userData.firstName,
          userId: userData.userId,
          lastName: userData.lastName,
          userName: userData.userName,
          houseId: userData.houseId,
          passwordhash: userData.passwordhash,
          userRole: userData.userRole,
          displayResponsive: false,
        });
        console.log("houseId:", this.state.houseId);
      })
      .catch((err) => console.log(err));

    // console.log("houseId", this.state.houseId)

    fetch(`${APIURL}/house/mine)`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((houseData) => {
        console.log("get user's house data", houseData);
        this.setState({
          houseName: houseData.houseName,
        });
      })
      .catch((err) => console.log(err));
  }

  onShow() {
    this.setState({
      displayResponsive: true,
    });
  }

  onHide() {
    this.setState({
      displayResponsive: false,
    });
  }

  render() {
    const { firstName, lastName, userName, houseName, userRole } = this.state;

    return (
      <div>
        <div className="p-d-flex p-jc-between">
          <div className="p-mr-2">
            <p>
              <b>Name:</b> {firstName} {lastName}
            </p>
          </div>
            <div className="p-mr-2">
              <p>
                <b>UserName:</b> <i>{userName}</i>
              </p>
            </div>
          </div>
          <div className="p-d-flex p-jc-between">
            <div className="p-mr-2">
              <p>
                <b>House:</b>
                {houseName}
              </p>
            </div>
            <div className="p-mr-2">
              <p>
                <b>Role:</b> <i>{userRole}</i>
              </p>
            </div>
</div>
            <div className="p-flex p-jc-center">
              <div className="p-mr-2">
                
                    <EditUser
                      sessionToken={this.props.sessionToken}
                      onShow={this.onShow}
                      onHide={this.onHide}
                    />
              </div>
            </div>
          </div>
       
    );
  }
}
