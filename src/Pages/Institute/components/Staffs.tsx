import React, { useEffect, useState } from "react";

import { getAllCourses, getAllInstitutes } from "../../../Backend/Api";
import InstituteSelect from "./Select";
import Institute from "../../../Backend/Models/Institute";
const Staffs: React.FC<any> = ({ institutes,name,handleChange}) => {

  return (
    <div>
      {/* <h4>Select Institute</h4> */}
      <InstituteSelect institutes={institutes} name={name} handleStaffChange={handleChange}/>
    </div>
  );
};

export default Staffs;
