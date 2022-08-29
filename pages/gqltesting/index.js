import { ApolloClient, InMemoryCache } from '@apollo/client'
import React from 'react'
import GET_ALL_BLOGS from '../../graphql/queries/getAllBlogs';

const index = ({blogs}) => {
  console.log(blogs)
  return (
    <div>
      Hellofrom testingpage
    </div>
  )
}
export async function getStaticProps(context) {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/api/graphql',
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: GET_ALL_BLOGS
  })
  return {
    props: {
      blogs: data.blogposts
    }, // will be passed to the page component as props
  }
}


export default index