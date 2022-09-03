import { gql } from "@apollo/client";

const GET_BLOG_BY_ID = gql`
  query getBlogData($id: ID!) {
    blogpost(id: $id) {
      data {
        id,
        attributes {
          title,
          description,
          createdAt,
          author {
            data {
              id,
              attributes{
                name
              }
            }
          }
          comments(sort: "createdAt:desc", pagination: { limit: 100 }) {
            data {
              id,
              attributes {
                author {
                  data {
                    id,
                    attributes {
                      name
                    }
                  }
                },
                description,
                createdAt
              }
            }
          }
        }
      }
    }
  }`;

const GET_ALL_BLOGS = gql`
  query getBlogposts {
    blogposts(sort: "createdAt:desc", pagination: { limit: 100 }) {
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
          },
          createdAt
        }
      }
    }
  }`;


// const GET_BLOG_BY_ID = 
export {GET_ALL_BLOGS, GET_BLOG_BY_ID};