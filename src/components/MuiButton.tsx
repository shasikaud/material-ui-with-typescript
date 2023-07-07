import React from 'react';
import { Stack, Button, Box } from '@mui/material';

const MuiButton = () => {
  
  return (
    <Stack spacing={4} >

        <Stack spacing={3} direction='row'>
            <Button variant='text'
                onClick={() => {
                    alert('clicked');
                }}
            >Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>

        <Stack spacing={3} direction='row'>
            <Button variant='text' color='primary'>Text</Button>
            <Button variant='contained' color='error'>Contained</Button>
            <Button variant='outlined' color='info'>Outlined</Button>
        </Stack>

    </Stack>
  )
}

export default MuiButton
