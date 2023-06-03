import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

import { log } from 'console';
import { getAllInstitutes } from '../../Backend/Api';
import Institute from '../../Backend/Models/Institute';
import Admin from '../../Backend/Models/Admin';

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
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
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


const InstituteListPage:React.FC<any> = (admin:Admin) => {
  const classes = useStyles();
  const [instituteList, setInstitutes] = useState<Institute[]>([]);
  useEffect(() => {
    const fetchInstitutes = async () => {
      try {
        const response = await getAllInstitutes();
        console.log(response);
        setInstitutes(response);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };
    fetchInstitutes()
  }, []);



  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    // Filter InstituteList based on search value and update state
    const filteredInstituteList = instituteList.filter((institute) =>
      institute.email.toLowerCase().includes(value.toLowerCase())
    );
    setInstitutes(filteredInstituteList);
  };

  return (
    <div className={classes.containerFluid}>
      <section id="content-wrapper">
        <main role="main" className={`pt-5 main ${classes.mainContent}`}>
          <div className={`header pb-4 pb-sm-8 pt-5 pt-lg-8 d-flex align-items-center ${classes.header}`}></div>
          <div className={`container-fluid mt--7 ${classes.containerFluid}`}>
            <div className="row">
              <div className="col-xl-12 order-xl-1">
                <div className={`card bg-secondary shadow ${classes.card}`}>
                  <div className={`card-header bg-white border-0`}>
                    <div className={`row align-items-center`}>
                      <div className={`col-8`}>
                        <h3 className={`mb-0`} style={{ color: 'brown' }}>
                          ALL INSTITUTES
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
                      placeholder="Search Institute"
                      onChange={handleSearch}
                    />
                    <h6 className={`heading-small text-muted mb-4 ${classes.headingSmall}`}>InstituteListPage INFORMATION</h6>
                    <div className={`table-responsive ${classes.table}`}>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>INSTITUTE Email</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>Manage Institute</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {instituteList.map((institute, index) => (
                            <TableRow key={institute.email}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{institute.email}</TableCell>
                              <TableCell>{institute.name}</TableCell>
                              <TableCell>{institute.mobile}</TableCell>
                              <TableCell>
                                <Button
                                  href={`/institute/settings/institute/${institute.email}`}
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

export default InstituteListPage;