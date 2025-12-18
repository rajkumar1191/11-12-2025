import AddMovie from "./AddMovie";
import Movie from "./Movie";

const MovieList = (props) => {
  const { mName, title, year, movies, movieDetails } = props;
  console.log(mName, title, year, movies);

  const sortedPhotos = movies.sort((a, b) => a.price - b.price);

  const filterData = sortedPhotos.filter((movie) => movie.price > 120);

  const handleMovieDetails = (data) => {
    movieDetails(data);
  };

  return (
    <>
      <AddMovie movieDetails={handleMovieDetails} />
      <hr />
      <h4>Movie List - {movies.length}</h4>
      <h5>{mName}</h5>
      {sortedPhotos.map((movie) => (
        <Movie
          key={movie.id}
          year={movie.year}
          name={movie.name}
          price={movie.price}
          id={movie.id}
        />
      ))}
      <hr />

      <h4>Premium Movies</h4>
      {filterData.map((movie) => (
        <Movie
          key={movie.id}
          year={movie.year}
          name={movie.name}
          price={movie.price}
          id={movie.id}
        />
      ))}
    </>
  );
};

export default MovieList;
