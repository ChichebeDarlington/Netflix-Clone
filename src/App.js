import { useState } from "react";
import "./App.css";
import Banner from "./Banner";
import MoviesRow from "./MoviesRow";
import Navbar from "./Navbar";
import requests from "./requests";

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Banner />
      <MoviesRow
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginal}
        largeRow={true}
      />
      <MoviesRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <MoviesRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <MoviesRow title="Action Movie" fetchUrl={requests.fetchActionMovies} />
      <MoviesRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <MoviesRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <MoviesRow
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
      />
      <MoviesRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
