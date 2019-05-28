import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import "./App.scss";

class App extends Component {
  state = {
    prevScroll: 0,
    hide: false
  };
  componentDidMount() {
    window.addEventListener("scroll", e => {
      const isTop = window.scrollY;

      if (this.state.prevScroll < window.scrollY) {
        // moving down
        // hide navbar
        this.setState({
          prevScroll: window.scrollY,
          hide: true
        });
      } else {
        // moving up
        this.setState({
          prevScroll: window.scrollY,
          hide: false
        });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <Header hide={this.state.hide} />
        <Post />
        <Footer />
      </div>
    );
  }
}

export default App;
