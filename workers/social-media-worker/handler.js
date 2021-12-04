import { Router } from 'itty-router'

import Posts from './handlers/posts'
import CreatePost from './handlers/createpost'
import VotePost from './handlers/votePost'
import AddComment from './handlers/addComment';

const router = Router()

router
  .get('/api/posts', Posts)
  .post('/api/posts', CreatePost)
  .post('/api/posts/:id/vote', VotePost)
  .post('/api/posts/:id/comment', AddComment)
  .all('*', () => new Response("Not found", { status: 404 }))

export const handleRequest = request => router.handle(request)