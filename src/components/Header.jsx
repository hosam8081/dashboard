import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";
const Header = ({ heading, text }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="50px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        sx={{ m: "5px 0 5px 0" }}
      >
        {heading}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {text}
      </Typography>
    </Box>
  );
};

export default Header;
