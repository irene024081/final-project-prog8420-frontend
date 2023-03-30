import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: enteredUsername => {},
});

export const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');
    const storedUserName = localStorage.getItem('username');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
      setUsername(storedUserName);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  const loginHandler = enteredUsername => {
    console.log('Login');
    localStorage.setItem('isLoggedIn', '1');
    //localStorage.setItem('username', enteredUsername);

    setIsLoggedIn(true);
    setUsername(enteredUsername);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        username: username,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
