import { Avatar, Button, CircularProgress, TextareaAutosize } from '@mui/material'
import React, {  useState } from 'react'
import styles from '../styles/WriteComment.module.css';
import { useRouter } from 'next/router'
import { parseCookies } from 'nookies';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const WriteComment = ({blogID}) => {
  const [comment, setComment] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const router = useRouter();

  const handleClickComment = async() => {
    setIsProcessing(true);
    const jwt = parseCookies().jwt;
    console.log('jwt here from writeComment: ' + jwt);
    if(user) {
      console.log({blogID});
      if(comment) {
        const data = {
          description: comment,
          author: user.id,
          blogpost: blogID
        }
        try {
          const res = await axios.post('http://localhost:1337/api/comments',
            {data},
            {
              headers: {
                Authorization: `Bearer ${jwt}`
              }
            }
          )

          console.log(res.data);

          setIsProcessing(false);
        }
        catch(error) {
          setIsProcessing(false);
          console.log(error);
        }
        
      }
    }
    else {
      router.push({
        pathname: '/auth/login'
      })
    }
  }
  return (
    <div style={{display: 'flex'}}>
      <img
        alt="user image" 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
        style={{borderRadius: 100, height: 45}}
      />
      <div style={{width: '100%', paddingLeft: 20}}>
        <TextareaAutosize 
          placeholder='Add a comment' 
          className={styles.commentTextField}
          value={comment} 
          onChange={e => setComment(e.target.value)}
          readOnly={isProcessing}
        />
        <div style={{marginTop: 5, width: '100%', textAlign: 'right'}}>
          <div>
            <Button 
              onClick={e => {setComment('')}} 
              variant="outlined" 
              disabled={!comment.length || isProcessing} 
              style={{color: (comment.length && !isProcessing) ? '#000000' : 'rgb(100, 100, 100)', height: 30, border: comment.length ? '1px solid #000000' : '1px solid rgb(100, 100, 100)', borderRadius: 3, marginRight: 10}}
            >
              Cancel
            </Button>
            <Button 
              disabled={!comment.length || isProcessing} 
              variant='contained' 
              style={{width: 100, color: '#fff', background: comment.length ? 'rgb(50, 50, 50)' : 'rgb(100, 100, 100)', height: 30, borderRadius: 3}}
              onClick={handleClickComment}
            >
              {
                !isProcessing ? 
                'Comment' :
                <CircularProgress color="inherit" size={20}/>
              }
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default WriteComment