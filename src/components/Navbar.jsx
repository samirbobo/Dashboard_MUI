import {
  alpha,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar from "@mui/material/AppBar";
import { useState } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MoreIcon from "@mui/icons-material/More";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const changeAndSaveMode = () => {
    const themeValue = theme.palette.mode === "light" ? "dark" : "light";
    setMode(themeValue);
    localStorage.setItem("themeMode", themeValue);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={changeAndSaveMode}>
        <IconButton size="medium" aria-label="change mode" color="inherit">
          {theme.palette.mode === "light" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <Typography variant="body1" color={theme.palette.text.primary}>
          {theme.palette.mode === "light" ? "Light " : "Dark "}
          Mode
        </Typography>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="medium"
          aria-label="show new notifications"
          color="inherit"
        >
          <NotificationsOutlinedIcon />
        </IconButton>
        <Typography variant="body1" color={theme.palette.text.primary}>
          Notifications
        </Typography>
      </MenuItem>
      <MenuItem>
        <IconButton size="medium" aria-label="show new mails" color="inherit">
          <SettingsOutlinedIcon />
        </IconButton>
        <Typography variant="body1" color={theme.palette.text.primary}>
          Settings
        </Typography>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="medium"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Person2OutlinedIcon />
        </IconButton>
        <Typography variant="body1" color={theme.palette.text.primary}>
          Profile
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>

        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>

        <Box sx={{ flexGrow: 1 }} />

        <Box sx={{ display: { xs: "none", sm: "flex" } }}>
          <IconButton
            size="medium"
            aria-label="change mode"
            color="inherit"
            onClick={changeAndSaveMode}
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton
            size="medium"
            aria-label="show new notifications"
            color="inherit"
          >
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton size="medium" aria-label="show new mails" color="inherit">
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton
            size="medium"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Person2OutlinedIcon />
          </IconButton>
        </Box>

        <Box sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton
            size="medium"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
        {renderMobileMenu}
        {renderMenu}
      </Toolbar>
    </AppBar>
  );
}
