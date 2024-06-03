import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("darkTheme");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const switchTheme = () => {
    const newTheme = !dark;
    setDark(newTheme);
    localStorage.setItem("darkTheme", JSON.stringify(newTheme));
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${count * 10}`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  return (
    <>
      <div className="theme-button">
        <button onClick={switchTheme}>
          Toggle to {dark ? "light" : "dark"}
        </button>
      </div>
      <div className={dark ? "load-more-container" : "load-more-container-light"}>
        <div className="product-container">
          {products.map((item) => (
            <div className={dark ? "product" : "product-light"} key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className="button-container">
          <button onClick={() => setCount(count + 1)}>
            Load more button
          </button>
        </div>
      </div>
    </>
  );
};

export default LoadMore;
