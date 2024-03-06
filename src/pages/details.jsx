import { Helmet } from 'react-helmet-async';

import DetailsView from 'src/sections/details/view/details-view';
import LoadingView from 'src/routes/loading/view/loading-view';

import { useParams } from 'react-router-dom';

import { getMovies } from 'src/utils/api/movies-api';

// ----------------------------------------------------------------------

export default function DetailsPage() {
  const { id } = useParams();
  const { data, error, isLoading } = getMovies(id);

  console.log(isLoading)

  return (
    <>
      <Helmet>
        <title> Details | Cinemo </title>
      </Helmet>
      {!isLoading && <DetailsView movie={data} />}
      {isLoading && <LoadingView />}
    </>
  );
}
