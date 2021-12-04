import React from "react";
import { BASE_URL_POSTS } from "../constants";

const CreatePost = ({username}) => {
  console.log(username);

  return (
    <div>
      <h2>Hello {username}, Share what's on your mind..</h2>
      <table>
        <tbody>
        <tr>
          <td>Title: </td>
          <td><input type='text' id='title-area' /></td>
        </tr>
        <tr>
          <td>Content: </td>
          <td><textarea id="content-area" rows="4" cols="50"></textarea>
          </td>
        </tr>

        <tr>
          <td>Photo Url: </td>
          <td><input type='text' id='file-url-area' />
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => sendData(username)}>
              Create
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

function sendData(username) {
  const data = {};
    data.title = document.getElementById('title-area').value;
    data.content = document.getElementById('content-area').value;
    data.fileUrl = document.getElementById('file-url-area').value;
    data.username = username;
  const XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      alert('Post created');
      console.log(XHR.responseText);
      window.location.href = '/?username=' + username;
    }
  };


  XHR.addEventListener('error', function( event ) {
    alert( 'Oops! Something went wrong.' );
  });

  XHR.open('POST', BASE_URL_POSTS);
  XHR.send(JSON.stringify(data));
}

export default CreatePost;