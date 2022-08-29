import { Grid, Menu, MenuItem, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Comments from '../../components/Comments'
import Navbar from '../../components/Navbar'
import WriteComment from '../../components/WriteComment'
import styles from '../../styles/BlogPost.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import { parseCookies } from 'nookies'
import { UserContext } from '../../Context/UserContext'
import { ApolloClient, gql, InMemoryCache } from '@apollo/client'
import { useRouter } from 'next/router'



const blogID = ({blogData}) => {
  const {currentUser} = useContext(UserContext);
  console.log('from blogid', currentUser);
  const title = blogData.attributes.title
  const description = blogData.attributes.description
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
                <WriteComment blogID={blogData.id} />
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

// export async function getStaticProps() {
//   const router = useRouter();
//   const { blogID } = router.query;
//   const client = new ApolloClient({
//     uri: 'localhost:1337/api/graphql',
//     cache: new InMemoryCache()
//   })
//   const { data } = await client.query({ query: GET_BLOG_BY_ID(blodID), variables: {id: blogID} });
//   console.log(data.blogpost.data);
//   return {
//     props: {
//       blogData: data.blogpost.data
//     }
//   }
// }

export const getServerSideProps = async (ctx) => {
  const blogDataRes = await axios.get(`http://localhost:1337/api/blogposts/${ctx.params.blogID}`);
  
  
  return {
    props: { 
      blogData: blogDataRes.data.data
    },
  };
};


export default blogID
