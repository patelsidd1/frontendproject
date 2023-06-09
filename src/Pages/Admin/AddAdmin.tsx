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
import { registerAdmin } from "../../Backend/Api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminSidebar from "./AdminSidebar";
import Admin from "../../Backend/Models/Admin";
interface AdminFormData {
  name: string;
  firebaseId: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  postalCode: string;
  dob: Date | null;

  gender: string;
}

const AddAdmin: React.FC<any> = ({ admin }) => {
  const navigate = useNavigate();
  console.log(admin);
  const [formData, setFormData] = useState<AdminFormData>({
    name: "",
    firebaseId: "MjRP3sphJghK5eaYfrzwn18vNYR2",
    email: "",
    mobile: "",
    address: "",
    city: "",
    postalCode: "",
    dob: null,
    gender: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleInputChanged = (
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date: Date | null) => {
    setFormData((prevData) => ({ ...prevData, dob: date }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    registerAdmin(formData)
      .then((admin) => {
        toast.success("registerAdmin Successful!!\nWelcome " + admin.name);
        const delay = 2000; // 2 seconds

        const timeout = setTimeout(() => {
          // Code to execute after the delay
          console.log("Delayed code executed");
          navigate("/admin-dashboard");
        }, delay);

        return () => {
          // Cleanup function to cancel the timeout if the component is unmounted
          clearTimeout(timeout);
        };
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if(error.response) {
          toast.error(error.response.data);
        } else {
          toast.error(errorMessage);
        }
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
                title="ADD NEW ADMIN"
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
                        label="Email address"
                        fullWidth
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <DatePicker
                        label="DOB"
                        value={formData.dob}
                        onChange={handleDateChange}
                      />
                    </Grid>
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
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth required>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChanged}
                        >
                          <MenuItem value="MALE">MALE</MenuItem>
                          <MenuItem value="FEMALE">FEMALE</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>

                  <Typography variant="subtitle2" mb={2} mt={4}>
                    Contact information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Address"
                        fullWidth
                        placeholder="Home Address"
                        required
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="City"
                        fullWidth
                        required
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Postal code"
                        fullWidth
                        type="number"
                        required
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <TextField
                        label="Contact No. (+91)"
                        fullWidth
                        placeholder="0000000000"
                        required
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                      />
                    </Grid>
                  </Grid>

                  <RoundedButton
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    REGISTER ADMIN
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

export default AddAdmin;
