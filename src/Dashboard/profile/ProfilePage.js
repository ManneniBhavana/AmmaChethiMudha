import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import './ProfilePage.css';

const ProfilePage = () => {
  // State variables for storing form data
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:', { firstName, lastName, email });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit} className="profile-form">
        <TextField
          label="First Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="custom-textfield"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="custom-textfield"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="custom-textfield"
        />
        <Button type="submit" variant="contained" color="primary" className='custom-save-button'>
          Edit
        </Button>
        <Button type="submit" variant="contained" color="primary" className='custom-save-button'>
          Saved Recipes
        </Button>
      </form>
    </Container>
  );
};

export default ProfilePage;
