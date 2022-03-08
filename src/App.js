import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScreenOne from "./pages/screenOne";
import ScreenTwo from "./pages/screenTwo";
import genopay_logo from "./svgs/geniopay.svg";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);

  if (isLoading) {
    return (
      <div className="bg-[#017189]  w-full h-screen flex flex-col justify-center items-center">
        <img src={genopay_logo} alt="" className="animate-pulse" />
      </div>
    );
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
