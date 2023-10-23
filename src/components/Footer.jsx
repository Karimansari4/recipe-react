import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <Box sx={{ backgroundColor: 'lightgrey', p:2, mt: 2}}>
            <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
          <Typography variant='body2' color={'text.secondary'} align="center">Developer: Karim Ansari</Typography>
          <Typography variant='body2' color={'text.secondary'} align="center">GitHub: <Link to={"https://github.com/Karimansari4/recipe-react.git"}> GitHub link </Link></Typography>
        </Box>            

    );
}

export default Footer