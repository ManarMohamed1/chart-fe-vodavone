/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";

export const Pagination = ({ lastPage, page, setPage }) => {
  const onPageClick = (e, index) => {
    e.preventDefault();
    if (index === page) return;
    setPage(index);
    window.scrollTo(0, 0);
  };

  const onNextClick = (e) => {
    e.preventDefault();
    if (page >= lastPage) return null;
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const onPrevClick = (e) => {
    e.preventDefault();
    if (page <= 1) return null;
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const renderPageNumbers = () => {
    const paginationList = [];
    for (let index = 1; index <= lastPage; index += 1) {
      paginationList.push(
        <li className="page-item" key={index}>
          <a
            href="#"
            className={classNames("page-link", { active: page === index })}
            onClick={(e) => {
              onPageClick(e, index);
            }}>
            {index}
          </a>
        </li>,
      );
    }
    return paginationList;
  };

  return (
    <div className="row">
      <div className="col-lg-12">
        <nav aria-label="page navigation" className="page-navigation">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#" onClick={onPrevClick}>
                Previous
              </a>
            </li>
            {renderPageNumbers()}
            <li className="page-item">
              <a className="page-link" href="#" onClick={onNextClick}>
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  lastPage: propTypes.number.isRequired,
  page: propTypes.number.isRequired,
  setPage: propTypes.func.isRequired,
};
