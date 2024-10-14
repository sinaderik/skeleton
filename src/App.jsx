import React from 'react'
import useFetch from './hooks/useFetch'
import SkeletonPost from './components/SkeletonPost'

const App = () => {
  const { data, isError, loading } = useFetch('http://localhost:3001/posts')
  
  if (loading) {
    return (
      <div className='flex'>
        <div className='w-100'>
          {loading
            ? <SkeletonPost />
            : <p>data</p>}
        </div>
      </div>
    )
  }

  return (
    <div className='post'>
      {data.map(item=>(
        <p key={item.id}>{item.id}- {item.content}</p>
      ))}
    </div>
  )
}

export default App