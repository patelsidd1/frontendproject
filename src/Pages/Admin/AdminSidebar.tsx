import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Avatar, Stack } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import RoundedButton from "../../Component/RoundedButton";
import { withRouter } from "../../Component/WithRouter";
import { Link, useLocation } from "react-router-dom";
import AdminListPage from "./AdminListPage";
import AddAdmin from "./AddAdmin";
import AdminProfile from "./AdminProfile";
import AddInstitute from "./AddInstitute";
import Institute from "../../Backend/Models/Institute";
import InstituteListPage from "./InstituteListPage";
import DeviceList from "./DeviceList";
import { clearFirebase } from "../../Backend/Api";
import Admin from "../../Backend/Models/Admin";
import AttendaceListAdmin from "./AttendanceAdmin";
const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const AdminSidebar = () => {
  const {state} = useLocation();
  const { admin } = state ;
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [pageNo, setPage] = React.useState(0);
  const handleDrawerClose = () => {
    setOpen(!open);
  };
  const pages = [
    <AdminProfile admin={admin} />,
    <AddAdmin admin={admin} />,
    <AdminListPage admin={admin} />,
    <AddInstitute admin={admin} />,
    <InstituteListPage admin={admin} />,
    <DeviceList admin={admin} />,
    <AttendaceListAdmin/>
  ];
  const adminOptions = [
    {
      name: "Add Admins",
      onClick: 1,
    },
    {
      name: "All Admins",
      onClick: 2,
    },
  ];
  const institueOptions = [
    {
      name: "Add Institutes",
      onClick: 3,
    },
    {
      name: "All Institutes",
      onClick: 4,
    },
  ];
  const deviceOptions = [
    {
      name: "Devices",
      onClick: 5,
    },
  ];
  const attendanceOptions = [
    {
      name: "Attendance",
      onClick: 6,
    },
  ];
  return (
    <Box sx={{ display: "flex" }}>

      <Drawer variant="permanent" open={open} >
      <IconButton onClick={handleDrawerClose}>
    {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
  </IconButton>
      <DrawerHeader>
  <div onClick={() => setPage(0)}>
    <Stack direction="row" alignItems="center">
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{admin.name.substring(0, 1)}</Avatar>
      <Stack direction="column" columnGap={0.5}>
        <Typography variant="h6" noWrap>{admin.name}</Typography>
        <Typography variant="subtitle1" noWrap>{admin.email}</Typography>
        <Typography variant="subtitle2" noWrap>{admin.mobile}</Typography>
      </Stack>
    </Stack>
  </div>
 
</DrawerHeader>

        <Divider />
        <List>
          {adminOptions.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setPage(item.onClick)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {institueOptions.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setPage(item.onClick)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {deviceOptions.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setPage(item.onClick)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {attendanceOptions.map((item, index) => (
            <ListItem
              key={item.name}
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setPage(item.onClick)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List style={{ marginTop: `auto` }}>
          <ListItem>
          <RoundedButton variant="text">Log Out</RoundedButton>
          <RoundedButton 
          onClick={()=>{clearFirebase()}}
          variant="text">Clean Firebase</RoundedButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {pages[pageNo]}
      </Box>
    </Box>
  );
};
export default AdminSidebar;
