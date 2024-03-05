import { Helmet } from 'react-helmet-async';

import DetailsView from 'src/sections/details/view/details-view';

import { useParams } from 'react-router-dom';

import { getMovies } from 'src/utils/api/movies-api';

// ----------------------------------------------------------------------

export default function DetailsPage() {
  const { id } = useParams();
  const { data, error, isLoading } = getMovies(id);
  console.log(data);

  return (
    <>
      <Helmet>
        <title> Details | Cinemo </title>
      </Helmet>
      {!isLoading && <DetailsView movie={data} />}
    </>
  );
}
