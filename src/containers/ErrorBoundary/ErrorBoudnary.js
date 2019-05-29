import React, { Component } from "react";

export default class ErrorBoudnary extends Component {
  state = {
    error: false
  };
  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  render() {
    return this.state.error ? (
      <div className="error">
        Something went wrong, please try to refresh the page or go back
      </div>
    ) : (
      this.props.children
    );
  }
}
