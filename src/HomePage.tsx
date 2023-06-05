import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


const BackgroundImage = styled('div')({
    // backgroundImage:' src(./Images/Background.png)',
    backgroundimage:' url(./Images/Background.png)',
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

  const BackgroundImageAdmin = styled('div')({
    
    backgroundImage: 'url(https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?w=740&t=st=1684666768~exp=1684667368~hmac=c4e44dff5a350f8906e0148cc4d377abc0dadc1f0804877163051b5fced3ef30)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '25vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  });

const HoverableBox = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  backgroundColor: '#f5f5f5',
  padding: 16,
  position: 'relative',
  '&:hover p': {
    visibility: 'visible',
  },
}));

const HiddenText = styled('p')(({ theme }) => ({
  visibility: 'hidden',
}));

const HomePage: React.FC = () => {
  return ( 
    
    <div >
      

        <BackgroundImage>
            <h2> </h2>
       
    
    
    <Grid container justifyContent="center" spacing={2} sx={{ padding: 8 }}>
      <Grid item xs={12} sm={6} md={6}>
      
        
       
        <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
        <BackgroundImageAdmin>
          <p>Login as admin</p>
          <HiddenText>Manage other admins</HiddenText>
          
          <Link to="/admin-login">
            <Button variant="contained">Login</Button>
          </Link>
          </BackgroundImageAdmin>
        </HoverableBox>
       
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
          <p>Login as Institute</p>
          <HiddenText>Manage other institute</HiddenText>
          <Link to="/institute-login">
            <Button variant="contained">Login</Button>
          </Link>
          
        </HoverableBox>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
          <p>Login as Staff</p>
          <HiddenText>Manage other Staff </HiddenText>
          <Link to="/staff-login">
            <Button variant="contained">Login</Button>
          </Link>
        </HoverableBox>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
      <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
          <p>Login as Student</p>
          <HiddenText>Manage other Student</HiddenText>
          <Link to="/student-login">
            <Button variant="contained">Login</Button>
          </Link>
        </HoverableBox>
      </Grid>
    </Grid>
    </BackgroundImage>
    </div>
  );
}

export default HomePage;

// //     return (
//       <Grid container justifyContent="center" spacing={2} sx={{ padding: 8 }}>
//         <Grid item xs={12} sm={6} md={6}>
//           <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
//             <p>Login as admin</p>
//             <p style={{ visibility: 'hidden' }}>Manage other admins, institute, and devices</p>
//             <Button variant="contained">Login</Button>
//           </HoverableBox>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6}>
//           <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
//             <p>Login as admin</p>
//             <p style={{ visibility: 'hidden' }}>Manage other admins, institute, and devices</p>
//             <Button variant="contained">Login</Button>
//           </HoverableBox>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6}>
//           <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
//             <p>Login as admin</p>
//             <p style={{ visibility: 'hidden' }}>Manage other admins, institute, and devices</p>
//             <Button variant="contained">Login</Button>
//           </HoverableBox>
//         </Grid>
//         <Grid item xs={12} sm={6} md={6}>
//           <HoverableBox sx={{ width: 400, height: 200, bgcolor: '#f5f5f5', padding: 2 }}>
//             <p>Login as admin</p>
//             <p style={{ visibility: 'hidden' }}>Manage other admins, institute, and devices</p>
//             <Button variant="contained">Login</Button>
//           </HoverableBox>
//         </Grid>
//       </Grid>
//     );
//   }
  
//   export default HomePage;
  