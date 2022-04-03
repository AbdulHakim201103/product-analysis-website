import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = useReviews()
    return (
        <div>
            <h1 className='page-title my-5'>Customer Reviews({reviews.length})</h1>
            <div className=' container review-section'>
            
            {
                reviews.map((review)=>(
                    <ReviewCart 
                    key={review.id}
                    review={review} 
                    ></ReviewCart>
                ))                               
            }
        </div>
        </div>
        
    );
};

export default Reviews;