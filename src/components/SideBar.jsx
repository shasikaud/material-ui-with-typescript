import { Box, Typography } from '@mui/material'
import React from 'react'

const SideBar = () => {
  return (
    <Box bgcolor="skyblue" flex={1} p={5} border={5} align='center'>
      <Typography align='center' width={100} border={2} p={0}>
        side bar
      </Typography>
    </Box>
  )
}

export default SideBar
