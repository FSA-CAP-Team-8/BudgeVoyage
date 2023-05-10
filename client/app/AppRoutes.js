import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../features/Search/Search";
import Airbnb from "../features/Airbnb/Airbnb";
import Hotel from "../features/Hotels/Hotel";

const AppRoutes = () => {
  return (
    <div id="routes">
      <Routes>
        <Route
          path="/"
          element={<Search name="search" displayName="Search" />}
        />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
