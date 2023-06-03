import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
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
  getAttendaceBySubject,
  getInstituteWithCoursesAndSubjects,
} from "../../Backend/Api";
import { log } from "console";
import AttendanceData from "../../Backend/Models/AttendanceModel";
import { KeyOff } from "@mui/icons-material";
import Staffs from "./components/Staffs";
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
}
const Attendacelist: React.FC<any> = ({ institute }) => {
  const [institutes, setInstitutes] = useState<Institute>();
  const [courses, setCourse] = useState<Course[]>([]);
  const [subject, setSubjects] = useState<Subject[]>([]);
  const [att, setAttendance] = useState<AttendanceData>();
  const [student, setStudents] = useState<Student[]>([]);
  const [formData, setFormData] = useState<Admin>({
    instituteId: 1,
    subjectId: 0,
    courseId: 0,
    studentId: 0,
    startDate: "",
    endDate: "",
    startDated: null,
    endDated: null,
  });
  useEffect(() => {
    const fetchData = async () => {
      const data = await getInstituteWithCoursesAndSubjects(1);
      let institute = Institute.parse(data);
      setCourse(institute.courses);
    };

    fetchData();
  }, []);
  const handleInstituteChange = (event: Institute) => {
    setCourse(event.courses);
    let data = formData;
    data.instituteId = event.id;
    setFormData(data);
  };
  const handleCourseChange = (event: Course) => {
    setSubjects(event.subjects);
    setStudents(event.students);
    let data = formData;
    data.courseId = event.id;
    setFormData(data);
  };
  const handleSubjectChange = (event: Subject) => {
    let data = formData;
    data.subjectId = event.id;
    setFormData(data);
  };
  const handleStudentChange = (event: Student) => {
    let data = formData;
    data.studentId = event.id;
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
    data.startDate = new Date(data.startDated!).toLocaleDateString("es-CL");
    data.endDate = new Date(data.endDated!).toLocaleDateString("es-CL");
    console.log(data);

    getAttendaceBySubject(formData)
      .then((data) => {
        console.log(data)
        console.log(AttendanceData.fromJson(data));
        setAttendance(AttendanceData.fromJson(data))
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
  let data = `{
    "dates": [
        "2023-03-25",
        "2023-03-26",
        "2023-03-27",
        "2023-03-28",
        "2023-03-29",
        "2023-03-30",
        "2023-03-31",
        "2023-04-01",
        "2023-04-02",
        "2023-04-03",
        "2023-04-04",
        "2023-04-05",
        "2023-04-06",
        "2023-04-07",
        "2023-04-08",
        "2023-04-09",
        "2023-04-10",
        "2023-04-11",
        "2023-04-12",
        "2023-04-13",
        "2023-04-14",
        "2023-04-15",
        "2023-04-16",
        "2023-04-17",
        "2023-04-18",
        "2023-04-19",
        "2023-04-20",
        "2023-04-21",
        "2023-04-22",
        "2023-04-23",
        "2023-04-24",
        "2023-04-25",
        "2023-04-26",
        "2023-04-27",
        "2023-04-28",
        "2023-04-29",
        "2023-04-30",
        "2023-05-01",
        "2023-05-02",
        "2023-05-03",
        "2023-05-04",
        "2023-05-05",
        "2023-05-06",
        "2023-05-07",
        "2023-05-08",
        "2023-05-09",
        "2023-05-10",
        "2023-05-11",
        "2023-05-12",
        "2023-05-13",
        "2023-05-14",
        "2023-05-15",
        "2023-05-16",
        "2023-05-17",
        "2023-05-18",
        "2023-05-19",
        "2023-05-20",
        "2023-05-21",
        "2023-05-22",
        "2023-05-23",
        "2023-05-24",
        "2023-05-25",
        "2023-05-26",
        "2023-05-27",
        "2023-05-28",
        "2023-05-29",
        "2023-05-30",
        "2023-05-31",
        "2023-06-01",
        "2023-06-02"
    ],
    "attendaces": [
      {
        "Amount": [
            {
                "id": 53,
                "holiday": false,
                "holidayDescription": null,
                "date": "2023-06-01",
                "studentId": 153,
                "courseId": 1,
                "subjectId": 1,
                "instituteId": 1
            },
            {
                "id": 54,
                "holiday": false,
                "holidayDescription": null,
                "date": "2023-06-01",
                "studentId": 153,
                "courseId": 1,
                "subjectId": 1,
                "instituteId": 1
            }
        ]
    },{
      "Amount": [
          {
              "id": 53,
              "holiday": false,
              "holidayDescription": null,
              "date": "2023-06-01",
              "studentId": 153,
              "courseId": 1,
              "subjectId": 1,
              "instituteId": 1
          },
          {
              "id": 54,
              "holiday": false,
              "holidayDescription": null,
              "date": "2023-06-01",
              "studentId": 153,
              "courseId": 1,
              "subjectId": 1,
              "instituteId": 1
          }
      ]
  }
    ]
  }`;
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
                            ALL ADMINS
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div className={`card-body`}>
                      {/* Include your messages component here */}

                      <h6
                        className={`heading-small text-muted mb-4 ${classes.headingSmall}`}
                      >
                        AdminListPage INFORMATION
                      </h6>
                      <Grid>
                        <Staffs
                          institutes={courses}
                          name={"Select Course"}
                          handleChange={handleCourseChange}
                        ></Staffs>

                        <Staffs
                          institutes={subject}
                          name={"Select Subject"}
                          handleChange={handleSubjectChange}
                        ></Staffs>

                        <Staffs
                          institutes={student}
                          name={"Select Student"}
                          handleChange={handleStudentChange}
                        ></Staffs>
                        <Grid item xs={12} md={6}>
                          <DatePicker
                            label="DOB"
                            value={formData.startDated as Date}
                            onChange={handleStartDateChange}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <DatePicker
                            label="DOB"
                            value={formData.endDated as Date}
                            onChange={handleEndDateChange}
                          />
                        </Grid>
                        <RoundedButton onClick={handleSubmit}>
                          Get
                        </RoundedButton>
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
                                              ? 1
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
                      ) : null}
                     
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

export default Attendacelist;
