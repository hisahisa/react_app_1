import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const MyFooter = styled(Box, {
})(({ theme }) => (
    {zIndex: theme.zIndex.drawer + 2}
));

const Footer = () => {
  return (
    <MyFooter position="absolute"
      component="footer"
      sx={{
        py: 1,
        px: 0,
        mt: 'auto',
          bottom: 0,
          width: "100%",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800]
      }}
    >
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} My Company. All Rights Reserved.
      </Typography>
    </MyFooter>
  );
};

export default Footer;
