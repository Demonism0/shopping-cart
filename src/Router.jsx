import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Shop from './Shop.jsx';
import ErrorPage from './ErrorPage.jsx';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "shop",
      element: <Shop />,
    },
  ])

  return <RouterProvider router={router} />
}

export default Router;