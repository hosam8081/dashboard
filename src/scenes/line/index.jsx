import React from 'react'
import { Box } from '@mui/material'
import Header from '../../components/Header'
import LineChart from '../../components/LineChart'
const Line = () => {
  return (
    <Box m="20px">
        <Header heading="line chart" text="test"/>
        <Box height='75vh'>
          <LineChart />
        </Box>
    </Box>
  )
}

export default Line