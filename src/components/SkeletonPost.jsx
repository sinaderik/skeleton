import React from 'react'
import Skeleton from './Skeleton'

const SkeletonPost = () => {
  return (
    <div className='post'>
        <Skeleton classes="skeleton-title width-50" />
        <Skeleton classes="skeleton-text skeleton.width-300" />
        <Skeleton classes="skeleton-text skeleton.width-300" />
        <Skeleton classes="skeleton-text skeleton.width-300" />
        <Skeleton classes="skeleton-text skeleton.width-300" />
    </div>
  )
}

export default SkeletonPost