import React from 'react'
import { IHome } from '../../Interfaces';
import OurLists from '../List/OurLists';


interface HouseProps {
    sessionToken: string | null
}

export default class MyHouse extends React.Component<HouseProps, IHome> {
    constructor(props: HouseProps) {
        super(props);
        this.state = {
            houseName: '',
            houseId: '',
            houseHold: [],
            user: []
        }
        // this.fetchHouseHold = this.fetchHouseHold.bind(this);
    }

// fetchHouseHold() {
//     fetch(`http://localhost:3050/house/${user.houseId}`, {
//         method: 'GET',
//         headers: new Headers ({
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ${this.props.sessionToken}'
//         })
//     }).then((response) => response.json())
//     .then((HouseData) => {
//         console.log(HouseData);
//         this.setState({houseHold: HouseData})
        
//     })
// }

// houseHoldMap() {
//     return this.props.houseHold.map
// }




render() {
    return(
        <div>
            <h1>My HouseHold</h1>
            <OurLists sessionToken={this.props.sessionToken} />
        </div>
    )
}

}