/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 07/07/2021 - 00:03:25
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const CategoryItems = () => {
  const { t } = useTranslation();
  const { isRTL } = useSelector(({ langState }) => langState);

  const productsEN = [
    {
      image: "https://unsplash.com/photos/dVmtrMw6H8A/download?force=true&w=640",
      title: "2017 Civic Type R",
      price: "10000",
      amount: 5,
    },
    {
      image: "https://unsplash.com/photos/6Nub980bI3I/download?force=true&w=640",
      title: "Plain Short Sleeve T Shirt",
      price: "50.00",
      amount: 70,
    },
    {
      image: "https://unsplash.com/photos/7WE1LbSc4zM/download?force=true&w=640",
      title: "White T-Shirt ",
      price: "40.00",
      amount: 30,
    },
    {
      image: "https://unsplash.com/photos/iUVZmC1o2B0/download?force=true&w=640",
      title: "Jeans Jacket",
      price: "876.00",
      amount: 40,
    },
    {
      image: "https://unsplash.com/photos/EDSTj4kCUcw/download?force=true&w=640",
      title: "Jeans Trousers",
      price: "60.00",
      amount: 25,
    },
    {
      image: "https://unsplash.com/photos/12V36G17IbQ/download?force=true&w=640",
      title: "Watch",
      price: "100.00",
      amount: 20,
    },
  ];
  const productsAR = [
    {
      image: "https://unsplash.com/photos/dVmtrMw6H8A/download?force=true&w=640",
      title: "2017 Civic Type R سيارة هوندا",
      price: "10000",
      amount: 5,
    },
    {
      image: "https://unsplash.com/photos/6Nub980bI3I/download?force=true&w=640",
      title: "تيشيرت بكم قصير",
      price: "50.00",
      amount: 70,
    },
    {
      image: "https://unsplash.com/photos/7WE1LbSc4zM/download?force=true&w=640",
      title: "تيشيرت ابيض",
      price: "40.00",
      amount: 30,
    },
    {
      image: "https://unsplash.com/photos/iUVZmC1o2B0/download?force=true&w=640",
      title: "جاكيت جينز",
      price: "50.00",
      amount: 40,
    },
    {
      image: "https://unsplash.com/photos/EDSTj4kCUcw/download?force=true&w=640",
      title: "بنطال جينز",
      price: "60.00",
      amount: 25,
    },
    {
      image: "https://unsplash.com/photos/12V36G17IbQ/download?force=true&w=640",
      title: "ساعة",
      price: "100.00",
      amount: 20,
    },
  ];

  const products = useMemo(
    () => (isRTL ? productsAR : productsEN),
    [productsAR, productsEN, isRTL],
  );

  const renderProducts = () =>
    products?.map((product) => (
      <div className="col-lg-6">
        <div className="auction-item-3">
          <div className="auction-thumb">
            <Link to="/product-details">
              <img
                style={{ height: "164px", objectFit: "cover" }}
                src={product.image || "./assets/images/auction/ending/auction01.png"}
                alt="ending"
              />
            </Link>
          </div>
          <div className="auction-content">
            <h6 className="title">
              <Link to="/product-details">{product.title}</Link>
            </h6>
            <div className="bid-amount">
              <div className="amount-content">
                <div className="current">{t("Price")}</div>
                <div className="amount">${product.price}</div>
              </div>
            </div>
            <div className="bids-area">
              {t("Available Amount")} : <span className="total-bids">{product.amount}</span>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <section className="ending-auction padding-top pos-rel">
      <div
        className="popular-bg bg_img"
        data-background="./assets/images/auction/popular/popular-bg.png"
      />
      <div className="container">
        <div className="section-header cl-white">
          <span className="cate">{t("products from our categories.")}</span>
          <h2 className="title">{t("Most recent Products")}</h2>
        </div>
        <div className="popular-auction-wrapper">
          <div className="row justify-content-center mb-40-none">{renderProducts()}</div>
          <div className="load-wrapper">
            <Link to="/products" className="normal-button">
              {t("See All Products")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
