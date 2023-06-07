import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import background from "./Images/Background.png"
const BackgroundImage = styled("div")({
  // backgroundImage:' src(./Images/Background.png)',
  
  backgroundSize: "fill",
  backgroundPosition: "center",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BackgroundImageAdmin =  styled(Box)(({ theme }) => ({
  backgroundImage:
    "src(./Images/Background.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#f5f5f5",
  position: "relative",
  display: "flex",

  alignItems: "center",
  justifyContent: "center",
}));

const HoverableBox = styled(Box)(({ theme }) => ({
  
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundColor: "#f5f5f5",
  position: "relative",
  "&:hover p": {
    visibility: "visible",
  },

  alignItems: "center",
  justifyContent: "center",
}));

const HiddenText = styled("p")(({ theme }) => ({
  visibility: "hidden",
}));

const HomePage: React.FC = () => {
  return (
    <BackgroundImageAdmin sx={{ width: "100%", height: "100vh", bgcolor: "#f5f5f5" }}>
      <Grid container justifyContent="center" spacing={2} sx={{ padding: 8 }}>
        <Grid item xs={12} sm={6} md={6}>
          <HoverableBox
            sx={{ width: 400, height: 200, bgcolor: "#f5f5f5", padding: 2 }}
          >
            <p>Login as admin</p>

            <HiddenText>Manage other admins</HiddenText>

            <Link to="/admin-login">
              <Button variant="contained">Login</Button>
            </Link>
          </HoverableBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <HoverableBox
            sx={{ width: 400, height: 200, bgcolor: "#f5f5f5", padding: 2 }}
          >
            <p>Login as Institute</p>
            <HiddenText>Manage other institute</HiddenText>
            <Link to="/institute-login">
              <Button variant="contained">Login</Button>
            </Link>
          </HoverableBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <HoverableBox
            sx={{ width: 400, height: 200, bgcolor: "#f5f5f5", padding: 2 }}
          >
            <p>Login as Staff</p>
            <HiddenText>Manage other Staff </HiddenText>
            <Link to="/staff-login">
              <Button variant="contained">Login</Button>
            </Link>
          </HoverableBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <HoverableBox
            sx={{ width: 400, height: 200, bgcolor: "#f5f5f5", padding: 2 }}
          >
            <p>Login as Student</p>
            <HiddenText>Manage other Student</HiddenText>
            <Link to="/student-login">
              <Button variant="contained">Login</Button>
            </Link>
          </HoverableBox>
        </Grid>
      </Grid>
    </BackgroundImageAdmin>
  );
};

export default HomePage;
