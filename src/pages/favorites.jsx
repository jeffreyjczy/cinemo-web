import { Helmet } from 'react-helmet-async';

import FavoritesView from 'src/sections/favorite/view/favorite-view';

// ----------------------------------------------------------------------

export default function FavoritePage() {
  return (
    <>
      <Helmet>
        <title> Favorite | Cinemo </title>
      </Helmet>

      <FavoritesView />
    </>
  );
}
