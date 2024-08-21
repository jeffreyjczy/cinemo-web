import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
  IconButton,
  styled,
  Stack,
} from '@mui/material';
import Iconify from 'src/components/iconify';

const StyledIcon = styled(Iconify)(({ theme, isfavorite }) => ({
  color: isfavorite ? 'red' : 'white',
  '&:hover': { color: isfavorite ? theme.palette.error.light : theme.palette.grey[400] },
}));

const StyledGreyout = styled('div')(({ theme, showdetails }) => ({
  width: 230,
  height: 340,
  position: 'absolute',
  alignItems: 'center',
  zIndex: 1,
  opacity: showdetails ? 0.6 : 0.0,
  backgroundColor: 'black',
}));

export default function MovieCard({
  title,
  img_url,
  favorite = false,
  onHover = false,
  onAddFavorite,
  onClickDetail,
}) {
  const [showDetails, setShowDetails] = useState(onHover);
  const [isFavorite, setIsFavorite] = useState(favorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onAddFavorite('Click Favorite');
  };

  const handleDetailClick = () => {
    onClickDetail('Click Detail');
  };

  return (
    <Stack height={340} width={230}>
      <Card>
        <StyledGreyout
          onMouseEnter={() => {
            setShowDetails(true);
          }}
          onMouseLeave={() => {
            setShowDetails(false);
          }}
          showdetails={showDetails}
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
            zIndex: 3,
          }}
          onClick={handleFavoriteClick}
        >
          <StyledIcon
            icon="ic:round-favorite"
            width={60}
            height={60}
            isfavorite={isFavorite ? 1 : undefined}
          />
        </IconButton>

        <CardMedia component="img" height="250px" image={img_url} alt={title} />
        <Stack
          sx={{
            height: 90,
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6">{title}</Typography>
        </Stack>
      </Card>
    </Stack>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  img_url: PropTypes.string,
  favorite: PropTypes.bool,
  onHover: PropTypes.bool,
  onAddFavorite: PropTypes.func,
  onClickDetail: PropTypes.func,
};
