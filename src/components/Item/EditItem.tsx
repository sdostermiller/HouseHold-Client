import React from "react";
import { IEditItem } from "../../Interfaces";
import APIURL from "../../helpers/environment";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { ToggleButton } from "primereact/togglebutton";
import { Button } from "primereact/button";

interface EditItemProps {
  item: any,
  sessionToken: string | null;
  fetch: Function   
 
}

export default class EditItem extends React.Component<
  EditItemProps,
  IEditItem
  
  
> {
  constructor(props: EditItemProps) {
    super(props);

    this.state = {
      editItemName: this.props.item.itemName,
      editItemQuantity: this.props.item.itemQuantity,
      editItemUrgent: this.props.item.itemUrgent,
      editItemFavorite: this.props.item.itemFavorite,
      editListId: this.props.item.listId,
      dialog: true,
      setUpdateActive: false,
    
    };
  }

  UpdateItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.props.item);

    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    fetch(`${APIURL}/item/edit/${this.props.item.id}}`, {
      method: "PUT",
      body: JSON.stringify({
        itemName: this.state.editItemName,
        itemQuantity: this.state.editItemQuantity,
        itemUrgent: this.state.editItemUrgent,
        itemFavorite: this.state.editItemUrgent,
        listId: this.state.editListId,
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    }).then(response => response.json())
      .then((updateData) => {
        console.log(updateData);
       this.props.fetch()

      })
      .catch((err) => console.log(err));
  };

  editThis = () => {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  toggle = () => this.setState({dialog: !this.state.dialog});
  

onClick(name: string) {
  let state= {
    [`${name}`]: true
  }

}
  render() {
    return (
      <div>
        <Button
          className="p-button-rounded"
          onClick={(this.toggle)}
          label=""
          icon="pi pi-pencil"
          style={{ width: "2em", height: "2em" }}
        />

        <Dialog
          header="Edit Item"
          visible={!this.state.dialog}
          onHide={() => this.toggle}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "50vw" }}
        >
          <form onSubmit={this.UpdateItem}>
            <span className="p-float-label">
              <InputText
                value={this.state.editItemName}
                name="editItemName"
                onChange={(e) =>
                  this.setState({ editItemName: e.target.value })
                }
              />

              <label htmlFor="itemName">Item Name</label>
            </span>

            <InputNumber
              inputId="itemQuantity"
              value={this.state.editItemQuantity}
              onValueChange={(e) =>
                this.setState({ editItemQuantity: e.target.value })
              }
              mode="decimal"
              showButtons
              min={0}
              style={{ width: "4em", height: "2em" }}
            />

            <label htmlFor="itemUrgent">Urgent?</label>
            <ToggleButton
              className="p-button-rounded"
              checked={this.state.editItemUrgent}
              onChange={(e) => this.setState({ editItemUrgent: e.value })}
              onLabel=""
              offLabel=""
              onIcon="pi pi-exclamation-circle"
              offIcon="pi pi-minus-circle"
              style={{ width: "2em", height: "2em" }}
            />

            <label htmlFor="itemFavorite"> Favorite? </label>
            <ToggleButton
              className="p-button-rounded"
              checked={this.state.editItemFavorite}
              onChange={(e) => this.setState({ editItemFavorite: e.value })}
              onLabel=""
              offLabel=""
              onIcon="pi pi-star-fill"
              offIcon="pi pi-star"
              style={{ width: "2em", height: "2em" }}
            />

            <hr />
            <Button
              label="Cancel"
              icon="pi pi-times"
              onClick={this.toggle}
              className="p-button-text"
            />
            <Button 
            label="Edit" 
            icon="pi-pi-check" 
            type="submit" 
            onClick={this.toggle}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}
