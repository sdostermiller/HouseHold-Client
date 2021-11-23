import React from 'react'
import {IMyLists} from '../../Interfaces';
import APIURL  from '../../helpers/environment';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import "primeicons/primeicons.css";

interface MyListsProps {
    sessionToken: string | null;
}

export default class MyLists extends React.Component<MyListsProps, IMyLists> {
    constructor(props: MyListsProps) {
        super(props);

        this.state = {
            myLists: [
                {
                    id: '',
                    listName: '',
                    listType: ''

                }
            ]

        }
    }


componentDidMount() {

    let sessionToken = 
    (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

    console.log("MyLists mounted:", sessionToken);

    fetch(`${APIURL}/list/mine`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
        }),
    })
    .then((response) => response.json())
    .then((myListsData) => {
        console.log(myListsData);
        this.setState({
            myLists: myListsData
        })
    }).catch((err) => console.log(err));

}    

render() {

    return(

        <div>
            <h2>MyLists</h2>

            {this.state.myLists.map((list, index) =>
            <div className="p-shadow-3" key={index}>
                <Card>
                    <table>
                <tr>
                    {list.listName}</tr>
                <tr>
                    <td>
                    {list.listType}
                    </td>
                        <td><td>
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
                    </table></Card></div>)}
                
    
        </div>
    )
} 
}