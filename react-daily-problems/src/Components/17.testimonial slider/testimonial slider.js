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
    {
      id: 6,
      name: "Emily Clark",
      designation: "Manager at PQR",
      message:
        "I am extremely satisfied with the service I received. The staff was friendly and the product quality is excellent. I will definitely be a returning customer.",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 5,
    },
    {
      id: 7,
      name: "Michael Johnson",
      designation: "Engineer at MNO",
      message:
        "Great experience overall. The customer support was responsive and helpful. The delivery was quick and the items were exactly as described.",
      image: "https://randomuser.me/api/portraits/men/30.jpg",
      rating: 4,
    },
    {
      id: 8,
      name: "Jessica Lee",
      designation: "Designer at UVW",
      message:
        "Fantastic company! The quality of the products is top-notch and the support team is very professional. I highly recommend them to anyone.",
      image: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
    },
    {
      id: 9,
      name: "David Harris",
      designation: "Developer at STU",
      message:
        "The service was exceptional and the products exceeded my expectations. I will definitely be using this company again in the future.",
      image: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
    },
    {
      id: 10,
      name: "Laura Martinez",
      designation: "Consultant at YZX",
      message:
        "I had a great experience with this company. The staff was very attentive and the delivery was faster than I expected. Highly recommended!",
      image: "https://randomuser.me/api/portraits/women/85.jpg",
      rating: 4,
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
            <p className="rating">Rating: {item.rating} / 5</p>
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
