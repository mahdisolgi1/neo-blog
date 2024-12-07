import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.scss";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DevTools from "./pages/DevTools";
import BlogsPage from "./pages/BlogsPage";
import BlogOpenPage from "./pages/BlogOpenPage";
import NewsPage from "./pages/NewsPage";
import ResourcesPage from "./pages/ResourcesPage";
import PodcastsPage from "./pages/PodcastsPage";
import ContactPage from "./pages/ContactPage";
import NotImplemented from "./components/NotImplemented";

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
         { path: "blogs", element: <BlogsPage /> },
         { path: "blog/:id", element: <BlogOpenPage /> },
         { path: "news", element: <NewsPage /> },
         { path: "resources", element: <ResourcesPage /> },
         { path: "contact", element: <ContactPage /> },
         { path: "not-implemented", element: <NotImplemented /> },
         { path: "podcasts", element: <PodcastsPage /> },
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
