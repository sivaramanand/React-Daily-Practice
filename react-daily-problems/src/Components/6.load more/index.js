import React, { useEffect, useState } from "react";
import "./style.css";
const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        console.log(result.products);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchProducts();
  }, [count]);
  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title}></img>
                <ip>{item.title}</ip>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Load more button
        </button>
      </div>
    </div>
  );
};

export default LoadMore;
