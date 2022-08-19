import { Button, Grid, TextareaAutosize } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from '../styles/WritePageStyles.module.css';

const write = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  return (
    <div>
      <Navbar />
      <div style={{marginTop: 100}}>
        <Grid container>
          <Grid item lg={2} md={2} sm={1}>

          </Grid>
          <Grid item lg={8} md={8} sm={10}>
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
            <div style={{borderTop: '1px solid #000000', paddingTop: 30, marginBottom: 80}}>
              <Button variant='contained' style={{color: '#fff', background: 'rgb(40, 40, 40)'}}>
                Publish
              </Button>
            </div>

          </Grid>
          <Grid item lg={2} md={2} sm={1}>
            
          </Grid>
        </Grid>

      </div>
    </div>
  )
}

export default write