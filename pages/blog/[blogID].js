import { Grid, Typography } from '@mui/material'
import React from 'react'
import Comments from '../../components/Comments'
import Navbar from '../../components/Navbar'
import WriteComment from '../../components/WriteComment'
import styles from '../../styles/BlogPost.module.css'

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
              <Typography style={{fontFamily: `'Roboto Condensed', 'sans-serif'`, marginBottom: 25}} className={styles.authorStyle} >
                Author: {author}
              </Typography>
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

export default blogID
