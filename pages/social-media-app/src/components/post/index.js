import React from "react";
import TextPost from './textPost';
import ImagePost from './imagePost';
import VoteWidget from "../voteWidget";
import CommentWidget from "../commentWidget";

const Post = ({ post, username}) => {
  if (!post) return <div />;

  const PostRenderer = getRenderer(post);
  const votes = post.votes || {};
  const comments = post.comments || [];
  console.log(votes[username]);
  return (
    <div className="post-container">
      <span className="post-username">
        {post.author}
      </span>
      <span className="post-published-date">
        Posted: <em> {timeSince(post.published_at)} ago </em>
      </span>
      <PostRenderer post={post} />
      <VoteWidget id={post.id} initialVote={votes[username] || ''} username={username} initialCount={post.voteScore || 0} />
      <CommentWidget id={post.id} username={username} initialCount={comments.length || 0} initialComments={comments} />
    </div>
  );
};

function getRenderer(post) {
  if (post.type === 'IMAGE') {
    return ImagePost;
  }
  return TextPost;
}

function timeSince (date) {
  if (typeof date !== 'object') {
    date = new Date(date);
  }

  var seconds = Math.floor((new Date() - date) / 1000);
  var intervalType;

  var interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = 'month';
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = 'day';
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }
  return interval + ' ' + intervalType;
};

export default Post;