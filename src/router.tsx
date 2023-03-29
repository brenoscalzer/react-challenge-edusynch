import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";

import LandingPage from "./pages/landing";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<LandingPage />}>
        </Route>
    )
);
  

const Routes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default Routes;