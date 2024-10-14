import React from 'react'

function Skeleton({classes}) {
    const className=`skeleton ${classes} animate-pulse`
    
    return (
    <div className={className}></div>
  )
}

export default Skeleton