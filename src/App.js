import "./App.css";
import { getMovieList, searchMovie } from "./api";
import {useEffect, useState} from 'react'

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const popularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="Movie-wrapper">
            <div className="Movie-title">{movie.title}</div>
            <img src={movie.poster_path} alt={movie.title} className="Movie-image" />
            <div className="Movie-date">03-12-2022</div>
            <div className="Movie-rate">8.9</div>
          </div>
      )
    })
  }

  const search = (q) => {
    console.log({ q });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Brucel Movie</h1>
        <input
          placeholder="cari film kesayangan.."
          className="Movie-search"
          onChange={({ target }) => search(target.value)}
        />
        <div className="Movie-container">
          <div className="Movie-wrapper">
            <div className="Movie-title">CONTOH PERTAMA</div>
            <img src="" alt="" className="Movie-image" />
            <div className="Movie-date">03-12-2022</div>
            <div className="Movie-rate">8.9</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default App;
