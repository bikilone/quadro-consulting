import React, { Component } from "react";
import "./Header.scss";
import Slide from "react-reveal/Slide";

export default class Header extends Component {
  state = {
    displayMenu: false
  };
  onClick = () => {
    this.setState(prevState => ({
      displayMenu: !prevState.displayMenu
    }));
  };
  render() {
    const { displayMenu } = this.state;
    const { onClick } = this;
    const ulClass = this.state ? "on-click" : "on-click";

    return (
      <div className="header">
        <h1 className="h1-header">Palo Alto</h1>
        <div className="menu">
          {displayMenu ? (
            <Slide right>
              <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>ARCHIVE</li>
                <li>CONTACT</li>
              </ul>
            </Slide>
          ) : (
            ""
          )}
        </div>
        <i className="fas fa-bars hamburger" onClick={onClick} />
        <div className="horizontal-menu">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>ARCHIVE</li>
            <li>CONTACT</li>
            <i class="fas fa-search" />
          </ul>
        </div>
      </div>
    );
  }
}
