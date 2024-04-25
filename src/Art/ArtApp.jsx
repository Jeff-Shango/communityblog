import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";

const ArtApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const artApp = [
    {
      id: 1,
      link: "/artApp",
      title: "artApp Entry #1",
      text: "This is a wider card with supporting text below as a natural lead-in to additional... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
    {
      id: 2,
      link: "/artApp",
      title: "artApp Entry #2",
      text: "This is a wider card with supporting text below as a natural lead-in to additional... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
    {
      id: 3,
      link: "/artApp",
      title: "artApp Entry #3",
      text: "This is a wider card with supporting text below as a natural lead-in to additional... Click to read more.......",
      smallText: "Last updated 3 mins ago",
    },
  ];

  const filteredartApp = artApp.filter(
    (artApp) =>
      artApp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artApp.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artApp.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="dashTitle">Art Appreciation</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search artApp..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CardGroup>
        {filteredartApp.map((artApp) => (
          <Card key={artApp.id}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{artApp.title}</Card.Title>
              <Card.Text>{artApp.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{artApp.smallText}</small>
            </Card.Footer>
            <a href={artApp.link} className="btn stretched-link">
              Click Card to go to artApp
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default ArtApp;
