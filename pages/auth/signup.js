import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import Navbar from '../../components/Navbar'
import styles from '../../styles/NavbarStyles.module.css'
import { Typography, Paper, Button } from '@mui/material'
import Link from 'next/link'

const signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  return (
    <div>
      <Navbar />
      <div style={{marginTop: 120, paddingLeft: 10, paddingRight: 10}}>
        <Paper elevation={10} style={{width: 300, margin: 'auto', paddingTop: 15, paddingLeft: 15, paddingRight: 23, paddingBottom: 20}}>
          <Typography style={{margin: 'auto', width: 60, fontSize: 23, marginBottom: 15}}>
            Signup
          </Typography>
          <div>
            <div>
              <Typography>Email</Typography>
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                placeholder='example@gmail.com'
              />
            </div>
            <div style={{marginTop: 20}}>
              <Typography>Name</Typography>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                placeholder='Enter your name'
              />
            </div>
            <div style={{marginTop: 20}}>
              <Typography>Username</Typography>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                style={{width: '100%', outline: 'none', border: 'none', borderRadius: 5, height: 30, border: '1px solid #000000', paddingLeft: 5, fontSize: 15}}
                placeholder='Enter a username'
              />
            </div>
            <div style={{marginTop: 20}}>
              <Typography>Password</Typography>
              <input 
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
                style={{boxShadow: 'none', color: '#fff', background: 'rgb(50, 50, 50)', borderRadius: 5, textAlign: 'center', height: 33, width: '100%', marginLeft: 4}}
              >
                Signup
              </Button>
            </div>
            <div style={{width: '100%', textAlign: 'center', marginTop: 5}}>
              <Typography style={{fontSize: 15}}>
                Already have an account? <Link href='/auth/login' style={{ color: 'inherit'}}><a><u>Login</u></a></Link>
              </Typography>
            </div>
          </div>
        </Paper>
        
      </div>
    </div>
  )
}

export default signup