import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import RoundedButton from "../../Component/RoundedButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { registerAdmin, registerNewCourse } from "../../Backend/Api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Institute from "../../Backend/Models/Institute";
interface AdminFormData {
  name: string; 
  institute:any
}

const AddCourse: React.FC<any> = ({institute}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    institute:institute

  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    console.log(formData)
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    console.log(formData)
  registerNewCourse(formData)
      .then((admin) => {
        toast.success(" course registered Successful \n" + admin.name);
        const delay = 2000; // 2 seconds

        const timeout = setTimeout(() => {
          // Code to execute after the delay
          console.log("Delayed code executed");
           
        }, delay);

        return () => {
          // Cleanup function to cancel the timeout if the component is unmounted
          clearTimeout(timeout);
        };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(error.response.data);
      });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer />

      <Container>
        <Grid container justifyContent="center" mt={5}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="ADD NEW COURSE"
                sx={{ bgcolor: "brown", color: "white" }}
              />
              <CardContent>
                <form onSubmit={handleSubmit}>
                  <Typography variant="subtitle2" mb={2}>
                    User information
                  </Typography>
                  <Grid container spacing={2}>
                     
                     
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Name"
                        fullWidth
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    
                  </Grid>

                   
              

                  <RoundedButton
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    REGISTER NEW COURSE
                  </RoundedButton>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default AddCourse;
