
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";

import TheatersIcon from '@mui/icons-material/Theaters';
import { latestMovies } from '../fetchDataAPI/API';
import MovieCard from './movieComponent/movieCard';

export default function TrendingMovies() {
    const [latestsMovies,setLatestMovies] = useState([]);

    useEffect(()=>{
        latestMovies().then(list=>{
            console.log(list.results);
            setLatestMovies(list.results);
        })
    },[]);

    return (
        <Fragment>
        <Box sx={{display:"flex", justifyContent:"center", marginTop:10}}><h1>Trending<TheatersIcon/></h1></Box>
        <Grid container spacing={4} sx={{marigin:5, padding:5}}>
           {latestsMovies.map((data)=>{
            return <Grid item md={3} key={data.id}>
                <MovieCard movie={data}/>
            </Grid>
           })}
        </Grid>
        </Fragment>
    );
}