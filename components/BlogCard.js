import { Paper, Typography } from "@mui/material";
import Link from "next/link";
import styles from '../styles/BlogCard.module.css'


const BlogCard = ({blog}) => {
  console.log(blog);
  const title = blog.attributes.title
  const description = blog.attributes.description
  const author = 'Dev Bilaspure'
  return (
    <div style={{paddingRight: 30, marginBottom: 30}}>
      <Link href={`/blog/${blog.id}`}>
        <a>
          <Paper elevation={5}>
            <div style={{padding: 10, paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 20}}>
              <Typography style={{fontSize: 25, fontFamily: `'Source Sans Pro', 'sans-serif'`, marginBottom: 3}}>
                {title}
              </Typography>
              <Typography style={{marginBottom: 10, fontFamily: `'Roboto Condensed', 'sans-serif'`, fontSize: 15}}>
                Author: {author}
              </Typography>
              <Typography style={{lineHeight: 1.4, fontFamily: `'Roboto', 'sans-serif'`}} className={styles.blogCardDescription}>
                {description}
              </Typography>
            </div>
          </Paper>
      </a>
      </Link>
    </div>
  )
}

export default BlogCard