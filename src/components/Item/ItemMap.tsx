import React from "react";
import { Card } from "primereact/card";
import { ToggleButton } from "primereact/togglebutton";
import { Button } from "primereact/button";
import EditItem from "./EditItem";
import APIURL from "../../helpers/environment";

interface ItemMapProps {
  theseItems: any;
  sessionToken: string | null;
  fetch: Function;
}

interface ItemMapState {
  item: {
    itemName: string;
    itemQuantity: number;
    itemUrgent: boolean;
    itemFavorite: boolean;
  };
}

export default class ItemMap extends React.Component<
  ItemMapProps,
  ItemMapState
> {
  constructor(props: ItemMapProps) {
    super(props);
    this.state = {
      item: {
        itemName: "",
        itemQuantity: 0,
        itemUrgent: false,
        itemFavorite: false,
      },
    };
  }

  deleteItem(item: any) {
    console.log("delete Item:", item);

    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    fetch(`${APIURL}/item/delete/${item.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    }).then(() => this.props.fetch());
  }

  render() {
    return (
      <div>
        {this.props.theseItems.map((item: any, index: React.Key) => (
          <div className="p-shadow-3" key={index}>
            <Card>
              <h4>{item.itemName}</h4>

              <i>Quantity: {item.itemQuantity}</i>

              <div className="p-jc-between">
                <ToggleButton
                  className="p-button-rounded"
                  checked={item.itemUrgent}
                  // onChange={(e) => this.setState({ itemUrgent: e.value })}
                  onLabel=""
                  offLabel=""
                  onIcon="pi pi-exclamation-circle"
                  offIcon="pi pi-minus-circle"
                  style={{ width: "2em", height: "2em" }}
                />

                <ToggleButton
                  className="p-button-rounded"
                  checked={item.itemFavorite}
                  //   onChange={(e) =>
                  //   this.setState({ itemFavorite: e.value })
                  // }
                  onLabel=""
                  offLabel=""
                  onIcon="pi pi-star-fill"
                  offIcon="pi pi-star"
                  style={{ width: "2em", height: "2em" }}
                />

                <EditItem
                  fetch={this.props.fetch}
                  sessionToken={this.props.sessionToken}
                  item={item}
                />

                <Button
                  className="p-button-rounded"
                  onClick={() => {
                    this.deleteItem(item);
                  }}
                  label=""
                  icon="pi pi-trash"
                  style={{ width: "2em", height: "2em" }}
                />
              </div>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
