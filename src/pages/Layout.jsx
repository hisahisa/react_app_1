import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Suspense, useState } from "react";
import AppBar from "../components/AppBar";
import { MenuDrawer } from "../components/MenuDrawer";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [toggleOpen, setToggleOpen] = useState(true);
  const handleToggleDrawer = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <>
      <AppBar open={toggleOpen} toggleDrawer={handleToggleDrawer} />
      <MenuDrawer open={toggleOpen} toggleDrawer={handleToggleDrawer} />
      <Box
        component="main"
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            backgroundColor: (theme) =>
                theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            position: 'relative'
        }}
      >
        <Toolbar />
        <Container
          maxWidth="xl"
          sx={{
            mt: 4,
            mb: 4,
              flexGrow: 1,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
