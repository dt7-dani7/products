import React from 'react';
import './Cards.css';

function Cards({title,price,image,rating}) {
    return (
      <div className="card text-center" style={{}}>
         <img src={image} className="card-img-top card-image" alt="..."/>
      <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <ul className="list-group list-group-flush">
     <li className="list-group-item">₹{price}</li>
     <li className="list-group-item">
       {Array(rating).fill().map((_, i) =>(
        <p className="rating">&#9733;</p>
       ))}
        {/* {Array(rating).fill() }
       {Array(rating).fill().map((_, i) =>(
        <p className="rating">&#9734;</p>
       ))} */}
     </li>
    </ul>
      <a href="#" className="get-started-btn cart-button">Add to Cart</a>
      </div>
    </div>
       
    ) 
}

export default Cards
