import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Blog from "../Pages/Blog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
