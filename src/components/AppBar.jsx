import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";

const MyAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme }) => (
    {zIndex: theme.zIndex.drawer + 1}
));

const AppBar = ({ title = "My Company Application", open, toggleDrawer }) => {
  return (
    <MyAppBar position="absolute" >
      <Toolbar
        sx={{
          pr: "24px" // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="close drawer"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
    </MyAppBar>
  );
};

export default AppBar;
