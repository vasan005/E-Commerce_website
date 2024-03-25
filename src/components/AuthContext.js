// AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    // You can implement your login logic here
    // For simplicity, I'm just setting isLoggedIn to true
    setIsLoggedIn(true);
  };

  const logout = () => {
    // You can implement your logout logic here
    // For simplicity, I'm just setting isLoggedIn to false
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
