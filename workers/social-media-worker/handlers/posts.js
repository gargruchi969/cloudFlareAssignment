import Store from '../posts_store';
import { setPostsCache, getPostsCache } from '../cache';

async function getPosts() {
  // ... previous code
  const cache = await getPostsCache()
  let data = [];
  if (!cache) {
    const posts = new Store();
    const body = JSON.stringify(await posts.all());
    await setPostsCache(body);
    data = body;
  } else {
    data = cache;
  }
  return data;
}

const Posts = async () => {
  const posts = JSON.parse(await getPosts());
  // sort by votes.
  posts.sort((a, b) => (b.voteScore || 0) - (a.voteScore || 0));
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-type': 'application/json'
  }
  return new Response(JSON.stringify(posts), { headers })
}

export default Posts