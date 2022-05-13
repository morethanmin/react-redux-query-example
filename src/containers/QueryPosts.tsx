import React from 'react'
import QueryPosts from '../components/QueryPosts'
import usePosts from '../hooks/usePosts'

function QueryPostsCounter() {
  const postsQuery = usePosts()
  console.log(postsQuery)

  return <QueryPosts />
}

export default QueryPostsCounter
