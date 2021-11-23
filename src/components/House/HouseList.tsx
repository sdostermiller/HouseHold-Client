import React from 'react';
import { IHouseList } from "../../Interfaces"
import { Dropdown } from 'primereact/dropdown';
import APIURL from '../../helpers/environment';

interface HouseListProps {
    sessionToken: string | null
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
            houseList: [
            ],
            house: [],
            editUserHouse: ''
    
        };

     
    }

    componentDidMount() {
    
    let sessionToken = 
        (this.props.sessionToken ?  this.props.sessionToken : localStorage.getItem('token'));

        console.log("House List Mounted", sessionToken);

        fetch(`${APIURL}/house/all`, {
            method: "GET",
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionToken}`
              })
        })
        .then((response) => response.json())
        .then((allHouses) => {
            console.log(allHouses)
            this.setState({
            houseList: allHouses,
            houseName: allHouses.houseName,
            editUserHouse: allHouses.houseName
            });
            allHouses.map((house: any)=> 
                [{label: '{house.houseName}'},{value: 'house.houseName'}])
        })
        .catch((err) => console.log(err));


        // console.log("test outside fetch", this.state.)allHouses;
    }
    
            
        

        
    
    

    render() {
        return (
            <div >
                <Dropdown value={this.state.houseName} options={this.state.houseList}
                onChange={(e) => this.setState({editUserHouse: e.target.value})}
                optionLabel="label"
                optionValue="value"
                placeholder="Select a House" ></Dropdown>

               

            </div>
        )
    }
}