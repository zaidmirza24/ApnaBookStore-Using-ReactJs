import React, { useState,createContext, useContext } from 'react'

export const AuthContext = createContext()
export default function AuthProvider({children}) {
  const initialAuthUser = localStorage.getItem("users")
  const [authuser, setauthuser] = useState(initialAuthUser?JSON.parse(initialAuthUser):undefined)

  return (
    <AuthContext.Provider value={[authuser,setauthuser]}>
        {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=>useContext(AuthContext)