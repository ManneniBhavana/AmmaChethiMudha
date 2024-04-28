// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import './LoginPage.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }
//     window.location.href = '/';
//   };

//   return (
//     <div className="login-container">
//       <Typography variant="h4" gutterBottom>
//         Login
//       </Typography>
//       {error && <p className="error">{error}</p>}
//       <form onSubmit={handleSubmit} className="login-form">
//         <TextField
//           label="Email"
//           variant="outlined"
//           fullWidth
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <TextField
//           label="Password"
//           variant="outlined"
//           fullWidth
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Login
//         </Button>
//       </form>
//       <Typography variant="body1">
//         Don't have an account? <Link to="/signup">Create account</Link>
//       </Typography>
//     </div>
//   );
// };

// export default Login;
