import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../cache';

const CreatePost = async (request) => {
  console.log(request);

  const input = await request.json();

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json',
	'Access-Control-Allow-Headers': '*'
  }
  const post = {};
  post.id = uuidv4();
  post.title = input.title;
  post.content = input.content;
  post.fileUrl = input.fileUrl;
  post.author = input.username;
  post.published_at = new Date();

  if (post.fileUrl) {
    post.type = 'IMAGE';
  } else {
    post.type = 'TEXT';
  }

  await addPost(post);

  return new Response(JSON.stringify(post), { headers })
}

export default CreatePost