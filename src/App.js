import React, { useState, useEffect } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";
import ClockLoader from "react-spinners/ClockLoader";
import { Routes, Route, Link } from "react-router-dom";
import ScreenOne from "./pages/screenOne";
import ScreenTwo from "./pages/screenTwo";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <p>Loding</p>;
  } else {
    return (
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="wallet" element={<ScreenTwo />} />
      </Routes>
    );
  }
};

export default App;
