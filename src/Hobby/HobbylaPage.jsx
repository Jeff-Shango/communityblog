import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import hobby from "./hobby.json";
import Navlinks from "../Navbar/Navlinks";

const HobbylaPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  const filteredHobby = hobby.filter(
    (hobby) =>
      hobby.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hobby.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hobby.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navlinks/>
      <h1 className="dashTitle">Hobby</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search Hobby-la..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CardGroup>
        {filteredHobby.map((hobby) => (
          <Card key={hobby.id}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{hobby.title}</Card.Title>
              <Card.Text>{hobby.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{hobby.smallText}</small>
            </Card.Footer>
            <a href={hobby.link} className="btn stretched-link">
              Click Card to go to hobby
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default HobbylaPage;
