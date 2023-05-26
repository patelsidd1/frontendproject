import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';

import AdminSidebar from './Pages/Admin/AdminSidebar';
import AdminLoginPage from './Pages/Admin/AdminLoginPage';

// import RegisterAdminPage from './Pages/Admin/RegisterAdminPage';




const App: React.FC = () => {
  return (
    <div>
  {/* <Navbar/> */}
  
    <Router>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/admin-login" element={<AdminLoginPage/>} />
        <Route path="/admin-home" element={<AdminSidebar />} />
        
      </Routes>
    </Router>
    </div>
  );
}

export default App;
