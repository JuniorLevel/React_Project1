import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";
// import Layout from "./components/common/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-workout" element={<NewWorkout />} />
      </Routes>
    </Router>
  );
};

export default App;
