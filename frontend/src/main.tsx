import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.scss";
import Root from "./pages/Root";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DevTools from "./pages/DevTools";

const enableDevRoutes = import.meta.env.VITE_ENABLE_DEV_ROUTES === "true";

const router = createBrowserRouter([
   {
      element: <Root />,

      children: [
         {
            path: "/",
            element: <Navigate to="/home" replace />,
         },
         {
            path: "home",
            element: <HomePage />,
         },
         { path: "blog", element: <Blog /> },
         { path: "posts", element: <Posts /> },
         { path: "post/:id", element: <Post /> },
         ...(enableDevRoutes ? [{ path: "dev-tools", element: <DevTools /> }] : []),
         {
            path: "*",
            element: <NotFound />,
         },
      ],
   },
]);

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <RouterProvider router={router} />
   </StrictMode>
);
