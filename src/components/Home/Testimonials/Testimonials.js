import React, { useEffect, useState } from "react";
import Testimonial from "../Testimonial/Testimonial";
import "./Testimonials.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <section className="testimonials my-5 py-5">
      <div className="container">
        <div className="section-header">
          <h5 className="text-brand text-uppercase text-center">Testimonial</h5>
          <h1 className="text-center">What Our Clients Says</h1>
        </div>

        <div className="card-deck mt-5">
          {reviews.map((reviewData) => (
            <Testimonial reviewData={reviewData} key={reviewData.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
