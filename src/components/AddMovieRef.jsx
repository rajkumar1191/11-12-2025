import { useRef, useState } from "react";

const AddMovieRef = ({ movieDetails, mName }) => {
  const mNameRef = useRef("");
  const yearRef = useRef(0);
  const priceRef = useRef(0);

  const [name, setName] = useState("");
  const [year, setYear] = useState(null);
  const [price, setPrice] = useState(0);

  // console.log(errors)
  const handleChange = (e) => {
    if (e.target.name == "mname") {
      setName(mNameRef.current.value);
    }
    if (e.target.name == "year") {
      setYear(yearRef.current.value);
    }
    if (e.target.name == "price") {
      setPrice(priceRef.current.value);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(mNameRef, mNameRef.current.value);
    console.log(yearRef, yearRef.current.value);
    console.log(priceRef, priceRef.current.value);

    if (mNameRef.current.value == "") {
      mNameRef.current.focus();
      return;
    }
    if (yearRef.current.value == "") {
      yearRef.current.focus();
      return;
    }
    if (priceRef.current.value == "") {
      priceRef.current.focus();
      return;
    }

    movieDetails({
      id: Date.now(),
      name: name,
      year: year,
      price: price,
    });
  };

  return (
    <>
      <h5>Movie Details - {mName}</h5>
      <form onSubmit={submit}>
        <input
          type="text"
          name="mname"
          ref={mNameRef}
          placeholder="Enter movie name"
          onChange={handleChange}
          onBlur={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="year"
          ref={yearRef}
          placeholder="Enter release year"
          onChange={handleChange}
          onBlur={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="price"
          ref={priceRef}
          placeholder="Enter movie ticket price"
          onChange={handleChange}
          onBlur={handleChange}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddMovieRef;
