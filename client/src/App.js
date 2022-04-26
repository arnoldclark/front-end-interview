import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { BranchList } from "./pages/BranchList";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/branches" element={<BranchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
