
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Fragment, useEffect, useState } from "react";

import MovieCard from "./movieComponent/movieCard";
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { moviesData } from "../fetchDataAPI/API";

export default function ResentNewMovies() {
    const [movies,setMovies] = useState([]);
    useEffect(()=>{
        moviesData().then(list=>{
            console.log(list.results);
            setMovies(list.results);
        })
    },[]);
    console.log(movies);
    return (
        <Fragment>
            <Box sx={{display:"flex", justifyContent:"center", marginTop:10}}><h1>What's Hot<LocalFireDepartmentIcon sx={{color:"orange"}}/></h1></Box>
            <Grid container spacing={4} sx={{marigin:5, padding:5}}>
               {movies.map((data)=>{
                return <Grid item md={3} key={data.id}>
                    <MovieCard movie={data}/>
                </Grid>
               })}
            </Grid>
            
        </Fragment>
    );
}