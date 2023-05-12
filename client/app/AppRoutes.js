import React from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../features/Search/Search";
import Airbnb from "../features/Airbnb/Airbnb";
import Home from "../features/Home";
import OurStory from "../features/Ourstory";
import BucketList from "../features/Bucketlist/BucketList";
import Hotel from "../features/Hotels/Hotel";
import Quiz from "../features/Quiz/Quiz";
import OurTeam from "../features/OurTeam";

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
        <Route path="/ourteam" element={<OurTeam />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/hotel" element={<Hotel />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
