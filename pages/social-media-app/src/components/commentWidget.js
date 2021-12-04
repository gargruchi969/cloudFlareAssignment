import React, { useState } from 'react';
import { BASE_URL_POSTS } from '../constants';

const CommentWidget = ({id, username, initialCount, initialComments}) => {
  const [count, setCount] = useState(initialCount || 0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState(initialComments || []);

  const onCmtClick = () => {
    if (showComments) {
      setShowComments(false);
    } else {
      setShowComments(true);
    }
  }

  const onAddCmt = () => {
    const comment = document.getElementById(id + '-comment-input').value;
    if (!comment) {
      return;
    }
    sendData(id, username, comment);
    setComments([
      ...comments,
      {
        username,
        comment
      }
    ]);

    setCount(count + 1);
    document.getElementById(id + '-comment-input').value = '';
  }
  const commentsSection = showComments ? 
  comments.map((cm, index) => {
    return (
      <div className='comment-section' key={index}>
        <p><em>{cm.username} : {cm.comment}</em></p>
      </div>
    );
  }) : null;
  const cmtId = id + '-comment-input';
  return (
    <div className="comment-widget">
      <a onClick={() => onCmtClick()} href="javascript:void(0);"> {count} comments</a>
      {commentsSection}
      <div><input type='text' id={cmtId} /> <button onClick={onAddCmt}>Add comment</button></div>
    </div>
  );
};

function sendData(id, username, comment) {
  const data = {};
    data.username = username;
    data.comment = comment;

  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(XHR.responseText);
    }
  };


  XHR.addEventListener('error', function( event ) {
    alert( 'Oops! Something went wrong.' );
  });

  XHR.open('POST', BASE_URL_POSTS + `/${id}/comment`);
  XHR.send(JSON.stringify(data));
}

export default CommentWidget;