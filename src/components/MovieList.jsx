import Movie from "./Movie";

const MovieList = (props) => {
  const { mName, title, year, movies } = props;
  console.log(mName, title, year, movies);
  return (
    <>  
      <h4>Movie List</h4>
      <h5>{mName}</h5>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          year={movie.year}
          name={movie.name}
          id={movie.id}
        />
      ))}
    </>
  );
};

export default MovieList;
