import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Institute from "../../../Backend/Models/Institute";
import { makeStyles } from "@material-ui/core/styles";
import { addDevice } from "../../../Backend/Api";
import { toast } from "react-toastify";
interface InstituteSelectProps {
  institutes: any[];
  name: string;
  handleStaffChange: any;
}



const InstituteSelect: React.FC<InstituteSelectProps> = ({
  institutes,
  name,
  handleStaffChange,
}) => {
  const [selectedInstitute, setSelectedInstitute] = useState<any | null>(
    null
  );
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    const institute =
      institutes.find((item) => item.id.toString() == selectedValue) || null;
    setSelectedInstitute(institute);
    if (institute) {
      console.log(institute);
      handleStaffChange(institute);
    }
  };

  return (
    <FormControl fullWidth required>
      <InputLabel>{name}</InputLabel>
      <Select
        name="Institute"
        value={selectedInstitute ? selectedInstitute.id : ""}
        onChange={handleChange}
      >
        {institutes.map((item, index) => {
          return <MenuItem value={item.id}>{item.name}</MenuItem>;
        })}
      </Select>
    </FormControl>
  );
};

export default InstituteSelect;
