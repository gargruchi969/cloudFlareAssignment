const _posts = [
  {
     "id":"d0840b5b-a48f-4121-a1f6-4b967b0ccd37",
     "title":"test",
     "content":"test post with media",
     "fileUrl":"https://i.picsum.photos/id/66/200/300.jpg?hmac=zvcP8mVCNIMoM5f8iC-xSgDhR1VklmBY2SON28P4TOo",
     "author":"rgarg",
     "published_at":"2021-11-08T16:34:20.387Z",
     "type":"IMAGE",
     "voteScore":3,
     "votes":{
        "rgarg":"up",
        "rgarg969":"up"
     },
     "comments":[
        {
           "username":"rgarg",
           "comment":"nice"
        },
        {
           "username":"rgarg",
           "comment":"hey"
        }
     ]
  },
  {
     "id":"a7939348-3478-4b3e-952f-d098ac3c49b3",
     "title":"Mountains!",
     "content":"Sharing a photo that i took of the mountains. ",
     "fileUrl":"https://i.picsum.photos/id/664/700/300.jpg?hmac=hvx9OadExNW1IxSFNW9bdWD0He8PJUJmTurcs4s6Xh8",
     "author":"rgarg",
     "published_at":"2021-11-08T14:05:55.785Z",
     "type":"IMAGE",
     "voteScore":2,
     "votes":{
        "rgarg":"up",
        "rgarg969":"up"
     }
  },
  {
     "id":"34cb3663-9e45-471d-8e5a-1623b8463c91",
     "title":"hey",
     "content":"post with image",
     "fileUrl":"https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
     "author":"rgarg",
     "published_at":"2021-11-08T14:01:32.223Z",
     "type":"IMAGE",
     "votes":{
        "rgarg":"up",
        "rgarg969":"up"
     },
     "voteScore":2
  },
  {
     "id":"e4d86034-1948-4596-8eac-8e7ffe997629",
     "title":"post with image",
     "content":"another post with media",
     "fileUrl":"https://i.picsum.photos/id/467/800/300.jpg?hmac=QgcuPFBffxQdO8LlLacvyDpHqUKRA7zkGscBq9dbxIs",
     "author":"rgarg",
     "published_at":"2021-11-08T16:34:58.833Z",
     "type":"IMAGE",
     "voteScore":1,
     "votes":{
        "rgarg":"up",
        "rgarg969":"up"
     }
  },
  {
     "id":"bbcfea72-3ec9-4270-845d-df8dff16fa61",
     "title":"hey",
     "content":"new post",
     "fileUrl":"",
     "author":"rgarg",
     "published_at":"2021-11-08T16:32:00.508Z",
     "type":"TEXT",
     "voteScore":1,
     "votes":{
        "rgarg":"down",
        "rgarg969":"up"
     }
  },
  {
     "id":'34cb3663-9e45-471d-8e5a-1623b8463c92',
     "title":"My first text post",
     "content":"Hello world! This is my first test post.",
     "type":"TEXT",
     "author":"ruchigarg969",
     "published_at":"2021-11-07T00:00:00.000Z"
  }
]

export default class PostsStore {
  async all() {
    return _posts
  }
}