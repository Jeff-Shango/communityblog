import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import React from "react";
import logo from "../assets/logoSolo.png";
import "./navStyling.css";
import newsCoo from "../assets/News_Coo.png";

const Navlinks = () => {
  return (
    <div>
      {/* Menu Container */}
      <Navbar expand="md" variant="dark" id="menuContainer">
        <h3 to="https//:bozierwedding.netlify.app" id="logoLink">
          <a href="https://jeffbozier.netlify.app">
            <img src={logo} alt="issa" />
          </a>
        </h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav navContainer">
          <Nav className="mr-auto navContainer">
            <div className="linkSingleContainer">
            <Link id="dashLink" className="newsButton" to="/">
              <h3>News</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
            <div className="linkSingleContainer">
            <Link id="dashLink" to="/blog">
              <h3>Blog</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
            <div className="linkSingleContainer">
            <Link id="dashLink" to="/hobbyla">
              <h3>Hobby-La</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
            <div className="linkSingleContainer">
            <Link id="dashLink" to="/tutorials">
              <h3>Tutorials</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
            <div className="linkSingleContainer">
            <Link id="dashLink" to="/art">
              <h3>Art</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
            <div className="linkSingleContainer">
            <Link id="dashLink" to="/contact">
              <h3>Contact</h3>
              <img src={newsCoo} alt="newsCoo" className="newsImg" />
            </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {/* News, Blog, Hobby-La, Tutorials, Art, Contact */}
    </div>
  );
};

export default Navlinks;
