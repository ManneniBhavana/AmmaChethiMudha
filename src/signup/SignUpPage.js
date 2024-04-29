import React, { useState } from 'react';
import {
  Container,
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
import loginImage from '../images/home_background.jpeg';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
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
    if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
      errors.firstName = 'First name should contain only alphabets';
    } else if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
      errors.lastName = 'Last name should contain only alphabets';
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
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      };
      localStorage.setItem('user', JSON.stringify(userObj));
      window.location.replace('/home');
    }
  };

  return (
    <Container
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
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                label='First Name'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                fullWidth
                required
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant='outlined'
                label='Last Name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                fullWidth
                required
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
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
                color='primary'
                fullWidth
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Signup;
