import { useEffect } from "react";
import { useState } from "react"
import NewsItem from "./NewsItem";


const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9ed3561aab7b43f0aa80bae8a7f7b533`;

        fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));

    },[category])

  return (
    <div>
      <h2 className="text-center">Latest <span className="badge bg-danger">News</span></h2>
      {articles.map((news,index)=>{
        return <NewsItem key={index} title={news.title} desciption={news.desciption} src={news.urlToImage} url={news.url}/>
      })}
    </div>
  )
}

export default NewsBoard
