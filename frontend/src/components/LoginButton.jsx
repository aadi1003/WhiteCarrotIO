import React, { useEffect, useState } from 'react';

const LoginButton = () => {
  const [loginURL, setLoginURL] = useState('');

  useEffect(() => {
    const fetchLoginURL = async () => {
      const res = await fetch('http://localhost:5000/auth/login');
      const { url } = await res.json();
      setLoginURL(url);
    };
    fetchLoginURL();
  }, []);

  return <a href={loginURL} className="login">Login with Google</a>;
};

export default LoginButton;