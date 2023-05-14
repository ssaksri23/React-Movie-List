import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import NotFound from "./pages/NotFound";
import MovieDetail from "./pages/MovieDetail";
import BoxOffice from "./pages/BoxOffice";
import NowPlayingMovie from "./pages/NowPlayingMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <BoxOffice /> },
      { path: "/boxoffice", element: <BoxOffice /> },
      {
        path: "/details/:id",
        element: <MovieDetail />,
      },
      {
        path: "/nowplaying",
        element: <NowPlayingMovie />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
