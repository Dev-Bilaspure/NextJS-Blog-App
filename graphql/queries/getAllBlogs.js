import { gql } from "@apollo/client";



const GET_ALL_BLOGS = gql`
  query getBlogposts {
    blogposts {
      data {
        id,
        attributes {
          title,
          description,
          author{
            data {
              id,
              attributes{
                name
              }
            }
          }
        }
      }
    }
  }
`

export default GET_ALL_BLOGS;