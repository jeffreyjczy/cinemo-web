import { movies } from 'src/_mock/_movies';
import { action } from '@storybook/addon-actions';
import MovieCard from './movies-card';

export default {
  title: 'Cinemo/Movie Card',
  component: MovieCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: movies[0].title_en,
    img_url: movies[0].poster_url,
    favorite: false,
    onHover: false,
    onAddFavorite: action(),
    onClickDetail: action(),
  },
};

export const Favorite = {
  args: {
    title: movies[1].title_en,
    img_url: movies[1].poster_url,
    favorite: true,
    onAddFavorite: action(),
    onClickDetail: action(),
  },
};

export const Hover = {
  args: {
    title: movies[2].title_en,
    img_url: movies[2].poster_url,
    onHover: true,
    onAddFavorite: action(),
    onClickDetail: action(),
  },
};
