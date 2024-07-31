import { styled, useTheme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { grey } from "@mui/material/colors";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
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
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

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

export default function Sidebar({ open, handleDrawerClose }) {
  const theme = useTheme();
  const location = useLocation();
  console.log(location.pathname);
  const navigate = useNavigate();

  const linksOne = [
    { title: "Dashboard", href: "/", icon: <HomeOutlinedIcon /> },
    { title: "Manage Team", href: "/team", icon: <PeopleOutlinedIcon /> },
    {
      title: "Contacts Information",
      href: "/contacts",
      icon: <ContactsOutlinedIcon />,
    },
    {
      title: "Invoices Balances",
      href: "/invoices",
      icon: <ReceiptOutlinedIcon />,
    },
  ];

  const linksTwo = [
    { title: "Profile Form", href: "/form", icon: <PersonOutlinedIcon /> },
    {
      title: "Calendar",
      href: "/calendar",
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "FAQ Page",
      href: "/faq",
      icon: <HelpOutlineOutlinedIcon />,
    },
  ];

  const linksThere = [
    { title: "Bar Chart", href: "/bar", icon: <BarChartOutlinedIcon /> },
    {
      title: "Pie Chart",
      href: "/pie",
      icon: <PieChartOutlineOutlinedIcon />,
    },
    {
      title: "Line Chart",
      href: "/line",
      icon: <TimelineOutlinedIcon />,
    },
    {
      title: "Geography Chart",
      href: "/geography",
      icon: <MapOutlinedIcon />,
    },
  ];

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Box>
        <Avatar
          sx={{
            width: open ? "88px" : "44px",
            height: open ? "88px" : "44px",
            m: "0.5rem auto",
            border: "2px solid gray",
            transition: "0.25s linear",
          }}
          src="https://media.allure.com/photos/5a26c1d8753d0c2eea9df033/3:4/w_1262,h_1683,c_limit/mostbeautiful.jpg"
        />
        <Typography
          align="center"
          sx={{ fontSize: open ? "17px" : "0px", transition: "0.25s linear" }}
        >
          Layla Ali
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: open ? "15px" : "0px",
            transition: "0.25s linear",
            color: theme.palette.info.main,
          }}
        >
          Admin
        </Typography>
      </Box>

      <Divider />

      <List>
        {linksOne.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === link.href &&
                  (theme.palette.mode === "dark" ? grey[800] : grey[300]),
              }}
              onClick={() => navigate(link.href)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : "auto",
                  justifyContent: "center",
                }}
              >
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {linksTwo.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === link.href &&
                  (theme.palette.mode === "dark" ? grey[800] : grey[300]),
              }}
              onClick={() => navigate(link.href)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {linksThere.map((link) => (
          <ListItem key={link.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                bgcolor:
                  location.pathname === link.href &&
                  (theme.palette.mode === "dark" ? grey[800] : grey[300]),
              }}
              onClick={() => navigate(link.href)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {link.icon}
              </ListItemIcon>
              <ListItemText
                primary={link.title}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
