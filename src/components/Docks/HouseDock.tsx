import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
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
import ItemCreate from '../Item/ItemCreate';
import Account from '../Auth/Account'

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
          label: "Add List",
          icon: "pi pi-list",
          command: () => {
            window.location.href = "/listcreate";
          },
        },
        {
          label: "Add Item",
          icon: "pi pi-pencil",
          command: () => {
            window.location.href = "/itemcreate";
          },
        },
        {
          label: "My Lists",
          icon: "pi pi-user-plus",
          command: () => {
            window.location.href = "/mylists";
          },
        },
        {
          label: "My Items",
          icon: "pi pi-user-edit",
          command: () => {
            window.location.href = "/myitems";
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
              label: "My Account",
              icon: "pi pi-user",
              command: () => {
                window.open("/account", ".dock-window");
              },
            },
            {
              label: "Login/Change User",
              icon: "pi pi-user-edit",
              command: () => {
                {
                  window.location.href = "/login";
                }
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
      <a href="/">
        <img src={logo} />
      </a>
    );
    const end = (
      <React.Fragment>
        <Button
          icon="pi pi-sign-out"
          label=" "
          className="p-button-rounded p-button-text "
          tooltip="Log Out"
          tooltipOptions={{ position: "bottom" }}
          onClick={this.props.clearToken}
        />
      </React.Fragment>
    );

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

            <Menubar model={this.state.menubarItems} start={start} end={end} />
       
          <Dock model={this.state.dockItems} position="left" />
     
          <Routes>
                    <Route path='/' element={<MyHouse sessionToken={this.props.sessionToken} />} />
                    <Route path='/account' element={<Account sessionToken={this.props.sessionToken} />} />
                    <Route path='/listcreate' element={<ListCreate sessionToken={this.props.sessionToken} />} />
                    {/* <Route path='/itemcreate' element={<ItemCreate sessionToken={this.props.sessionToken} />} /> */}
                    <Route path='/login' element={<Login clearToken={this.props.clearToken} updateToken={this.props.updateToken} />} />
                </Routes>
                <Outlet /> 
            </div>
        </div>
      </div>
    );
  }
}
