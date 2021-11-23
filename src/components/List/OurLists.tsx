import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { IOurLists } from "../../Interfaces";
import APIURL from "../../helpers/environment";
import { Card } from "primereact/card";
import DisplayList from "../List/DisplayList";
import { Button } from "reactstrap";
import "primeicons/primeicons.css";



interface OurListProps {
  sessionToken: string | null;
}
interface OurListFunctions {
  editList(): void;
  updateOn(): void;
  updateOff(): void;
}

export default class OurLists extends React.Component<
  OurListProps,
  IOurLists,
  OurListFunctions
> {
  constructor(props: OurListProps) {
    super(props);
    this.state = {
      ourlists: [
        {
          id: "",
          listName: "",
          listType: "",
          houseId: "",
          userId: "",
        },
      ],
   
    };

  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");


      if (localStorage.getItem('token')){
        console.log("Account page loaded", sessionToken)
        } else if (localStorage.getItem('token')== undefined){ alert("We don't know you...please log in.")
        window.location.href='/login'}
          else { alert("We don't know you...please log in.")
        window.location.href='/login'}
    
    
      

    console.log("pre fetch OurList Mounted", sessionToken);
    fetch(`${APIURL}/list/ours`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionToken}`,
      }),
    })
      .then((response) => response.json())
      .then((listData) => {
        console.log(listData);
        this.setState({
          ourlists: listData,
        });
      })
      .catch((err) => console.log(err));
  }


  render() {
    return (
      <div>
        <h2>Our Lists</h2>
        {this.state.ourlists.map((list, index) => (
           
          <div  className="p-shadow-3" key={index}>
               {console.log(list)}
            <Card>
              <table>
                <tr>
                  <Link to={{ pathname: `/displaylist/${list.id}`}}><h4>{list.listName}</h4></Link>
                </tr>
                <tr>
                  <td><i>{list.listType}</i></td>
                  <td>
                    <td>
                      <Button
                        className="p-button-rounded p-button-text"
                        /*onChange={(e) =>}*/
                        icon="pi pi-pencil"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </td>
                    <td>
                      <Button
                        className="p-button-rounded p-button-text"
                        /*onChange={(e) =>}*/
                        icon="pi pi-trash"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </td>
                  </td>
                </tr>
               
              </table>
            </Card>
          </div>
        ))}
      </div>
    );
  }
}
