const api_key = "ca111fc76ddb0a957abd6bc6dedadfb4";

const request = {
  //pathname
  fetchTrending: `/trending/all/week?api_key=${api_key}&append_to_response=videos`,

  fetchNeflixOriginal: `/discover/tv?api_key=${api_key}&with_networks=213&append_to_response=videos`,

  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US&page=1&append_to_response=videos`,

  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28&append_to_response=videos`,

  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35&append_to_response=videos`,

  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27&append_to_response=videos`,

  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749&append_to_response=videos`,

  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99&append_to_response=videos`,
};

export default request;
