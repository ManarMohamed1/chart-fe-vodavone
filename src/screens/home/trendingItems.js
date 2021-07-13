import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const TrendingItems = () => {
  const { t } = useTranslation();

  return (
    <section className="trending-section padding-bottom padding-top">
      <div className="container">
        <div className="section-header-3">
          <div className="left d-block">
            <h2 className="title mb-3">{t("Trending Items")}</h2>
            <p>{t("Here are the most trending items that you can order from us")}</p>
          </div>
          <Link to="/products" className="normal-button">
            {t("View All")}
          </Link>
        </div>
        <div className="row justify-content-center mb-30-none">
          <div className="col-md-6 col-lg-12">
            <div className="auction-item-6">
              <div className="auction-inner">
                <div className="auction-thumb">
                  <a href="./product-details.html">
                    <img src="./assets/images/auction/trending/auction-1.png" alt="trending" />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  {/* 
                  <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a> 
                  */}
                </div>
                <div className="auction-content">
                  <h5 className="title">
                    <a href="./product-details.html">2016 KIA Optima, EX</a>
                  </h5>
                  <div className="item-information">
                    <ul>
                      <li>
                        <span>Number</span>1-38005900
                      </li>
                      <li>
                        <span>VIN</span>2G1WG5EK3B1312245
                      </li>
                      <li>
                        <span>Milage</span> 153k miles (246k km)
                      </li>
                      <li>
                        <span>Location</span>Sandston (VA)
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Engine</span>2.0 Diesel
                      </li>
                      <li>
                        <span>Transmission</span>Automated
                      </li>
                      <li>
                        <span>Body</span>Offroad car
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="auction-bidding">
                  <div className="countdown">
                    <div id="bid_counter3" />
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bids-area">
                    Total Bids : <span className="total-bids">130 Bids</span>
                  </div>
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="auction-item-6">
              <div className="auction-inner">
                <div className="auction-thumb">
                  <a href="./product-details.html">
                    <img src="./assets/images/auction/trending/auction-2.png" alt="trending" />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  {/* <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a> */}
                </div>
                <div className="auction-content">
                  <h5 className="title">
                    <a href="./product-details.html">2019 Polaris General, 1000 Eps</a>
                  </h5>
                  <div className="item-information">
                    <ul>
                      <li>
                        <span>Number</span>1-38005900
                      </li>
                      <li>
                        <span>VIN</span>2G1WG5EK3B1312245
                      </li>
                      <li>
                        <span>Milage</span> 153k miles (246k km)
                      </li>
                      <li>
                        <span>Location</span>Sandston (VA)
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Engine</span>2.0 Diesel
                      </li>
                      <li>
                        <span>Transmission</span>Automated
                      </li>
                      <li>
                        <span>Body</span>Offroad car
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="auction-bidding">
                  <div className="countdown">
                    <div id="bid_counter4" />
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bids-area">
                    Total Bids : <span className="total-bids">130 Bids</span>
                  </div>
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="auction-item-6">
              <div className="auction-inner">
                <div className="auction-thumb">
                  <a href="./product-details.html">
                    <img src="./assets/images/auction/trending/auction-3.png" alt="trending" />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  {/* <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a> */}
                </div>
                <div className="auction-content">
                  <h5 className="title">
                    <a href="./product-details.html">2018 Hyundai Elantra, Sel/Value/Limited</a>
                  </h5>
                  <div className="item-information">
                    <ul>
                      <li>
                        <span>Number</span>1-38005900
                      </li>
                      <li>
                        <span>VIN</span>2G1WG5EK3B1312245
                      </li>
                      <li>
                        <span>Milage</span> 153k miles (246k km)
                      </li>
                      <li>
                        <span>Location</span>Sandston (VA)
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Engine</span>2.0 Diesel
                      </li>
                      <li>
                        <span>Transmission</span>Automated
                      </li>
                      <li>
                        <span>Body</span>Offroad car
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="auction-bidding">
                  <div className="countdown">
                    <div id="bid_counter5" />
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bids-area">
                    Total Bids : <span className="total-bids">130 Bids</span>
                  </div>
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-12">
            <div className="auction-item-6">
              <div className="auction-inner">
                <div className="auction-thumb">
                  <a href="./product-details.html">
                    <img src="./assets/images/auction/trending/auction-4.png" alt="trending" />
                  </a>
                  <a href="#0" className="rating">
                    <i className="far fa-star" />
                  </a>
                  {/* <a href="#0" className="bid">
                    <i className="flaticon-auction" />
                  </a> */}
                </div>
                <div className="auction-content">
                  <h5 className="title">
                    <a href="./product-details.html">2018 Toyota Camry, L/Le/Xle/Se/Xse</a>
                  </h5>
                  <div className="item-information">
                    <ul>
                      <li>
                        <span>Number</span>1-38005900
                      </li>
                      <li>
                        <span>VIN</span>2G1WG5EK3B1312245
                      </li>
                      <li>
                        <span>Milage</span> 153k miles (246k km)
                      </li>
                      <li>
                        <span>Location</span>Sandston (VA)
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <span>Engine</span>2.0 Diesel
                      </li>
                      <li>
                        <span>Transmission</span>Automated
                      </li>
                      <li>
                        <span>Body</span>Offroad car
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="auction-bidding">
                  <div className="countdown">
                    <div id="bid_counter6" />
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bids-area">
                    Total Bids : <span className="total-bids">130 Bids</span>
                  </div>
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
