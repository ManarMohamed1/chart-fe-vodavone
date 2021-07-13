import React, { useEffect } from "react";

export const ScrollToTop = () => {
  // useEffect(() => {
  //   const scrollTop = window.$(".scrollToTop");
  //   window.$(window).on("scroll", function () {
  //     if (window.$(this).scrollTop() < 500) {
  //       scrollTop.removeClass("active");
  //     } else {
  //       scrollTop.addClass("active");
  //     }
  //   });
  //   window.$(".scrollToTop").on("click", function () {
  //     window.$("html, body").animate(
  //       {
  //         scrollTop: 0,
  //       },
  //       500,
  //     );
  //     return false;
  //   });
  // }, []);

  return (
    <>
      <a href="#0" className="scrollToTop">
        <i className="fas fa-angle-up" />
      </a>
      <div className="overlay" />
    </>
  );
};
