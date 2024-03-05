import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/homepage'));
export const LoginPage = lazy(() => import('src/pages/login'));
export const FavoritesPage = lazy(() => import('src/pages/favorites'));
export const Page404 = lazy(() => import('src/pages/page-not-found'));
export const DetailsPage = lazy(() => import('src/pages/details'));

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
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
      element: <LoginPage />,
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
