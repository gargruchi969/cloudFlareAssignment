const POSTS_CACHE_KEY = 'posts_8';

export const setPostsCache = data => {
  if (typeof data !== 'string') {
    data = JSON.stringify(data);
  }
  SM.put(POSTS_CACHE_KEY, data)
};

export const getPostsCache = () => SM.get(POSTS_CACHE_KEY)

export const addPost = async (post) => {
  let posts = getData(await getPostsCache());
  posts.unshift(post);
  await setPostsCache(posts);
}

export const getData = (data) => {
  if (typeof data === 'string') {
    data = JSON.parse(data);
  }
  return data;
}