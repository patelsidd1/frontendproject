import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import StudentLogin from './Student/StudentLogin';
import StaffLogin from './Pages/Staff/StaffLogin'
import InstituteLogin from './Pages/Institute/InstituteLogin';
import Dashboard from './Pages/Admin/Dashboard';

import StudentDashboard from './Student/StudentDashboard';
import StaffDashboard from './Pages/Staff/StaffDashboard';
import InstituteDashboard from './Pages/Institute/InstituteDashboard';
import AdminProfile from './Pages/Admin/AdminProfile';
import { List } from '@mui/material';
import AdminListPage from './Pages/Admin/AdminListPage';
import AddAdmin from './Pages/Admin/AddAdmin';
import AddInstitute from './Pages/Admin/AddInstitute';
import DeviceList from './Pages/Admin/DeviceList';
import InstituteListPage from './Pages/Admin/InstituteListPage';
import StaffListPage from './Pages/Staff/StaffListPage';

// import RegisterAdminPage from './Pages/Admin/RegisterAdminPage';




const App: React.FC = () => {
  return (
    <div>
  {/* <Navbar/> */}
  
  
  
  
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<DeviceList/>} />
        <Route path="/institute-login" element={<InstituteLogin />} />
        <Route path="/staff-login" element={<StaffLogin/>} />
        <Route path="/student-login" element={<StudentLogin/>} />
        <Route path="/admin-dashboard" element={<Dashboard/>} />
        <Route path="/student-dashboard" element={<StudentDashboard/>} />
        <Route path="/staff-dashboard" element={<StaffDashboard/>} />
        <Route path="/institute-dashboard" element={<InstituteDashboard/>} />
        


      </Routes>
    </Router>
    </div>
  );
}

export default App;
