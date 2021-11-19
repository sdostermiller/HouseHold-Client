import React from 'react';
import { IOurLists } from '../../Interfaces';
import APIURL from '../../helpers/environment';
import { Button } from 'primereact/button';


interface OurListProps {
    sessionToken: string | null;
}
interface OurListFunctions {
    editList(): void,
    updateOn(): void,
    updateOff(): void
}

export default class OurLists extends React.Component <
OurListProps, 
IOurLists,
OurListFunctions> {
    constructor(props: OurListProps) {
        super(props);
        this.state = {
            ourlists: [],
            listData: [],
            updateActive: false,
            listToUpdate: {},
        };
        this.editList = this.editList.bind(this);
        this.updateOn = this.updateOn.bind(this);
        this.updateOff = this.updateOff.bind(this);
    }


componentDidMount(){
    
fetch(`${APIURL}/list/ours`, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.props.sessionToken}`
      }),
    })
    .then((response) => response.json())
    .then((listData) => {
        console.log(listData);
        this.setState({
            ourlists: this.state.listData,
        });
    }
)
}

editList(ourlist: {} ) {
    this.setState({listToUpdate(ourlist: any)});
    console.log("update", ourlist);
}

updateOn() {
    this.setState({updateActive: true});
}

updateOff() {
    this.setState({updateActive: false});
}


render(){
return(
            this.state.ourlists.map((ourlist, index) =>{
        return(
            <div>
            // <tr key={index}></tr>
            // <td><h3>{ourlist.listName}</h3>
            //     <hr />
            //     <p>{ourlist.listType}</p> </td>
            //  <td>   
            //     <Button icon='pi pi-pencil' onClick={{editlist()}} />
            //     <Button icon='pi pi-pencil' onClick={{}}
        </div>
    )}
    
            ))}
        }