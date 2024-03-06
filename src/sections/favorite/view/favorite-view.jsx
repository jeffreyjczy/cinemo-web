import { useState } from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import { TextField, InputAdornment, IconButton, Typography, Container } from '@mui/material';
import Iconify from 'src/components/iconify';

import MovieCard from 'src/sections/common/movie-card';

// ----------------------------------------------------------------------

export default function FavoritesView() {
  const movies = useSelector((state) => state.favorite.favorites);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovie = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = movies.filter((movie) =>
      movie.title_en.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const moviesToDisplay = searchQuery.trim() === '' ? movies : filteredMovies;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} sx={{ mb: 5, alignItems: 'center' }}>
        <Grid xs={4.5} md={5}>
          <Typography variant="h4">My Favorites</Typography>
        </Grid>
        <Grid xs={7.5} md={7}>
          <TextField
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <Iconify icon="mdi:search" style={{ color: 'black' }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ width: '100%' }}
            onChange={searchMovie}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {moviesToDisplay.length !== 0 &&
          moviesToDisplay?.map((movieData) => (
            <Grid key={movieData.id} xs={12} sm={6} md={3}>
              <MovieCard movie={movieData} />
            </Grid>
          ))}
        {moviesToDisplay.length === 0 && searchQuery === '' && <Typography variant="h6">No Favorite Movie</Typography>}
        {moviesToDisplay.length === 0 && searchQuery !== '' && <Typography variant="h6">No Movie With the Specified Name</Typography>}
      </Grid>
    </Container>
  );
}
