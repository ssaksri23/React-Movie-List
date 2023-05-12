import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  { path: "/details/:id", element: <MovieDetail /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
