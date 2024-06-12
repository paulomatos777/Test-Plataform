import { useState, useEffect } from 'react';

const useAuth = () => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    user_email: localStorage.getItem('user_email'),
    user_name: localStorage.getItem('user_name')
  });

  const login = (token, user_email, user_name) => {
    localStorage.setItem('token', token);
    localStorage.setItem('user_email', user_email);
    localStorage.setItem('user_name', user_name);
    setAuth({ token, user_email, user_name });
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    setAuth({ token: null, user_email: null, user_name: null });
  };

  useEffect(() => {
    const handleStorageChange = () => {
      setAuth({
        token: localStorage.getItem('token'),
        user_email: localStorage.getItem('user_email'),
        user_name: localStorage.getItem('user_name')
      });
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return { auth, login, logout };
};

export default useAuth;
