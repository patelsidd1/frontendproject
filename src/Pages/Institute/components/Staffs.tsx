import React, { useEffect, useState } from "react";

import { getAllCourses, getAllInstitutes } from "../../../Backend/Api";
import InstituteSelect from "./Select";
import Institute from "../../../Backend/Models/Institute";
const Staffs: React.FC<any> = ({ institueId,name,handleChange}) => {
  const [institutes, setInstitutes] = useState<Institute[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllCourses();
      console.log("selectins")
      console.log(data)
      setInstitutes(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h4>Select Institute</h4> */}
      <InstituteSelect institutes={institutes} deviceId={institueId} name={name} handleStaffChange={handleChange}/>
    </div>
  );
};

export default Staffs;
