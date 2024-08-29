import { movies } from 'src/_mock/_movies';
import { action } from '@storybook/addon-actions';
import { expect, userEvent, within } from '@storybook/test';
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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Simulate hovering over the target element
    const hoverElement = canvasElement.querySelector('.css-mmxg9b');
    await userEvent.hover(hoverElement);

    // Check if the "Details" button becomes visible after hovering
    const detailButton = canvasElement.querySelector('.details-button');
    expect(detailButton).toBeVisible();

    //  check if the button is hidden again after mouse leave
    await userEvent.unhover(hoverElement);
    expect(detailButton).not.toBeVisible();

    // Simulate favorite click
    const favoriteButton = canvasElement.querySelector('.favorite-button');
    const svgHeart = canvasElement.querySelector('.favorite-icon');
    await userEvent.click(favoriteButton);
    expect(svgHeart).toHaveAttribute('isfavorite', '1');

    await userEvent.click(favoriteButton);
    expect(svgHeart).not.toHaveAttribute('isfavorite');
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
