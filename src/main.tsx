import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ErrorBoundary from "./ErrorBoundary.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./wrapper/Layout.tsx";
import Root from "./routes/root.tsx";
import Inscriptions from "./routes/inscriptions.tsx";
import Sale from "./routes/sale.tsx";
import Settings from "./routes/settings.tsx";
import History from "./routes/history.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/inscriptions",
        element: <Inscriptions />,
      },
      {
        path: "/sale",
        element: <Sale />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/history",
        element: <History />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>
);
