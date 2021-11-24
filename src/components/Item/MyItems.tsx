import React from "react";
import { IMyItems } from "../../Interfaces";
import APIURL from "../../helpers/environment";
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
 
 



  
  

  render() {
    return (
      <div>
        
        <ItemMap  theseItems={this.state.theseItems}
    sessionToken={this.props.sessionToken} fetch={this.fetchItems} />

        
      </div>
    );
  }
}
