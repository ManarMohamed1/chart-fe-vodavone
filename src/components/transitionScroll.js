import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import _ from "lodash";
import api from "../services/api";

export function TransitionScroll() {
  const { pathname } = useLocation();
  const [meta, setMeta] = useState(null);

  const [, fetchMetas] = api.useAxios({ url: "/metas", method: "get" }, { manual: true });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMetas().then(({ data }) => {
      if (pathname.substring(1) === "") {
        setMeta(_.find(data.metas, { page: "home page" }));
      } else {
        setMeta(_.find(data.metas, { page: pathname.split("/")[1] }));
      }
    });
  }, [pathname]);

  return (
    <Helmet>
      <title>{meta ? `Thub | ${meta?.title}` : "Thub"}</title>
      <meta name="description" content={meta && meta.description} />
      <meta name="keywords" content={meta && meta.keywords} />
    </Helmet>
  );
}
