import React, { Component } from "react";
import FetchedPost from "../../components/FetchedPost/FetchedPost";
import Loader from "react-loader-spinner";
import { fetchMultiplePosts } from "../../services/dataService";

export default class Posts extends Component {
  state = {
    posts: [],
    loading: true
  };

  componentDidMount() {
    fetchMultiplePosts()
      .then(res => this.setState({ posts: res.slice(0, 10), loading: false }))
      .catch(error => {
        throw new Error(error);
      });
  }
  render() {
    const { posts, loading } = this.state;

    return loading ? (
      <div style={{ marginTop: "200px", textAlign: "center", height: "100vh" }}>
        <Loader type="Puff" color="#00BFFF" height="100" width="100" />
      </div>
    ) : (
      <div>
        {posts.map(post => (
          <FetchedPost key={post.id} data={post} />
        ))}
      </div>
    );
  }
}
