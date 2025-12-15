import MovieList from "./components/MovieList";
import About from "./components/About";
import "./App.css";

function App() {
  const name = "ABCD";
  const title = "React Tutorial";
  const year = 2026;

  const movieList = [
    {
      id: 1,
      name: "ABC",
      year: 2020,
    },
    {
      id: 2,
      name: "ABC1",
      year: 2021,
    },
    {
      id: 3,
      name: "ABC2",
      year: 2022,
    },
    {
      id: 4,
      name: "ABC3",
      year: 2023,
    },
    {
      id: 5,
      name: "ABC4",
      year: 2024,
    },
  ];

  return (
    <>
      <h1>Dashboard</h1>
      <h3>{name}</h3>
      <MovieList mName={name} title={title} year={year} movies={movieList} />
      <About />
    </>
  );
}

export default App;
