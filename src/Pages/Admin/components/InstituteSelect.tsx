import React, { useEffect, useState } from "react";

import { getAllInstitutes } from "../../../Backend/Api";
import InstituteSelect from "./Select";
import Institute from "../../../Backend/Models/Institute";
const Drop: React.FC<any> = ({ deviceId }) => {
  const [institutes, setInstitutes] = useState<Institute[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllInstitutes();
      setInstitutes(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <h4>Select Institute</h4> */}
      <InstituteSelect institutes={institutes} deviceId={deviceId} />
    </div>
  );
};

export default Drop;
