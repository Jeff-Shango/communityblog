import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import BlogPage from "./Blog/BlogPage";
import HobbylaPage from "./Hobby/HobbylaPage";
import TutorialsPage from "./Tutorials/TutorialsPage";
import ArtAppPage from "./Art/ArtAppPage";
import NewsPage from "./News/NewsPage";

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
      <Route path="/hobby" element={<HobbylaPage/>}/> 
      <Route path="/tutorial" element={<TutorialsPage/>}/>
      <Route path="/artapp" element={<ArtAppPage/>}/>
      <Route path="/news" element={<NewsPage/>}/>
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
