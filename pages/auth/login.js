import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Navbar from '../../components/Navbar'
import styles from '../../styles/NavbarStyles.module.css'
import { Typography, Paper, Button, CircularProgress, LinearProgress } from '@mui/material'
import Link from 'next/link'
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies'
import { getUserFromLocalCookie, setToken } from '../../lib/auth'
import Layout from '../../components/Layout'
import Cookies from 'js-cookie'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState([]);
  
  // const user = Cookies.get('abc');
  // // console.log({user});
  // // console.log({pathnameD: Router.pathname})

  // useEffect(() => {
  //   const user = getUserFromLocalCookie();
  //   if(user)
  //     Router.push('/');
  // }, [])

  const handleLogin = async(e) => {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const res = await axios.post('http://localhost:1337/api/auth/local', {
        identifier: email,
        password
      })
      // console.log(res.data);

      setToken(res.data);

      setIsProcessing(false);

    } catch(error) {
      // console.log(error);
      setErrors(error.response.data.error.details.errors)
      setIsProcessing(false);
    }
    
  }
  return (
    <Layout>
    <div>
      <div style={{marginTop: 120, paddingLeft: 10, paddingRight: 10}}>
        <Paper elevation={10} style={{width: 300, margin: 'auto', paddingTop: 15}}>
          <div style={{paddingBottom: 20,  paddingLeft: 15, paddingRight: 23}}>
            <form onSubmit={handleLogin}>
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
                    type='submit'
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
            </form>
          </div>
          {
            errors.length>0 &&
            <div style={{width: '100%', paddingBottom: 15, paddingLeft: 20}}>
              <Typography style={{fontSize: 13, color: 'rgb(240, 58, 58)'}}>
                {'Some error(s) occured'}
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


export default login