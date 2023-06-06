import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  makeStyles,
} from "@material-ui/core";

import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import {
  getAllAdmins,
  getAllCourses,
  getAllInstitutes,
  getAttendance,
  getAttendanceByInstitute,
  getInstituteWithCoursesAndSubjects,
} from "../../Backend/Api";
import { log } from "console";
import AttendanceData from "../../Backend/Models/AttendanceModel";
import { KeyOff } from "@mui/icons-material";
import Staffs from "../Institute/components/Staffs";
import Subject from "../../Backend/Models/Subject";
import Course from "../../Backend/Models/Course";
import Institute from "../../Backend/Models/Institute";
import Student from "../../Backend/Models/Student";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import RoundedButton from "../../Component/RoundedButton";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { registerAdmin } from "../../Backend/Api";
import { useNavigate } from "react-router-dom";
import Staff from "../../Backend/Models/Staff";

const useStyles = makeStyles({
  containerFluid: {
    // Add your styles for container-fluid class here
  },
  mainContent: {
    // Add your styles for main-content class here
  },
  header: {
    // Add your styles for header class here
    height: 100,
    backgroundSize: "cover",
    backgroundPosition: "center top",
  },
  card: {
    // Add your styles for card class here
  },
  formControl: {
    // Add your styles for form-control class here
  },
  headingSmall: {
    // Add your styles for heading-small class here
  },
  table: {
    // Add your styles for table class here
  },
});

interface Admin {
  instituteId: number;
  subjectId: number;
  courseId: number;
  studentId: number;
  startDated: Date | null;
  startDate: String;
  endDate: String;
  endDated: Date | null;
  verfied:Boolean;
}
const AttendanceListStudent: React.FC<any> = ({ studentProps }) => {
  let student:Student=studentProps;
  const [subject, setSubjects] = useState<Subject[]>([]);
  const [att, setAttendance] = useState<AttendanceData>();
  const [formData, setFormData] = useState<Admin>({
    instituteId: student.institute!.id,
    subjectId: 0,
    courseId: student.course!.id,
    studentId: 0,
    startDate: "",
    endDate: "",
    startDated: null,
    endDated: null,
    verfied:true
  });

  useEffect(() => {
    let subject: Subject[] = [];
    subject.push(new Subject(0, "None"));
    setSubjects(subject.concat(student.subjects!));
    console.log(student.subjects);
  }, []);
  const handleSubjectChange = (event: Subject) => {
    let data = formData;
    data.subjectId = event.id;
    setFormData(data);
  };

  const handleStartDateChange = (date: Date | null) => {
    let data = formData;
    data.startDated = date;
    setFormData(data);
  };
  const handleEndDateChange = (date: Date | null) => {
    let data = formData;
    data.endDated = date;
    setFormData(data);
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    let data = formData;
    data.startDate = new Date(data.startDated!).toLocaleDateString("es-CL");data.endDate = new Date(data.endDated!).toLocaleDateString("es-CL");
    console.log(data);

    getAttendance(formData)
      .then((data) => {
        console.log(data);
        console.log(AttendanceData.fromJson(data));
        setAttendance(AttendanceData.fromJson(data));
        // toast.success("Attendacnce retrived");
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
        // toast.error(error.response.data);
      });
  };
  const classes = useStyles();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className={classes.containerFluid}>
        <section id="content-wrapper">
          <main role="main" className={`pt-5 main ${classes.mainContent}`}>
            <div
              className={`header pb-4 pb-sm-8 pt-5 pt-lg-8 d-flex align-items-center ${classes.header}`}
            ></div>
            <div className={`container-fluid mt--7 ${classes.containerFluid}`}>
              <div className="row">
                <div className="col-xl-12 order-xl-1">
                  <div className={`card bg-secondary shadow ${classes.card}`}>
                    <div className={`card-header bg-white border-0`}>
                      <div className={`row align-items-center`}>
                        <div className={`col-8`}>
                          <h3 className={`mb-0`} style={{ color: "brown" }}>
                            Attendance
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={`card-body`}>
                      {/* Include your messages component here */}

                      <h6
                        className={`heading-small text-muted mb-4 ${classes.headingSmall}`}
                      >
                        Attendance INFORMATION
                      </h6>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                              <Staffs
                                institutes={subject}
                                name="Select Subject"
                                handleChange={handleSubjectChange}
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <DatePicker
                            label="Start Date"
                            value={formData.startDated as Date}
                            onChange={handleStartDateChange}
                          />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                          <DatePicker
                            label="End Date"
                            value={formData.endDated as Date}
                            onChange={handleEndDateChange}
                          />
                        </Grid>

                        <Grid item xs={12}>
                          <RoundedButton onClick={handleSubmit}>
                            Get
                          </RoundedButton>
                        </Grid>
                      </Grid>
                      {att ? (
                        <div className={`table-responsive ${classes.table}`}>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell>#</TableCell>
                                {att.dates.map((value, index) => {
                                  return <TableCell>{value}</TableCell>;
                                })}
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              {att.attendances.map((attendanceMap, index) => {
                                const keys = Object.keys(attendanceMap);
                                return (
                                  <React.Fragment key={index}>
                                    {keys.map((key) => {
                                      const attendances = attendanceMap[key];
                                      return (
                                        <TableRow key={key}>
                                          <TableCell>{key}</TableCell>
                                          {att.dates.map((date) => {
                                            const matchedAttendance = attendances.find(
                                              (attendance) =>
                                                attendance.date === date
                                            );
                                            const value = matchedAttendance
                                              ? `${matchedAttendance.value}%`
                                              : 0;
                                            return (
                                              <TableCell key={date}>
                                                {value}
                                              </TableCell>
                                            );
                                          })}
                                        </TableRow>
                                      );
                                    })}
                                  </React.Fragment>
                                );
                              })}
                            </TableBody>
                          </Table>
                        </div>
                      ) : (
                        <CircularProgress />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </section>
      </div>
    </LocalizationProvider>
  );
};

export default AttendanceListStudent;
