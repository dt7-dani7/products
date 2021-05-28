import React from 'react'
import Cards from './Cards'
import {ProductData} from './ProductData';
function Product() {
    return (
        <div className="product">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-2">
                        helo
                    </div>
                    <div className="col-md-10">
                        <div className="row mt-3 mb-3">
                            {ProductData.map((item, index)=>{
                                return(
                                    <div className="col-md-3 col-sm-6 mt-2">
                                    <Cards key={index} title={item.title} price={item.price} image={item.image} rating={item.rating}/>
                                    </div>
                                )
                            })}







                        
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Product
