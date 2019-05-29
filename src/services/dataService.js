export const fetchMultiplePosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json());

export const fetchSinglePost = id =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
    res.json()
  );
