
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouter } from 'src/routes/hooks';
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
  styled,
} from '@mui/material';
import Iconify from 'src/components/iconify';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'src/redux/favorite-slice';

const StyledIcon = styled(Iconify)(({ theme, isfavorite }) => ({
  color: isfavorite ? 'red' : 'white',
  '&:hover': { color: isfavorite ? theme.palette.error.light : theme.palette.grey[400] },
}));

const StyledGreyout = styled('div')(({ theme, showdetails }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  zIndex: 1,
  opacity: showdetails ? 0.6 : 0.0,
  backgroundColor: 'black',
}));

export default function MovieCard({ movie }) {
  const favorites = useSelector((state) => state.favorites);
  const [isFavorite, setIsFavorite] = useState(
    favorites.some((favMovie) => favMovie.id === movie.id)
  );
  const [showDetails, setShowDetails] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const handleFavoriteClick = () => {
    if (!isFavorite) {
      dispatch(addFavorite(movie));
    } else {
      dispatch(removeFavorite(movie));
    }
    setIsFavorite(!isFavorite);
  };

  const handleDetailClick = () => {
    router.push(`/details/${movie.id}`);
  };

  function over() {
    setShowDetails(true);
  }

  function out() {
    setShowDetails(false);
  }

  return (
    <Card>
      <StyledGreyout
        onMouseEnter={() => {
          over();
        }}
        onMouseLeave={() => {
          out();
        }}
        showdetails={showDetails ? 1 : undefined}
        onClick={handleDetailClick}
      >
        {showDetails && (
          <Button
            variant="info"
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              zIndex: 2,
              color: 'white',
              fontSize: 20,
            }}
          >
            Details
          </Button>
        )}
      </StyledGreyout>
      <IconButton
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 3,
        }}
        onClick={handleFavoriteClick}
      >
        <StyledIcon
          icon="ic:round-favorite"
          width={40}
          height={40}
          isfavorite={isFavorite ? 1 : undefined}
        />
      </IconButton>
      <CardMedia component="img" height="250" image={movie.poster_url} alt={movie.title_en} />
      <CardContent
        sx={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6">{movie.title_en}</Typography>
      </CardContent>
    </Card>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object,
};
