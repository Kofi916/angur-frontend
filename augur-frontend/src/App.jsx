import React from "react";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { CssBaseline } from "@mui/material";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Dashboard />
    </>
  );
};

export default App;
