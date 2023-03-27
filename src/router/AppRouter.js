import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Main from "../Pages/Main";
import Therapists from "../Pages/Therapists";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/therapists" element={<Therapists/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
