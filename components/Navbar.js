import React, { useContext, useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from '../styles/NavbarStyles.module.css'

import { Avatar, Grid, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link'
import CreateIcon from '@mui/icons-material/Create';
import { destroyCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { UserContext } from '../Context/UserContext';



const Navbar = () => {
  const {currentUser} = useContext(UserContext);
  console.log('dedededed', currentUser)
  const handleLogout = () => {
    destroyCookie(null, 'jwt');
    console.log('logout');
    Router.push('/auth/login');
  }


  // const user = false;

  return (
    <div>
      <AppBar position="fixed" style={{boxShadow: 'none', borderBottom: '1px solid #000000', background: '#fff', height: 65}}>
        <Toolbar>
          <div style={{display: 'flex', width: '100%'}}>
            <div>
              <Typography style={{fontWeight: 'bold',fontFamily: `'Roboto', 'sans-serif'`, color: 'rgb(60, 60, 60)', fontSize: 26}} className={styles.navbarLeft}>
                <Link href='/' style={{color: 'inherit', textDecoration: 'none'}}>
                  Blog App
                </Link>
              </Typography>
            </div>
            {/* <div className={styles.navbarRight}> */}
              {
                !currentUser.isUserLoggedIn? 
                <div style={{marginLeft: 'auto', display: 'flex', paddingTop: 7}}>
                  <Typography style={{color: '#000000', fontSize: 17, marginRight: 40}}>
                    <Link href='/auth/login' style={{color: 'inherit', textDecoration: 'none'}}>
                      <a>Login</a>
                    </Link>
                  </Typography>
                  <Typography style={{color: '#000000', fontSize: 17}} className={styles.navbarRight}>
                    <Link href='/auth/signup' style={{color: 'inherit', textDecoration: 'none'}}>
                      <a>Signup</a>
                    </Link>
                  </Typography>
                </div> :
                <div style={{marginLeft: 'auto', paddingTop: 0}} className={styles.navbarRight}>
                  <BasicMenu handleLogout={handleLogout} currentUser={currentUser}/>
                </div>
              }
            {/* </div> */}
            
            
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  )
}

const BasicMenu = ({handleLogout, currentUser}) => {
  
  // console.log("from navbar", currentUser);

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }
  const open = Boolean(anchorEl);
  return(
    <div>
      <Avatar 
        alt="user image" 
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" 
        onClick={handleClick}
        className={styles.basicMenuAvatar}
      />
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // MenuListProps={{
        //   'aria-labelledby': 'basic-button',
        // }}
        style={{marginTop: 6}}
      >
        <MenuItem style={{background: '#fff', paddingLeft: 30, paddingRight: 40, paddingTop: 20, paddingBottom: 20, borderBottom: '1px solid rgb(190,190,190)'}}>
          <Grid container>
            <Grid item>
              <Avatar
                alt="profilemenu avatar"
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                style={{height: 50, width: 50}}
              /> 
            </Grid>
            <Grid item>
              <Typography style={{paddingLeft: 12, fontSize: 16, paddingTop: 2}}>
                {currentUser.name}
              </Typography>
              <Typography style={{paddingLeft: 12, fontSize: 15, color: 'rgb(90, 90, 90)'}}>
                {`@${currentUser.username}`}
              </Typography>
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem 
          style={{paddingTop: 10, paddingBottom: 10, marginBottom: 10, paddingLeft: 35, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)',}} 
          onClick={handleLogout}
        >
          <Typography style={{color: '#000000', paddingRight: 10}}>
            Logout
          </Typography>
          <LogoutIcon style={{color: 'rgb(123,123,123)', float: 'right', paddingLeft: 0}}/>
        </MenuItem>
      </Menu>
    </div>
  )
}
export default Navbar