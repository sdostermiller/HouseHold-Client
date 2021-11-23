import React from "react";
import { IList } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import APIURL from '../../helpers/environment';

interface ListProps {
  sessionToken: string| null
}

export default class ListCreate extends React.Component<
  ListProps,
  IList
> {
  constructor(props: ListProps) {
    super(props);

    this.state = {
      listName: "",
      listType: "",
      userId: "",
      selectedType: null,
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
    };

    this.handleSubmit = this.handleSubmit.bind(this);

  }

  

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`${APIURL}/list/create`, {
      method: "POST",
      body: JSON.stringify({
        listName: this.state.listName,
        listType: this.state.listType
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.sessionToken}`
      }),
    })
      .then((response) => response.json())
      .then((listData) => {
        console.log(listData);
        this.setState({
          listName: this.state.listName,
          listType: this.state.listType,
        });
      })
      .catch((err) => console.log(err));
  };


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
                  name="listName"
                  onChange={(e) => this.setState({ listName: e.target.value })}
                />

                <label htmlFor="listName">Item Name</label>
              </span>
            </div>
            <div className="listType">
              <Dropdown
                value={this.state.listType}
                options={this.state.types}
                onChange={(e) => this.setState({ listType: e.target.value })}
                optionLabel="label"
                optionValue="value"
                placeholder="Select a List Type"
              />
            </div>
            <br />

            <Button label="Create!" icon="pi pi-list" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
