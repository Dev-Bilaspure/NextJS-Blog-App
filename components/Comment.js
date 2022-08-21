import { Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/Comment.module.css'

const Comment = () => {
  const authorname = 'Dev Bilaspure'
  const date = '20th Aug 2018'
  const commentdescription = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. '
  const [fullRead, setFullRead] = useState(false);
  return (
    <div style={{marginBottom: 40}}>
      <div style={{display: 'flex'}}>
        
        <img
          alt="user image" 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
          style={{height: 45, borderRadius: 100}}
        />
        <div style={{marginLeft: 20}}>
          <div style={{display: 'flex'}}>
            <Typography style={{fontSize: 14, fontFamily: `'Fira Sans', 'sans-serif'`}}>
              {authorname}
            </Typography>
            <Typography style={{fontSize: 12, fontFamily: `'Inter', 'sans-serif'`, marginTop: 1, marginLeft: 5}} >
              {date}
            </Typography>
          </div>
          <div style={{marginTop: 8}}>
            <Typography style={{fontFamily: `'Roboto', 'sans-serif'`, fontSize: 14}}>
              {
                commentdescription.length<=300 ?
                commentdescription :
                (
                  fullRead ?
                  commentdescription :
                  commentdescription.slice(0, 300)+'...'
                )
              }
            </Typography>
            {
              commentdescription.length>300 &&
              <Typography onClick={() => {setFullRead(!fullRead)}} style={{color: 'rgb(100, 100, 100)', fontFamily: `'Fira Sans', 'sans-serif'`, fontSize: 14}} className={styles.readmore}>
                Read {!fullRead ? 'more' : 'less'}
              </Typography>
            }
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment