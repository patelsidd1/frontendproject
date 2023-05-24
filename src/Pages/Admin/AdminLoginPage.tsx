import React, { useState,SyntheticEvent } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import Admin from '../../Backend/Models/Admin';
import { Link } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import ShowSnackbar from '../../Component/CustomSnackbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginAdmin } from '../../Backend/Api';
import { log } from 'console';
import { useNavigate } from 'react-router-dom'
const BackgroundImage = styled('div')({
  backgroundImage: 'url(https://t3.ftcdn.net/jpg/03/48/55/20/360_F_348552050_uSbrANL65DNj21FbaCeswpM33mat1Wll.jpg)',
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
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event:SyntheticEvent) => {
  event.preventDefault();
  const message = 'Hello, Snackbar!';
    const severity = 'success';
    console.log('Email:', email);
    console.log('Password:', password);
    signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Credentials Verified")
         loginAdmin(user.uid).then((admin)=>{
          toast.success("Login Successful!!\nWelcome "+admin.name)
          navigate('/admin-dashboard')
         }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        toast.success(errorMessage)
    });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        toast.success(errorMessage)
    });

  };
  return (
  <div>
    <ToastContainer />
      <BackgroundImage>
      <LoginForm onSubmit={handleLogin}>
        <RoundedTextField 
          label="Email ID" variant="outlined" margin="normal" fullWidth 
          onChange={(e) => setEmail(e.target.value)}

        />
        <RoundedTextField label="Password" variant="outlined" margin="normal" fullWidth type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <RoundedButton variant="contained" color="primary" size="large" type="submit">
          Submit
        </RoundedButton>
      </LoginForm>
    </BackgroundImage>
  </div>
  );
}

export default AdminLoginPage;
