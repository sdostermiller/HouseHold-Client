import React from 'react';
import { isThisTypeNode } from 'typescript';
import { IListMap } from '../../Interfaces';

interface ListMapProps {
    sessionToken: string | null;
    ourlists: any;
}

export default class ListMap extends React.Component<ListMapProps, IListMap> {
    constructor(props: ListMapProps) {
        super(props);

        this.state = {
            list: {
                listName: '',
                listType: ''
            }
        };
    }

// listMapper = () => {
//      this.ourlists.map((ourlist, index) =>{
//         return(
//             <tr key={index}></tr>
//             <td><h3>{ourlist.listName}</h3>
//                 <hr />
//                 <p>{ourlist.listType}</p> </td>
//              <td>   
//                 <Button icon='pi pi-pencil' onClick={{</editlist()}}
//         )
//     })
// }

render() {

return (
    <div>
    <h3>Our Lists</h3>
    <hr />
    

    </div>
)

    


    }}