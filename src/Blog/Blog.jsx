import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";

const Blog = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const blogs = [
    {
      id: 1,
      link: "/blog",
      title: "Blog Entry #1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
    {
      id: 2,
      link: "/blog",
      title: "Blog Entry #2",
      text: "This card has supporting text below as a natural lead-in to additional ... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
    {
      id: 3,
      link: "/blog",
      title: "Blog Entry #3",
      text: "This is a wider card with supporting text below as a natural lead-in to additional... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
  ];

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );
  }

  return (
    <>
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
          <Card.Text>
            {blog.text}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{blog.smallText}</small>
        </Card.Footer>
        <a href={blog.link} className="btn stretched-link">Click Card to go to Blog</a>
      </Card>
      ))}
    </CardGroup>
    </>
  );
};

export default Blog;
