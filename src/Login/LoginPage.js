import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './LoginPage.css';
// import loginImage from '../images/logo.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backdropImage from '../images/loginSignupImage.jpeg';
import loginBackgrounImage from '../images/recipes_background.jpeg';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const dummyFullName = 'Manneni Bhavana';
const dummyEmail = 'manneni.bhavana@gmail.com';
const dummyPassword = 'ManBha@123';

const Login = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  if (localStorage.getItem('user') !== null) {
    return navigate('#/home')
    // window.location.replace('#/home');
  }

  const validEmail = (val) =>
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );
  const validPassword = (val) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/.test(
      val
    );
    const handleTogglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validEmail(email)) {
      toast.error('Enter Valid Email');
    } else if (!validPassword(password)) {
      toast.error('Enter Valid Password');
    } else if (!fullName.trim()) {
      toast.error('Enter Your Full Name');
    } else if (
      email === dummyEmail &&
      password === dummyPassword &&
      fullName === dummyFullName
    ) {
      toast.success('Login Success');
      localStorage.setItem(
        'user',
        JSON.stringify({ email, password, fullName })
      );
      navigate('#/home');
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
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${loginBackgrounImage})`,
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
          flexDirection: 'row',
          display: 'flex',
          rowGap: '10px',
          borderRadius: '10px',
          height: '550px',
          width: '1200px',
        }}
      >
        <div>
          <img
            src={backdropImage}
            alt='Login'
            className='login-image'
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5))`,
              backgroundSize: 'cover',
            }}
          />
        </div>
        <div className='loginDetailsCard'>
          <Typography variant='h5' gutterBottom style={{}}>
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
              label='Full Name'
              variant='outlined'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className='custom-textfield'
              required
            />
            <TextField
              label='Email'
              variant='outlined'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='custom-textfield'
              required
            />
            <TextField
              variant='outlined'
              label='Password'
              type={showPassword ? 'text' : 'password'}
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
              className='custom-textfield'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleTogglePasswordVisibility}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button
              type='submit'
              variant='contained'
              style={{
                backgroundColor: '#c25700',
                padding: '15px',
                textTransform: 'none',
                fontSize: '16px',
              }}
            >
              Login
            </Button>
          </form>
          <Typography
            variant='body1'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            Don't have an account?{' '}
            <Link to='/signup' style={{ color: '#c25700' }}>
              {' '}
              Create account
            </Link>
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;

