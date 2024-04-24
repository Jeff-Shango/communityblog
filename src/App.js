import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import BlogPage from "./Blog/BlogPage";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route
      path="/"
      element={
        <div className="dashContainer">
        <Dashboard/>
        </div>
      }/>
      <Route path="/blog" element={<BlogPage/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
