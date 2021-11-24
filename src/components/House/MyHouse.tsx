import React from "react";
import { IHome } from "../../Interfaces";
import OurLists from "../List/OurLists";
// import HouseList from "../House/HouseList";
import OurItems from "../Item/OurItems";
import HouseMembers from "../House/HouseMembers";

interface HouseProps {
  sessionToken: string | null;
}

export default class MyHouse extends React.Component<HouseProps, IHome> {
  constructor(props: HouseProps) {
    super(props);
    this.state = {
      houseName: "",
      houseId: "",
      houseHold: [],
      user: [],
    };
   
  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

   
      
  if (localStorage.getItem('token')){
    console.log("Account page loaded", sessionToken)
    } else if (localStorage.getItem('token')=== undefined){ alert("We don't know you...please log in.")
    window.location.href='/login'}
      else { alert("We don't know you...please log in.")
    window.location.href='/login'}


  }

  render() {
    return (
      <div>
        <div id="heading">
          <h1>My HouseHold</h1>
        </div>

        <div className="p-grid">
          <div className="p-col">
            <HouseMembers sessionToken={this.props.sessionToken} />
          </div>
          <div className="p-col">
            <OurLists sessionToken={this.props.sessionToken} />
          </div>
          <div className="p-col">
            <OurItems sessionToken={this.props.sessionToken} />
          </div>
        </div>
      </div>
    );
  }
}
