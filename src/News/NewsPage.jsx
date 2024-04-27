import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import news from "./news.json";

const NewsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filterednews = news.filter(
    (news) =>
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className="dashTitle">News</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>
      <CardGroup>
        {filterednews.map((news) => (
          <Card key={news.id}>
            <Card.Img variant="top" src={logo} />
            <Card.Body>
              <Card.Title>{news.title}</Card.Title>
              <Card.Text>{news.text}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{news.smallText}</small>
            </Card.Footer>
            <a href={news.link} className="btn stretched-link">
              Click Card to go to news
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default NewsPage;
