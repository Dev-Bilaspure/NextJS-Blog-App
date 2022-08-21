import { Button, Grid, TextareaAutosize, CircularProgress } from "@mui/material";
import { useState } from "react";
import Navbar from "../components/Navbar";
import styles from '../styles/WritePageStyles.module.css';

const write = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const isProcessing = false;
  return (
    <div>
      <Navbar />
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
          <Button variant='contained' style={{color: '#fff', background: 'rgb(50, 50, 50)', boxShadow: 'none', width: 100}}>
            {
              !isProcessing ? 
              'Publish':
              <CircularProgress size={20} style={{color: '#fff'}}/>
            }
          </Button>
        </div>

      </div>
    </div>
  )
}

export default write