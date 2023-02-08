import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ProgressCircle from "./ProgressCircle";
const StackBox = ({heading, text, progress, icon}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = "0.75" * 360;
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        backgroundColor={colors.primary[400]}
        padding="20px"
        width="100%"
      >
        <Box>
          {icon}
          <Typography variant="h4">{heading}</Typography>
          <Typography variant="h5">{text}</Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress}/>
        </Box>
      </Box>
    </>
  );
};

export default StackBox;
