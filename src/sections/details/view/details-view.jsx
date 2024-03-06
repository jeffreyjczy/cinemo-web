import PropTypes from 'prop-types';
import { useState } from 'react';
import { Container, Grid, Typography, Box, Paper, Stack, Button } from '@mui/material';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'src/redux/favorite-slice';
// ----------------------------------------------------------------------

export default function DetailsView({ movie }) {
  const favorites = useSelector((state) => state.favorite.favorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((favMovie) => favMovie.id === movie.id)
  );

  const dispatch = useDispatch();

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Box sx={{ height: '90%' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4.5}>
          <Container sx={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
            <img
              src={movie.poster_url}
              alt={movie.title_en}
              style={{ height: '100%', maxHeight: '100%', borderRadius: '10px' }}
            />
          </Container>
        </Grid>
        <Grid item xs={12} md={7.5}>
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              height: '100%',
            }}
          >
            <Stack sx={{ display: 'flex', alignItems: { xs: 'center', md: 'start' } }}>
              <ReactPlayer controls url={movie.tr_mp4} />
            </Stack>
            <Paper sx={{ p: 2, flex: 1 }}>
              <Typography variant="h3">{movie.title_en}</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Director: {movie.director}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Genre: {movie.genre}
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Release Date: {movie.release_date}
              </Typography>
              <Stack sx={{ mt: 2 }}>
                <Button
                  variant={isFavorite ? 'outlined' : 'contained'}
                  onClick={handleFavoriteClick}
                >
                  {isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}
                </Button>
              </Stack>
            </Paper>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
}

DetailsView.propTypes = {
  movie: PropTypes.object,
};
