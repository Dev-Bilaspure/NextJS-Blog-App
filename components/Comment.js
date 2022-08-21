import { Button, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../styles/Comment.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Comment = () => {
  const authorname = 'Dev Bilaspure'
  const date = '20th Aug 2018'
  const commentdescription = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum accusamus voluptates dolores? Sint saepe nihil pariatur eaque ullam architecto facere ipsum necessitatibus officiis sit magnam cupiditate possimus ad modi nam similique, officia consectetur velit soluta voluptas reiciendis fuga iure! Fugiat sequi reiciendis atque ex, quos eaque. Quae cupiditate dolores possimus ea, veritatis, velit officiis nobis facilis incidunt mollitia voluptates amet voluptate doloremque nam nisi quis culpa. Impedit, ad blanditiis. Deleniti facere aliquid omnis praesentium, placeat accusamus officia nisi illum esse eos eaque ipsa quia harum eligendi assumenda deserunt mollitia dolor quas aperiam? Autem quibusdam sit culpa ad ea odio voluptatum.'
  const [fullRead, setFullRead] = useState(false);
  const isCommentAuthor = true;
  return (
    <div style={{marginBottom: 40}}>
      <div style={{display: 'flex'}}>
        
        <img
          alt="user image" 
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
          style={{height: 45, borderRadius: 100}}
        />
        <div style={{marginLeft: 20, width: '100%'}}>
          <div style={{display: 'flex', width: '100%'}}>
            <Typography style={{fontSize: 14, fontFamily: `'Fira Sans', 'sans-serif'`}}>
              {authorname}
            </Typography>
            <Typography style={{fontSize: 12, fontFamily: `'Inter', 'sans-serif'`, marginTop: 1, marginLeft: 5}} >
              {date}
            </Typography>
            {
              isCommentAuthor && 
              <div style={{marginLeft: 'auto'}} className={styles.threedots}>
                <BasicMenu />
              </div>
            }
          </div>
          <div style={{marginTop: 0, paddingRight: 30, wordWrap: 'break-word'}}>
            <Typography style={{fontFamily: `'Roboto', 'sans-serif'`, fontSize: 14}}>
              {
                commentdescription.length<=300 ?
                commentdescription :
                (
                  fullRead ?
                  commentdescription :
                  commentdescription.slice(0, 200)+'...'
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


const BasicMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  const handleDeleteComment = () => {
    console.log("logout ");
  }
  return(
    <div>
      <MoreVertIcon 
        onClick={handleClick}
        style={{color: 'rgb(50, 50, 50)'}}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        style={{marginTop: 6}}
      >
        <MenuItem style={{paddingLeft: 25, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)', borderTop: '1px solid rgb(200, 200, 200)'}} onClick={handleDeleteComment}>
          <Typography style={{color: '#000000', paddingRight: 10, color: '#FE1A1B', fontSize: 15}}>
            Delete
          </Typography>
        </MenuItem>
        {/* <Button variant='contained' style={{background: '#fff', color: 'rgb(255, 1, 1)', boxShadow: 'none'}}>
          Delete
        </Button> */}
      </Menu>
    </div>
  )
}

export default Comment