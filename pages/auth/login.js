import React, { useContext, useEffect, useState } from 'react'
import Router from 'next/router'
import Navbar from '../../components/Navbar'
import styles from '../../styles/NavbarStyles.module.css'
import { Typography, Paper, Button, CircularProgress, LinearProgress } from '@mui/material'
import Link from 'next/link'
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies'
import { UserContext } from '../../Context/UserContext'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);



  const handleLogin = async() => {
    // console.log({email, password})
    const data = {
      identifier: email,
      password
    }
    setIsProcessing(true);
    try {
      console.log({data});
      const res = await axios.post('http://localhost:1337/api/auth/local', data)
      console.log(res.data);

      setCookie(null, 'jwt', res.data.jwt , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })

      Router.push('/');
      setUserAfterLogin(res.data.user);


      setIsProcessing(false);

    } catch(error) {
      console.log(error);
      setIsProcessing(false);
    }
    
  }
  return (
    <div>
      <Navbar />
      <div style={{marginTop: 120, paddingLeft: 10, paddingRight: 10}}>
        <Paper elevation={10} style={{width: 300, margin: 'auto', paddingTop: 15}}>
          <div style={{paddingBottom: 20,  paddingLeft: 15, paddingRight: 23}}>
            <Typography style={{margin: 'auto', width: 60, fontSize: 23, marginBottom: 15}}>
              Login
            </Typography>
            <div>
              <div>
                <Typography>Email</Typography>
                <input 
                  readOnly={isProcessing}
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='example@gmail.com'
                />
              </div>
              <div style={{marginTop: 20}}>
                <Typography>Password</Typography>
                <input 
                  readOnly={isProcessing}
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                  placeholder='Enter your password'
                />
              </div>
              <div style={{marginTop: 35}}>
                <Button
                  variant='contained'
                  style={{boxShadow: 'none', color: '#fff', background: !isProcessing ? 'rgb(50, 50, 50)' : 'rgb(90, 90, 90)', borderRadius: 5, textAlign: 'center', height: 33, width: '100%', marginLeft: 4}}
                  disabled={isProcessing}
                  onClick={handleLogin}
                >
                  Login
                </Button>
              </div>
              <div style={{width: '100%', textAlign: 'center', marginTop: 5}}>
                <Typography style={{fontSize: 15}}>
                  Don't have an account? <Link href='/auth/signup' style={{ color: 'inherit'}}><a><u>Signup</u></a></Link>
                </Typography>
              </div>
            </div>
          </div>
          {
            isProcessing &&
            <LinearProgress color="inherit" />
          }
        </Paper>
        
      </div>
      
    </div>
  )
}

export default login