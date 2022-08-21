import { Grid, Menu, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import Comments from '../../components/Comments'
import Navbar from '../../components/Navbar'
import WriteComment from '../../components/WriteComment'
import styles from '../../styles/BlogPost.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const blogID = () => {
  const title = 'Welcome to my Blog, India'
  const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam rerum ratione eveniet nulla repudiandae impedit unde, dolorum natus. Magnam architecto eos in molestias repellat minus reprehenderit! Ipsum, veniam. Aperiam porro amet voluptas deserunt ratione unde labore, omnis dolorum sequi at rerum deleniti. Nesciunt veniam maiores assumenda dolorem quas explicabo ullam facere minima fugiat nam non, qui officia eligendi iure distinctio ipsam repellendus mollitia sint cupiditate porro labore officiis! Dolorem officiis, in quidem nesciunt enim odio autem placeat voluptatem tempore cumque aperiam optio at nihil laudantium repellat sit dolorum impedit repellendus, porro delectus eos quaerat? Velit voluptate odit amet nam. '
  const author = 'Dev Bilaspure';
  const comments = [];
  return (
    <div>
      <Navbar />
      <div style={{marginTop: 100}} className={styles.topDivStyles}>
        <Grid container>
          <Grid item lg={2} md={1} sm={1}>

          </Grid>
          <Grid item lg={8} md={10} sm={10}>
            <div>
              <Typography style={{ fontFamily: `'Source Sans Pro', 'sans-serif'`, marginBottom: 5}} className={styles.titleStyle}>
                {title}
              </Typography>
              <div style={{display: 'flex'}}>
                <Typography style={{fontFamily: `'Roboto Condensed', 'sans-serif'`, marginBottom: 25}} className={styles.authorStyle} >
                  Author: {author}
                </Typography>
                <div style={{marginLeft: 'auto'}} className={styles.threeDots}>
                  <BasicMenu />
                </div>
              </div>
              <Typography style={{fontFamily: `'Roboto', 'sans-serif'`}}  className={styles.descriptionStyle}>
                {description}
              </Typography>
            </div>
            <div style={{marginTop: 80, borderTop: '1px solid rgb(120, 120, 120)', paddingTop: 20}}>
              <Typography style={{ fontSize: 17, fontFamily: `'Inter', 'sans-serif'`, marginBottom: 20}}>
                {comments.length} Comments
              </Typography>
              <div>
                <WriteComment />
              </div>
              <div style={{marginTop: 70, marginBottom: 70, paddingLeft: 10, paddingRight: 10}}>
                <Comments />
              </div>
            </div>
          </Grid>
          <Grid item lg={2} md={1} sm={1}>

          </Grid>
        </Grid>
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
  const handleDeleteBlog = () => {
    console.log("delete blog ");
  }
  const handleEditBlog = () => {
    console.log("edit blog ");
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
        <MenuItem style={{paddingLeft: 25, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)', borderTop: '1px solid rgb(200, 200, 200)'}} onClick={handleDeleteBlog}>
          <Typography style={{color: '#000000', paddingRight: 10, color: '#FE1A1B', fontSize: 15}}>
            Delete
          </Typography>
        </MenuItem>
        <MenuItem style={{paddingLeft: 25, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)'}} onClick={handleEditBlog}>
          <Typography style={{color: '#000000', paddingRight: 10, color: 'rgb(60, 60, 60)', fontSize: 15}}>
            Edit
          </Typography>
        </MenuItem>
        {/* <Button variant='contained' style={{background: '#fff', color: 'rgb(255, 1, 1)', boxShadow: 'none'}}>
          Delete
        </Button> */}
      </Menu>
    </div>
  )
}

export default blogID
