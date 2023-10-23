import { Box, Card, CardContent, CardMedia, Chip, Divider, Grid, IconButton, ImageList, ImageListItem, ImageListItemBar, Paper, Skeleton, Typography } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { MyContext } from '../MyContext';

function RecipeDetailed() {
    const navigate = useNavigate()
    const {setGSearch} = useContext(MyContext)
    const {id} = useParams()
    const [recipe, setRecipe] = useState('')
    const [loading, setLoading] = useState(true)

    const getSingleRecipe = async() => {
        return await axios.get(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=665b69dd&app_key=8e20d5ab5239cf29f18e5c7e8cafd470`).then((response) => {
            setRecipe(response.data.recipe)
            setLoading(false)
        }).catch((err) => {
            console.log("error: ", err);
            setLoading(false)
        })
    }

    const handleClick = (value) => {
        setGSearch(value)
        navigate("/")
    }
    
    useEffect(() => {
        getSingleRecipe()
    }, [loading])

    return (
        <Box sx={{p: 2}} maxWidth="100%">
            <IconButton onClick={() => navigate(-1)} sx={{mb: 1}}> <ArrowBackIcon /> </IconButton>
            <Grid spacing={2} container component={Paper}>
                <Grid item lg={3} md={2} sm={12} xs={'none'}>
                    <Typography variant='h6' component={'div'} sx={{ fontWeight: 700}}>Ingredients Search</Typography>
                    {loading ? <Skeleton height={40} width={30} sx={{ borderRadius: 10}} /> : recipe?.ingredients?.map((value, i) => {
                        return (
                            <>
                                <Chip position="below" label={value.food} variant="outlined" sx={{m: 1,}} onClick={() => handleClick(value.food)} />
                            </>
                        )
                    })}
                </Grid>
                <Grid item lg={9} md={10} sm={12} xs={12}>
                    <Card sx={{ maxWidth: "100%" }}>
                        {loading ? <Skeleton width={"100%"} height={300} /> : <CardMedia component="img" alt={recipe.label} height={300} image={recipe.image} />}
                        <CardContent>
                            {loading ? <Skeleton width={"30%"} /> : <>
                                    <Typography gutterBottom variant="h5" component="div"> {recipe.label} </Typography>
                            <Typography variant="body2" color="text.secondary">Calories: {recipe.calories}</Typography>
                            </>}
                        </CardContent>
                        
                        <CardContent>
                            <Box sx={{display: 'flex',}}>
                                <Typography paragraph>Cautions</Typography>
                                <Box sx={{flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Chip label={recipe?.cautions ? recipe.cautions : ""} variant="outlined" />}
                                
                                <Box sx={{flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Typography paragraph>Cautions Type</Typography>}
                                <Box sx={{flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Chip label={recipe?.cuisineType ? recipe.cuisineType : ""} variant="outlined" />}
                            </Box>
                            <Box  sx={{display: 'flex'}}>
                                <Typography paragraph>Meal type</Typography>
                                <Box sx={{ flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Chip label={recipe?.mealType} variant='outlined' />}
                                <Box sx={{ flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Typography paragraph>Diet Labels</Typography>}
                                <Box sx={{ flexGrow: 1}} />
                                {loading ? <Skeleton width={"10%"} /> : <Chip label={recipe?.dietLabels} variant='outlined' />}
                            </Box>
                            <Divider />

                            <Box sx={{ mb: -1,}}>
                                <Typography paragraph >Ingredients</Typography>
                                <Box sx={{ width: "100%", height: 650, overflowY: 'scroll' }}>
                                <ImageList variant="masonry" cols={3} gap={8}>
                                    {recipe?.ingredients?.map((item, ind) => (
                                    <ImageListItem key={ind}>
                                        <img srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`} src={`${item.image}?w=248&fit=crop&auto=format`} alt={item.food} loading="lazy" />
                                        <Box sx={{ flexGrow: 'flex'}}>
                                            <Box sx={{flexGrow: 1}}/>
                                            <ImageListItemBar position="below" title={`Food Name: ${item.food}`} sx={{mb: -2}} />
                                            <ImageListItemBar position="below" title={`Food Category: ${item.foodCategory}`} sx={{mb: -2}} />
                                            <ImageListItemBar position="below" title={`Measure: ${item.measure}`} sx={{mb: -2}} />
                                            <ImageListItemBar position="below" title={`Quantity: ${item.text}`} sx={{mb: -2}} />
                                            <ImageListItemBar position="below" title={`Weight: ${item.weight}`} sx={{mb: -2}} />
                                        </Box>
                                    </ImageListItem>
                                    ))}
                                </ImageList>
                                </Box>
                            </Box>
                            <Divider />
                            
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>    
        </Box>
    )
}

export default RecipeDetailed