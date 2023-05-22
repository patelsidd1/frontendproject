import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

const DashboardContainer = styled(Box)({
  display: 'flex',
  height: '100vh',
});

const LeftPanel = styled(Box)({
  width: 200,
  backgroundColor: '#f5f5f5',
  padding: '16px',
});

const FormContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const InstituteDashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <LeftPanel>
        <Button variant="outlined" fullWidth>
          Register New Admin
        </Button>
        <Button variant="outlined" fullWidth>
          Register Institute
        </Button>
        <Button variant="outlined" fullWidth>
          Get All Admin
        </Button>
        <Button variant="outlined" fullWidth>
          Get All Institute
        </Button>
        <Button variant="outlined" fullWidth>
          Get All Devices
        </Button>
        <Button variant="outlined" fullWidth>
          Register Devices
        </Button>
        <Button variant="outlined" fullWidth>
          Attendance
        </Button>
        <Button variant="outlined" fullWidth>
          Logout
        </Button>
      </LeftPanel>
      <FormContainer>
        <Grid container spacing={2}>
          <p style={{ color: 'red', fontWeight:'bolder', alignItems:'center'}}>STUDENT ATTENDANCE MANAGEMENT SYSTEM</p>
          <Grid item xs={12}>
            <TextField label="Name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Email" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Mobile" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="City" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Postal code" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="DOB" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Gender" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </FormContainer>
    </DashboardContainer>
  );
}

export default InstituteDashboard;
