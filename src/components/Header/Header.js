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
    const { hide } = this.props;
    let style = {
      position: "fixed",
      top: 0,
      width: "100%"
    };
    if (hide) {
      style = {
        ...style,
        transform: "translate(0,-500px)",
        transitionDuration: "0.5s"
      };
    } else {
      style = {
        ...style,
        transform: "translate(0,0)",
        transitionDuration: "0.5s"
      };
    }

    return (
      // <Slide when={!hide} top>
      <div className="header" style={style}>
        <h1 className="h1-header">Palo Alto</h1>
        <div className="menu">
          <Slide when={displayMenu} right>
            <ul>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>ARCHIVE</li>
              <li>CONTACT</li>
            </ul>
          </Slide>
        </div>
        <i className="fas fa-bars hamburger" onClick={onClick} />
        <div className="horizontal-menu">
          <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>ARCHIVE</li>
            <li>CONTACT</li>
            <i className="fas fa-search" />
          </ul>
        </div>
      </div>
      // </Slide>
    );
  }
}
