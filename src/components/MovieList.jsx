import AddMovie from "./AddMovie";
import Movie from "./Movie";
import "./../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const MovieList = (props) => {
  const { isLoggedIn } = useContext(AuthContext);

  const { mName, title, year, movies, movieDetails } = props;
  console.log(mName, title, year, movies);

  const sortedPhotos = movies.sort((a, b) => a.price - b.price);

  const filterData = sortedPhotos.filter((movie) => movie.price > 120);

  const handleMovieDetails = (data) => {
    movieDetails(data);
  };

  return (
    <>
      <AddMovie movieDetails={handleMovieDetails} mName={mName} />
      <hr />
      <h4>
        Movie List - {movies.length} - {isLoggedIn ? "true" : "false"}
      </h4>
      {/* <h5>{mName}</h5> */}
      <div className="movie-container">
        {sortedPhotos.map((movie) => (
          <Movie
            key={movie.id}
            year={movie.year}
            name={movie.name}
            price={movie.price}
            id={movie.id}
          />
        ))}
      </div>

      <h4>Premium Movies</h4>
      <div className="movie-container">
        {filterData.map((movie) => (
          <Movie
            key={movie.id}
            year={movie.year}
            name={movie.name}
            price={movie.price}
            id={movie.id}
          />
        ))}
      </div>
    </>
  );
};

export default MovieList;
