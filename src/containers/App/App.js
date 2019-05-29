import React, { Component } from "react";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Posts from "../Posts/Posts";
import SinglePost from "../../components/SinglePost/SinglePost";

class App extends Component {
  state = {
    prevScroll: 0,
    hide: false
  };
  componentDidMount() {
    window.addEventListener("scroll", e => {
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
        <Switch>
          <Route exact path="/" component={Post} />
          <Route exact path="/index" component={Posts} />
          <Route exact path="/:id" component={SinglePost} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
