import React from 'react'
import Comment from './Comment';

const Comments = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      {
        arr.map(ele => {
          return(
            <Comment />
          );
        })
      }
    </div>
  )
}

export default Comments