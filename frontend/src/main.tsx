import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

import "./index.scss";
import Root from "./pages/Root";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import DevTools from "./pages/DevTools";

import ArticlesPage from "./pages/ArticlesPage";
import ArticlePage from "./pages/ArticlePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactPage from "./pages/ContactPage";
import NotImplemented from "./components/NotImplemented";
import CreateArticle from "./pages/CreateArticle";

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

         { path: "articles", element: <ArticlesPage /> },
         { path: "article/:id", element: <ArticlePage /> },
         { path: "resources", element: <ResourcesPage /> },
         { path: "contact", element: <ContactPage /> },
         { path: "not-implemented", element: <NotImplemented /> },
         { path: "create-article", element: <CreateArticle /> },
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
