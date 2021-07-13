/**
 * @description      :
 * @author           : Nonaa
 * @group            :
 * @created          : 07/07/2021 - 00:06:26
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 07/07/2021
 * - Author          : Nonaa
 * - Modification    :
 * */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CallInAction, Rating } from "../../components";
import api from "../../services/api";
import { Banner, HowItWorks, CategoryItems, DownloadApplication, Categories } from "./index";

import { updateSpinnerStatus } from "../../redux/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const [homeData, setHomeData] = useState(null);

  // const [{ loading: homeLoading }, fetchHomeData] = api.useAxios({
  //   url: "/landing-page",
  //   method: "get",
  // });

  // console.log("homeLoading", homeLoading);

  // useEffect(() => {
  //   fetchHomeData().then((res) => {
  //     setHomeData(res.data);
  //   });
  //   return () => {
  //     dispatch(updateSpinnerStatus({ homeLoading: false }));
  //   };
  // }, []);

  // useEffect(() => {
  //   dispatch(updateSpinnerStatus({ homeLoading }));
  // }, [homeLoading]);

  return (
    <div style={{ minHeight: "60vh" }}>
      {/* <Banner />
      <HowItWorks />
      <Categories />
      <CategoryItems />
      <DownloadApplication />
      <CallInAction />
      <Rating /> */}
    </div>
  );
};
