import React from 'react';
import { IListMap } from '../../Interfaces';
import APIURL from '../../helpers/environment'
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import EditList from './EditList';

interface ListMapProps {
  theseLists: any,
  sessionToken: string | null,
  fetch: Function
}

export default class ListMap extends React.Component<ListMapProps, IListMap> {
    constructor(props: ListMapProps) {
        super(props);

        this.state = {
            list: {
                listName: '',
                listType: ''
            },
           
        };
    }
    deleteItem(list: any) {
        console.log("delete list:", list);
    
        let sessionToken = this.props.sessionToken
          ? this.props.sessionToken
          : localStorage.getItem("token");

          fetch(`${APIURL}/item/delete/${list}.id}`, {
            method: "DELETE",
            headers: new Headers({
              "Content-Type": "application/json",
              Authorization: `Bearer ${sessionToken}`,
            }),
          }).then(() => this.props.fetch());
        }


    
render() {

return (
    <div>
    
    {this.props.theseLists.map((list: any, index: React.Key) =>
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
                        <EditList
                  fetch={this.props.fetch}
                  sessionToken={this.props.sessionToken}
                  list={list}
                />
                    </td>
                    <td>
                      <Button
                        className="p-button-rounded"
                        onClick={() => {
                            this.deleteItem(list);
                          }}
                        icon="pi pi-trash"
                        style={{ width: "2em", height: "2em" }}
                      />
                    </td>
                        </td>
                    </tr>
                    </table></Card></div>)}
                
    
        </div>
    

)

    


    }}