import React from 'react'
import Cards from './Cards'
import './Product.css';
import './AdventPro-Regular.ttf';

import {ProductData} from './ProductData';
function Product() {
    return (
        <div className="product">
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-2 filters">
                    <section>

                        <section>

                        <h2>Filters</h2>


                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3">Types</h6>

                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="new"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="new">Cakes</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="used"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="used">Cupcakes</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="collectible"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="collectible">Macaroons</label>
                            </div>
                            <div className="form-check pl-0 mb-3 pb-1">
                            <input type="checkbox" className="form-check-input filled-in" id="renewed"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="renewed">Macaroons</label>
                            </div>

                        </section>
                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3 review">Avg. Customer Review</h6>

                            <a href="#!">
                            <ul className="rating">
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9734;</p>
                                
                            </ul>
                            </a>
                            <a href="#!">
                            <ul className="rating">
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                
                            </ul>
                            </a>
                            <a href="#!">
                            <ul className="rating">
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                
                            </ul>
                            </a>
                            <a href="#!">
                            <ul className="rating">
                                <p className="ratings">&#9733;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                <p className="ratings">&#9734;</p>
                                
                            </ul>
                            </a>
                
                        </section>
                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3">Price</h6>

                            <div className="form-check pl-0 mb-3">
                            <input type="radio" className="form-check-input" id="under25" name="materialExampleRadios"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="under25">Under ???25</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="radio" className="form-check-input" id="2550" name="materialExampleRadios"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="2550">???25 to ???50</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="radio" className="form-check-input" id="50100" name="materialExampleRadios"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="50100">???50 to ???100</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="radio" className="form-check-input" id="100200" name="materialExampleRadios"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="100200">???100 to ???200</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="radio" className="form-check-input" id="200above" name="materialExampleRadios"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="200above">???200 & Above</label>
                            </div>
                            <form>
                            <div className="d-flex align-items-center mt-4 pb-1">
                                <div className="md-form md-outline my-0">
                                <input id="from" type="text" className="form-control mb-0"/>
                                <label for="form">??? Min</label>
                                </div>
                                <p className="px-2 mb-0 text-muted"> - </p>
                                <div className="md-form md-outline my-0">
                                <input id="to" type="text" className="form-control mb-0"/>
                                <label for="to">??? Max</label>
                                </div>
                            </div>
                            </form>

                        </section>
                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3">Price</h6>

                            <div className="slider-price d-flex align-items-center my-4">
                            <span className="font-weight-normal small text-muted mr-2">???0</span>
                            <form className="multi-range-field w-100 mb-1">
                                <input id="multi" className="multi-range" type="range" />
                            </form>
                            <span className="font-weight-normal small text-muted ml-2">???100</span>
                            </div>
                            

                        </section>
                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3">Size</h6>

                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="34"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="34">34</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="36"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="36">36</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="38"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="38">38</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                            <input type="checkbox" className="form-check-input filled-in" id="40"/>
                            <label className="form-check-label small text-uppercase card-link-secondary" for="40">40</label>
                            </div>
                            <a className="btn btn-link text-muted p-0" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            More
                            </a>
                            <div className="collapse pt-3" id="collapseExample">
                            <div className="form-check pl-0 mb-3">
                                <input type="checkbox" className="form-check-input filled-in" id="42"/>
                                <label className="form-check-label small text-uppercase card-link-secondary" for="42">42</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input type="checkbox" className="form-check-input filled-in" id="44"/>
                                <label className="form-check-label small text-uppercase card-link-secondary" for="44">44</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input type="checkbox" className="form-check-input filled-in" id="46"/>
                                <label className="form-check-label small text-uppercase card-link-secondary" for="46">46</label>
                            </div>
                            <div className="form-check pl-0 mb-3">
                                <input type="checkbox" className="form-check-input filled-in" id="50"/>
                                <label className="form-check-label small text-uppercase card-link-secondary" for="50">50</label>
                            </div>
                            </div>

                        </section>
                        <section className="mb-4">

                            <h6 className="font-weight-bold mb-3">Color</h6>

                            <div className="btn-group btn-group-toggle btn-color-group d-block mt-n2 ml-n2" data-toggle="buttons">
                            <label className="btn rounded-circle white border-inset-grey p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle grey p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle black p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle green p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle blue p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle purple p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle yellow p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle indigo p-3 m-2">
                                <input type="checkbox" checked autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle red p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            <label className="btn rounded-circle orange p-3 m-2">
                                <input type="checkbox" autocomplete="off"/>
                            </label>
                            </div>

                        </section>

                        </section>

                        </section>
                    </div>
                    <div className="col-md-10">
                        <div className="row mt-3 mb-3">
                            {ProductData.map((item, index)=>{
                                return(
                                    <div className="col-lg-3  col-sm-6 mt-2 card-item">
                                    <Cards key={index} title={item.title} price={item.price} image={item.image} rating={item.rate}/>
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
