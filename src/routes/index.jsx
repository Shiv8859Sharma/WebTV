import {
  createBrowserRouter
} from 'react-router-dom';
import Layout from "@/layouts";
import PageNotFound from '@/constants/PageNotFound';
import { ErrorBoundary } from '@/constants/ErrorBoundary'
import { AdminRoutes, PublicRoutes } from './routes';

function getRoutes(type) {
  switch (type) {
    case 'admin':
      return { ...AdminRoutes };
    default:
      return { ...PublicRoutes };
  }
}

const router = (user) => {
  return createBrowserRouter([
    {
      element: <Layout userType={user} />,
      errorElement: <ErrorBoundary />,
      children: [{ ...getRoutes(user) }]
    },
    {
      path: '*',
      element: <PageNotFound />
    }
  ]);
}

export default router
