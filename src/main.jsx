import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter, RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import {
  QueryClient, QueryClientProvider,
} from '@tanstack/react-query';
import CatPage from './pages/CatPage/CatPage';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'breed/:breedId',
    element: <CatPage />,
    errorElement: <ErrorPage />,
    // loader: CatPageLoader(queryClient),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
