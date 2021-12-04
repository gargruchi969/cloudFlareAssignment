import React, { useState } from 'react';
import { BASE_URL_POSTS } from '../constants';

const VoteWidget = ({id, username, initialCount, initialVote}) => {
  const [count, setCount] = useState(initialCount || 0);
  const [vote, setVote] = useState(initialVote);
  const onBtnClick = (increment = true) => {
    setCount(increment ? count + 1 : count - 1);
    setVote(increment ? 'up' : 'down');
    sendData(id, username, increment ? 'up' : 'down');
  }

  return (
    <div className="vote-widget">
      <button disabled={vote === 'up'} onClick={() => onBtnClick(true)}>+</button>
      <span>{count}</span>
      <button disabled={vote === 'down'} onClick={() => onBtnClick(false)}>-</button>
    </div>
  );
};

function sendData(id, username, vote) {
  const data = {};
    data.username = username;
    data.vote = vote;

  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      console.log(XHR.responseText);
    }
  };


  XHR.addEventListener('error', function( event ) {
    alert( 'Oops! Something went wrong.' );
  });

  XHR.open('POST', BASE_URL_POSTS + `/${id}/vote`);
  XHR.send(JSON.stringify(data));
}

export default VoteWidget;