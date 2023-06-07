import React, { useEffect, useState } from "react";
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
import {
  getAllCourses,
  registerInstitute,
  registerStudent,
} from "../../Backend/Api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Institute from "../../Backend/Models/Institute";
import Staffs from "./components/Staffs";
import Course from "../../Backend/Models/Course";
interface StudentFormData {
  name: string;
  firebaseId: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  postalCode: string;
  institute: any;
  course: any;
  subjects: any;
  deviceId:number;
}

const AddStudent: React.FC<any> = ({institute}) => {
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState<Course[]>([]);
  const [course, setCourse] = useState<Course | null>(null);
  const [formData, setFormData] = useState<StudentFormData>({
    name: "",
    firebaseId: "MjRP3sphJghK5eaYfrzwn18vNYR2",
    email: "",
    mobile: "",
    address: "",
    city: "",
    postalCode: "",
    institute: institute,
    course: {},
    subjects: {},
    deviceId:1
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCourses(institute.id);
      console.log("selectins");
      console.log(data);
      setInstitutes(data);
      console.log(institutes);
    };

    fetchData();
  }, []);
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
    console.log(formData);
    if (course) {
      formData.subjects = course.subjects;
      console.log(formData)
      registerStudent(formData)
        .then((institute) => {
          toast.success(
            "registerInstitute Successful!!\nWelcome " + institute.name
          );
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
          console.log(errorCode, errorMessage);
          if(error.response) {
            toast.error(error.response.data);
          } else {
            toast.error(errorMessage);
          }
        });
    }
    else{
      toast.error("Select Course");
    }
  };
  const handleCourseChange = (event: Course) => {
    setCourse(event);
    formData.course = { id: event.id };
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer />

      <Container>
        <Grid container justifyContent="center" mt={5}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="Select Course"
                sx={{ bgcolor: "brown", color: "white" }}
              />
              <CardContent>
                <Staffs
                  institutes={institutes}
                  name={"Select Course"}
                  handleChange={handleCourseChange}
                ></Staffs>
              </CardContent>
            </Card>
            {course ? (
              <Card>
                <CardHeader
                  title="ADD NEW STUDENT"
                  sx={{ bgcolor: "brown", color: "white" }}
                />
                <CardContent>
                  <form onSubmit={handleSubmit}>
                    <Typography variant="subtitle2" mb={2}>
                      Student information
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
                      REGISTER INSTITUTE
                    </RoundedButton>
                  </form>
                </CardContent>
              </Card>
            ) : null}
          </Grid>
        </Grid>
      </Container>
    </LocalizationProvider>
  );
};

export default AddStudent;
