import React, { Component } from "react";
import "./Header.scss";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";

export default class Header extends Component {
  state = {
    displayMenu: false,
    showDropDown: false
  };
  onClick = () => {
    this.setState(prevState => ({
      displayMenu: !prevState.displayMenu
    }));
  };
  dropDown = () => {
    this.setState(prevState => ({
      // toggling dropdown
      showDropDown: !prevState.showDropDown
    }));
  };

  render() {
    const { displayMenu, showDropDown } = this.state;
    const { onClick, dropDown } = this;
    const { hide } = this.props;
    const classDropDown = showDropDown ? "show" : "hide";
    let style = {
      position: "fixed",
      top: 0,
      width: "100%"
    };
    if (hide) {
      // making header sticky with animation
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
              <li>
                HOME
                <div className="triangle" onClick={dropDown} />
              </li>
              <li className={classDropDown}>
                <Link to="/">OLD POSTS</Link>
              </li>
              <li className={classDropDown}>
                <Link to="/index">NEWEST POSTS</Link>
              </li>
              <li>ABOUT</li>
              <li>ARCHIVE</li>
              <li>CONTACT</li>
            </ul>
          </Slide>
        </div>
        <i className="fas fa-bars hamburger" onClick={onClick} />
        <div className="horizontal-menu">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
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
