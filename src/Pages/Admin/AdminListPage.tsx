import React, { useEffect, useState } from "react";
import { Typography, List, ListItem, ListItemText } from "@material-ui/core";
import { getAllAdmins } from "../../Backend/Api";

interface Admin {
  id: number;
  name: string;
  firebaseId: string;
  authority: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  postalCode: string;
  dob: string;
  gender: string;
}

const AdminListPage: React.FC = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await getAllAdmins();
        console.log(response);
        setAdmins(response);
      } catch (error) {
        console.error("Error fetching admins:", error);
      }
    };

    fetchAdmins();
  }, []);

  return (
    <div>
      <Typography variant="h4">Admin List</Typography>
      {admins.length > 0 ? (
        <List>
          {admins.map((admin) => (
            <ListItem key={admin.id}>
              <ListItemText primary={admin.name} secondary={admin.email} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No admins found.</Typography>
      )}
    </div>
  );
};

export default AdminListPage;
