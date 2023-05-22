import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {Link} from 'react-router-dom';
const BackgroundImage = styled('div')({
  backgroundImage: 'url(https://media.istockphoto.com/id/1136393786/photo/woman-typing-keyboard-laptop-and-account-login-screen-on-the-working-in-the-office-on-table.jpg?s=612x612&w=0&k=20&c=tWV0L3dDzPor2VdFrHyOk57pqH8lDcHhLHzOwuVvTvg=)',
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

const AdminLoginPage: React.FC = () => {
  return (
    <BackgroundImage>
      <LoginForm>
        <RoundedTextField label="Email ID" variant="outlined" margin="normal" fullWidth />
        <RoundedTextField label="Password" variant="outlined" margin="normal" fullWidth type="password" />
        <Link to="/staff-dashboard">
        <RoundedButton variant="contained" color="primary" size="large">
          Submit
        </RoundedButton>
        </Link>
      </LoginForm>
    </BackgroundImage>
  );
}

export default AdminLoginPage;
