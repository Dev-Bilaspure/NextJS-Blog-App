import React from 'react'
import Comment from './Comment';

const Comments = ({comments}) => {
  // const arr = [1, 2, 3, 4];
  // const mapReverse1 = comments
  // .slice(0)
  // .reverse()
  // .map(element => {
  //   return element;
  // });
  return (
    <div>
      {
        comments.map(comment => {
          return(
            <Comment comment={comment}/>
          );
        })
      }
    </div>
  )
}

export default Comments