import "./Banner.css";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import axiosInstance from "./axios";

const Banner = () => {
  const [bannerMovie, setBannerMovie] = useState([]);

  const fetchBannerData = async () => {
    const request = await axiosInstance.get(requests.fetchNetflixOriginal);
    const random =
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ];
    setBannerMovie(random);
    return request;
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n - 1) + "...." : str;
  };
  useEffect(() => {
    fetchBannerData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${bannerMovie?.backdrop_path}")`,
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {bannerMovie?.title ||
            bannerMovie?.name ||
            bannerMovie?.original_name}
        </h1>
        <div className="banner-button-container">
          <button className="banner-button">play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-descrip">
          {truncate(bannerMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fade-button"></div>
    </header>
  );
};

export default Banner;
