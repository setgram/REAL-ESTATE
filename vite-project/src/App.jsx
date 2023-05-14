import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import About from "/src/About";
import Home from "/src/Home";
import Properties, { loader as propertiesLoader } from "/src/Properties";
import PropertiesDetail, {
  loader as propertiesDetailLoader,
} from "/src/PropertiesDetail";
import Layout from "/src/Layout";
import Dashboard from "/src/Dashboard";
import Income from "/src/Income";
import Review from "/src/Review";
import HostLayout from "/src/HostLayout";
import HostProperty, { loader as HostPropertyLoader } from "/src/HostProperty";
import HostPropertyDetails, {
  loader as HostPropertyDetailsLoader,
} from "/src/HostPropertyDetails";
import Details from "/src/Details";
import Pricing from "/src/Pricing";
import Photos from "/src/Photos";
import Error from "/src/Error";
import Login, {
  loader as LoginLoader,
  action as LoginAction,
} from "/src/Login";
import NotFound from "/src/NotFound";
import { requireAuth } from "/src/utils";

import "./App.css";
import "./server";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} loader={LoginLoader} />
        <Route
          path="properties"
          element={<Properties />}
          loader={propertiesLoader}
        />
        <Route
          path="properties/:id"
          element={<PropertiesDetail />}
          loader={propertiesDetailLoader}
          action={LoginAction}
        />

        <Route path="host" element={<HostLayout />}>
          <Route
            index
            element={<Dashboard />}
            loader={async () => await requireAuth()}
          />
          <Route path="Income" element={<Income />} />
          <Route path="reviews" element={<Review />} />
          <Route
            path="property"
            element={<HostProperty />}
            loader={HostPropertyLoader}
          />
          <Route
            path="property/:id"
            element={<HostPropertyDetails />}
            loader={HostPropertyDetailsLoader}
          >
            <Route index element={<Details />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="photos" element={<Photos />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
