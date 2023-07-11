import React from 'react';
import './App.css';
import MuiTypography from './components/MuiTypography';
import MuiButton from './components/MuiButton';
import MuiLayout from './components/MuiLayout';
import { Box, Stack } from '@mui/material';
import SideBar from './components/SideBar';
import Feed from './components/Feed';
import RightBar from './components/RightBar';

function App() {
  return (
    // <div className="App">
    //   {/* <MuiTypography/> */}
    //   {/* <MuiButton/> */}
    //   {/* <MuiLayout/> */}

    // </div>
    <Box sx={{ 
      backgroundColor:'coral'
    }}>
      navbar
      <Stack direction="row" spacing={0}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
