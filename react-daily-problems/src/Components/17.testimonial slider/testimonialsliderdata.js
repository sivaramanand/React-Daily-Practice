import React, { useState } from "react";
import "./style.css";

const TestimonialSlider = () => {
  const testimonialSliderData = [
    {
      id: 1,
      name: "John Doe",
      designation: "Employee at ABC",
      message:
        "Outstanding experience! The team was knowledgeable and always available to answer my questions. Their attention to detail and commitment to customer satisfaction is unparalleled.",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Robin Smith",
      designation: "Employee at DCE",
      message:
        "Excellent service and amazing products! The staff went above and beyond to ensure I was satisfied with my purchase. Shipping was fast and the items were packaged securely.",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 4,
    },
    {
      id: 3,
      name: "Sarah Thompson",
      designation: "Employee at CFB",
      message:
        "I've used many companies before, but this one truly stands out. Their dedication to quality and customer care is impressive. The process was smooth and hassle-free.",
      image: "https://randomuser.me/api/portraits/women/86.jpg",
      rating: 3,
    },
    {
      id: 4,
      name: "Alice Williams",
      designation: "Employee at ABC",
      message:
        "This company is fantastic! The product arrived on time and in perfect condition. The customer service team was incredibly friendly and responsive.",
      image: "https://randomuser.me/api/portraits/women/71.jpg",
      rating: 2,
    },
    {
      id: 5,
      name: "Charlie Brown",
      designation: "Worker at XYZ",
      message:
        "Top-notch service! From the moment I placed my order to the moment it arrived, everything was seamless. The customer support team was very helpful and the product exceeded my expectations.",
      image: "https://randomuser.me/api/portraits/men/48.jpg",
      rating: 1,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 2 >= testimonialSliderData.length ? 0 : prevIndex + 2
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 2 < 0 ? testimonialSliderData.length - 2 : prevIndex - 2
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${(currentIndex / 2) * 100}%)` }}
      >
        {testimonialSliderData.map((item) => (
          <div className="testimonial" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <h4>{item.designation}</h4>
            <p>{item.message}</p>
            <p>Rating: {item.rating} / 5</p>
          </div>
        ))}
      </div>
      <div className="slider-buttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default TestimonialSlider;
