import { Box, /* Card, CardActions, CardContent, CardMedia ,*/ Grid, InputAdornment, TextField, } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useContext, useEffect, useState } from 'react'
import CardCom from '../components/CardCom'
import SearchIcon from '@mui/icons-material/Search';
import LoadingComponent from '../components/LoadingComponent';
import { MyContext } from '../MyContext';


function Home() {


    const [recipe, setRecipe] = useState([])
    const [search, setSearch] = useState('pizza')
    const [loading, setLoading] = useState(true)
    const {gSearch} = useContext(MyContext)

    
    

    const getSearchRecipe = async() => {
        setLoading(true)
        return await axios.get(`https://api.edamam.com/api/recipes/v2?q=${search}&app_id=665b69dd&app_key=8e20d5ab5239cf29f18e5c7e8cafd470&type=public&random=true`).then((response) => {
            setRecipe(response.data.hits)
            setLoading(false)
        }).catch((err) => {
            console.log("err: " ,err);
            setLoading(false)
        })
    }
    

    useEffect(() => {
        getSearchRecipe()
        if(gSearch){
            setSearch(gSearch)
        }
    }, [search])

    // console.log("loading: ", loading);
    return (
            <Fragment>
                <Box> 
                    <Grid spacing={2} container sx={{mt: 2, p:2}}> 
                        <Grid item lg={3} md={4} sm={6} xs={12}>
                        <TextField fullWidth label="Search..." name='serach' onChange={(evt) => setSearch(evt.target.value)} value={search} placeholder='Search Driver by name' id="outlined-start-adornment"  InputProps={{
                            startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
                            }} autoComplete='search'/>
                        </Grid>
                    <Grid />
                    
                    <Grid spacing={2} container sx={{ p: 2}}>
                        </Grid>
                        {loading ? <LoadingComponent /> : recipe.map((item, ind) => {
                            return(
                                <Grid item lg={3} md={4} sm={6} xs={12} key={ind}>
                                    <CardCom item={item} key={ind} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Fragment>
    )
}

export default Home