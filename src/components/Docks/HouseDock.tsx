import React from "react";
import {
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import PrimeReact from "primereact/api";
import { IDock } from "../../Interfaces";
import { Dock } from "primereact/dock";
import { Tooltip } from "primereact/tooltip";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import "./HouseDock.css";
import "primeicons/primeicons.css";
import logo from "../assets/hhlogo-black.png";
import Login from '../Auth/Login';
import MyHouse from '../House/MyHouse';
import ListCreate from '../List/ListCreate';
import OurLists from '../List/OurLists';
import OurItems from '../Item/OurItems';
import ItemCreate from '../Item/ItemCreate';
import Account from '../Auth/Account'
import Register from '../Auth/Register';
import Items from "../Item/HouseItems";
import Lists from '../List/Lists';
import DisplayList from '../List/DisplayList';
import Splash from '../Splash/splash';


interface DockProps {
  sessionToken: any;
  clearToken(): void;
  updateToken(newToken: string): string;
}

export class HouseDock extends React.Component<DockProps, IDock> {
  constructor(props: DockProps) {
    super(props);

    this.state = {
      nodeService: null,
      dockItems: [
        {
          label: "My House",
          icon: "pi pi-home",
          command: () => {
            window.location.href = "/";
          },
        },
        {
          label: "My Account",
          icon: "pi pi-user",
          command: () => {
            window.location.href = "/account";
          },
        },
        {
          label: "Our Lists",
          icon: "pi pi-user-plus",
          command: () => {
            window.location.href = "/lists";
          },
        },
        {
          label: "Our Items",
          icon: "pi pi-user-edit",
          command: () => {
            window.location.href = "/items";
          },
        },
      ],

      menubarItems: [
        // {
        //     label: '',
        //     className: 'menubar-root'
        // },
        {
          label: "Account",
          icon: "pi pi-angle-down",
          items: [
            {
              label: "My House",
              icon: "pi pi-home",
              command: () => {
                window.location.href = "/myhouse"
              }
            },
            {
              label: "My Account",
              icon: "pi pi-user",
              command: () => {
                window.location.href = "/account";
              },
            },
            {
              label: "Login/Change User",
              icon: "pi pi-user-edit",
              command: () => { 
                  window.location.href = "/login";
              },
            },
          ],
        },
      ],

      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 3,
        },
        {
          breakpoint: "768px",
          numVisible: 2,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
    };

    this.itemTemplate = this.itemTemplate.bind(this);
  }

  openLogin(){
    window.location.href="/login"
  }
  itemTemplate(item: {
    itemImageSrc: string | undefined;
    alt: string | undefined;
  }) {
    return (
      <img
        src={item.itemImageSrc}
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  }

  componentDidMount() {
    PrimeReact.appendTo = "self";
  }

  componentWillUnmount() {
    // reset
    PrimeReact.appendTo = null;
  }

  render() {
    const start = (
      <a href="/myhouse">
        <img src={logo} alt="HouseHold logo" />
      </a>
    );
    const end = (
      <React.Fragment>
        <Button 
          icon="pi pi-sign-in"
          label='LogIn'
          className="p-button-rounded p-button-text"
          tooltip="Login/Register"
          tooltipOptions={{ position: "bottom" }} 
          onClick={this.openLogin}
           />

        <Button
          icon="pi pi-sign-out"
          label="Log Out"
          className="p-button-rounded p-button-text "
          tooltip="Log Out"
          tooltipOptions={{ position: "bottom" }}
          onClick={this.props.clearToken}
        />
        </React.Fragment>
    )

    return (
      <div>
        <div className="dock">
          <div className="dock-window dock-advanced">
            {/* <Button>
          <Link to="/login">login</Link>
        </Button> */}

            <Tooltip
              className="dark-tooltip"
              target=".dock-advanced .p-dock-action"
              /*my="center
                +15 bottom-55" at="center top" showDelay={150}*/ position="right"
            />

            <Menubar start={start} end={end} />
       
          <Dock model={this.state.dockItems} position="left" />
          
          <div className="component-window">
          <Routes>
                    <Route path='/' element={<Splash /> } />
                    <Route path='/myhouse' element={<MyHouse sessionToken={this.props.sessionToken} />} />
                    <Route path='/account' element={<Account sessionToken={this.props.sessionToken} />} />
                    <Route path='/listcreate' element={<ListCreate sessionToken={this.props.sessionToken} />} />
                    <Route path='/itemcreate' element={<ItemCreate sessionToken={this.props.sessionToken} />} />
                    <Route path='/login' element={<Login clearToken={this.props.clearToken} updateToken={this.props.updateToken} />} />
                    <Route path='/register' element={<Register updateToken={this.props.updateToken} />} />
                    <Route path='/ourlists' element={<OurLists sessionToken={this.props.sessionToken} />} />
                    <Route path='/ouritems' element={<OurItems sessionToken={this.props.sessionToken} />} />
                    <Route path='/items' element={<Items sessionToken={this.props.sessionToken} />} />
                    <Route path='/lists' element={<Lists sessionToken={this.props.sessionToken} />} />
                    <Route path='/displaylist/:id' element={<DisplayList sessionToken={this.props.sessionToken}  />} />
                </Routes>
                <Outlet /> 
                </div>
          
            </div>
        </div>
      </div>
    );
  }
}
