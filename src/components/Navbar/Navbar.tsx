import React from 'react'
import { INavbar } from "../../Interfaces";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Menubar } from 'primereact/menubar';



interface NavbarProps {
    clearToken(): void;
    sessionToken: string;
    updateToken(newToken: string): string;
}

export default class Navbar extends React.Component<NavbarProps, INavbar> {
    constructor(props: NavbarProps) {
        super(props);
        // this.items = [
        //     {
        //         label: 'Account',
        //         icon: 'pi pi-user',
        //         items: [
        //             {
        //             label: 'Account Home',
        //             icon: 'pi '
        //             },
        //             {
        //             label: 'Login',
        //             icon: 'pi pi-unlock'
        //             },
        //             {
        //             label: 'Log Out',
        //             icon: 'pi pi-lock'
        //             }
        //         ]
        //     }
        // ] 
    }


render() {

    return (
        <div>
            <Router>
                
            </Router>
        </div>
    )
}
}

