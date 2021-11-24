import React from "react";
import "./Component.css";
import { IAccount } from "../../Interfaces";
import DisplayUser from "./DisplayUser";
import "primeflex/primeflex.css";
import MyItems from "../Item/MyItems";
import MyLists from "../List/MyLists";
import "./Account.css";
import { Accordion, AccordionTab } from "primereact/accordion";

interface AccountProps {
  sessionToken: string | null;
}

export default class Account extends React.Component<AccountProps, IAccount> {
  constructor(props: AccountProps) {
    super(props);
    this.state = {
      shouldRedirect: false,
      activeIndex: null,
    };
  }

  componentDidMount() {
    let sessionToken = this.props.sessionToken
      ? this.props.sessionToken
      : localStorage.getItem("token");

    if (localStorage.getItem("token")) {
      console.log("Account page loaded", sessionToken);
    } else if (localStorage.getItem("token") === undefined) {
      alert("We don't know you...please log in.");
      window.location.href = "/login";
    } else {
      alert("We don't know you...please log in.");
      window.location.href = "/login";
    }
  }

  onClick(itemIndex: any) {
    let activeIndex = this.state.activeIndex ? [...this.state.activeIndex] : [];

    if (activeIndex.length === 0) {
      activeIndex.push(itemIndex);
    } else {
      const index = activeIndex.indexOf(itemIndex);
      if (index === -1) {
        activeIndex.push(itemIndex);
      } else {
        activeIndex.splice(index, 1);
      }
    }
    this.setState({ activeIndex });
  }

  render() {
    return (
      <div>
        <div className="accountcontainer">
          <div className="p-text-center">
            <h2>My Account</h2>
          </div>
          <br />
          <div className="p-grid p-justify-around">
            <div className="p-col-7">
              <div className="p-shadow-3">
                <Accordion multiple activeIndex={[0]}>
                  <AccordionTab header="My Information">
                    <DisplayUser sessionToken={this.props.sessionToken} />
                  </AccordionTab>
                  <AccordionTab header="My Lists">
                    <MyLists sessionToken={this.props.sessionToken} />
                  </AccordionTab>
                  <AccordionTab header="My Items">
                    <MyItems sessionToken={this.props.sessionToken} />
                  </AccordionTab>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
