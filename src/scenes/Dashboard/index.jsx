import React from "react";
import Header from "../../components/Header";
import {
  Box,
  Button,
  useTheme,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import StackBox from "../../components/StackBox";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import DownloadIcon from "@mui/icons-material/Download";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      {/* header Section */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header heading="Dashboard" text="welcome to your dashboard" />
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.blueAccent[700],
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* progressSection */}
      <Stack
        sx={{
          flexDirection: {
            xl: "row",
            lg: "row",
            md: "column",
          },
        }}
        justifyContent="space-between"
        gap="20px"
      >
        <StackBox
          heading="email sent"
          text="123"
          progress="0.75"
          icon={
            <EmailIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
        <StackBox
          heading="New clients"
          text="2454"
          progress="0.50"
          icon={
            <PersonAddIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
        <StackBox
          heading="sales obtained"
          text="255"
          progress="0.60"
          icon={
            <PointOfSaleIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
        <StackBox
          heading="traffic inbound"
          text="242"
          progress="0.80"
          icon={
            <TrafficIcon
              sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
            />
          }
        />
      </Stack>

      {/* RENVUE GENERETD  */}
      <Box mt="25px">
        {/* GRID */}
        <Grid container spacing={2}>
          {/* COL 1 */}
          <Grid item xs={12} md={8}>
            <Box backgroundColor={colors.primary[400]} padding="20px">
              <Box display="flex" justifyContent="space-between">
                <Box>
                  <Typography variant="h4">Revenue Generated</Typography>
                  <Typography variant="h4" color={colors.greenAccent[600]}>
                    $59,342.32
                  </Typography>
                </Box>
                <Box>
                  <DownloadIcon sx={{ color: colors.greenAccent[700] }} />
                </Box>
              </Box>
              <Box height="250px" m="-20px 0 0">
                <LineChart></LineChart>
              </Box>
            </Box>
          </Grid>
          {/* COL 2 */}
          <Grid item xs={12} md={4}>
            <Box
              backgroundColor={colors.primary[400]}
              p="20px"
              height="320px"
              overflow="auto"
            >
              <Typography variant="p">Recent Transacation</Typography>
              {mockTransactions.map((li, index) => (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  borderBottom={`4px solid ${colors.primary[500]}`}
                  py="15px"
                >
                  <Box>
                    <Typography variant="h5" color={colors.greenAccent[600]}>
                      {li.txId}
                    </Typography>
                    <Typography>{li.user}</Typography>
                  </Box>
                  <Box>
                    <Typography>{li.date}</Typography>
                  </Box>
                  <Box
                    backgroundColor={colors.greenAccent[500]}
                    p="5px 10px"
                    borderRadius="4px"
                  >
                    {li.cost}
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Last SECTION  */}
      <Box mt="25px">
        {/* GRID ROW CONTAINER */}
        <Grid container spacing={2}>
          {/* COl 1 */}
          <Grid item xs={12} md={6}>
            <Box backgroundColor={colors.primary[400]} p="20px">
              <Typography variant="h5">Campaign</Typography>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                mt="25px"
              >
                <ProgressCircle progress="0.75" size="200px"/>
              </Box>
            </Box>
          </Grid>
          {/* COl 2 */}
          <Grid item xs={12} md={6}>
            <Box backgroundColor={colors.primary[400]} p="20px">
              <Typography variant="h5">Campaign</Typography>
              <Box height="250px" mt="-20px">
                <BarChart isDashboard={true}/>
              </Box>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
