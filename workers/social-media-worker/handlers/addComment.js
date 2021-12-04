import { setPostsCache, getPostsCache } from '../cache';

const AddComment = async (request) => {
  const posts = JSON.parse(await getPostsCache());
  const post = posts.find(x => x.id === request.params.id);
  

  const input = await request.json();

  const existingCmts = post.comments || [];
  const cmt = {
    username: input.username,
    comment: input.comment
  };
  existingCmts.push(cmt);
  post.comments = existingCmts;

  await setPostsCache(posts);

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(JSON.stringify(post), { headers })
}

export default AddComment