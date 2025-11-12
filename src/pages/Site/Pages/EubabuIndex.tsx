import React from 'react'

export default function EubabuIndex() {
    return (
        <div>
            {/*// Main Wrapper \\*/}
            <div className="sportsmagazine-main-wrapper">

                {/*// Header \\*/}
                <header id="sportsmagazine-header" className="sportsmagazine-header-one">

                    {/*// TopStrip \\*/}
                    <div className="sportsmagazine-topstrip">
                        <div className="container">
                            <div className="row">
                                <aside className="col-md-4">
                                    <ul className="sportsmagazine-social-network">
                                        <li><a href="https://www.facebook.com/" className="sportsmagazine-colorhover fa fa-facebook-official"></a></li>
                                        <li><a href="https://twitter.com/login" className="sportsmagazine-colorhover fa fa-twitter-square"></a></li>
                                        <li><a href="https://pk.linkedin.com/" className="sportsmagazine-colorhover fa fa-linkedin-square"></a></li>
                                        <li><a href="https://plus.google.com/" className="sportsmagazine-colorhover fa fa-google-plus-square"></a></li>
                                    </ul>
                                </aside>
                                <aside className="col-md-8">
                                    <ul className="sportsmagazine-user-section">
                                        <li><i className="fa fa-globe"></i> <a href="404.html">Support</a></li>
                                        <li><i className="fa fa-dollar"></i> <a href="404.html">Currency : USD</a></li>
                                        <li><i className="fa fa-shopping-cart"></i> <a href="#" className="sportsmagazine-open-cart">Cart (0)</a>
                                            <div className="sportsmagazine-cart-box">
                                                <h2>You have 2 items in the cart</h2>
                                                <ul>
                                                    <li>
                                                        <figure>
                                                            <a href="checkout.html"><img src="extra-images/cartbox-1.png" alt="" /></a>
                                                        </figure>
                                                        <div className="sportsmagazine-cartbox-text">
                                                            <h6><a href="checkout.html">Key Management Model The 60+ Models</a></h6>
                                                            <div className="sportsmagazine-rating"><span className="sportsmagazine-rating-box" style={{ width: '80%' }}></span></div>
                                                            <span className="sportsmagazine-cartbox-price sportsmagazine-color">$35.99 <small>$43.00</small></span>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <figure>
                                                            <a href="checkout.html"><img src="extra-images/cartbox-2.png" alt="" /></a>
                                                        </figure>
                                                        <div className="sportsmagazine-cartbox-text">
                                                            <h6><a href="checkout.html">Pyramid Principle: Logic Writing &amp; Thinking</a></h6>
                                                            <div className="sportsmagazine-rating"><span className="sportsmagazine-rating-box" style={{ width: '100%' }}></span></div>
                                                            <span className="sportsmagazine-cartbox-price sportsmagazine-color">$21.00</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <h5>Subtotal <span className="sportsmagazine-color">$1343</span></h5>
                                                <div className="sportsmagazine-cart-link"><a href="checkout.html" className="sportsmagazine-cartbox-btn sportsmagazine-bgcolorhover"><i className="flaticon-tool"></i> Go to Checkout</a></div>
                                            </div>
                                        </li>
                                        <li><i className="fa fa-user"></i> <a href="#" data-toggle="modal" data-target="#loginModal">Login</a></li>
                                        <li><i className="fa fa-sign-in"></i> <a href="#" data-toggle="modal" data-target="#signupModal">Sign Up</a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                    {/*// TopStrip \\*/}

                    {/*// MainSection \\*/}
                    <div className="sportsmagazine-main-header">
                        <div className="container">
                            <div className="row">
                                <aside className="col-md-2"><a href="index-2.html" className="sportsmagazine-logo"><img src="images/logo-1.png" alt="" /></a></aside>
                                <div className="col-md-10">
                                    <div className="sportsmagazine-right-section">
                                        <nav className="navbar navbar-default">
                                            <div className="navbar-header">
                                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="true">
                                                    <span className="sr-only">Toggle navigation</span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                    <span className="icon-bar"></span>
                                                </button>
                                            </div>
                                            <div className="collapse navbar-collapse" id="navbar-collapse-1">
                                                <ul className="nav navbar-nav">
                                                    <li className="active"><a href="#">Home</a>
                                                        <ul className="sportsmagazine-dropdown-menu">
                                                            <li><a href="index-2.html">Home One</a></li>
                                                            <li><a href="index-two.html">Home Two</a></li>
                                                            <li><a href="demo2/index.html">Demo Two</a></li>
                                                            <li><a href="darkdemo/index.html">Dark - Version</a></li>
                                                            <li><a href="rtl/index.html">RTL - Version</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="sportsmagazine-megamenu-li"><a href="#">FEATURES</a>
                                                        <ul className="sportsmagazine-megamenu">
                                                            <li className="row">
                                                                <div className="col-md-2">
                                                                    <h4>Link 1</h4>
                                                                    <ul className="sportsmagazine-megalist">
                                                                        <li><a href="fixture.html">Fixture List</a></li>
                                                                        <li><a href="fixture-wls.html">Fixture List W/L/S</a></li>
                                                                        <li><a href="fixture-wrs.html">Fixture List W/R/S</a></li>
                                                                        <li><a href="fixtures-dark1.html">Fixtures Classic</a></li>
                                                                        <li><a href="fixtures-dark2.html">Fixtures Modren</a></li>
                                                                        <li><a href="fixture-detail.html">Fixture Detail</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <h4>Link 2</h4>
                                                                    <ul className="sportsmagazine-megalist">
                                                                        <li><a href="fixture-detail-wls.html">Fixture Detail W/L/S</a></li>
                                                                        <li><a href="gallery.html">Gallery Classic</a></li>
                                                                        <li><a href="gallery-wls.html">Gallery Classic W/L/S</a></li>
                                                                        <li><a href="gallery-wrs.html">Gallery Classic W/R/S</a></li>
                                                                        <li><a href="gallery-modren.html">Gallery Modren</a></li>
                                                                        <li><a href="gallery-modren-wls.html">Gallery Modren W/L/S</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-2">
                                                                    <h4>Link 3</h4>
                                                                    <ul className="sportsmagazine-megalist">
                                                                        <li><a href="gallery-modren-wrs.html">Gallery Modren W/R/S</a></li>
                                                                        <li><a href="login-register.html">Login Register</a></li>
                                                                        <li><a href="search-result.html">No Search Result</a></li>
                                                                        <li><a href="404.html">404 Error Page</a></li>
                                                                        <li><a href="faq.html">Faq</a></li>
                                                                        <li><a href="contact-us.html">Csontact Us</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <a href="#" className="sportsmagazine-thumbnail">
                                                                        <img src="extra-images/megamenu-frame.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">PLAYERS</a>
                                                        <ul className="sportsmagazine-dropdown-menu">
                                                            <li><a href="player-grid.html">Player Grid</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="player-grid.html">Player Grid W/O/S</a></li>
                                                                    <li><a href="player-grid-wls.html">Player Grid W/L/S</a></li>
                                                                    <li><a href="player-grid-wrs.html">Player Grid W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="player-modren.html">Player Modren</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="player-modren.html">Player Modren W/O/S</a></li>
                                                                    <li><a href="player-modren-wls.html">Player Modren W/L/S</a></li>
                                                                    <li><a href="player-modren-wrs.html">Player Modren W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="player-list.html">Player List</a></li>
                                                            <li><a href="fullstanding.html">Full Standing</a></li>
                                                            <li><a href="overview.html">Overview</a></li>
                                                            <li><a href="roster.html">Roster</a></li>
                                                            <li><a href="player-detail.html">Player Detail</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="player-detail.html">Player Detail W/L/S</a></li>
                                                                    <li><a href="player-detail-wls.html">Player Detail W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">OUR NEWS</a>
                                                        <ul className="sportsmagazine-dropdown-menu">
                                                            <li><a href="blog-grid.html">Blog Grid</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="blog-grid.html">Blog Grid W/O/S</a></li>
                                                                    <li><a href="blog-grid-wls.html">Blog Grid W/L/S</a></li>
                                                                    <li><a href="blog-grid-wrs.html">Blog Grid W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="blog-large.html">Blog Large</a></li>
                                                            <li><a href="blog-large-wls.html">Blog Large W/L/S</a></li>
                                                            <li><a href="blog-medium.html">Blog Medium</a></li>
                                                            <li><a href="blog-modren.html">Blog Modren</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="blog-modren.html">Blog Modren W/O/S</a></li>
                                                                    <li><a href="blog-modren-wls.html">Blog Modren W/L/S</a></li>
                                                                    <li><a href="blog-modren-wrs.html">Blog Modren W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="blog-detail.html">Blog Detail</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="blog-detail.html">Blog Detail W/R/S</a></li>
                                                                    <li><a href="blog-detail-wls.html">Blog Detail W/L/S</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">OUR SHOP</a>
                                                        <ul className="sportsmagazine-dropdown-menu">
                                                            <li><a href="shop-grid.html">Shop Grid</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="shop-grid.html">Shop Grid W/O/S</a></li>
                                                                    <li><a href="shop-grid-wls.html">Shop Grid W/L/S</a></li>
                                                                    <li><a href="shop-grid-wrs.html">Shop Grid W/R/S</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="shop-list.html">Shop List</a></li>
                                                            <li><a href="shop-list-wls.html">Shop List W/L/S</a></li>
                                                            <li><a href="shopping-cart.html">Shopping Cart</a></li>
                                                            <li><a href="wishlist.html">WishList</a></li>
                                                            <li><a href="account.html">Account</a></li>
                                                            <li><a href="checkout.html">Checkout</a></li>
                                                            <li><a href="shop-detail.html">Shop Detail</a>
                                                                <ul className="sportsmagazine-dropdown-menu">
                                                                    <li><a href="shop-detail.html">Shop Detail W/R/S</a></li>
                                                                    <li><a href="shop-detail-wls.html">Shop Detail W/L/S</a></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="sportsmagazine-megamenu-li"><a href="#">Contact us</a>
                                                        <ul className="sportsmagazine-megamenu">
                                                            <li className="row">
                                                                <div className="col-md-2">
                                                                    <h4>Links 1</h4>
                                                                    <ul className="sportsmagazine-megalist">
                                                                        <li><a href="404.html">404 Error Page</a></li>
                                                                        <li><a href="faq.html">Faq</a></li>
                                                                        <li><a href="login-register.html">Login Register</a></li>
                                                                        <li><a href="search-result.html">Search Result</a></li>
                                                                        <li><a href="contact-us.html">Contact Us</a></li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <h4>Player text</h4>
                                                                    <div className="sportsmagazine-mega-text">
                                                                        <p>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love.</p>
                                                                        <p>If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.</p>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-5">
                                                                    <h4>sub category widget</h4>
                                                                    <a href="#" className="sportsmagazine-thumbnail">
                                                                        <img src="extra-images/mega-menuadd.jpg" alt="" />
                                                                    </a>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                        <a data-toggle="modal" data-target="#searchModal" href="#" className="sportsmagazine-search-btn sportsmagazine-colorhover"><i className="fa fa-search"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// MainSection \\*/}

                </header>
                {/*// Header \\*/}

               

                {/*// Main Banner \\*/}
                <div className="sportsmagazine-banner">

                    {/*// Slider \\*/}
                    <div className="sportsmagazine-banner-one">
                        <div className="sportsmagazine-banner-one-layer">
                            <img src="extra-images/banner-1.jpg" alt="" />
                            <span className="sportsmagazine-banner-pattren"></span>
                            <div className="sportsmagazine-banner-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sportsmagazine-banner-wrap">
                                                <h1><span>We Are</span> Developing The <strong className="sportsmagazine-color">Game</strong> <span>Be Our Partner</span></h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante Curabitur lacinia diam tempus tempor consectetur. Sed vitae dignissim purueget aliquam libero.</p>
                                                <a href="404.html" className="sportsmagazine-banner-btn">Read More <span></span></a>
                                            </div>
                                            <div className="sportsmagazine-banner-thumb"> <img src="extra-images/banner-thumb-1.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sportsmagazine-banner-one-layer">
                            <img src="extra-images/banner-2.jpg" alt="" />
                            <span className="sportsmagazine-banner-pattren"></span>
                            <div className="sportsmagazine-banner-caption">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="sportsmagazine-banner-wrap">
                                                <h1><span>We Are</span> Developing The <strong className="sportsmagazine-color">Soccer</strong> <span>Be Our Partner</span></h1>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante Curabitur lacinia diam tempus tempor consectetur. Sed vitae dignissim purueget aliquam libero.</p>
                                                <a href="404.html" className="sportsmagazine-banner-btn">Read More <span></span></a>
                                            </div>
                                            <div className="sportsmagazine-banner-thumb"> <img src="extra-images/banner-thumb-1.png" alt="" /> </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*// Slider \\*/}

                </div>
                {/*// Main Banner \\*/}

                {/*// Main Content \\*/}
                <div className="sportsmagazine-main-content">

                    {/*// Main Section \\*/}
                    <div className="sportsmagazine-main-section">
                        <div className="container">
                            <div className="row">

                                {/*// Fixture Slider \\*/}
                                <div className="col-md-12">
                                    <div className="sportsmagazine-fixture-slider">

                                        <div className="sportsmagazine-fixture-slider-layer">
                                            <time dateTime="2008-02-14 20:00">August 23, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child">ARS <span>03</span></li>
                                                <li>CHL <span>02</span></li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer">
                                            <time dateTime="2008-02-14 20:00">August 25, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child">BRC <span>05</span></li>
                                                <li>RM <span>02</span></li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer">
                                            <time dateTime="2008-02-14 20:00">August 28, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child">CIT <span>03</span></li>
                                                <li>KIN <span>03</span></li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer">
                                            <time dateTime="2008-02-14 20:00">August 31, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child">ST <span>00</span></li>
                                                <li>FRA <span>01</span></li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer sportsmagazine-fixture-booked">
                                            <time dateTime="2008-02-14 20:00">September 03, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child"><small>SPA</small> VS <span>RM</span></li>
                                                <li>Full Booked</li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer">
                                            <time dateTime="2008-02-14 20:00">September 05, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child">ARS <span>03</span></li>
                                                <li>CHL <span>02</span></li>
                                            </ul>
                                        </div>
                                        <div className="sportsmagazine-fixture-slider-layer sportsmagazine-fixture-booked">
                                            <time dateTime="2008-02-14 20:00">December 31, 2016</time>
                                            <ul className="sportsmagazine-bgcolor">
                                                <li className="first-child"><small>SPA</small> VS <span>RM</span></li>
                                                <li>Full Booked</li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                                {/*// Fixture Slider \\*/}

                                {/*// Content \\*/}
                                <div className="col-md-8">

                                    {/*// Fancy Title \\*/} <div className="sportsmagazine-fancy-title"><h2>Featured News</h2></div>  {/*// Fancy Title \\*/}
                                    {/*// Featured Slider \\*/}
                                    <div className="sportsmagazine-featured-slider">
                                        <div className="sportsmagazine-featured-slider-layer">
                                            <img src="extra-images/featured-slider-1.jpg" alt="" />
                                            <span className="sportsmagazine-black-transparent"></span>
                                            <div className="sportsmagazine-featured-caption">
                                                <h2>Fusce at molestie elit, sit amet Curabitur in tellus non risu illa vitae non nunc</h2>
                                                <span className="sportsmagazine-color">03 December 2017 / John Maxwell</span>
                                            </div>
                                        </div>
                                        <div className="sportsmagazine-featured-slider-layer">
                                            <img src="extra-images/featured-slider-2.jpg" alt="" />
                                            <span className="sportsmagazine-black-transparent"></span>
                                            <div className="sportsmagazine-featured-caption">
                                                <h2>Fusce at molestie elit, sit amet Curabitur in tellus non risu illa vitae non nunc</h2>
                                                <span className="sportsmagazine-color">03 December 2017 / John Maxwell</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/*// Featured Slider \\*/}

                                    {/*// Latest Match Result \\*/}
                                    <div className="sportsmagazine-match-result">
                                        <div className="sportsmagazine-match-title">
                                            <h4>Latest Match Result</h4>
                                            <span>Saturday, March 24th, 2016</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="extra-images/latest-result-logo-1.png" alt="" />
                                                <h4><a href="fixture-detail.html">Yorkshire</a></h4>
                                                <span>03 Mark Baily (21)</span>
                                            </li>
                                            <li className="sportsmagazine-match-score">
                                                <h5>FINAL SCORE</h5>
                                                <p><strong className="sportsmagazine-color">79</strong> <small>:</small> 73</p>
                                            </li>
                                            <li>
                                                <img src="extra-images/latest-result-logo-2.png" alt="" />
                                                <h4><a href="fixture-detail.html">Sharks Club</a></h4>
                                                <span>03 Mark Baily (21)</span>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*// Latest Match Result \\*/}

                                    {/*// Fancy Title \\*/} <div className="sportsmagazine-fancy-title"><h2>Latest Blogs</h2></div>  {/*// Fancy Title \\*/}
                                    {/*// Blog's \\*/}
                                    <div className="sportsmagazine-blog sportsmagazine-blog-grid">
                                        <ul className="row">
                                            <li className="col-md-6">
                                                <figure>
                                                    <a href="blog-detail.html"><img src="extra-images/latest-blog-1.jpg" alt="" /></a>
                                                    <figcaption>
                                                        <span><small>Featured</small></span>
                                                        <a href="blog-detail.html" className="sportsmagazine-link-btn"><i className="fa fa-link"></i></a>
                                                    </figcaption>
                                                </figure>
                                                <section>
                                                    <h2><a href="blog-detail.html">The new eco friendly stadium won a Leafy Award in 2016</a></h2>
                                                    <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui. Curabitr dignissi luctus nisi id euismod. feugiat eros. Pellentesque tempus tortor.</p>
                                                </section>
                                                <div className="sportsmagazine-blog-grid-options">
                                                    <a href="blog-detail.html" className="sportsmagazine-blog-grid-thumb"><img src="extra-images/blog-thumb-1.jpg" alt="" /> Julia Martyn</a>
                                                    <ul>
                                                        <li><i className="fa fa-thumbs-o-up"></i> <a href="404.html">320</a></li>
                                                        <li><i className="fa fa-eye"></i> <a href="404.html">840</a></li>
                                                        <li><i className="fa fa-share-alt"></i> <a href="404.html">89</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="col-md-6 sportsmagazine-the-league">
                                                <figure>
                                                    <a href="blog-detail.html"><img src="extra-images/latest-blog-2.jpg" alt="" /></a>
                                                    <figcaption>
                                                        <span><small>The League</small></span>
                                                        <a href="blog-detail.html" className="sportsmagazine-link-btn"><i className="fa fa-link"></i></a>
                                                    </figcaption>
                                                </figure>
                                                <section>
                                                    <h2><a href="blog-detail.html">Michael Bryan was chosen as best player with 45 points</a></h2>
                                                    <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui. Curabitr dignissi luctus nisi id euismod. feugiat eros. Pellentesque tempus tortor.</p>
                                                </section>
                                                <div className="sportsmagazine-blog-grid-options">
                                                    <a href="blog-detail.html" className="sportsmagazine-blog-grid-thumb"><img src="extra-images/blog-thumb-1.jpg" alt="" /> Julia Martyn</a>
                                                    <ul>
                                                        <li><i className="fa fa-thumbs-o-up"></i> <a href="404.html">320</a></li>
                                                        <li><i className="fa fa-eye"></i> <a href="404.html">840</a></li>
                                                        <li><i className="fa fa-share-alt"></i> <a href="404.html">89</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="sportsmagazine-blog sportsmagazine-blog-grid">
                                                <ul className="row">
                                                    <li className="col-md-12 sportsmagazine-the-team">
                                                        <figure>
                                                            <a href="blog-detail.html"><img src="extra-images/latest-blog-3.jpg" alt="" /></a>
                                                            <figcaption>
                                                                <span><small>The Team</small></span>
                                                                <a href="blog-detail.html" className="sportsmagazine-link-btn"><i className="fa fa-link"></i></a>
                                                            </figcaption>
                                                        </figure>
                                                        <section>
                                                            <h2><a href="blog-detail.html">The vicotory againts The Shark brings us close to the Final</a></h2>
                                                            <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui. Curabitr dignissi luctus nisi id euismod. feugiat eros. Pellentesque tempus tortor.</p>
                                                        </section>
                                                        <div className="sportsmagazine-blog-grid-options">
                                                            <a href="blog-detail.html" className="sportsmagazine-blog-grid-thumb"><img src="extra-images/blog-thumb-1.jpg" alt="" /> Julia Martyn</a>
                                                            <ul>
                                                                <li><i className="fa fa-thumbs-o-up"></i> <a href="404.html">320</a></li>
                                                                <li><i className="fa fa-eye"></i> <a href="404.html">840</a></li>
                                                                <li><i className="fa fa-share-alt"></i> <a href="404.html">89</a></li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="sportsmagazine-blog sportsmagazine-blog-list">
                                                <ul className="row">
                                                    <li className="col-md-12">
                                                        <div className="sportsmagazine-blog-list-wrap">
                                                            <span>The Team</span>
                                                            <h6><a href="blog-detail.html">The victry againts The Shark bring us closer to the Final</a></h6>
                                                            <time dateTime="2008-02-14 20:00">August 23rd, 2017</time>
                                                            <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui.</p>
                                                        </div>
                                                    </li>
                                                    <li className="col-md-12 playoffs">
                                                        <div className="sportsmagazine-blog-list-wrap">
                                                            <span>Playoffs</span>
                                                            <h6><a href="blog-detail.html">The new eco friendly stadium won a Leafy Award in 2016</a></h6>
                                                            <time dateTime="2008-02-14 20:00">August 23rd, 2017</time>
                                                            <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui.</p>
                                                        </div>
                                                    </li>
                                                    <li className="col-md-12 playoffs">
                                                        <div className="sportsmagazine-blog-list-wrap">
                                                            <span>Playoffs</span>
                                                            <h6><a href="blog-detail.html">The new eco friendly stadium won a Leafy Award in 2016</a></h6>
                                                            <time dateTime="2008-02-14 20:00">August 23rd, 2017</time>
                                                            <p>Lorem ipsum dolor sit amet, consecttur adipis elit. Vestibulum a nunc dui.</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/*// Blog's \\*/}

                                    {/*// Advertisement \\*/}
                                    <figure className="sportsmagazine-add-banner">
                                        <img src="extra-images/add-thumb-1.jpg" alt="" />
                                        <span className="sportsmagazine-add-transparent"></span>
                                        <figcaption>
                                            <div className="sportsmagazine-addbanner-caption">
                                                <h2>Take a look at the brand New Uniforms for next season</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Utac malesuada ante. Curabitur lacinia.</p>
                                                <a href="404.html" className="sportsmagazine-banner-btn">Read More <span></span></a>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    {/*// Advertisement \\*/}

                                    {/*// Fancy Title \\*/} <div className="sportsmagazine-fancy-title"><h2>Popular Players</h2></div>  {/*// Fancy Title \\*/}
                                    <div className="sportsmagazine-player-slider">

                                        <div className="sportsmagazine-player-slider-image">
                                            <div className="sportsmagazine-player-image-layer">
                                                <img src="extra-images/player-slider-image-1.png" alt="" />
                                                <div className="sportsmagazine-player-slider-caption">
                                                    <span>97</span>
                                                    <section>
                                                        <h6><a href="fixture-detail.html">Micheal Darren</a></h6>
                                                        <small>Forword</small>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="sportsmagazine-player-image-layer">
                                                <img src="extra-images/player-slider-image-2.png" alt="" />
                                                <div className="sportsmagazine-player-slider-caption">
                                                    <span>38</span>
                                                    <section>
                                                        <h6><a href="fixture-detail.html">sarena Jordan</a></h6>
                                                        <small>Defensive</small>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="sportsmagazine-player-image-layer">
                                                <img src="extra-images/player-slider-image-3.png" alt="" />
                                                <div className="sportsmagazine-player-slider-caption">
                                                    <span>97</span>
                                                    <section>
                                                        <h6><a href="fixture-detail.html">Micheal Darren</a></h6>
                                                        <small>Forword</small>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="sportsmagazine-player-image-layer">
                                                <img src="extra-images/player-slider-image-2.png" alt="" />
                                                <div className="sportsmagazine-player-slider-caption">
                                                    <span>10</span>
                                                    <section>
                                                        <h6><a href="fixture-detail.html">Chris Marlon</a></h6>
                                                        <small>Forword</small>
                                                    </section>
                                                </div>
                                            </div>
                                            <div className="sportsmagazine-player-image-layer">
                                                <img src="extra-images/player-slider-image-1.png" alt="" />
                                                <div className="sportsmagazine-player-slider-caption">
                                                    <span>97</span>
                                                    <section>
                                                        <h6><a href="fixture-detail.html">Micheal Darren</a></h6>
                                                        <small>Forword</small>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sportsmagazine-player-slider-nav">
                                            <div className="sportsmagazine-player-nav-layer">
                                                <span>09</span>
                                                <section>
                                                    <h6>Kieron strauss</h6>
                                                    <small>Forword</small>
                                                </section>
                                            </div>
                                            <div className="sportsmagazine-player-nav-layer">
                                                <span>38</span>
                                                <section>
                                                    <h6>sarena Jordan</h6>
                                                    <small>Defensive</small>
                                                </section>
                                            </div>
                                            <div className="sportsmagazine-player-nav-layer">
                                                <span>97</span>
                                                <section>
                                                    <h6>Micheal Darren</h6>
                                                    <small>Forword</small>
                                                </section>
                                            </div>
                                            <div className="sportsmagazine-player-nav-layer">
                                                <span>10</span>
                                                <section>
                                                    <h6>Chris Marlon</h6>
                                                    <small>Forword</small>
                                                </section>
                                            </div>
                                            <div className="sportsmagazine-player-nav-layer">
                                                <span>09</span>
                                                <section>
                                                    <h6>Kieron strauss</h6>
                                                    <small>Forword</small>
                                                </section>
                                            </div>
                                        </div>

                                    </div>

                                    {/*// Fancy Title \\*/} <div className="sportsmagazine-fancy-title"><h2>Club Media</h2></div>  {/*// Fancy Title \\*/}
                                    <div className="sportsmagazine-gallery sportsmagazine-fixture-gallery">
                                        <ul>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img1.jpg" className="fancybox"><img src="extra-images/gallery-modren-img1.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>12 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">May 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img2.jpg" className="fancybox"><img src="extra-images/gallery-modren-img2.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>11 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">Feb 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img3.jpg" className="fancybox"><img src="extra-images/gallery-modren-img3.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>7 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">May 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img4.jpg" className="fancybox"><img src="extra-images/gallery-modren-img4.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>4 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">Feb 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img5.jpg" className="fancybox"><img src="extra-images/gallery-modren-img5.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>13 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">May 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                            <li>
                                                <figure>
                                                    <a data-fancybox-group="group" href="extra-images/gallery-modren-img6.jpg" className="fancybox"><img src="extra-images/gallery-modren-img6.jpg" alt="" /><i className="icon-signs23"></i></a>
                                                    <span>6 Photos</span>
                                                    <figcaption>
                                                        <h6><a href="#">The Champion Final will be played</a></h6>
                                                        <time dateTime="2008-02-14 20:00">Feb 17th, 2017</time>
                                                    </figcaption>
                                                </figure>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                {/*// Content \\*/}

                                {/*// SideBaar \\*/}
                                <div className="col-md-4">

                                    {/*// Widget TeamRanking \\*/}
                                    <div className="widget widget_team_ranking">
                                        <div className="sportsmagazine-fancy-title"><h2>Team Rankings</h2></div>
                                        <div className="ranking-title-table">
                                            <ul className="ranking-title-row">
                                                <li>Team Rank</li>
                                                <li>M</li>
                                                <li>W</li>
                                                <li>PTS</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>1</li>
                                                <li> <img src="extra-images/ranking-widget-flag-1.png" alt="" /> <div className="ranking-logo"><span>L.A Pirates</span> <small>Bebop Institute</small> </div> </li>
                                                <li>08</li>
                                                <li>08</li>
                                                <li>16</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>2</li>
                                                <li> <img src="extra-images/ranking-widget-flag-2.png" alt="" /> <div className="ranking-logo"><span>Ocean Kings</span> <small>Icarus College</small> </div> </li>
                                                <li>08</li>
                                                <li>07</li>
                                                <li>14</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>3</li>
                                                <li> <img src="extra-images/ranking-widget-flag-3.png" alt="" /> <div className="ranking-logo"><span>Red Wings</span> <small>Marine College</small> </div> </li>
                                                <li>07</li>
                                                <li>07</li>
                                                <li>14</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>4</li>
                                                <li> <img src="extra-images/ranking-widget-flag-4.png" alt="" /> <div className="ranking-logo"><span>Lucky Clovers</span> <small>Elric Bros School</small> </div> </li>
                                                <li>07</li>
                                                <li>06</li>
                                                <li>12</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>5</li>
                                                <li> <img src="extra-images/ranking-widget-flag-5.png" alt="" /> <div className="ranking-logo"><span>Draconians</span> <small>Atlantic School</small> </div> </li>
                                                <li>06</li>
                                                <li>05</li>
                                                <li>10</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>6</li>
                                                <li> <img src="extra-images/ranking-widget-flag-6.png" alt="" /> <div className="ranking-logo"><span>Bloody Wave</span> <small>Marine College</small> </div> </li>
                                                <li>06</li>
                                                <li>04</li>
                                                <li>08</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>7</li>
                                                <li> <img src="extra-images/ranking-widget-flag-7.png" alt="" /> <div className="ranking-logo"><span>Ocean Kings</span> <small>St. Patrick’s Institute</small> </div> </li>
                                                <li>06</li>
                                                <li>04</li>
                                                <li>08</li>
                                            </ul>
                                        </div>
                                        <div className="ranking-content-table">
                                            <ul className="ranking-content-row">
                                                <li>8</li>
                                                <li> <img src="extra-images/ranking-widget-flag-2.png" alt="" /> <div className="ranking-logo"><span>Sharks</span> <small>Icarus College</small> </div> </li>
                                                <li>06</li>
                                                <li>02</li>
                                                <li>04</li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*// Widget TeamRanking \\*/}

                                    {/*// Widget Popular News \\*/}
                                    <div className="widget widget_popular_news">
                                        <div className="sportsmagazine-fancy-title"><h2>Popular News</h2></div>
                                        <ul>
                                            <li>
                                                <span>01</span>
                                                <div className="popular_news_text">
                                                    <small>The Team</small>
                                                    <a href="blog-detail.html">Basketball Stadium will a max capacity for 5000 fans</a>
                                                    <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                </div>
                                            </li>
                                            <li className="widget-injuries">
                                                <span>02</span>
                                                <div className="popular_news_text">
                                                    <small>Injuries</small>
                                                    <a href="blog-detail.html">The Clovers defense must reinvent itself without</a>
                                                    <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                </div>
                                            </li>
                                            <li className="widget-theleague">
                                                <span>03</span>
                                                <div className="popular_news_text">
                                                    <small>The League</small>
                                                    <a href="blog-detail.html">Take look to the brand new helmets for next season</a>
                                                    <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                </div>
                                            </li>
                                            <li>
                                                <span>04</span>
                                                <div className="popular_news_text">
                                                    <small>The Team</small>
                                                    <a href="blog-detail.html">The Basketball women division started training</a>
                                                    <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                </div>
                                            </li>
                                            <li>
                                                <span>05</span>
                                                <div className="popular_news_text">
                                                    <small>The Team</small>
                                                    <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                    <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*// Widget Popular News \\*/}

                                    {/*// Widget Trending News \\*/}
                                    <div className="widget widget_trending_news">
                                        <div className="sportsmagazine-fancy-title"><h2>Top Trending News</h2></div>
                                        {/* Nav tabs */}
                                        <ul className="nav-tabs" role="tablist">
                                            <li role="presentation" className="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Newset</a></li>
                                            <li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Most Commented</a></li>
                                            <li role="presentation"><a href="#messages" aria-controls="messages" role="tab" data-toggle="tab">Populer</a></li>
                                        </ul>
                                        {/* Tab panes */}
                                        <div className="tab-content">
                                            <div role="tabpanel" className="tab-pane active" id="home">
                                                <div className="widget_popular_news">
                                                    <ul>
                                                        <li>
                                                            <div className="popular_news_text">
                                                                <small>The Team</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                        <li className="widget-injuries">
                                                            <div className="popular_news_text">
                                                                <small>Injuries</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                        <li className="widget-theleague">
                                                            <div className="popular_news_text">
                                                                <small>The League</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane" id="profile">
                                                <div className="widget_popular_news">
                                                    <ul>
                                                        <li className="widget-injuries">
                                                            <div className="popular_news_text">
                                                                <small>Injuries</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="popular_news_text">
                                                                <small>The Team</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div role="tabpanel" className="tab-pane" id="messages">
                                                <div className="widget_popular_news">
                                                    <ul>
                                                        <li className="widget-theleague">
                                                            <div className="popular_news_text">
                                                                <small>The League</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="popular_news_text">
                                                                <small>The Team</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                        <li className="widget-injuries">
                                                            <div className="popular_news_text">
                                                                <small>Injuries</small>
                                                                <a href="blog-detail.html">Basketball Stadium will  a max capacity for 5000 fans</a>
                                                                <time dateTime="2008-02-14 20:00">December 21, 2017</time>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante. Curabitur lacinia diam tempus.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/*// Widget Trending News \\*/}

                                    {/*// Widget Next Match \\*/}
                                    <div className="widget widget_next_match">
                                        <div className="sportsmagazine-fancy-title"><h2>Next Match</h2></div>
                                        <div className="widget_next_match_title">
                                            <h5>Championship Quarter Finals</h5>
                                            <span>Saturday, May 17th, 2017</span>
                                        </div>
                                        <ul>
                                            <li>
                                                <img src="extra-images/widget-next-match-logo-1.png" alt="" />
                                                <h6><a href="fixture-detail.html">Basketball</a></h6>
                                                <small>Sports And Magazine</small>
                                            </li>
                                            <li>
                                                <div className="widget_next_match_option">
                                                    <h6>09:00 pm</h6>
                                                    <small>Madison Stadium</small>
                                                </div>
                                            </li>
                                            <li>
                                                <img src="extra-images/widget-next-match-logo-2.png" alt="" />
                                                <h6><a href="fixture-detail.html">Combine</a></h6>
                                                <small>ST Paddy's Institute</small>
                                            </li>
                                        </ul>
                                        <div className="widget_match_countdown">
                                            <h6>Game Countdown</h6>
                                            <div id="sportsmagazine-countdown"></div>
                                        </div>
                                        <a href="fixture.html" className="widget_match_btn">Buy Ticket Now</a>
                                    </div>
                                    {/*// Widget Next Match \\*/}

                                    {/*// Widget Newsletter \\*/}
                                    <div className="widget widget_newsletter">
                                        <div className="sportsmagazine-fancy-title"><h2>Our Newsletter</h2></div>
                                        <form>
                                            <label>Subscribe Now</label>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac malesuada ante.</p>
                                            <input type="text" value="Your Name" />
                                            <input type="text" value="Enter Your email" />
                                            <label className="widget_newsletter_btn"><input type="submit" value="Subscribe" /></label>
                                        </form>
                                    </div>
                                    {/*// Widget Newsletter \\*/}

                                    {/*// Widget Add \\*/}
                                    <div className="widget widget_add">
                                        <img src="extra-images/add.jpg" alt="" />
                                    </div>
                                    {/*// Widget Add \\*/}

                                </div>
                                {/*// SideBaar \\*/}

                            </div>
                        </div>
                    </div>
                    {/*// Main Section \\*/}

                </div>
                {/*// Main Content \\*/}

                {/*// Footer \\*/}
                <footer id="sportsmagazine-footer" className="sportsmagazine-footer-one">

                    {/*// Footer Widget \\*/}
                    <div className="sportsmagazine-footer-widget">
                        <div className="container">
                            <div className="row">
                                {/*// Widget Contact Info \\*/}
                                <aside className="col-md-4 widget widget_contact_info">
                                    <a href="index-2.html" className="footer-logo"><img src="images/logo-1.png" alt="" /></a>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elUt ac malesuada ante.Sed gravida, ur quis tempus sollicitudin, tellus urna</p>
                                    <ul className="sportsmagazine-social-network">
                                        <li><a href="https://www.facebook.com/" className="sportsmagazine-colorhover fa fa-facebook-official"></a></li>
                                        <li><a href="https://twitter.com/login" className="sportsmagazine-colorhover fa fa-twitter-square"></a></li>
                                        <li><a href="https://pk.linkedin.com/" className="sportsmagazine-colorhover fa fa-linkedin-square"></a></li>
                                        <li><a href="https://plus.google.com/" className="sportsmagazine-colorhover fa fa-google-plus-square"></a></li>
                                    </ul>
                                    <ul className="sportsmagazine-info-list">
                                        <li><i className="fa fa-map-marker"></i> <span>9907 Salford road, east London Uk 2807</span></li>
                                        <li><i className="fa fa-phone"></i> <span>(+92) 123 45 678 - 987 65 432</span></li>
                                        <li><i className="fa fa-envelope"></i> <span><a href="mailto:name@email.com">info@example.com</a></span></li>
                                    </ul>
                                </aside>
                                {/*// Widget Contact Info \\*/}
                                {/*// Widget Twitter \\*/}
                                <aside className="col-md-4 widget widget_twitter">
                                    <div className="footer-widget-title"><h2>Twitter Feeds</h2></div>
                                    <ul>
                                        <li>
                                            <i className="fa fa-twitter"></i> <span>@basketball</span>
                                            <p>Sed gravida, urna quis tempus sollicitudin, tellus urnasuscipit nisl, id rhoncus ligula elit condimentum <a href="404.html">https://t.co/XHrPAM4ANv</a></p>
                                            <time dateTime="2008-02-14 20:00"><i className="fa fa-clock-o"></i> 2 Hours Ago</time>
                                        </li>
                                        <li>
                                            <i className="fa fa-twitter"></i> <span>@football</span>
                                            <p>Sed gravida, urna quis tempus sollicitudin, tellus urnasuscipit nisl, id rhoncus ligula elit condimentum <a href="404.html">https://t.co/XHrPAM4ANv</a></p>
                                            <time dateTime="2008-02-14 20:00"><i className="fa fa-clock-o"></i> 4 Hours Ago</time>
                                        </li>
                                    </ul>
                                </aside>
                                {/*// Widget Twitter \\*/}
                                {/*// Widget Gallery \\*/}
                                <aside className="col-md-4 widget widget_gallery">
                                    <div className="footer-widget-title"><h2>Flicker Photos</h2></div>
                                    <ul>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-1.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-2.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-3.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-4.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-5.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-6.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-7.jpg" alt="" /></a></li>
                                        <li><a data-fancybox-group="group" href="extra-images/widget-gallery-1.jpg" className="fancybox"><img src="extra-images/widget-gallery-8.jpg" alt="" /></a></li>
                                    </ul>
                                </aside>
                                {/*// Widget Gallery \\*/}

                            </div>
                        </div>
                        <a href="#" className="sportsmagazine-back-top"><i className="fa fa-angle-up"></i></a>
                    </div>
                    {/*// Footer Widget \\*/}

                    {/*// CopyRight \\*/}
                    <div className="sportsmagazine-copyright">
                        <div className="container">
                            <div className="row">
                                <aside className="col-md-6 sportsmagazine-copyright-left"><p>© 2016, All Right Reserved - by <a href="index-2.html">EyeCix</a></p></aside>
                                <aside className="col-md-6 sportsmagazine-copyright-right">
                                    <ul className="sportsmagazine-copyright-link">
                                        <li><a href="404.html" className="sportsmagazine-colorhover">Terms And Condition</a></li>
                                        <li><a href="404.html" className="sportsmagazine-colorhover">Privacy Policy</a></li>
                                    </ul>
                                </aside>
                            </div>
                        </div>
                    </div>
                    {/*// CopyRight \\*/}

                </footer>
                {/*// Footer \\*/}

                <div className="clearfix"></div>
            </div>
            {/*// Main Wrapper \\*/}

            {/* SearchModal */}
            <div className="searchmodal modal fade" id="searchModal" tabIndex={-1} role="dialog">
                <a href="#" data-dismiss="modal" className="sportsmagazine-modal-close"><i className="icon-uniF106"></i></a>
                <div className="modal-dialog" role="document">
                    <div className="container">
                        <div className="row">
                            <form className="sportsmagazine-search-box">
                                <input type="text" value="Search Your Keyword" />
                                <input type="submit" value="" />
                                <i className="fa fa-search"></i>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}
