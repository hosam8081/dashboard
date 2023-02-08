import { Box } from "@mui/material"
import GeoChart from "../../components/GeographyChart"
import Header from "../../components/Header"
const GeographyChart = () => {
  return (
    <Box m="20px">
      <Header heading="geography" text="geogrphy page"/>
      <Box height="75vh">
        <GeoChart />
      </Box>
    </Box>
  )
}

export default GeographyChart