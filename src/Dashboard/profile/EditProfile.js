import React, { useState, useEffect } from 'react';
import { Button, Container, TextField, Box } from '@mui/material';
import './ProfilePage.css';

const EditProfile = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setFullName(user.fullName || '');
      setEmail(user.email || '');
    }
  }, []);

  const handleBack = () => {
    window.location.href = '#/profile';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <Container maxWidth='sm'>
      <form
        onSubmit={handleSubmit}
        className='profile-form'
        style={{ marginTop: 30 }}
      >
        <TextField
          label='Full Name'
          variant='outlined'
          fullWidth
          margin='normal'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className='custom-textfield'
        />
        <TextField
          label='Email'
          variant='outlined'
          fullWidth
          margin='normal'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='custom-textfield'
          style={{ borderColor: '#c25700', color: '#000000' }}
        />
        <Box display='flex' justifyContent='center'>
          <Button
            type='button'
            variant='contained'
            className='custom-save-button'
            onClick={() => handleBack('/editprofile')}
          >
            Back
          </Button>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='custom-save-button'
            style={{ marginLeft: '10px' }} // Add margin between buttons
          >
            Save
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default EditProfile;
