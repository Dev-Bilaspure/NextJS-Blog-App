import { Grid, Typography } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'


const blogID = () => {
  const title = 'Welcome to my Blog, India'
  const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam quibusdam rerum ratione eveniet nulla repudiandae impedit unde, dolorum natus. Magnam architecto eos in molestias repellat minus reprehenderit! Ipsum, veniam. Aperiam porro amet voluptas deserunt ratione unde labore, omnis dolorum sequi at rerum deleniti. Nesciunt veniam maiores assumenda dolorem quas explicabo ullam facere minima fugiat nam non, qui officia eligendi iure distinctio ipsam repellendus mollitia sint cupiditate porro labore officiis! Dolorem officiis, in quidem nesciunt enim odio autem placeat voluptatem tempore cumque aperiam optio at nihil laudantium repellat sit dolorum impedit repellendus, porro delectus eos quaerat? Velit voluptate odit amet nam.'
  const author = 'Dev Bilaspure';
  return (
    <div>
      <Navbar />
      <div style={{marginTop: 100}}>
        <Grid container>
          <Grid item lg={2} md={1} sm={1}>

          </Grid>
          <Grid item lg={8} md={10} sm={10}>
            <div>
              <Typography style={{ fontFamily: `'Source Sans Pro', 'sans-serif'`, fontSize: 45, marginBottom: 5}}>
                {title}
              </Typography>
              <Typography style={{fontFamily: `'Roboto Condensed', 'sans-serif'`, fontSize: 18, marginBottom: 25}}>
                Author: {author}
              </Typography>
              <Typography style={{fontFamily: `'Roboto', 'sans-serif'`, fontSize: 21}}>
                {description}
              </Typography>
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
