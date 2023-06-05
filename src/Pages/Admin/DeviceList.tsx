import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { getAllAdmins, getAllDevices } from "../../Backend/Api";
import { log } from "console";
import Device from "../../Backend/Models/Device";
import Drop from "./components/InstituteSelect";
import Admin from "../../Backend/Models/Admin";

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

const DeviceList: React.FC<any> = (admin:Admin) => {
  const classes = useStyles();
  const [deviceList, setDevices] = useState<Device[]>([]);
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await getAllDevices();
        console.log(response);
        setDevices(response);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };
    fetchDevices();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Filter staffList based on search value and update state
    // const filteredStaffList = deviceList.filter((staff) =>
    //   staff.email.toLowerCase().includes(value.toLowerCase())
    // );
    // setStaffList(filteredStaffList);
  };

  return (
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
                          ALL DEVICES
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className={`card-body`}>
                    {/* Include your messages component here */}
                    <TextField
                      className={`form-control mb-4 ${classes.formControl}`}
                      id="searchInput"
                      type="text"
                      placeholder="Search Staff"
                      onChange={handleSearch}
                    />
                    <h6
                      className={`heading-small text-muted mb-4 ${classes.headingSmall}`}
                    >
                      DEVICE LIST INFORMATION
                    </h6>
                    <div className={`table-responsive ${classes.table}`}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>Sr.No.</TableCell>
                            <TableCell>DEVICE </TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>INSTITUTE</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {deviceList.map((staff, index) => (
                            <TableRow key={"staff.id"}>
                              <TableCell>{staff.id}</TableCell>
                              <TableCell>{staff.id}</TableCell>
                              <TableCell>{staff.id}</TableCell>
                              <TableCell>{staff.enabled}</TableCell>
                              <TableCell>
                                <Drop deviceId={staff.id} />
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default DeviceList;
