import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import styles from '../styles/NavbarStyles.module.css'
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Avatar, Grid, Menu, MenuItem, Typography } from '@mui/material';
import Link from 'next/link'
import { checkUserLoggedIn, getUserFromLocalCookie, getUsersNameFromLocalCookie, unsetToken } from '../lib/auth';
// import Cookies from 'js-cookie';
import Router from 'next/router';



const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const usersname = getUsersNameFromLocalCookie();
  const user = getUserFromLocalCookie();

  useEffect(() => {
    setIsUserLoggedIn(checkUserLoggedIn());
  }, [])


  // console.log({userfrombnabbar: {type: typeof(Cookies.get('abc')), user}})
  // const isUserLoggedIn = user ? true : false;/

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
                !isUserLoggedIn? 
                <div style={{marginLeft: 'auto', display: 'flex', paddingTop: 7}}>
                  <Typography style={{color: '#000000', fontSize: 17, marginRight: 40}} className={styles.readButton}>
                    <Link href='/blogs' style={{color: 'inherit', textDecoration: 'none'}}>
                      <a>Read</a>
                    </Link>
                  </Typography>
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
                <div style={{marginLeft: 'auto', display: 'flex'}} className={styles.navbarRight}>
                  <Typography style={{color: '#000000', fontSize: 17, marginRight: 40, paddingTop: 7}} className={styles.readButton}>
                    <Link href='/blogs' style={{color: 'inherit', textDecoration: 'none'}}>
                      <a>Read</a>
                    </Link>
                  </Typography>
                  <BasicMenu usersname={usersname} user={user}/>
                </div>
              }
            {/* </div> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const BasicMenu = ({usersname, user}) => {
  
  const handleLogout = () => {
    unsetToken();
  }

  const handleWrite = () => {
    Router.push('/write');
  }
  
  const handleReadBlogs = () => {
    Router.push('/blogs');
  }

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
                {usersname}
              </Typography>
              <Typography style={{paddingLeft: 12, fontSize: 15, color: 'rgb(90, 90, 90)'}}>
                {`@${user}`}
              </Typography>
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem 
          style={{paddingTop: 10, paddingBottom: 10, marginBottom: 10, paddingLeft: 35, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)',}} 
          onClick={handleWrite}
        >
          <Typography style={{color: '#000000', paddingRight: 10}}>
            Write
          </Typography>
          <CreateIcon style={{color: 'rgb(123,123,123)', float: 'right', paddingLeft: 0}}/>
        </MenuItem>
        <MenuItem 
          style={{paddingTop: 0, paddingBottom: 10, marginBottom: 10, paddingLeft: 35, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)',}} 
          onClick={handleReadBlogs}
        >
          <Typography style={{color: '#000000', paddingRight: 10}}>
            Read
          </Typography>
          <MenuBookIcon style={{color: 'rgb(123,123,123)', float: 'right', paddingLeft: 0}}/>
        </MenuItem>
        <MenuItem 
          style={{paddingTop: 0, paddingBottom: 10, marginBottom: 10, paddingLeft: 35, paddingRight: 20, background: '#fff', borderBottom: '1px solid rgb(200, 200, 200)',}} 
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