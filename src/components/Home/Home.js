import React from "react";
import logo from './logo.webp'
import "./Home.css";
import useReviews from "../../hooks/useReviews";
import ReviewCart from "../ReviewCart/ReviewCart";
import { Link } from "react-router-dom";

const Home = () => {
  const [reviews] = useReviews()
  return (
    <main className="container my-5">
      <section className="main-section">
        <div>
          <h1 className="text-danger">Made Fresh For You <span className="text-primary">!!!!</span> </h1>
          <h1 className="text-primary">Love At First Bite <span className="text-danger">.......</span></h1>
          <p className="py-3">
            Our range of Signature Cakes and Celebration Cakes are perfect for any type of
            rejoicing! They could be birthdays, anniversaries, christenings or bespoke corporate
            events. Our Cakes are from 100% all natural ingredients, handmade daily to your order.
          </p>
          <button className="btn btn-primary m-2">Order Now</button>
        </div>
        <div className="ms-5">
          <img src={logo} alt="" />
        </div>
      </section>
      <section className="reviews-section">
      <h2 className='page-title my-5'>Customer Reviews({reviews.slice(0,3).length})</h2>
        <div className="review-section">
            {
                reviews.slice(0,3).map((review)=>(
                    <ReviewCart 
                    key={review.id}
                    review={review} 
                    ></ReviewCart>
                ))                               
            }
        </div>
        <Link className='btn btn-primary my-5' to='/reviews'>See All Reviews</Link>
      </section>
      <section></section>
    </main>
  );
};

export default Home;
