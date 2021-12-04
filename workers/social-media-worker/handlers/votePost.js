import { setPostsCache, getPostsCache } from '../cache';

const VotePost = async (request) => {
  const posts = JSON.parse(await getPostsCache());
  const post = posts.find(x => x.id === request.params.id);
  

  const input = await request.json();

  const existingVotes = post.votes || {};
  post.votes = {
    ...existingVotes,
    [input.username]: input.vote
  };

  post.voteScore = (post.voteScore || 0) + ((input.vote === 'up') ? 1 : -1);
  await setPostsCache(posts);

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(JSON.stringify(post), { headers })
}

export default VotePost