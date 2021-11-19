import React from 'react';
import { IDisplayList } from '../../Interfaces';
import APIURL from '../../helpers/environment';


interface DisplayListProps {
    sessionToken: string | null;
}

export default class DisplayList extends React.Component <
DisplayListProps, 
IDisplayList> {
    // constructor(props: DisplayListProps) {
    //     super(props);
    //     this.state = {
    //         listId: ''
        };

//         this.handleSubmit = this.handleSubmit.bind(this);

//     }

// handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     let listId = this.state.listId;

//     event.preventDefault();
//     fetch(`${APIURL}/list/${listId})`, {
//         method: "GET",
//         body: JSON.stringify({
//             listId: this.state.listId
//         }),
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${this.props.sessionToken}`
//       }),
//     })
//     .then((response) => response.json())
//     .then((listData) => {
//         console.log(listData);
//         list(listData)
//         })
//     }
    
    
// }
