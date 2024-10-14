import React from 'react'
import useFetch from './hooks/useFetch'

const App = () => {
  const {data, isError, loading} = useFetch('http://localhost:3001/posts')

  return (
    <div>
      
    </div>
  )
}

export default App