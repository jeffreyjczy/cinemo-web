import { useState } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import Iconify from 'src/components/iconify/iconify';

import { getMovies } from 'src/utils/api/movies-api';

import LoadingView from 'src/routes/loading/view/loading-view';
import MovieCard from '../../common/movie-card';

// ----------------------------------------------------------------------

export default function MoviesView() {
  const { data, error, isLoading } = getMovies();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const searchMovie = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = data.movies.filter((movie) =>
      movie.title_en.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  const moviesToDisplay = searchQuery.trim() === '' ? data?.movies : filteredMovies;

  if (isLoading) {
    return <LoadingView />;
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3} sx={{ mb: 5, alignItems: 'center' }}>
        <Grid xs={4.5} md={5}>
          <Typography variant="h4">Movies</Typography>
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
        {!isLoading &&
          moviesToDisplay?.map((movieData) => (
            <Grid key={movieData.id} xs={12} sm={6} md={3}>
              <MovieCard movie={movieData} />
            </Grid>
          ))}
        {moviesToDisplay?.length === 0 && (
          <Typography variant="h6">No Movie With the Specified Name</Typography>
        )}
      </Grid>
    </Container>
  );
}
