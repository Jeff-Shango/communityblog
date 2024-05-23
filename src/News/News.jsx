import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logo from "../assets/logoSolo.png";
import axios from "axios";
import NewsItem from "./NewsItem.js";

const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=52db9c6c0b4f48d7b8bd6e9739770fd2";

// const url = "https://newsapi.org/v2/everything?q=events&Baltimore&from=2024-05-01&to=2024-05-20&language=en&sortBy=publishedAt&apiKey=52db9c6c0b4f48d7b8bd6e9739770fd2";

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
        console.log("Error fetching the articles:", error);
      }
    };

    getArticles(); // Fetch articles on component mount

    const interval = setInterval(() => {
      getArticles();
    }, 6000); // Fetch articles every 6 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  const filterRemovedArticles = (articles) => {
    if (!articles) return [];
    return articles.filter(
      (article) => article.title !== "[Removed]" && article.author !== "[Removed]"
    );
  };

  const filteredArticles = filterRemovedArticles(articles).filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (article.description && article.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (article.content && article.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: "long", day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
 
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
        {filteredArticles.slice(0,3).map((article, index) => (
          <Card key={index}>
            <Card.Img variant="top" src={article.urlToImage || logo} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">{formatDate(article.publishedAt)}</small>
            </Card.Footer>
            <a href={article.url} target="_blank" rel="noreferrer" className="btn stretched-link">
              Click Card to go to news
            </a>
          </Card>
        ))}
      </CardGroup>
    </>
  );
};

export default News;
