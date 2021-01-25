import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "./axios";
import YouTube from "react-youtube";

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";
  const apiKEY = "ca111fc76ddb0a957abd6bc6dedadfb4";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    width: "100%",
    height: "390",
    playerVars: {
      autoplay: 1,
    },
  };

  const clickhandler = (e) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const fetchID = async () => {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${e}?api_key=${apiKEY}&append_to_response=videos`
        );
        const datajson = await data.json();
        setTrailerUrl(datajson.videos.results[0]?.key);
      };
      fetchID();
    }
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((e) => (
          <img
            onClick={() => clickhandler(e.id)}
            key={e.id}
            className={isLargeRow ? "row-posterlarge" : "row-poster"}
            src={`${base_url}${isLargeRow ? e.poster_path : e.backdrop_path}`}
            alt={e.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
