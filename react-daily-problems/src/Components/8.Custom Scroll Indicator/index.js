import React, { useState, useEffect } from "react";
import "./style.css";
const CustomScrollIndicator = ({ url }) => {
  const [data, useData] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    fetchdata(url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);
    return () => {
      window.removeEventListener("scroll", handleScrollPercentage);
    };
  }, []);
  function handleScrollPercentage() {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.clientHeight
    );
  }
  const fetchdata = async (url) => {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      const productnames = data.products.map((item) => {
        return item.title;
      });
      setProducts(productnames);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="maindiv">
      <h1>Scroll Indicator</h1>
      <div className="products">
        {loading ? (
          <div>wait is is loading</div>
        ) : (
          products.map((product, index) => <div key={index}>{product}</div>)
        )}
      </div>
    </div>
  );
};

export default CustomScrollIndicator;
