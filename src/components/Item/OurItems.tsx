import React from "react";
import { IOurItems } from "../../Interfaces";
import APIURL from "../../helpers/environment";
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

fetchItems = () => {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");
    
      

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

  componentDidMount =()=> {
    this.fetchItems();
  }
  


  render() {
    return (
      <div >
        <h2>Our Items</h2>
        <ItemMap  theseItems={this.state.theseItems}
    sessionToken={this.props.sessionToken} 
    fetch={this.fetchItems}
/>

      </div>
    )
  }
}
