import React, { useContext, useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Divider } from '@mui/material';
import { Link, json } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { MyContext } from '../MyContext';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardCom({item}) {

    const id = item.recipe.uri.split("#")[1].split("_")[1]
    
    const {favorite, setFavorite} = useContext(MyContext)
    
    // console.log("==========================================");
    // console.log("favoriteFromLocalStorage: ", favorite.map((item, ind) => item.recipe.label));

    const addToFavorite = (item) => {
        setFavorite([...favorite, item])
    }

    const removeToFavorite = (label) => {
        // console.log("label: ", label);
        const updateFavorite = favorite.filter((value, ind) => {
            return value.recipe.label !== label
        })
        setFavorite(updateFavorite)
        // console.log("updateFavorite: ", updateFavorite);
    }


    const isInFavorite = favorite.some((cont) => cont.recipe.label === item.recipe.label)


    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite])

    // console.log("favorite: ", favorite);
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