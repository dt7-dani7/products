import React from 'react'

function Header() {
    return (
        <div>
            <div id="mySidepanel" className="sidepanel">
            <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">×</a>
            <a href="Homepage_after_login.html">HOME</a>
            <a href="Giveback.html">GIVE BACK</a>
            <a href="Marketplace.html">MARKETPLACE</a>
            <a href="Ecommerce.html">E-COMMERCE</a>
            <a href="Neighbourhood.html">NEIGHBOURHOOD</a>
            <a href="Common_interest.html">COMMON INTEREST</a>
            </div>

            <header id="header" className="fixed-top ">
                <div className="container d-flex align-items-center">
            
                    <a href="Homepage_after_login.html" className="logo mr-auto"><img src="assets/img/cclogo.png" alt="" className="img-fluid"/></a>
                    <a href="#" className=" mr-auto burger " style="left:-36%;" onclick="openNav()">
                        <span></span></a>
        
                    <nav className="nav-menu ">
                        <ul>
                        <li>
                            <input type="text" placeholder="Search Community Cafe Marketplace" className="searchbar"/ >
                            <div className="search"></div>
                        </li>
                        <li><a href="Cart.html"><i className="fa fa-shopping-cart circle-icon" style={{color: 'white'}} ></i> </a>   </li>
                        <li><a href="Profile.html"><i className="fa fa-user circle-icon" style={{color: 'white'}}></i>         </a>    </li>      
                        </ul>
                    <div className="dropdown-content">  
                        <div className="row">
                        <div className="column" style="background-color: #1D3558;">
                            <h3>Home Business</h3>
                            <a href="#">Food</a>
                            <a href="#">Fitness</a>
                            <a href="#">Arts & Crafts</a>
                        </div>
                        <div className="column" style="background-color: #FF5757;">
                            <h3>Domestic</h3>
                            <a href="#">Cook</a>
                            <a href="#">Driver</a>
                            <a href="#">Gardener</a>
                        </div>
                        </div>
                    </div>
                    
                    </nav>         
                </div>
            </header>
        </div>
    )
}

export default Header
