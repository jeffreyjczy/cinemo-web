import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import PropTypes from 'prop-types';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/homepage'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const FavoritesPage = lazy(() => import('src/pages/favorites'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const DetailsPage = lazy(() => import('src/pages/details'));

// ----------------------------------------------------------------------
const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};
ProtectedRoute.propTypes = {
  user: PropTypes.string,
  children: PropTypes.object,
};

const UserExistsRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" replace />;
  }
  return children;
};
UserExistsRoute.propTypes = {
  user: PropTypes.string,
  children: PropTypes.object,
};

export default function Router() {
  const user = localStorage.getItem('user');

  const routes = useRoutes([
    {
      element: (
        <ProtectedRoute user={user}>
          <DashboardLayout>
            <Suspense>
              <Outlet />
            </Suspense>
          </DashboardLayout>
        </ProtectedRoute>
      ),
      children: [
        {
          element: <IndexPage />,
          index: true,
        },
        {
          path: 'favorite',
          element: <FavoritesPage />,
        },
        {
          path: 'details/:id',
          element: <DetailsPage />,
        },
      ],
    },
    {
      path: 'login',
      element: (
        <UserExistsRoute user={user}>
          <LoginPage />
        </UserExistsRoute>
      ),
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
