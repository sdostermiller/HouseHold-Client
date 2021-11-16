import React from 'react'
import { INavbar } from "../../Interfaces";
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import { Toolbar } from 'primereact/toolbar';
import { SplitButton } from 'primereact/splitbutton';
import MyHouse from '../House/MyHouse';
import UserAccount from '../Auth/UserAccount';
import Login from '../Auth/Login'; 




interface NavbarProps {
    clearToken(): void;
    updateToken(newToken: string): string;
}

export default class Navbar extends React.Component<NavbarProps, INavbar> {
    // constructor(props: NavbarProps) {
    //     super(props);
    //         this.items = [
    //         {
    //             label: 'Account',
    //             icon: 'pi pi-user',
    //             items: [
    //                 {
    //                 label: 'HouseHold',
    //                 icon: 'pi pi-home',
    //                 command: <Link to = '/myhouse' />
    //                 },
    //                 {
    //                 label: 'User Account',
    //                 icon: 'pi pi-user',
    //                 command: <Link to = '/useraccount' />
    //                 },
    //                 {
    //                 label: 'Login',
    //                 icon: 'pi pi-unlock',
    //                 command: window.location.href = '/login'
    //                 },
    //                 {
    //                 separator: true
    //                 },
    //                 {
    //                 label: 'Log Out',
    //                 icon: 'pi pi-lock',
    //                 command: () => {props.clearToken}
    //                 }
    //             ]
    //         }
    //     ] 
    // }


render() {
    // const leftContents = (
    //     <React.Fragment>
    //         <img src=''></img>
    //     </React.Fragment>
    // );
    // const rightContents = (
    //     <React.Fragment>
    //         <SplitButton model={this.state.items} className="p-button-text"></SplitButton>
    //     </React.Fragment>
    // );
    return (
        <div>
            {/* <Router> */}
{/* 
                <Toolbar left={leftContents} right={rightContents} />

            <Routes>
                <Route path='/myhouse'><MyHouse /></Route>
                <Route path='/useraccount'><UserAccount /></Route>
                <Rout
            </Routes>
            </Router> */}
        </div>
    )
}
}

