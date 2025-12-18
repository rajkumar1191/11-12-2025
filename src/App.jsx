import MovieList from "./components/MovieList";
import About from "./components/About";
import "./App.css";
import { useState } from "react";

function App() {
  const name = "ABCD";
  const title = "React Tutorial";
  const year = 2026;

  let movieList = [
    {
      id: 1,
      name: "ABC",
      year: 2020,
      price: 180,
    },
    {
      id: 2,
      name: "ABC1",
      year: 2021,
      price: 180,
    },
    {
      id: 3,
      name: "ABC2",
      year: 2022,
      price: 120,
    },
    {
      id: 4,
      name: "ABC3",
      year: 2023,
      price: 200,
    },
    {
      id: 5,
      name: "ABC4",
      year: 2024,
      price: 100,
    },
  ];
  const [movies, setMovies] = useState(movieList);

  const handleMovieDetails = (data) => {
    console.log(data);

    // movieList = [...movieList, data];

    setMovies((prev) => [...prev, data]);

    console.log(movies);
  };

  return (
    <>
      <h1>Dashboard</h1>
      <h3>{name}</h3>
      <MovieList
        mName={name}
        title={title}
        year={year}
        movies={movies}
        movieDetails={handleMovieDetails}
      />
      <About />
    </>
  );
}

export default App;
