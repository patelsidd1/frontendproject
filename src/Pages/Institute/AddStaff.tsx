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
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import RoundedButton from "../../Component/RoundedButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getAllCourses, registerAdmin, registerStaff } from "../../Backend/Api";
import { useNavigate } from "react-router-dom";
import { ExpandMore } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Staffs from "./components/Staffs";
import Institute from "../../Backend/Models/Institute";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import Course from "../../Backend/Models/Course";
import Subject from "../../Backend/Models/Subject";
interface AdminFormData {
  name: string;
  firebaseId: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  postalCode: string;
  dob: Date | null;
  institute: {};
  gender: string;
  courses: any[];
  subjects: any[];
}

const AddStaff: React.FC<any> = ({ institute }) => {
  const navigate = useNavigate();
  const [institutes, setInstitutes] = useState<Course[]>([]);
  const [courses, setCourses] = useState<Set<Course>>(new Set());
  const [subjects, setSubjects] = useState<Set<Subject>>(new Set());

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
    institute: {
      id: institute.id,
    },
    courses: [],
    subjects: [],
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
    let course: { id: number }[] = [];
    if(courses.size==0||subjects.size==0){
      toast.error("Select atleast One Subject and Course")
    }
    courses.forEach((value) => {
      let val = { id: value.id };
      course.push(val);
    });
    let subject: Subject[] = [];
    subjects.forEach((value) => {
      subject.push(value);
    });
    var data = formData;
    data.courses = course;
    data.subjects = subject;
    console.log(data);
    registerStaff(formData)
      .then((admin) => {
        toast.success("registerAdmin Successful!!\nWelcome " + admin.name);
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
        if(error.response.data){
          toast.error(error.response.data);}
          else{
          toast.error(errorMessage);
          }      });
  };
  const handleStaffChange = (event: Course, checked: boolean) => {
    let set = courses;
    console.log(courses);

    if (checked) {
      set.add(event);
    } else {
      set.delete(event);
    }
    setCourses(set);
    console.log(courses);
  };
  const handleSubjectChange = (event: Subject, checked: boolean) => {
    let set = subjects;
    console.log(subjects);

    if (checked) {
      set.add(event);
    } else {
      set.delete(event);
    }
    setSubjects(set);
    console.log();
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ToastContainer />

      <Container>
        <Grid container justifyContent="center" mt={5}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardHeader
                title="ADD NEW Staff"
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
                    <Grid item xs={12} paddingBottom={5}>
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                          position: "relative",
                          overflow: "auto",
                          maxHeight: 300,
                          "& ul": { padding: 0 },
                        }}
                        subheader={<li />}
                      >
                        {institutes.map((staff: Course, index: any) => {
                          console.log(staff);
                          return (
                            <div>
                              <ExpansionPanel>
                                <ExpansionPanelSummary
                                  expandIcon={<ExpandMore></ExpandMore>}
                                >
                                  <p>{staff.name}</p>
                                  <Checkbox
                                    edge="end"
                                    onChange={(
                                      event: React.ChangeEvent<
                                        HTMLInputElement
                                      >,
                                      checked: boolean
                                    ) => {
                                      handleStaffChange(staff, checked);
                                    }}
                                    // checked={checked.indexOf(value) !== -1}
                                    inputProps={{
                                      "aria-labelledby": staff.name,
                                    }}
                                  />
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                  <List
                                    sx={{
                                      width: "100%",
                                      maxWidth: 360,
                                      bgcolor: "background.paper",
                                      position: "relative",
                                      overflow: "auto",
                                      "& ul": { padding: 0 },
                                    }}
                                    subheader={<li />}
                                  >
                                    {staff.subjects.map(
                                      (subject: Subject, index: any) => {
                                        return (
                                          <div>
                                            <ListItem
                                              key={subject.id}
                                              secondaryAction={
                                                <Checkbox
                                                  edge="end"
                                                  onChange={(
                                                    event: React.ChangeEvent<
                                                      HTMLInputElement
                                                    >,
                                                    checked: boolean
                                                  ) => {
                                                    handleSubjectChange(
                                                      subject as Institute,
                                                      checked
                                                    );
                                                    // handleStaffChange(staff,true)
                                                  }}
                                                  // checked={checked.indexOf(value) !== -1}
                                                  inputProps={{
                                                    "aria-labelledby":
                                                      subject.name,
                                                  }}
                                                />
                                              }
                                              disablePadding
                                            >
                                              <ListItemText
                                                id={subject.name}
                                                primary={` ${subject.name}`}
                                              />
                                            </ListItem>
                                          </div>
                                        );
                                      }
                                    )}
                                  </List>
                                </ExpansionPanelDetails>
                              </ExpansionPanel>
                            </div>
                          );
                        })}
                      </List>
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

export default AddStaff;
