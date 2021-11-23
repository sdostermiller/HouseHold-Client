import React from "react";
import { IHouseMembers } from "../../Interfaces";
import APIURL from "../../helpers/environment";
import { Card } from "primereact/card";

interface HouseMembersProps {
  sessionToken: string | null;
}

export default class HouseMembers extends React.Component<
  HouseMembersProps,
  IHouseMembers
> {
  constructor(props: HouseMembersProps) {
    super(props);

    this.state = {
      houseMembers: [
        {
          id: "",
          email: "",
          userName: "",
          passwordhash: "",
          firstName: "",
          lastName: "",
          userRole: "",
          houseId: "",
        },
      ],
    };
  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    console.log("HouseMembers mounted", sessionToken);

    fetch(`${APIURL}/house/roster/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((houseMemberData) => {
        console.log(houseMemberData);
        this.setState({
          houseMembers: houseMemberData.users,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <h2>House Members</h2>

        {this.state.houseMembers.map((member) => (
          <div className="p-shadow-3">
            <Card>
              <table>
                <tr>
                  <h4>
                    {member.firstName} {member.lastName}
                  </h4>
                </tr>

                <tr>
                  <i>{member.userName}</i>
                </tr>
                <tr>Role: {member.userRole}</tr>
              </table>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
