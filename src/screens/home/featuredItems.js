import React from "react";

export const FeaturedItems = () => {
  return (
    <section className="car-auction-section padding-bottom pos-rel oh">
      <div className="car-bg">
        <img src="./assets/images/auction/car/car-bg.png" alt="car" />
      </div>
      <div className="container">
        <div className="section-header-3">
          <div className="left d-block">
            <h2 className="title mb-3">Featured Items</h2>
            <p>Start winning cars with comfort</p>
          </div>
          <a href="#0" className="normal-button">
            View All
          </a>
        </div>
        <div className="row justify-content-center mb-30-none">
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="./product-details.html">
                  <img src="./assets/images/auction/car/auction-1.jpg" alt="car" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                {/* <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a> */}
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="./product-details.html">2018 Hyundai Sonata</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter26" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="./product-details.html">
                  <img src="./assets/images/auction/car/auction-2.jpg" alt="car" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                {/* <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a> */}
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="./product-details.html">2018 Nissan Versa, S</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter27" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
                  <a href="#0" className="custom-button">
                    Submit a bid
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4">
            <div className="auction-item-2">
              <div className="auction-thumb">
                <a href="./product-details.html">
                  <img src="./assets/images/auction/car/auction-3.jpg" alt="car" />
                </a>
                <a href="#0" className="rating">
                  <i className="far fa-star" />
                </a>
                {/* <a href="#0" className="bid">
                  <i className="flaticon-auction" />
                </a> */}
              </div>
              <div className="auction-content">
                <h6 className="title">
                  <a href="./product-details.html">2018 Honda Accord, Sport</a>
                </h6>
                <div className="bid-area">
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-auction" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Current Bid</div>
                      <div className="amount">$876.00</div>
                    </div>
                  </div>
                  <div className="bid-amount">
                    <div className="icon">
                      <i className="flaticon-money" />
                    </div>
                    <div className="amount-content">
                      <div className="current">Buy Now</div>
                      <div className="amount">$5,00.00</div>
                    </div>
                  </div>
                </div>
                <div className="countdown-area">
                  <div className="countdown">
                    <div id="bid_counter28" />
                  </div>
                  <span className="total-bids">30 Bids</span>
                </div>
                <div className="text-center">
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
