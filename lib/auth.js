import Router from 'next/router';
import Cookies from 'js-cookie';
import axios from 'axios';

export const setToken = (data) => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.set('id', data.user.id);
  Cookies.set('username', data.user.username);
  Cookies.set('jwt', data.jwt);
  Cookies.set('name', data.user.name);
  if (Cookies.get('username')) {
    Router.push('/');
  }
};

export const checkUserLoggedIn = () => {
  const user = getUserFromLocalCookie()
  if(user)
    return(true);
  return(false);
}


export const unsetToken = () => {
  if (typeof window === 'undefined') {
    return;
  }
  Cookies.remove('id');
  Cookies.remove('jwt');
  Cookies.remove('username');
  Cookies.remove('name');
  Router.reload('/');
};

export const getUserFromLocalCookie = () => {
  return(Cookies.get('username'));
  // const jwt = getTokenFromLocalCookie();
  // if (jwt) {
  //   const res = await axios.get('http://localhost:1337/api/users/me', {
  //     headers: {
  //       Authorization: `Bearer ${jwt}`
  //     }
  //   })

  //   return(res.data.username);
  // } else {
  //   return;
  // }
};

export const getIdFromLocalCookie = () => {
  return(Cookies.get('id'))
  // const jwt = getTokenFromLocalCookie();
  // if (jwt) {
  //   const res = await axios.get('http://localhost:1337/api/users/me', {
  //     headers: {
  //       Authorization: `Bearer ${jwt}`
  //     }
  //   })

  //   return(res.data.id);
  // } else {
  //   return;
  // }
};

export const getUsersNameFromLocalCookie = () => {
  return(Cookies.get('name'))
}

export const getTokenFromLocalCookie = () => {
  return Cookies.get('jwt');
};