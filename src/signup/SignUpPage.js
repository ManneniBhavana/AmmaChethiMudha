// import React, { useState } from 'react';
// import { Container, TextField, Button, Grid, IconButton, InputAdornment } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// const Signup = ({ history }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     showPassword: false,
//     showConfirmPassword: false,
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     setErrors({ ...errors, [name]: '' });
//   };

//   const handleTogglePasswordVisibility = () => {
//     setFormData({ ...formData, showPassword: !formData.showPassword });
//   };

//   const handleToggleConfirmPasswordVisibility = () => {
//     setFormData({ ...formData, showConfirmPassword: !formData.showConfirmPassword });
//   };

//   const validateForm = () => {
//     let valid = true;
//     const newErrors = {};

//     // Validate first name
//     if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
//       newErrors.firstName = 'First name should contain only alphabets';
//       valid = false;
//     }

//     // Validate last name
//     if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
//       newErrors.lastName = 'Last name should contain only alphabets';
//       valid = false;
//     }

//     // Validate email
//     if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//       valid = false;
//     }

//     // Validate password
//     if (formData.password.length < 7) {
//       newErrors.password = 'Password should be at least 7 characters long';
//       valid = false;
//     }

//     // Validate confirm password
//     if (formData.confirmPassword !== formData.password) {
//       newErrors.confirmPassword = 'Passwords do not match';
//       valid = false;
//     }

//     setErrors(newErrors);
//     return valid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Validate form data
//     const errors = {};
//     if (!/^[a-zA-Z]+$/.test(formData.firstName)) {
//       errors.firstName = 'First name should contain only alphabets';
//     }
//     if (!/^[a-zA-Z]+$/.test(formData.lastName)) {
//       errors.lastName = 'Last name should contain only alphabets';
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       errors.email = 'Invalid email address';
//     }
//     if (formData.password.length < 7) {
//       errors.password = 'Password should be at least 7 characters long';
//     }
//     if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
//     if (Object.keys(errors).length > 0) {
//       setErrors(errors);
//     } else {

//       console.log('Form data:', formData);
//       history.push('/home');
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           <Grid item xs={6}>
//             <TextField
//               variant="outlined"
//               label="First Name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               fullWidth
//               required
//               error={Boolean(errors.firstName)}
//               helperText={errors.firstName}
//             />
//           </Grid>
//           <Grid item xs={6}>
//             <TextField
//               variant="outlined"
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               fullWidth
//               required
//               error={Boolean(errors.lastName)}
//               helperText={errors.lastName}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               label="Email"
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               fullWidth
//               required
//               error={Boolean(errors.email)}
//               helperText={errors.email}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               label="Password"
//               type={formData.showPassword ? 'text' : 'password'}
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               fullWidth
//               required
//               error={Boolean(errors.password)}
//               helperText={errors.password}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleTogglePasswordVisibility}>
//                       {formData.showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               variant="outlined"
//               label="Confirm Password"
//               type={formData.showConfirmPassword ? 'text' : 'password'}
//               name="confirmPassword"
//               value={formData.confirmPassword}
//               onChange={handleChange}
//               fullWidth
//               required
//               error={Boolean(errors.confirmPassword)}
//               helperText={errors.confirmPassword}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleToggleConfirmPasswordVisibility}>
//                       {formData.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary" fullWidth>
//               Sign Up
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </Container>
//   );
// };

// export default Signup;
