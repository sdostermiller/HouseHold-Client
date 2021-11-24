import React from 'react'
import {IMyLists} from '../../Interfaces';
import APIURL  from '../../helpers/environment';
import "primeicons/primeicons.css";
import ListMap  from './ListMap';

interface MyListsProps {
    sessionToken: string | null;
}

export default class MyLists extends React.Component<MyListsProps, IMyLists> {
    constructor(props: MyListsProps) {
        super(props);

        this.state = {
            theseLists: [
                {
                    id: '',
                    listName: '',
                    listType: ''

                }
            ]

        }
    }


fetchLists = () => {

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
            theseLists: myListsData
        })
    }).catch((err) => console.log(err));

}    

componentDidMount = () => {
    this.fetchLists();
}

render() {

    return(

        <div>
            <ListMap theseLists={this.state.theseLists} sessionToken={this.props.sessionToken} fetch={this.fetchLists} />
         </div>
    )
} 
}