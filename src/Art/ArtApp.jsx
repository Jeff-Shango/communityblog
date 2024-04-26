import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import artApp from "./art.json"

const ArtApp = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

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
