import React from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const {data, isError, loading} = useFetch('http://localhost:3001/posts')
  console.log(data)
  return (
    <div>App</div>
  )
}

export default App