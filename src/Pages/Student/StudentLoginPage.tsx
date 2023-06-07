import React, { useState, SyntheticEvent } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import Admin from "../../Backend/Models/Admin";
import { Link } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAdmin, loginStudent, resetPassword } from "../../Backend/Api";
import { log } from "console";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
const BackgroundImage = styled("div")({
  backgroundImage:
    "url(https://t3.ftcdn.net/jpg/03/48/55/20/360_F_348552050_uSbrANL65DNj21FbaCeswpM33mat1Wll.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const LoginForm = styled("form")({
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  padding: 32,
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const RoundedTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    borderRadius: 30,
  },
});

const RoundedButton = styled(Button)({
  borderRadius: 30,
  marginTop: 16,
});

const StudentLoginPage: React.FC<any> = ({admin}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: SyntheticEvent) => {
    event.preventDefault();
    const message = "Hello, Snackbar!";
    const severity = "success";
    console.log("Email:", email);
    console.log("Password:", password);
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("Credentials Verified");
        loginStudent(user.uid)
          .then((student) => {
            toast.success("Login Successful!!\nWelcome " + student.name);
            navigate("/student-home", { state: { student: student } });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            if(error.response){
            toast.error(error.response.data);}
            else{
            toast.error(errorMessage);

            }

          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if(error.response){
          toast.error(error.response.data);}
          else{
          toast.error(errorMessage);
          }
    });
  };
  const resetPass = async (event: SyntheticEvent) => {
    event.preventDefault();
    resetPassword(email)
      .then((link) => {
        window.open(link);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.response.data;
        console.log(errorCode, errorMessage);
        if(error.response.data){
          toast.error(error.response.data);}
          else{
          toast.error(errorMessage);
          }
      });
  };
  return (
    <div>
      <BackgroundImage>
        <LoginForm onSubmit={handleLogin}>
          <RoundedTextField
            label="Email ID"
            variant="outlined"
            margin="normal"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <RoundedTextField
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Stack direction="row">
            <RoundedButton
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Submit
            </RoundedButton>
            <RoundedButton type="submit" onClick={resetPass}>
              Reset Password
            </RoundedButton>
          </Stack>
        </LoginForm>
      </BackgroundImage>
    </div>
  );
};

export default StudentLoginPage;
