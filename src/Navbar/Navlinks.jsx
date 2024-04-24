import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react'
import logo from "../assets/logoSolo.png";

const Navlinks = () => {
  return (
    <div>
                {/* Menu Container */}
        <Navbar expand="md" variant="dark" id="menuContainer">
          <h3 to="https:bozierwedding.netlify.app" id="logoLink">
           <a href='https://jeffbozier.netlify.app'>
            <img src={logo} alt="issa"/>
           </a>
          </h3>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav navContainer">
            <Nav className="mr-auto navContainer">
            <Link id="dashLink" to="/">
            News
          </Link>
          <Link id="dashLink" to="/blog">
            Blog
          </Link>
          <Link id="dashLink" to="/hobbyla">
            Hobby-La
          </Link>
          <Link id="dashLink" to="/tutorials">
            Tutorials
          </Link>
          <Link id="dashLink" to="/art">
            Art
          </Link>
          <Link id="dashLink" to="/contact">
            Contact
          </Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
          {/* News, Blog, Hobby-La, Tutorials, Art, Contact */}
    </div>
  )
}

export default Navlinks