import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { fetchSinglePost } from "../../services/dataService";

export default class SinglePost extends Component {
  state = {
    data: {}
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    fetchSinglePost(id)
      .then(res =>
        this.setState({
          data: res
        })
      )
      .catch(error => {
        throw new Error(error);
      });
  }
  render() {
    const { body, title } = this.state.data;
    const { loading } = this.state;

    const onClick = event => {
      // changing color of comment and team name
      event.target.style.borderBottom = "solid 3px #5c6bc0";
      event.target.style.fontWeight = "bold";
      if (event.target.parentNode.children[1] !== event.target) {
        event.target.parentNode.children[1].style.borderBottom =
          "solid 1px black";
        event.target.parentNode.children[1].style.fontWeight = "normal";
      } else {
        event.target.parentNode.children[0].style.borderBottom =
          "solid 1px black";
        event.target.parentNode.children[0].style.fontWeight = "normal";
      }
    };

    return loading ? (
      <div style={{ marginTop: "200px", textAlign: "center", height: "100vh" }}>
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
      </div>
    ) : (
      <div className="post">
        <div className="post-header">
          <div className="button-top">I Do Reflect</div>
        </div>
        <span className="date">Sep 11</span>
        <div className="post-main">
          <h1>{title}</h1>

          <p className="main-text">{body}</p>
          <hr />
          <div className="disqusion">
            <div className="comments">
              <span onClick={onClick}>0 comments</span>
              <span onClick={onClick}>pixelBuddha</span>
            </div>
            <input placeholder="Add a comment..." />
          </div>
        </div>
      </div>
    );
  }
}
