import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Search from "../features/Search/Search";
import Airbnb from "../features/Airbnb/Airbnb";
import Home from "../features/Home";
import OurStory from "../features/Ourstory";
import BucketList from "../features/Bucketlist/BucketList";
import Hotel from "../features/Hotels/Hotel";
import Quiz from "../features/Quiz/Quiz";
import OurTeam from "../features/OurTeam";
import Generate from "../features/Generate/Generate";
import AuthForm from "../features/Authform/Auth";
import { useDispatch, useSelector } from "react-redux";
// import Results from "../features/Airbnb/results";

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.me);
  const dispatch = useDispatch();

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
        <Route
          path="/login"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route
          path="/signup"
          element={<AuthForm name="signup" displayName="Sign Up" />}
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/bucketlist" element={<BucketList />} />
        <Route path="/airbnb" element={<Airbnb />} />
        <Route path="/hotel" element={<Hotel />} />
        {/* <Route path="/results" element={<Results />} /> */}
        <Route
          path="/generate"
          element={<Generate name="generate" displayName="Generate" />}
        />
      </Routes>
    </div>
  );
};

export default AppRoutes;
