import React from 'react'
import './newsItem.css'

const NewsItem = ({ title, description, url, urlToImage, author, id }) => {
    return (
        <div className="news-app">
            <div className='news-item' >
                <img className='news-img' src={urlToImage} alt={urlToImage} />
                <h3><a target='_new' href={url}>{title}</a></h3>
                <h3>{id}</h3>
                <p>{description}</p>
                <p>{author}</p>
            </div>
        </div>
    )
}

export default NewsItem