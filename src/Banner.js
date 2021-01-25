import axios from "./axios";
import React, { useEffect, useState } from "react";
import request from "./request";
import "./banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(request.fetchNeflixOriginal);
      setMovie(
        requests.data.results[
          Math.floor(Math.random() * requests.data.results.length)
        ]
      );

      return requests;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner-content">
        <h2 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h2>
        <div className="botton">
          <button>Play</button>
          <button>My List</button>
        </div>
        <h1 className="banner-description">
          {movie?.overview}
          {truncate(movie?.overview, 70)}{" "}
        </h1>
      </div>
      <div className="banner-fadebutton" />
    </header>
  );
}

export default Banner;
