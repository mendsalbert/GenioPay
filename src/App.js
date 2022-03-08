import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import ScreenOne from "./pages/screenOne";
import ScreenTwo from "./pages/screenTwo";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ScreenOne />} />
      <Route path="wallet" element={<ScreenTwo />} />
    </Routes>
  );
};

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
