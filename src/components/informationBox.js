import React, { useEffect } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import api from "../services/api";
import { Breadcrumps } from "./breadcrumps";
import { updateSpinnerStatus } from "../redux/actions";

export const InformationBox = ({ pageId, subTitleQuestion, breadcrumps }) => {
  const [{ loading: pageLoading, data: pageData }] = api.useAxios({
    url: `pages/${pageId}`,
    method: "get",
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateSpinnerStatus({ pageLoading }));
  }, [pageLoading]);

  return (
    <>
      <div className="breadcrump-container">
        <Breadcrumps breadcrumps={breadcrumps} />
      </div>
      <section className="bg-white" style={{ minHeight: "550px" }}>
        <div className="mx-auto rounded-lg">
          <div className="container">
            <div className="" style={{ margin: "64px 0px" }}>
              <h2 className="display-4 text-center font-weight-bold my-3 text-main">
                {pageData?.page?.name}
              </h2>
              {subTitleQuestion && (
                <p className="text-center" style={{ fontSize: "larger" }}>
                  {subTitleQuestion.question}&nbsp;&nbsp;
                  <Link to={subTitleQuestion.link}>{subTitleQuestion.action}</Link>
                </p>
              )}
            </div>
            <div className="pages-rich">
              <p className="" dangerouslySetInnerHTML={{ __html: pageData?.page?.content }} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

InformationBox.propTypes = {
  pageId: propTypes.number.isRequired,
  subTitleQuestion: propTypes.shape(),
  breadcrumps: propTypes.shape().isRequired,
};
InformationBox.defaultProps = {
  subTitleQuestion: null,
};
