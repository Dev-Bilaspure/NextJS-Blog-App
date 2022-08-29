import { Button, Grid, TextareaAutosize, CircularProgress } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from '../styles/WritePageStyles.module.css';
import { useRouter } from "next/router";
import axios from "axios";
import { parseCookies } from "nookies";
import { UserContext } from "../Context/UserContext";

const write = () => {
  const {jwt} = parseCookies();
  const {currentUser} = useContext(UserContext);

  console.log('from write', currentUser);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);



  const handlePublishBlog = async() => {
    if(currentUser.isUserLoggedIn && title.length>=3 && description.length>=5 && !isProcessing) {
      setIsProcessing(true);
      const data = {
        title,
        description,
        author: currenUser.id
      }
      try {
        const res = await axios.post(
          'http://localhost:1337/api/blogposts',
          {data}, 
          {
            headers: {
              Authorization: `Bearer ${jwt}`
            }
          }
        )
        const { id } = res.data.data;
        if(id)
          setIsProcessing(false);
        console.log('posted blog', { id });

        router.push(`/blog/${id}`);

      } catch(error) {
        console.log(error);
        setIsProcessing(false);
      }
    }
    else {
      console.log('title or descrription is too  short');
    }
  }
  return (

    <div>
      <Navbar />
      {
        currentUser.isUserLoggedIn &&
        <div style={{marginTop: 100}} className={styles.topDivStyles}>

          <div>
            <TextareaAutosize 
              placeholder='Title' 
              className={styles.titleTextField} 
              value={title} onChange={e => setTitle(e.target.value)}
            />
          </div>
          <div>
            <TextareaAutosize 
              placeholder='Tell your story...' 
              className={styles.discriptionField} 
              value={description} 
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div style={{borderTop: '1px solid #000000', paddingTop: 30, marginBottom: 80, paddingLeft: 10}}>
            <Button 
              disabled={isProcessing}
              variant='contained' 
              style={{color: '#fff', background: 'rgb(50, 50, 50)', boxShadow: 'none', width: 100}}
              onClick={handlePublishBlog}
            >
              {
                !isProcessing ? 
                'Publish':
                <CircularProgress size={20} style={{color: '#fff'}}/>
              }
            </Button>
          </div>

        </div>
      }
      
    </div>
  )
}

// export const getServerSideProps = async (ctx) => {
//   const jwt = parseCookies(ctx).jwt;
//   // const res = await axios.get(
//   //   `http://localhost:1337/api/users/me`, {
//   //     headers: {
//   //       Authorization: `Bearer ${jwt}`
//   //     }
//   //   }
//   // );
//   return {
//     props: {
//       jwt,
//       // userData: res.data
//     },
//   };
// };


export default write