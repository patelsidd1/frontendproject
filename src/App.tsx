import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import AdminSidebar from './Pages/Admin/AdminSidebar';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import { ToastContainer } from 'react-toastify';
import InstituteSidebar from './Pages/Institute/InstituteSidebar';
import AddStaff from './Pages/Institute/AddStaff';
import InstituteLoginPage from './Pages/Institute/InstituteLoginPage';
import Attendacelist from './Pages/Institute/Attendance';
import AttendaceListAdmin from './Pages/Admin/AttendanceAdmin';
import Institute from './Backend/Models/Institute';
import AttendaceListStaff from './Pages/Staff/AttendaceListStaff';
import StaffLoginPage from './Pages/Staff/StaffLoginPage';
import StaffSidebar from './Pages/Staff/StaffSidebar';

// import RegisterAdminPage from './Pages/Admin/RegisterAdminPage';




const App: React.FC = () => {
  const institue:any={
    id:1,
    name:"aniket"
  };

  return (
    <div>
  {/* <Navbar/> */}
  <ToastContainer />

    <Router>
      <Routes>
        <Route  path="/" element={< 
          StaffLoginPage/>} />
        <Route path="/admin-login" element={<AdminLoginPage/>} />
        <Route path="/admin-home" element={<AdminSidebar />} />
        <Route path="/institute-login" element={<InstituteLoginPage/>} />
        <Route path="/institute-home" element={<InstituteSidebar />} />
        <Route path="/staff-home" element={<StaffSidebar />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
