import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../features/Search/Search";
import Airbnb from "../features/Airbnb/Airbnb";
import Home from "../features/Home";
import OurStory from "../features/Ourstory";
import BucketList from "../features/Bucketlist/BucketList";
import Quiz from "../features/Quiz/Quiz";

const AppRoutes = () => {
  return (
    <div id="routes">
      <Routes>
        <Route
          path="/search"
          element={<Search name="search" displayName="Search" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/ourstory" element={<OurStory />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
