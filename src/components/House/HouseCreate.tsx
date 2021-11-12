import React from "react";
import { IHouse } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

interface HouseProps {}

export default class HouseCreate extends React.Component<HouseProps, IHouse> {
  constructor(props: HouseProps) {
    super(props);

    this.state = {
      houseName: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetch(`http://localhost3050/house/create`, {
      method: "POST",
      body: JSON.stringify({
        itemName: this.state.houseName,
      }),
    })
      .then((response) => response.json())
      .then((houseData) => {
        console.log(houseData);
        this.setState({
          houseName: this.state.houseName,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { houseName } = this.state;

    return (
      <div>
        <div className="createHouse">
          <h1>Create a HouseHold</h1>
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
            }}
          >
            <div className="FormGroup">
              <span className="p-float-label">
                <InputText
                  value={houseName}
                  name="houseName"
                  onChange={(e) => this.setState({ houseName: e.target.value })}
                />

                <label htmlFor="itemName">Item Name</label>
              </span>
            </div>

            <br />

            <Button label="Create!" icon="pi pi-home" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
