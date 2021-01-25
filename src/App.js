import "./App.css";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        fetchURL={request.fetchNeflixOriginal}
        title="Netflix original"
        isLargeRow
      />
      <Row fetchURL={request.fetchTrending} title="Trending" />
      <Row fetchURL={request.fetchTopRated} title="comedy" />
      <Row fetchURL={request.fetchActionMovies} title="Action Movies" />
      <Row fetchURL={request.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchURL={request.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchURL={request.fetchRomanceMovies} title="Romance movies" />
      <Row fetchURL={request.fetchDocumentaries} title="Documentaries" />
    </div>
  );
}

export default App;
