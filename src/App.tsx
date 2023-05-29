import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import AdminSidebar from './Pages/Admin/AdminSidebar';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';
import { ToastContainer } from 'react-toastify';
import InstituteSidebar from './Pages/Institute/InstituteSidebar';
import AddStaff from './Pages/Institute/AddStaff';

// import RegisterAdminPage from './Pages/Admin/RegisterAdminPage';




const App: React.FC = () => {
  return (
    <div>
  {/* <Navbar/> */}
  <ToastContainer />

    <Router>
      <Routes>
        <Route  path="/" element={<InstituteSidebar />} />
        <Route path="/admin-login" element={<AdminLoginPage/>} />
        <Route path="/admin-home" element={<AdminSidebar />} />
        <Route path="/institute-login" element={<InstituteSidebar/>} />
        <Route path="/institute-home" element={<InstituteSidebar />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
