import { useState } from "react";

const AddMovie = ({ movieDetails }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState(0);
  const [price, setPrice] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    movieDetails({
      id: Date.now(),
      name: name,
      year: year,
      price: price,
    });
  };

  return (
    <>
      <h5>Movie Details</h5>
      <form onSubmit={submit}>
        <input
          type="text"
          name="mName"
          value={name}
          placeholder="Enter movie name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          name="mYear"
          value={year}
          placeholder="Enter release year"
          onChange={(e) => setYear(e.target.value)}
        />
        <br />
        <br />
        <input
          type="number"
          name="mPrice"
          value={price}
          placeholder="Enter movie ticket price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddMovie;
