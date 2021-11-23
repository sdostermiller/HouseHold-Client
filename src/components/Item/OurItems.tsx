import React from "react";
import { IOurItems } from "../../Interfaces";
import APIURL from "../../helpers/environment";
// import { Card } from "primereact/card";
// import { Button } from "primereact/button";
// import { ToggleButton } from "primereact/togglebutton";
// import EditItem from "./EditItem";
import ItemMap from './ItemMap';

interface OurItemsProps {
  sessionToken: string | null;
}


export default class OurItems extends React.Component<
  OurItemsProps,
  IOurItems
> {
  constructor(props: OurItemsProps) {
    super(props);
    this.state = {
      theseItems: [
        {
          id: "",
          itemName: "",
          itemQuantity: 0,
          itemUrgent: false,
          itemFavorite: false,
        },
      ],
      setUpdateActive: false,
      thisItem: {
        id: "",
        itemName: "",
        itemQuantity: 0,
        itemUrgent: false,
        itemFavorite: false,
      },
    };

  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");


      // if (localStorage.getItem('token')){
      //   console.log("Account page loaded", sessionToken)
      //   } else if (localStorage.getItem('token')== undefined){ alert("We don't know you...please log in.")
      //   window.location.href='/login'}
      //     else { alert("We don't know you...please log in.")
      //   window.location.href='/login'}
    
    
      

    console.log("pre fetch OurItems Mounted", sessionToken);

    fetch(`${APIURL}/item/ours`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((ourItemsData) => {
        console.log(ourItemsData);
        this.setState({
          theseItems: ourItemsData,
        });
      })
      .catch((err) => console.log(err));
  }

  fetchThisItem() {
  

    fetch(`${APIURL}/item/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    })
      .then((response) => response.json())
      .then((itemData) => {
        this.setState({
          thisItem: itemData,
        });
      })
      .catch((err) => console.log(err));
  }

  editUpdateItem() {
    this.setState({ setUpdateActive: true });
  }

  updateOn() {
    this.setState({ setUpdateActive: true });
  }

  updateOff() {
    this.setState({
      setUpdateActive: false,
    });
  }

  updateItem() {
    this.setState({
      thisItem: this.state.thisItem,
    });
  }

  componentWillMount() {
    this.fetchThisItem();
  }

  render() {
    return (
      <div >
        <h2>Our Items</h2>
        <ItemMap  theseItems={this.state.theseItems}
    sessionToken={this.props.sessionToken} 
    fetch={this.fetchThisItem}
/>

      </div>
    )
  }
}
