import react from "react";
import Home from "./Home";
import Cusines from "../components/Cusines";
import { Route, Routes, useLocation } from "react-router-dom";        //yaha pr pehle {BrowserRouter} bhi tha lekin phir use app.js me move krna pada  kyunki link se (anchor tag wala feature ) to hame har page k liye chahiye na to pure website pe applied hona chahiye browser router to isliye
import Searched from "../components/Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";

import React from 'react'

function Pages() {

  const location = useLocation();
  return (

    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>} />
          <Route path="/cusine/:type" element={<Cusines/>} />
          <Route path="/searched/:search" element={<Searched/>} />
          <Route path="/recipe/:name" element={<Recipe/>} />

        </Routes>
        </AnimatePresence>
  )
}

export default Pages