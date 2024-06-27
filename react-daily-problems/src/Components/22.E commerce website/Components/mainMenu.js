import React, { useEffect, useState } from "react";
import axios from "axios";

const MainMenu = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://api.escuelajs.co/api/v1/products"
        );
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const searchProducts = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };
  // useEffect(() => {}, [searchTerm, products]);

  return (
    <div className="App">
      <h1>E Commerce Site</h1>
      <div className="search">
        <input
          className="search-input"
          placeholder="Search"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button button="searchbutton" onClick={searchProducts}>
          Search
        </button>
      </div>

      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.images[0]}
              className="product-image"
              alt={product.title}
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}$</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
