import { Helmet } from 'react-helmet-async';

import MoviesView from 'src/sections/movies/view/movies-view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> Movies | Cinemo </title>
      </Helmet>

      <MoviesView />
    </>
  );
}
