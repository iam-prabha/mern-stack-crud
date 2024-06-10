import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Spinner from "./component/Spinner.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Update from "./page/Update.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  },
  {
    path: "/updated/:id",
    redirect: redirect("/"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Suspense fallback={<Spinner />}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Suspense>
);
