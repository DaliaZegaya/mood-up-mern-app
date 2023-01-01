import { createContext, useEffect, useState, } from "react";
import { signIn } from "../services/users";
import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from "axios";


export const usersContext = createContext();

function UsersProvider({ children }) {
  const [userToken, setUserToken] = useState(undefined)
  const BASE_URL = "https://mood-up-server.onrender.com"

  const login = async (user) => {

    return await fetch(`${BASE_URL}/api/users/signIn`, {
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: { email: user.email, password: user.password } })
    })
      .then(res => res.json()).then(res => setUserToken(res.token))
      .catch(setUserToken(undefined))
    // setIsLoading(true)
    // setUserToken("token")
    // AsyncStorage.setItem('userToken', "token")
    // setIsLoading(false)
  }

  const logout = () => {
    setIsLoading(true)
    setUserToken(null)
    AsyncStorage.removeItem('userToken')
    setIsLoading(false)
  }
  return (
    <usersContext.Provider value={{ login, logout, userToken }}>
      {children}
    </usersContext.Provider>
  );
}

export default UsersProvider;