import React from "react";
import { ICreateItem } from "../../Interfaces";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { ToggleButton } from "primereact/togglebutton";
import { Button } from "primereact/button";
import APIURL from '../../helpers/environment';

interface ItemProps {
  sessionToken: string | null
}

export default class ItemCreate extends React.Component<
  ItemProps,
  ICreateItem
> {
  constructor(props: ItemProps) {
    super(props);

    this.state = {
      itemName: "",
      itemQuantity: 1,
      itemUrgent: false,
      itemFavorite: false,
      userId: '',
      sessionToken: ''
   
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  componentDidMount() {
    const userId = localStorage.getItem('UserId');
    const sessionToken = localStorage.getItem('sessionToken');
    this.setState({
      userId,
      sessionToken
    });
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${APIURL}/item/create`, {
      method: "POST",
      body: JSON.stringify({
        itemName: this.state.itemName,
        itemQuantity: this.state.itemQuantity,
        itemUrgent: this.state.itemUrgent,
        itemFavorite: this.state.itemFavorite,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.state.sessionToken}`
      }),
    })
      .then((response) => response.json())
      .then((itemData) => {
        console.log(itemData);
        this.setState({
          itemName: this.state.itemName,
          itemQuantity: this.state.itemQuantity,
          itemUrgent: this.state.itemUrgent,
          itemFavorite: this.state.itemFavorite,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { itemName, itemQuantity, itemUrgent, itemFavorite } = this.state;

    return (
      <div>
        <div className="createItem">
          <h1>Create an Item</h1>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  value={itemName}
                  name="itemName"
                  onChange={(e) => this.setState({ itemName: e.target.value })}
                />

                <label htmlFor="itemName">Item Name</label>
              </span>
            </div>
            <div className="itemQuantity">
              <InputNumber
                inputId="itemQuantity"
                value={itemQuantity}
                onValueChange={(e) =>
                  this.setState({ itemQuantity: e.target.value })
                }
                mode="decimal"
                showButtons
                min={0}
                style={{ width: '4em', height: "2em"}}
              />
            </div>
            <div className="urgent">
              <label htmlFor="itemUrgent">Urgent?</label>
              <ToggleButton className="p-button-rounded"
                checked={itemUrgent}
                onChange={(e) => this.setState({ itemUrgent: e.value })}
                onLabel=""
                offLabel=""
                onIcon="pi pi-exclamation-circle"
                offIcon="pi pi-minus-circle"
                style={{ width: "2em", height: "2em" }}
              />
            </div>
            <div className="favorite">
              <label htmlFor="itemFavorite"> Favorite? </label>
              <ToggleButton 
                className="p-button-rounded"
                checked={itemFavorite}
                onChange={(e) => this.setState({ itemFavorite: e.value})}
                onLabel=""
                offLabel=""
                onIcon="pi pi-star-fill"
                offIcon="pi pi-star"
                style={{ width: "2em", height: "2em"}}
              />
            </div>
            <br />

            <Button label="Create!" icon="pi pi-ticket" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
