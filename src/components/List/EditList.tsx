import React from 'react'
import { IEditList } from '../../Interfaces';
import APIURL from '../../helpers/environment';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';

interface EditListProps {
    sessionToken: string | null,
    list: any,
    fetch: Function
}

export default class EditList extends React.Component<EditListProps, IEditList> {
    constructor(props: EditListProps) {
        super(props);

        this.state = {
            editListName: this.props.list.listName,
            editListType: this.props.list.listType,
            dialog: true,
            setUpdateActive: false,
            types: [
                {
                  label: "Grocery",
                  value: "Grocery"
                },
                {
                  label: "Hardware",
                  value: "Hardware"
                },
                {
                  label: "Clothing",
                  value: "Clothing"
                },
                {
                  label: "Pet Supplies",
                  value: "Pet Supplies"
                },
                {
                  label: "Home Goods",
                  value: "Home Goods"
                },
                {
                  label: "Other",
                  value: "Other"
                }
              ],
              selectedType: ''
        }
    }

UpdateList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(this.props.list);

    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    console.log("Edit List Mounted", sessionToken);

fetch(`${APIURL}/list/edit/${this.props.list.id}`, {
    method: 'PUT',
    body: JSON.stringify({
        listName: this.state.editListName,
        listType: this.state.editListType
    }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
    })
}).then((response) => response.json())
.then((editedList) => {
    console.log(editedList);

    this.props.fetch();
}).then(() => {
    this.toggle();
    this.editThis();
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

    return(

        <div>
<Button
          className="p-button-rounded"
          onClick={(this.toggle)}
          label=""
          icon="pi pi-pencil"
          style={{ width: "2em", height: "2em" }}
        />

        <Dialog
          header="Edit List"
          visible={!this.state.dialog}
          onHide={() => this.toggle}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "50vw" }}
        >
          <form onSubmit={this.UpdateList}>
            <span className="p-float-label">
              <InputText
                value={this.state.editListName}
                name="editListName"
                onChange={(e) =>
                  this.setState({ editListName: e.target.value })
                }
              />

              <label htmlFor="itemName">List Name</label>
            </span>
            <span className="p-float-label">
              <InputText
                value={this.state.editListType}
                name="editListName"
                onChange={(e) =>
                  this.setState({ editListName: e.target.value })
                }
              />

              <label htmlFor="itemName">List Name</label>
            </span>
            
            <Dropdown
                value={this.state.editListType}
                options={this.state.types}
                onChange={(e) => this.setState({ editListType: e.target.value })}
                optionLabel="label"
                optionValue="value"
                placeholder="Select a List Type"
              />
            
            <br />
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