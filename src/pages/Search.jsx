import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import "./MovieGrid.css";

const Search = () => {
    const [searchParams] = useSearchParams()

    const [movies, setMovies] = useState([])
    const query = searchParams.get("")
    
    const getSearchRatedMovies =  async (url) => {
        const res = await fetch(url)
        const data = await res.json();
    
        console.log(data.results.sort((a,b) => {
          return a.vote_average > b.vote_average ? -1 : a.vote_average < b.vote_average ? 1 : 0;
        }))
        setMovies(data.results)
    } 

    useEffect(() => {

        const searchWithQueryUrl = `${searchURL}?query=${query}&${apiKey}`
        

        getSearchRatedMovies(searchWithQueryUrl);

    }, [query])


  return (
    <div className="container">
      <h2 className="title">Resultados para: <span className="query-text">{query}</span></h2>

      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;
