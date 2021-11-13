import React from 'react';
import { IHouseList } from "../../Interfaces"
import { Dropdown } from 'primereact/dropdown';

interface HouseListProps {

}

export default class HouseList extends React.Component <
    HouseListProps,
    IHouseList
    >  {
    constructor(props: HouseListProps) {
        super(props);

        this.state = {
            houseName: '',
            houseId: '',
            userId: '',
            sessionToken: '',
            housedata: []
    
        };

     
    }

    componentDidMount() {
        const userId = localStorage.getItem("UserId");
        const sessionToken = localStorage.getItem("sessionToken");
        this.setState({
          userId,
          sessionToken,
        });

        console.log("Test House List", userId, sessionToken);

        fetch(`http://localhost:3050/house/all`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionToken}`
              }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("test fetch house list", data)
            })
            

           
        
        .catch((err) => console.log(err));

            console.log(this.state.housedata);
            }
            
        

        
    
    

    render() {
        return (
            <div >
                {/* <Dropdown value={this.state.selectedCity1} options={this.cities} onChange={this.onCityChange} optionLabel="name" placeholder="Select a City" /> */}

            </div>
        )
    }
}