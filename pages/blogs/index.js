import { ApolloClient, InMemoryCache } from '@apollo/client';
import { Grid } from '@mui/material';
import axios from 'axios';
import { isNullableType } from 'graphql';
import Head from 'next/head'
import Image from 'next/image'
import { parseCookies } from 'nookies';
import { useEffect } from 'react';
import Banner from '../../components/Banner';
import BlogCard from '../../components/BlogCard.js';
import Layout from '../../components/Layout';
import Navbar from '../../components/Navbar.js'
import { GET_ALL_BLOGS } from '../../graphql/queries';
import styles from '../../styles/Home.module.css';
// import router from 'next/router'

export default function Home({blogs}) {
  // console.log('myblogggg', blogs);
  return (
    <Layout>
    <div>
      <div style={{marginTop: 100, marginLeft: 35, marginRight: 10}}>
        {/* <Banner /> */}
        Hello 
        <Grid container>
          {
            blogs.map(blog => {
              return(
                <Grid item lg={4} md={6} sm={12} key={blog.id}>
                  <BlogCard blog={blog}/>
                </Grid>
              )
            })
          }
        </Grid>
      </div>
    </div>
    </Layout>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const res = await axios.get(`http://localhost:1337/api/blogposts/`);
//   return {
//     props: {
//       blogs: res.data.data,
//     },
//   };
// };

export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({ query: GET_ALL_BLOGS })
  return {
    props: {
      blogs: data.blogposts.data
    }, // will be passed to the page component as props
  }
}
