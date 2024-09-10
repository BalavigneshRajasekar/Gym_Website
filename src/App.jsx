/* eslint-disable no-unused-vars */
import { useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/nav";
import Home from "./components/Home";
import { Container } from "@mui/material";

function App() {
  return (
    <>
      <div>
        <Nav></Nav>
      </div>

      <Home></Home>
    </>
  );
}

export default App;
