import React, { useEffect, useState } from 'react'
import Router, { useRouter } from 'next/router'
import Navbar from '../../components/Navbar'
import styles from '../../styles/NavbarStyles.module.css'
import { Typography, Paper, Button, LinearProgress } from '@mui/material'
import Link from 'next/link'
import axios from 'axios'
import Layout from '../../components/Layout'

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const router = useRouter();

  


  const handleRegisterUser = async(e) => {
    e.preventDefault();
    const validatePassword = () => {
      if(password.length<8) {
        setErrorMessage('Password must have 8 charaters or more');
        return(false);
      }
      return(true);
    }
    const isPasswordValid = validatePassword();
    if(!isProcessing && isPasswordValid) {
      setIsProcessing(true);
      try {
        const res = await axios.post(
          'http://localhost:1337/api/auth/local/register', {
            name, username, email, password
          }
        )
        // console.log(res.data);
        router.push('/auth/login');
        setIsProcessing(false);
      }
      catch(error) {
        setIsProcessing(false);
        setErrorMessage(error.response.data.error.message);
        setErrors(error.response.data.error.details.errors);
        // console.log(error);
      }
    }
  }
  return (
    <Layout>
    <div>
      <div style={{marginTop: 120, paddingLeft: 10, paddingRight: 10}}>
        <Paper elevation={10} style={{width: 300, margin: 'auto', paddingTop: 15, marginBottom: 50}}>
          <div style={{paddingLeft: 15, paddingRight: 23, paddingBottom: 20}}>
            <Typography style={{margin: 'auto', width: 60, fontSize: 23, marginBottom: 15}}>
              Signup
            </Typography>
            <div>
              <form onSubmit={handleRegisterUser}>
              <div>
                <Typography>Email</Typography>
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  readOnly={isProcessing}
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='example@gmail.com'
                />
              </div>
              <div style={{marginTop: 20}}>
                <Typography>Name</Typography>
                <input 
                  type="text" 
                  value={name}
                  readOnly={isProcessing}
                  onChange={(e) => setName(e.target.value)}
                  required={true}
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='Enter your name'
                />
              </div>
              <div style={{marginTop: 20}}>
                <Typography>Username</Typography>
                <input 
                  type="text" 
                  value={username}
                  readOnly={isProcessing}
                  onChange={(e) => setUsername(e.target.value)}
                  required={true}
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='Enter a username'
                />
              </div>
              <div style={{marginTop: 20}}>
                <Typography>Password</Typography>
                <input 
                  type="password" 
                  value={password}
                  readOnly={isProcessing}
                  onChange={(e) => setPassword(e.target.value)}
                  required={true}
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='Enter your password'
                />
              </div>
              <div style={{marginTop: 35}}>
                <Button
                  type='submit'
                  disabled={isProcessing}
                  variant='contained'
                  style={{boxShadow: 'none', color: '#fff', background: !isProcessing ? 'rgb(50, 50, 50)' : 'rgb(90, 90, 90)', borderRadius: 5, textAlign: 'center', height: 33, width: '100%', marginLeft: 4}}
                >
                  Signup
                </Button>
              </div>
              </form>
              <div style={{width: '100%', textAlign: 'center', marginTop: 5}}>
                <Typography style={{fontSize: 15}}>
                  Already have an account? <Link href='/auth/login' style={{ color: 'inherit'}}><a><u>Login</u></a></Link>
                </Typography>
              </div>
            </div>
          </div>
          {
            errorMessage &&
            <div style={{width: '100%', paddingBottom: 15, paddingLeft: 20}}>
              <Typography style={{fontSize: 13, color: 'rgb(240, 58, 58)'}}>
                {errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1)}
              </Typography>
                {
                  errors.length>1 && 
                  <div style={{paddingLeft: 20}}>
                    <ul>
                      {
                        errors.map(err => {
                          return(
                            <li style={{color: 'rgb(240, 58, 58)'}}>
                              <Typography style={{fontSize: 13, color: 'rgb(240, 58, 58)'}}>
                                {err.message.charAt(0).toUpperCase() + err.message.slice(1)}
                              </Typography>
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                }
            </div>
          }
          
          {
            isProcessing &&
            <LinearProgress color="inherit" />
          }
        </Paper>
        
      </div>
    </div>
    </Layout>
  )
}

export default signup