import React from 'react';
import { IDisplayList } from '../../Interfaces';
import APIURL from '../../helpers/environment';
import { Card } from 'primereact/card';
import { ToggleButton } from 'primereact/togglebutton';



interface DisplayListProps {
    sessionToken: string | null,

}

export default class DisplayList extends React.Component <
DisplayListProps, 
IDisplayList> {
    constructor(props: DisplayListProps) {
        super(props);
        this.state = {
            listitems: [
                {
                    id: '',
                    itemName: '',
                    itemQuantity: 0,
                    itemUrgent: false,
                    itemFavorite: false,
                    userId: '',
                    houseId: '',
                    listId: ''
,                }
            ],
            listName: '',
            listType: ''
        }



    }

componentDidMount(){

let sessionToken = 
    (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

console.log("pre fetch DisplayList Mounted", sessionToken );


const url = window.location.href
const urlParts = url.split("/")
const listId = urlParts[4]

console.log("listId", listId);

fetch(`${APIURL}/list/withitems/${listId}`, {
    method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionToken}`
      }),
})
.then((response) => response.json())
.then((thislist) => {
    console.log(thislist[0].items);
    this.setState({
        listitems: thislist[0].items ,
        listName: thislist[0].listName,
        listType: thislist[0].listType
    })
}).catch((err) => console.log(err));



}

render() {

    return(

        <div>
            
            <h3>{this.state.listName}</h3>
            
                {this.state.listitems.map((item: any, index: React.Key)  => (
            <div className="p-shadow-3" key={index}>
                <Card>
                <table><tbody>
                <tr>
                    <h4>{item.itemName}</h4>
                    </tr>    
                <tr>
                    <td><i>Quantity: {item.itemQuantity}</i></td>
                    <td>     <ToggleButton
                                className="p-button-rounded"
                                checked={item.itemFavorite}
                                /*onChange={(e) =>
                                this.setState({ itemFavorite: e.value })
                              }*/
                                onLabel=""
                                offLabel=""
                                onIcon="pi pi-star-fill"
                                offIcon="pi pi-star"
                                style={{ width: "2em", height: "2em" }}
                              /></td>
                    <td>     <ToggleButton
                                className="p-button-rounded"
                                checked={item.itemUrgent}
                                /*onChange={(e) => this.setState({ itemUrgent: e.value })}*/
                                onLabel=""
                                offLabel=""
                                onIcon="pi pi-exclamation-circle"
                                offIcon="pi pi-minus-circle"
                                style={{ width: "2em", height: "2em" }}
                              /></td>
                </tr>
                </tbody>
                    </table>        
                        </Card>

            </div>
            ))}


        </div>
    )
}
}