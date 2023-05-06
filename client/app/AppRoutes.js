import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../features/Search/Search";
import Airbnb from "../features/Airbnb/Airbnb";

const AppRoutes = () => {
  return (
    <div id="routes">
      <Routes>
        <Route
          path="/"
          element={<Search name="search" displayName="Search" />}
        />
        <Route path="/airbnb" element={<Airbnb />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
