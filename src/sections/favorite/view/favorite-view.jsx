// import { useState } from 'react';
import { useSelector } from 'react-redux';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import MovieCard from 'src/sections/common/movie-card';

// ----------------------------------------------------------------------

export default function FavoritesView() {
  const movies = useSelector((state) => state.favorites);

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        My Favorite
      </Typography>

      <Grid container spacing={3}>
        {movies?.map((movieData) => (
            <Grid key={movieData.id} xs={12} sm={6} md={3}>
              <MovieCard movie={movieData} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
