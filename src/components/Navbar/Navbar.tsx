import React from 'react'
import { INavbar } from "../../Interfaces";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';



interface NavbarProps {
    clearToken(): void;
    sessionToken: string;
    updateToken(newToken: string): string;
}

export default class Navbar extends React.Component<NavbarProps, INavbar> {



render() {

    return (
        <div>
            <Router>
                
            </Router>
        </div>
    )
}
}

