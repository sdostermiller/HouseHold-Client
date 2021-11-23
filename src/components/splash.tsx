import React from 'react';
import splashlogo from './assets/hh-splash-logo.png';

export default class splash extends React.Component {

    render() {
        return(
            <div className=".logocontainer">
            <div className=".splashLogo">
                <a href="./myhouse">
        <img src={splashlogo} alt="HouseHold logo" />
      </a>
            </div>
            </div>
        )
    }
}