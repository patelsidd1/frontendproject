import React, { useState } from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@material-ui/core";
import Institute from "../../../Backend/Models/Institute";
import { makeStyles } from "@material-ui/core/styles";
import { addDevice } from "../../../Backend/Api";
import { toast } from "react-toastify";
interface InstituteSelectProps {
  institutes: Institute[];
  deviceId: number;
}

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  select: {
    marginLeft: theme.spacing(2),
    flexGrow: 1,
  },
}));

const InstituteSelect: React.FC<InstituteSelectProps> = ({
  institutes,
  deviceId,
}) => {
  const [selectedInstitute, setSelectedInstitute] = useState<Institute | null>(
    null
  );
  const classes = useStyles(institutes);
  console.log("institutes");
  console.log(institutes);
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value as string;
    const institute =
      institutes.find((item) => item.id.toString() == selectedValue) || null;
    setSelectedInstitute(institute);
    if (institute) {
      var data = {
        deviceId: deviceId,
        id: institute.id,
      };
      addDevice(data)
        .then((link) => {
          window.open(link);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          if(error.response) {
            toast.error(error.response.data);
          } else {
            toast.error(errorMessage);
          }
        });
    }
  };

  return (
    <FormControl fullWidth required>
      <InputLabel>Institute</InputLabel>
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
