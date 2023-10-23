import React, { useContext, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MyContext } from '../MyContext';


function CardCom({item}) {

    const id = item.recipe.uri.split("#")[1].split("_")[1]
    
    const {favorite, setFavorite} = useContext(MyContext)

    const addToFavorite = (item) => {
        setFavorite([...favorite, item])
    }

    const removeToFavorite = (label) => {
        const updateFavorite = favorite.filter((value) => {
            return value.recipe.label !== label
        })
        setFavorite(updateFavorite)
    }


    const isInFavorite = favorite.some((cont) => cont.recipe.label === item.recipe.label)


    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite])

    return (
        <Card sx={{ maxWidth: "100%" }}>
            
            <CardMedia component="img" height="194" image={item.recipe.image} alt={item.recipe.image} loading="lazy"/>
            <CardContent> 
                <Typography gutterBottom variant='h5' component={'div'}><Link to={`detailedRecepi/${id}`} style={{textDecoration: 'none'}}>{item.recipe.label}</Link></Typography>
                <Typography variant='body2' color="text.secondary">Calories: {item.recipe.calories} </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {isInFavorite ? <IconButton onClick={() => removeToFavorite(item.recipe.label)} aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton> : <IconButton onClick={() => addToFavorite(item)} aria-label="add to favorites">
                    <FavoriteBorderIcon />
                </IconButton>}
                <Box sx={{flexGrow: 1}} />
                <Link to={`detailedRecepi/${id}`}>
                    <IconButton aria-label="add to favorites">
                        <RemoveRedEyeOutlinedIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    )
}

export default CardCom