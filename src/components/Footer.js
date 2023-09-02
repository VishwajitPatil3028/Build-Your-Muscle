import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo2.png";

const Footer = () => (
  <Box mt="50px" width="100%" bgcolor="#17122e">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "200px", height: "55px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="20px"
      textAlign="center"
      pb="20px"
      color="#fff"
    >
      Made by <span style={{ color: "#BB86FC"}}>Jeet</span>
    </Typography>
  </Box>
);

export default Footer;
