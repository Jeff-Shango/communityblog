import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import tutorial from "./tutorials.json";

const TutorialsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTutorial = tutorial.filter(
    (tutorial) =>
      tutorial.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutorial.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="dashTitle">Tutorial</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search Tutorials..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CardGroup>
        {filteredTutorial.map((tutorial) => (
          <Card key={tutorial.id}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{tutorial.title}</Card.Title>
              <Card.Text>{tutorial.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{tutorial.smallText}</small>
            </Card.Footer>
            <a href={tutorial.link} className="btn stretched-link">
              Click Card to go to tutorial
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default TutorialsPage;
