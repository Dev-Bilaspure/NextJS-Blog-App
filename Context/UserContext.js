import axios from 'axios';
import { parseCookies } from 'nookies';
import React, { createContext, useState, useEffect } from 'react';




const INITIAL_STATE = {
  isUserLoggedIn: false
};

export const UserContext = createContext(INITIAL_STATE)

const UserContextProvider = (props) => {
  
  
  useEffect(() => {
    fetchUser();
  }, [parseCookies().jwt])

  const [currentUser, setCurrentUser] = useState(INITIAL_STATE);

  const fetchUser = async () => {
    const jwt = parseCookies().jwt;
    console.log(jwt);
    if(jwt) {
      
      try {
        const res = await axios.get('http://localhost:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${jwt}`
          }
        })
        console.log(res.data);
        setCurrentUser({isUserLoggedIn: true, ...res.data});
      } catch(error) {
        console.log(error);
      }
    }
    else
      setCurrentUser(INITIAL_STATE);
  }

  const setUserAfterLogin = (user) => {
    console.log('from setUserAfterLogin', user)
    setCurrentUser(user);
  }

  return (
    <UserContext.Provider value={{
      setUserAfterLogin,
      currentUser
    }}>
      {props.children}
    </UserContext.Provider>
  );
}
 
export default UserContextProvider;