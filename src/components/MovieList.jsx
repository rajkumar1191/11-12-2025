// import AddMovie from "./AddMovie";
import Movie from "./Movie";
import "./../App.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import AddMovieRef from "./AddMovieRef";
import axios from "axios";

const MovieList = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const mName = "ABCD";
  const title = "React Tutorial";
  const year = 2026;

  const [movies, setMovies] = useState([]);
  console.log(mName, title, year, movies);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setMovies(
          res.data.map((list, index) => {
            list.year = 2000 + index;
            list.price = 250 + index;
            return list;
          })
        );
      } catch (err) {
        console.error(err.message);
      }
    };
    getUsers();
  }, []);

  const sortedPhotos = movies.sort((a, b) => a.price - b.price);

  const filterData = sortedPhotos.filter((movie) => movie.price > 120);

  // const handleMovieDetails = (data) => {
  //   movieDetails(data);
  // };

  return (
    <>
      {/* <AddMovieRef movieDetails={handleMovieDetails} mName={mName} /> */}
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
