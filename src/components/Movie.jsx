const Movie = (props) => {
  const { year, name, id, price } = props;
  return (
    <>
      <h4>Name - {name}</h4>
      <h4>Movie Released - {year}</h4>
      <h4>Ticket Rate - {price}</h4>
    </>
  );
};

export default Movie;

//props drilling

//reconcillation -> verify changes present in the virtual dom by comparing with real dom.

// diffing algorithm -> 1. element 2. key for list
