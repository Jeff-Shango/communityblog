import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import news from "./news.json";
import axios from "axios";

const url = "https://newsapi.org/v2/everything?q=events&Baltimore&from=2024-05-01&to=2024-05-20&language=en&sortBy=publishedAt&apiKey=52db9c6c0b4f48d7b8bd6e9739770fd2";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  useEffect(() => {
    const getArticles = async () => {
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      console.log(response);
    } catch (error) {
      console.log("Error fetching the artcles:", error);
    }
  };
  
  const interval = setInterval(() => {
    getArticles();
  }, 6000); 
  return() => clearInterval(interval);
} );

const filterRemovedArticles = (articles) => {
  if (!articles) return [];
  return articles.filter(
    (article) => 
    article.title !== "[Removed]" && article.author !== "[Removed]"
    );
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

export default News;
