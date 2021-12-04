import React from "react";

const ImagePost = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div className="post-image-container">
        <img src={post.fileUrl} className="post-image" />
      </div>
    </div>
  );
};

export default ImagePost;