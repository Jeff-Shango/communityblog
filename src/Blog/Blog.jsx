import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import blogs from "./blog.json";

// import Content from "./blogFunctions/ReadMore";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );
  // }

  return (
    <>
      <h1 className="dashTitle">Blogs</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search Blogs..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CardGroup>
        {filteredBlogs.map((blog) => (
          <Card key={blog.id}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{blog.smallText}</small>
            </Card.Footer>
            <a href={blog.link} className="btn stretched-link">
              Click Card to go to Blog
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default Blog;
