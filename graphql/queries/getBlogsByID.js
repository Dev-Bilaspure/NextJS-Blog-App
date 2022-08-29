const GET_BLOG_BY_ID = gql`
  query getBlogData($id: ID!) {
    blogpost(id: $id) {
      data {
        id,
        attributes {
          title,
          description,
          author {
            data {
              id,
              attributes{
                name
              }
            }
          }
          comments {
            data {
              attributes {
                author {
                  data {
                    id,
                    attributes {
                      name,
                      createdAt
                    }
                  }
                },
                description
              }
            }
          }
        }
      }
    }
  }
`
export default GET_BLOG_BY_ID;