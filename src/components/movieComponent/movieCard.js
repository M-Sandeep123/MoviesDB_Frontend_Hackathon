
import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import StarRateIcon from '@mui/icons-material/StarRate';

export default function MovieCard({ movie }) {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="450"
                    image={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                    alt="green iguana"
                    className="movie-poster"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {movie.vote_average}<StarRateIcon sx={{ color: "gold" }} />
                    </Typography>
                    <Typography variant="body2">
                        <b>{movie?.original_title? movie.original_title:movie.title}</b>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}