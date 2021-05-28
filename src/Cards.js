import React from 'react';
import './Cards.css';
function Cards({title,price,image,rating}) {
    return (
      <div className="card text-center" style={{width: 'auto'}}>
         <img src={image} className="card-img-top custom_img" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <ul className="list-group list-group-flush">
     <li className="list-group-item">{price}</li>
     <li className="list-group-item">
       {Array(rating).fill().map((_, i) =>(
        <p>S</p>
       ))}
     </li>
    </ul>
      <a href="n" className="btn btn-primary">Go Dipak</a>
      </div>
    </div>
       
    )
}

export default Cards
