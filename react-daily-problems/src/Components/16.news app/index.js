import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

const NewsApp = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [topic, setTopic] = useState("India");

  const setCurrentValue = (value) => {
    setTopic(value);
    setCurrentIndex(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${topic}&apiKey=3b3280f0caeb4630a346c751d54818c0`
        );
        setData(response.data.articles);
        console.log(response.data.articles);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };
    fetchData();
  }, [topic]);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setFade(true);
    }, 500);
  };

  const handlePrevious = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1
      );
      setFade(true);
    }, 500);
  };

  return (
    <>
      <div className="dropdowndiv">
        <select
          className="select"
          onChange={(e) => setCurrentValue(e.target.value)}
          value={topic}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Economics">Economics</option>
          <option value="Palestine">Palestine</option>
          <option value="Sports">Sports</option>
          <option value="Technology">Technology</option>
          <option value="Recession">Recession</option>
          <option value="T20 world cup">T20 World Cup</option>
          <option value="Automibiles">Automibiles</option>
          <option value="Stock Market">Stock Markets</option>
          <option value="Artificial intelligence">AI</option>
          <option value="Football">Football</option>
          <option value="Weather">Weather</option>
        </select>
      </div>
      <div className="news-container">
        {data.length > 0 && (
          <div className={`card ${fade ? "fade-in" : "fade-out"}`}>
            <img
              src={data[currentIndex].urlToImage}
              alt={data[currentIndex].title}
            />
            <div className="card-title">{data[currentIndex].title}</div>
            <div className="card-author">{data[currentIndex].author}</div>
            <div className="card-content">
              {data[currentIndex].content.slice(0, 150)}
            </div>
          </div>
        )}
        <div className="navigation">
          <button onClick={handlePrevious}>&lt; </button>
          <button onClick={handleNext}> &gt; </button>
        </div>
      </div>
    </>
  );
};

export default NewsApp;
