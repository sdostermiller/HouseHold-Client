import React from 'react'
import { IList, ListDrop } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

interface ListProps {}

export default class ListCreate extends React.Component<ListProps, IList, ListDrop> {
    constructor(props: ListProps) {
        super(props);

        this.state = {
            listName: '',
            listType: '',
            selectedType: null,
            types: [ 
                'Grocery',
                'Hardware',
                'Clothing',
                'Pet Supplies',
                'Home Goods',
                'Miscellaneous'
                ]   
            };
        
            this.handleSubmit = this.handleSubmit.bind(this);
            this.onTypeChange = this.onTypeChange.bind(this);
        }

handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost3050/list/create`, {
      method: "POST",
      body: JSON.stringify({
        itemName: this.state.listName
      }),
    })
      .then((response) => response.json())
      .then((listData) => {
        console.log(listData);
        this.setState({
          listName: this.state.listName,
          listType: this.state.listType
        });
      })
      .catch((err) => console.log(err));
  };

  onTypeChange(e:any) {
      this.setState({ selectedType: e.listType });
  }

  render() {
    const { listName } = this.state;

    return (
      <div>
        <div className="createList">
          <h1>Create a List</h1>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  value={listName}
                  name="houseName"
                  onChange={(e) => this.setState({ listName: e.target.value })}
                />

                <label htmlFor="listName">Item Name</label>
              </span>
            </div>
            <div className="listType">
                <Dropdown value={this.state.selectedType} options={this.state.types} onChange={this.onTypeChange} optionLabel="listType" placeholder="Select a List Type" />
            
             </div>
            <br />

            <Button  label="Create!" icon="pi pi-list" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}