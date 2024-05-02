import React, { useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  IconButton,
  InputAdornment,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backdropImage from '../images/loginSignupImage.jpeg';
import signUpBackgroundImage from '../images/recipes_background.jpeg'
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    showPassword: false,
    showConfirmPassword: false,
  });
  const [errors, setErrors] = useState({});
  if (localStorage.getItem('user') !== null) {
    return window.location.replace('/home');
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleTogglePasswordVisibility = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setFormData({
      ...formData,
      showConfirmPassword: !formData.showConfirmPassword,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    const errors = {};
    if (!/^[a-zA-Z]+$/.test(formData.fullName)) {
      errors.fullName = 'First name should contain only alphabets';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Invalid email address';
    } else if (formData.password.length < 8) {
      errors.password = 'Password should be at least 8 characters long';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      toast.success('User signed up successfully');
      const userObj = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem('user', JSON.stringify(userObj));
      window.location.replace('/home');
    }
  };

  return (
    <div className='login-container'
      style={{
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${signUpBackgroundImage})`,
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        padding:0
      }}
    >
      <div className='form-container'
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          display: 'flex',
          rowGap: '10px',
          borderRadius: '10px',
          height : '550px',
          width : '1200px',
        }}
      >
        <div>
          <img src={backdropImage} alt='Login' className='login-image' 
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${signUpBackgroundImage})`,
            backgroundSize: 'cover',
          }}/>
        </div>
        <div className='loginDetailsCard'>
        <Typography variant='h5' gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Full Name'
                name='fullName'
                value={formData.fullName}
                onChange={handleChange}
                fullWidth
                required
                error={Boolean(errors.fullName)}
                helperText={errors.fullName}
                style={{borderColor:'#c25700'}}
                className='custom-textfield'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                error={Boolean(errors.email)}
                helperText={errors.email}
                className='custom-textfield'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Password'
                type={formData.showPassword ? 'text' : 'password'}
                name='password'
                value={formData.password}
                onChange={handleChange}
                fullWidth
                required
                className='custom-textfield'
                error={Boolean(errors.password)}
                helperText={errors.password}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {formData.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                label='Confirm Password'
                type={formData.showConfirmPassword ? 'text' : 'password'}
                name='confirmPassword'
                value={formData.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
                className='custom-textfield'
                error={Boolean(errors.confirmPassword)}
                helperText={errors.confirmPassword}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        onClick={handleToggleConfirmPasswordVisibility}
                      >
                        {formData.showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type='submit'
                variant='contained'
                fullWidth
                style={{backgroundColor:'#c25700',padding:'15px', textTransform:'none',  fontSize: '16px'}}
              >
                Sign Up
              </Button>
              <Typography variant='body1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                Have an account? <Link to='/login' style={{ color: '#c25700' }}>  Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
