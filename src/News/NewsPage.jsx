import React, { useEffect, useState } from "react";
import axios from "axios";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
// import logo from "../assets/logoSolo.png";
// import news from "./news.json";
import Navlinks from "../Navbar/Navlinks.jsx";
import NewsItem from "./NewsItem.js";
import "../.env";
// require('dotenv').config({ path: "../.env"});

const apiKey = process.env.REACT_APP_API_KEY;

// const url =
//   `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  
  const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=52db9c6c0b4f48d7b8bd6e9739770fd2";


const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getArticles = async () => {
      try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
      console.log(response);
    } catch (error) {
      console.log("Error fetching articles:", error);
    }
    };
    // getArticles();
    
    // fetch and filter articles periodically 
    const interval = setInterval(() => {
      getArticles();
    }, 60000); // fetching every min
    return() => clearInterval(interval);
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  // this takes away the articles that are "removed" and are listed as such
  const filterRemovedArticles = (articles) => {
    if (!articles) return [];
    return articles.filter(
      (article) => 
      article.title !== "[Removed]" && article.author !== "[Removed]"
    );
  };

    const filteredArticles = (articles).filter(
      (article) =>
        article.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
      const getArticles = async () => {
        try {
        const response = await axios.get(url);
        const filtered = filterRemovedArticles(response.data.articles);
        setArticles(filtered);
        console.log(response);

      } catch (error) {
        console.log("error fetching fucking articles:", error);
      }
    }
      getArticles();
    }, []);

  // const filterednews = news.filter(
  //   (news) =>
  //     news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     news.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //     news.smallText.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  return (
    <>
      <Navlinks/> 
      <h1 className="dashTitle">News</h1>
      <div className="filterContainer">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </div>

      {/* og code here  */}
      {/* <CardGroup>
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
      </CardGroup> */}
      {/* end up top */}

      {filteredArticles.map((article) => {
        return (
          <NewsItem
            key={article.title}
            title={article.title}
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage}
            author={article.author}
          />
        );
      })}
    </>
  );
};

export default NewsPage;
