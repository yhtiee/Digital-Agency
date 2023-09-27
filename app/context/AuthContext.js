"use client"
import { createContext, useContext, useState, useEffect } from 'react';
import { onAuthStateChanged, signOut as firebaseSignOut } from 'firebase/auth'; // Import necessary Firebase functions
import { auth } from '../firebase/firebase';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [lastLoginTime, setLastLoginTime] = useState(null);

  const updateLoginTime = () => {
    setLastLoginTime(Date.now());
  };
  
  const value = { lastLoginTime, updateLoginTime };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
