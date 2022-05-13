import React from 'react'
import ContextCounterContainer from './containers/ContextCounter'
import QueryPostsCounter from './containers/QueryPosts'
import ReduxCounterContainer from './containers/ReduxCounter'

function App() {
  return (
    <>
      <ReduxCounterContainer />
      <ContextCounterContainer />
      <QueryPostsCounter />
    </>
  )
}

export default App
