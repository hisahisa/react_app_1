import { styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import { DRAWER_WIDTH, MENU_ITEMS } from "../constants";
import { Link as RouterLink } from "react-router-dom";

// カスタムDrawerコンポーネント
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: 1100, // MenuDrawerにz-indexを適用
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: "border-box",
    zIndex: 1100, // Drawer-paperにもz-indexを適用
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9)
      }
    })
  }
}));

// カスタムListItemButtonコンポーネント
const ListItemButton = ({ to, children, ...rest }) => (
  <MuiListItemButton component={RouterLink} to={to} {...rest}>
    {children}
  </MuiListItemButton>
);

// メインのMenuDrawerコンポーネント
export const MenuDrawer = ({ open, toggleDrawer }) => (
  <Drawer variant="permanent" open={open}>
    <Toolbar
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        px: [1]
      }}
    >
      <IconButton onClick={toggleDrawer}>
        <ChevronRight />
      </IconButton>
    </Toolbar>
    <Divider />
    <List component="nav">
      {MENU_ITEMS.map((item, index) => (
        <ListItemButton key={index} to={item.to}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);
