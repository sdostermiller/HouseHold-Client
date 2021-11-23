import React from "react";
import { IMyItems } from "../../Interfaces";
import APIURL from "../../helpers/environment";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import EditItem from "../Item/EditItem";
import { ToggleButton } from "primereact/togglebutton";
import ItemMap from './ItemMap'

interface MyItemsProps {
  sessionToken: string | null;
}


export default class MyItems extends React.Component<
  MyItemsProps,
  IMyItems
> {
  constructor(props: MyItemsProps) {
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
      thisItem: [
         {
        id: "",
        itemName: "",
        itemQuantity: 0,
        itemUrgent: false,
        itemFavorite: false,
      }
    ],
      setUpdateActive: false,
    };
    
  }


fetchItems = () =>{

  let sessionToken = this.props.sessionToken
  ? this.props.sessionToken
  : localStorage.getItem("token");

    fetch(`${APIURL}/item/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((myitemsdata) => {
        console.log(myitemsdata);
        this.setState({
          theseItems: myitemsdata,
        });
      })
      .catch((err) => console.log(err));
  }

 componentDidMount =()=> {
   this.fetchItems();
 }
  // fetchThisItem() {
  //   let sessionToken = this.props.sessionToken
  //     ? this.props.sessionToken
  //     : localStorage.getItem("token");

  //   fetch(`${APIURL}/item/${item.id}`, {
  //     method: "GET",
  //     headers: new Headers({
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${sessionToken}`,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((itemData) => {
  //       this.setState({
  //         thisItem: itemData,
  //       });
  //     })
  //     .catch((err) => console.log(err));
  // }

  editUpdateItem (item: any) {
    this.setState({setUpdateActive: true})
  }

  updateOn() {
    this.setState({
      setUpdateActive: true
    })
  }

  updateOff() {
    this.setState({
      setUpdateActive: false
    })
  }

  updateItem() {
    this.setState({
      thisItem: this.state.thisItem
    })
  }

  // componentWillMount() {
  //   this.fetchThisItem();
  // }
  

  render() {
    return (
      <div>
        
        <h2>My Items</h2>
        <ItemMap  theseItems={this.state.theseItems}
    sessionToken={this.props.sessionToken} fetch={this.fetchItems} />

        
      </div>
    );
  }
}
