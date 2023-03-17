import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useState, useEffect} from "react"

const Products = () => {

    const url = "https://api.themoviedb.org/3/movie/popular?api_key=6916b5833979b9f679193d591cd740a7&language=en-US&page=1"

    const [movies, setMovies] = useState([])
    const getMovies = async (url) => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => setMovies(data.results))
        .catch((error) => console.log("Error: ", error))
    }

    useEffect(() => {
        getMovies(url)
    }, [])

    return (
        <div className='container'>
            {movies.map((movie, index) => {
                return(
                    <Card sx={{ width: "30%", height: 400, margin: 2 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="300"
                            object-fit="cover"
                            image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            />
                        <CardContent>
                        <Typography sx={{}} gutterBottom variant="h5" component="div">
                            {movie.original_title}
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    </Card>
                )
            })}
        </div>
    )
            
}

export default Products