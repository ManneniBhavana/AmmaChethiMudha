import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './LoginPage.css';
import loginImage from '../images/home_background.jpeg';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const dummyEmail = 'manneni.bhavana@gmail.com';
const dummyPassword = 'ManBha@123';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  if (localStorage.getItem('user') !== null) {
    return window.location.replace('/home');
  }
  const validEmail = (val) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  const validPassword = (val) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(
      val
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      toast.error('Enter Valid Email');
    } else if (!validPassword(password)) {
      toast.error('Enter Valid Password');
    } else if (email === dummyEmail && password === dummyPassword) {
      toast.success('Login Success');
      localStorage.setItem('user', JSON.stringify({ email, password }));
      window.location.replace('/home');
    } else {
      toast.error('Invalid Credentials');
    }
  };

  return (
    <div
      className='login-container'
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundImage: `url(${loginImage})`,
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
      }}
    >
      <div
        className='form-container'
        style={{
          backgroundColor: 'white',
          flexDirection: 'column',
          display: 'flex',
          padding: '20px',
          rowGap: '10px',
          borderRadius: '10px',
        }}
      >
        <Typography variant='h5' gutterBottom>
          Login
        </Typography>
        <form
          onSubmit={handleSubmit}
          className='login-form'
          style={{
            flexDirection: 'column',
            rowGap: '10px',
            display: 'flex',
          }}
        >
          <TextField
            label='Email'
            variant='outlined'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label='Password'
            variant='outlined'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type='submit' variant='contained' color='primary'>
            Login
          </Button>
        </form>
        <Typography variant='body1'>
          Don't have an account? <Link to='/signup'>Create account</Link>
        </Typography>
      </div>
    </div>
  );
};

export default Login;
