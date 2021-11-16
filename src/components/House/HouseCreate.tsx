import React from "react";
import { IHouse } from "../../Interfaces";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import APIURL from '../../helpers/environment';

interface HouseProps {
  sessionToken: any
}

export default class HouseCreate extends React.Component<HouseProps, IHouse> {
  constructor(props: HouseProps) {
    super(props);

    this.state = {
      houseName: "",
      userId: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
componentDidMount() {
  const userId = localStorage.getItem('UserId');
  const sessionToken = localStorage.getItem('sessionToken');
  this.setState({
    userId,
    
  });
  console.log("Create House Component mounted:", userId, sessionToken)
}

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    debugger
    event.preventDefault();
    fetch(`${APIURL}/house/create`, {
      method: "POST",
      body: JSON.stringify({
        houseName: this.state.houseName,
      }),
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.sessionToken}`
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
                  onChange={(e) => this.setState({ houseName: e.target.value })}
                  name="houseName"
                  // value={houseName}
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
