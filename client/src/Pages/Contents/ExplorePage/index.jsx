import React, { useState, useEffect } from 'react'

const ExplorePage = () => {
    useEffect(() => {

    }, [])


    return (
        <>
            <div className="no-bottom no-top" id="content">
                <div id="top" />
                {/* section begin */}
                <section
                    id="subheader"
                    className="text-light"
                    data-bgimage="url(assets/images/background/subheader-dark.jpg) top"
                >
                    <div className="center-y relative text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 flex md:flex-row lg:flex-row sm:flex-col justify-center items-center -z-20">
                                    <div className="columns-6 flex flex-1 md:top-0 md:left-20 md:-bottom-56 md:right-96 lg:absolute md:absolute">
                                        <img className="w-56 h-56" src="assets/images/custom/anime-girl2.png" alt="anime-hot" />
                                    </div>
                                    <div className='columns-6 text-center  flex justify-center items-center w-1/2'>
                                        <h1 className='text-5xl font-bold  flex'>Explore</h1>
                                    </div>
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </section>
                {/* section close */}
                {/* section begin */}
                <section aria-label="section">
                    <div className="container">
                        <div className="row wow fadeIn">
                            <div className="col-lg-12">
                                <div className="items_filter">
                                    <form
                                        action="blank.php"
                                        className="row form-dark"
                                        id="form_quick_search"
                                        method="post"
                                        name="form_quick_search"
                                    >
                                        <div className="col text-center">
                                            <input
                                                className="form-control"
                                                id="name_1"
                                                name="name_1"
                                                placeholder="search item here..."
                                                type="text"
                                            />{" "}
                                            <a href="#" id="btn-submit">
                                                <i className="fa fa-search bg-color-secondary" />
                                            </a>
                                            <div className="clearfix" />
                                        </div>
                                    </form>
                                    <div id="item_category" className="dropdown">
                                        <a href="#" className="btn-selector">
                                            All categories
                                        </a>
                                        <ul>
                                            <li className="active">
                                                <span>All categories</span>
                                            </li>
                                            <li>
                                                <span>Art</span>
                                            </li>
                                            <li>
                                                <span>Music</span>
                                            </li>
                                            <li>
                                                <span>Domain Names</span>
                                            </li>
                                            <li>
                                                <span>Virtual World</span>
                                            </li>
                                            <li>
                                                <span>Trading Cards</span>
                                            </li>
                                            <li>
                                                <span>Collectibles</span>
                                            </li>
                                            <li>
                                                <span>Sports</span>
                                            </li>
                                            <li>
                                                <span>Utility</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="buy_category" className="dropdown">
                                        <a href="#" className="btn-selector">
                                            Buy Now
                                        </a>
                                        <ul>
                                            <li className="active">
                                                <span>Buy Now</span>
                                            </li>
                                            <li>
                                                <span>On Auction</span>
                                            </li>
                                            <li>
                                                <span>Has Offers</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="items_type" className="dropdown">
                                        <a href="#" className="btn-selector">
                                            All Items
                                        </a>
                                        <ul>
                                            <li className="active">
                                                <span>All Items</span>
                                            </li>
                                            <li>
                                                <span>Single Items</span>
                                            </li>
                                            <li>
                                                <span>Bundles</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={16}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-1.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-1.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Pinky Ocean</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.08 ETH<span>1/20</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>50</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-10.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-2.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Deep Sea Phantasy</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.06 ETH<span>1/22</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>80</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={14}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-11.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-3.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Rainbow Style</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.05 ETH<span>1/11</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>97</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-12.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-4.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Two Tigers</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.02 ETH<span>1/15</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>73</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-9.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-4.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>The Truth</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.06 ETH<span>1/20</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>26</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={20}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-2.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-2.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Running Puppets</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.03 ETH<span>1/24</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>45</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-3.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-1.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>USA Wordmation</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.09 ETH<span>1/25</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>76</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={29}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-4.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-5.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Loop Donut</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.09 ETH<span>1/14</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>94</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={16}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-5.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-3.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Lady Copter</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.08 ETH<span>1/21</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>75</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-7.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-5.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Purple Planet</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.02 ETH<span>1/18</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>93</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div
                                        className="de_countdown"
                                        data-year={2021}
                                        data-month={9}
                                        data-day={16}
                                        data-hour={8}
                                    />
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-6.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-6.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Oh Yeah!</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.025 ETH<span>1/12</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-8.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-7.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>This is Our Story</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.035 ETH<span>1/8</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>21</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-9.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-6.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Pixel World</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.015 ETH<span>1/25</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>46</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-12.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/anim-8.webp"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>I Believe I Can Fly</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.055 ETH<span>1/4</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>54</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-4.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-7.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Cute Astronout</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.005 ETH<span>1/30</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>32</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* nft item begin */}
                            <div className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12">
                                <div className="nft__item">
                                    <div className="author_list_pp">
                                        <a href="dark-author.html">
                                            <img className="lazy" src="assets/images/author/author-1.jpg" alt />
                                            <i className="fa fa-check" />
                                        </a>
                                    </div>
                                    <div className="nft__item_wrap">
                                        <a href="dark-item-details.html">
                                            <img
                                                src="assets/images/items/static-8.jpg"
                                                className="lazy nft__item_preview"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft__item_info">
                                        <a href="dark-item-details.html">
                                            <h4>Teal Ocean</h4>
                                        </a>
                                        <div className="nft__item_price">
                                            0.025 ETH<span>1/12</span>
                                        </div>
                                        <div className="nft__item_action">
                                            <a href="#">Place a bid</a>
                                        </div>
                                        <div className="nft__item_like">
                                            <i className="fa fa-heart" />
                                            <span>24</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 text-center">
                                <a href="#" id="loadmore" className="btn-main wow fadeInUp lead">
                                    Load more
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="section-collections" data-bgcolor="#21273e">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-yellow-300 to-red-600'>Hot Collections </h1>
                                    <div className="small-border bg-color-2" />
                                </div>
                            </div>
                            <div id="collection-carousel" className="owl-carousel wow fadeIn">
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-1.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-1.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Abstraction</h4>
                                        </a>
                                        <span>ERC-192</span>
                                    </div>
                                </div>
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-2.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-2.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Patternlicious</h4>
                                        </a>
                                        <span>ERC-61</span>
                                    </div>
                                </div>
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-3.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-3.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Skecthify</h4>
                                        </a>
                                        <span>ERC-126</span>
                                    </div>
                                </div>
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-4.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-4.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Cartoonism</h4>
                                        </a>
                                        <span>ERC-73</span>
                                    </div>
                                </div>
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-5.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-5.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Virtuland</h4>
                                        </a>
                                        <span>ERC-85</span>
                                    </div>
                                </div>
                                <div className="nft_coll">
                                    <div className="nft_wrap">
                                        <a href="dark-collection.html">
                                            <img
                                                src="assets/images/collections/coll-6.jpg"
                                                className="lazy img-fluid"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div className="nft_coll_pp">
                                        <a href="dark-collection.html">
                                            <img
                                                className="lazy"
                                                src="assets/images/author/author-6.jpg"
                                                alt
                                            />
                                        </a>
                                        <i className="fa fa-check" />
                                    </div>
                                    <div className="nft_coll_info">
                                        <a href="dark-collection.html">
                                            <h4>Papercut</h4>
                                        </a>
                                        <span>ERC-42</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ExplorePage
