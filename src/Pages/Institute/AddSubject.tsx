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
  createNewSubject,
  getAllCourses,
  registerInstitute,
  registerStudent,
} from "../../Backend/Api";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Institute from "../../Backend/Models/Institute";
import Staffs from "./components/Staffs";
interface StudentFormData {
  name: string;
  
  institute: any;
  course: any;
}

const AddSubject: React.FC<any> = ({institute}) => {
  console.log(institute)
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState<Institute[]>([]);
  const [course, setCourse] = useState<Institute | null>(null);
  const [formData, setFormData] = useState<StudentFormData>({
    name: "",
    institute: Institute,
    course: {},
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCourses(institute.id);
      console.log("selectins");
      console.log(data);
      setInstitutes(data);
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
    formData.institute = institute;

    console.log(formData);

    createNewSubject(formData)
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
        toast.error(error.response.data);
      });
  };
  const handleCourseChange = (event: any) => {
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
                  title="ADD NEW Subject"
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
                      REGISTER SUBJECT
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

export default AddSubject;
