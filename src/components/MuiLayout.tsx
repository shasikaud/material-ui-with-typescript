import { Box, Grid, Typography } from "@mui/material"

const MuiLayout = () => {
  return (
    <Grid container bgcolor='gray' m='10px'>
        <Grid item xs={6}>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                width: '200px',
                padding:' 16px',
                margin: '10px',
                '&:hover': {
                    backgroundColor: 'primary.light'
                }
            }}> 
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box padding={2} margin={10} height='auto' width='auto'> 
                <Typography variant='h3'><h3></h3> heading</Typography>
            </Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor='green' p={2} m={3}> box 3</Box>
        </Grid>
        <Grid item xs={6}>
            <Box bgcolor='pink' p={2} m={3}> box 4</Box>
        </Grid>
    </Grid>
  )
}

export default MuiLayout
