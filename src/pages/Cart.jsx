import { Box, Grid, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { Fragment, useContext } from 'react'
import { MyContext } from '../MyContext'
import CardCom from '../components/CardCom'
import LoadingComponent from '../components/LoadingComponent'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'

function Cart() {
    const { favorite, setFavorite} = useContext(MyContext)
    const navigate = useNavigate()
    

    return (
        <Fragment>
            <Box> 
                <IconButton onClick={() => navigate(-1)} sx={{ml: 1}}> <ArrowBackIcon /> </IconButton>
                
                <Grid spacing={2} container sx={{ p: 2}}>
                    {favorite.length !== 0 ? favorite.map((item, ind) => {
                        return(
                            <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
                                <CardCom item={item} key={ind} />
                            </Grid>
                        )
                    }): <Box sx={{ width: '100%', textAlign: 'center', marginTop: 3}} ><Typography variant='h6' component={'div'}>No Favorite Found?</Typography></Box>}
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Cart