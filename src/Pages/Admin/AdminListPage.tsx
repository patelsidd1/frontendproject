import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { getAllAdmins } from "../../Backend/Api";
import { log } from "console";

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
  id: number;
  name: string;
  firebaseId: string;
  authority: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  postalCode: string;
  dob: string;
  gender: string;
}
const AdminListPage: React.FC<any> = (admin:Admin) => {
  const classes = useStyles();
  const [adminList, setAdmins] = useState<Admin[]>([]);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await getAllAdmins();
        console.log(response);
        setAdmins(response);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };
    fetchAdmins();
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Filter adminList based on search value and update state
    const filteredAdminList = adminList.filter((admin) =>
      admin.email.toLowerCase().includes(value.toLowerCase())
    );
    setAdmins(filteredAdminList);
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
                          ALL ADMINS
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
                      placeholder="Search Admin"
                      onChange={handleSearch}
                    />
                    <h6
                      className={`heading-small text-muted mb-4 ${classes.headingSmall}`}
                    >
                      ADMIN PAGE INFORMATION
                    </h6>
                    <div className={`table-responsive ${classes.table}`}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Admin Email</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Mobile No.</TableCell>
                            <TableCell>Manage Admin</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {adminList.map((admin, index) => (
                            <TableRow key={admin.email}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{admin.email}</TableCell>
                              <TableCell>{admin.name}</TableCell>
                              <TableCell>{admin.mobile}</TableCell>
                              <TableCell>
                                <Button
                                  href={`/admin/settings/admin/${admin.email}`}
                                  variant="contained"
                                  size="small"
                                  color="primary"
                                >
                                  Settings
                                </Button>
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

export default AdminListPage;
