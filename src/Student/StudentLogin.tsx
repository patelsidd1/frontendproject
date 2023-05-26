import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BackgroundImage = styled('div')({
  backgroundImage: 'url(https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9naW58ZW58MHx8MHx8fDA%3D&w=1000&q=80)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: '100%',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const LoginForm = styled('form')({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: 32,
  borderRadius: 16,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const RoundedTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
  },
});

const RoundedButton = styled(Button)({
  borderRadius: 30,
  marginTop: 16,
});

const AdminLoginPage1: React.FC = () => {
  return (
    <BackgroundImage>
      <LoginForm>
        <RoundedTextField label="Email ID" variant="outlined" margin="normal" fullWidth />
        <RoundedTextField label="Password" variant="outlined" margin="normal" fullWidth type="password" />
        <Link to="/student-dashboard">
        <RoundedButton variant="contained" color="primary" size="large">
          Submit
        </RoundedButton>
        </Link>
      </LoginForm>
    </BackgroundImage>
  );
}

export default AdminLoginPage1;
