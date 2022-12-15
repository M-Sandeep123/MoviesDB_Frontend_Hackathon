import * as React from 'react';

import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ResentMovies from './moviesList';
import MoviesSlider from './newMovies';
import { Fragment } from 'react';
import TrendingMovies from './trendingList';


export default function NavBar() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <BrowserRouter>
                <AppBar position="fixed" sx={{ background: "black" }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button variant='contained' sx={{ borderRadius: 5, backgroundColor: "darkorange", color: "black" }}><b>Movies DB</b></Button>
                        </Typography>
                        <Link to={"/new-movies"} style={{ textDecoration: 'none' }}><Button sx={{ color: "white" }} >New Release</Button></Link>
                        <Link to={"/recently-released-movies"} style={{ textDecoration: 'none' }}><Button sx={{ color: "white" }} >What's Hot</Button></Link>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path='/' element={<TrendingMovies />} />
                    <Route path='/new-movies' element={<MoviesSlider />} />
                    <Route path='/recently-released-movies' element={<ResentMovies />} />
                </Routes>
            </BrowserRouter>
            <Fragment className='footer-component' >
                <Box position="static" sx={{ background: "gray", height: 50, marginTop: 10 }}><div style={{ display: "flex", justifyContent: "center", padding: 10 }}><b>upGrad Frontend Hackathon</b></div></Box>
            </Fragment>
        </Box>
    );
}