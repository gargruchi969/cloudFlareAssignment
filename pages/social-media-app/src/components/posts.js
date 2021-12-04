import React, { useEffect, useState } from "react";
import Post from './post';
import { Link } from "@reach/router";
import { BASE_URL_POSTS } from '../constants';

const Posts = ({username}) => {
  const [posts, setPosts] = useState([]);
  console.log(username);
  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        BASE_URL_POSTS
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);
  console.log(JSON.stringify(posts));
  return (
    <div className="feed">
      <Link to={`/posts/create`}><button>Create Post</button></Link>
      <h1>Feed</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <Post post={post} username={username} />
        </div>
      ))}
    </div>
  );
};

export default Posts;