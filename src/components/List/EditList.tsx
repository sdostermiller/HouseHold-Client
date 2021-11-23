import React from 'react'
import { IEditList } from '../../Interfaces';
import APIURL from '../../helpers/environment';

interface EditListProps {
    sessionToken: string | null,
    listId: string
}

export default class EditList extends React.Component<EditListProps, IEditList> {
    constructor(props: EditListProps) {
        super(props);

        this.state = {
            editListName: '',
            editListType: ''
        }
    }

componentDidMount(){

    let sessionToken = 
    (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

    console.log("Edit List Mounted", sessionToken);

fetch(`${APIURL}/list/edit/${this.props.listId}`, {
    method: 'PUT',
    body: JSON.stringify({
        listName: this.state.editListName,
        listType: this.state.editListType
    }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionToken}`
    })
}).then((response) => response.json())
.then((editedList) => {
    console.log(editedList);
    editedList: editedList
}).catch((err) => console.log(err));

}

render() {

    return(

        <div>

        </div>
    )
}
}