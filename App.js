import React ,{ useState } from "react";
import Header from "./components/header";  
import React, { useState } from "react";
import { Outlet } from "react-router";
import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
<>
<Header />
<Outlet />
</>
  );
}
export default App;
