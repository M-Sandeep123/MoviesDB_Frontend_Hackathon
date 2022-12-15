import React, { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newMoviesData } from "../fetchDataAPI/API";
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';
import TheatersIcon from '@mui/icons-material/Theaters';
import { Box } from "@mui/system";

export default function MoviesSlider() {
    const [newMovies, setNewMovies] = useState([]);

    useEffect(() => {
        newMoviesData().then(data => {
            console.log(data.results);
            setNewMovies(data.results);
        })
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Box>
            <Box sx={{display:"flex", justifyContent:"center", marginTop:10}}><h1>New Releases<TheatersIcon/></h1></Box>
            <Slider {...settings}>
                {newMovies.map((movie, index) => {
                    return (
                        <Fragment key={index}>
                            <Box>
                                <Card sx={{ maxWidth: 1000, marginLeft: 50, marginRight: 50,marginTop:2, height: 400 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="450"
                                            image={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                                            alt="green iguana"
                                            className="movie-poster"
                                        />
                                    </CardActionArea>
                                </Card>
                            </Box>
                            <Box className="cardData" sx={{ display: "flex", marginTop: 2, justifyContent: "center" }}>
                                <Card sx={{ maxWidth: 345, marginTop: 2 }}>
                                    <CardActionArea sx={{ display: "flex" }}>
                                        <Box sx={{ width: 500 }}>
                                            <CardMedia
                                                component="img"
                                                height="450"
                                                image={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                                                alt="green iguana"
                                                className="movie-poster"
                                            />
                                        </Box>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ width: 450, height: 260,padding:2, marginTop: 2, justifyContent:"center"}}>
                                    <CardContent >
                                        <Typography variant="h6">
                                            <b>{movie.original_title}</b>
                                        </Typography>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {movie.vote_average}<StarRateIcon sx={{ color: "gold" }} />
                                        </Typography>
                                        <Typography variant="h7">
                                            {movie.overview}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Fragment>
                    )
                })}
            </Slider>
            
        </Box>
    );
}