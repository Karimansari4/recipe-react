import { Grid, Paper, Skeleton } from '@mui/material'
import React from 'react'

function LoadingComponent() {

    return (
        <Grid spacing={2} container component={Paper}>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Skeleton variant="rectangular" width={'100%'} height={194} />
                <Skeleton width={"100%"} />
                <Skeleton width={"50%"} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Skeleton variant="rectangular" width={'100%'} height={194} />
                <Skeleton width={"100%"} />
                <Skeleton width={"50%"} />
            </Grid>
            <Grid item lg={3} md={4} sm={6} xs={12}>
                <Skeleton variant="rectangular" width={'100%'} height={194} />
                <Skeleton width={"100%"} />
                <Skeleton width={"50%"} />
            </Grid>
        </Grid>
    )
}

export default LoadingComponent