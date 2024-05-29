import React, { useEffect, useState } from "react";

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);

  async function getchImages(getUrl) {
    try {
      const response = await fetch(getUrl);
      const data = await response.json();
    } catch (err) {
      setErrorMsg(err.message);
    }
  }

  useEffect(() => {
    if (url !== "") fetchurl(url);
  }, []);
  return <div className="container"></div>;
};

export default ImageSlider;
