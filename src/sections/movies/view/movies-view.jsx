/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useEffect } from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { getMovies } from 'src/utils/api/movies-api';

import MovieCard from '../../common/movie-card';

// ----------------------------------------------------------------------

export default function MoviesView() {
  const { data, error, isLoading } = getMovies();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Movies
      </Typography>
      <Grid container spacing={3}>
        {!isLoading &&
          data.movies?.map((movieData) => (
            <Grid key={movieData.id} xs={12} sm={6} md={3}>
              <MovieCard movie={movieData} />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
}
