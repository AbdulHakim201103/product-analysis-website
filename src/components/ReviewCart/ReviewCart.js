import React from 'react';
import './ReviewCart.css'

const ReviewCart = (props) => {
    const {name,review,rating,img} = props.review
    return (
        <div className='review-cart'>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{review}</p>
            <p className='rating'>Rating: {rating}</p>
        </div>
    );
};

export default ReviewCart;