import { useReducer } from "react";

const initialState = {
  form: {
    mname: "",
    year: 0,
    price: 0,
  },
  errors: {
    mname: "",
    year: "",
    price: "",
  },
};

const validateField = (name, value) => {
  if (name == "mname" && value.trim() === "") {
    return "Name cannot be empty";
  }
  if ((name == "year" && isNaN(value)) || Number(value) <= 0) {
    return `${name} must be a non negative number`;
  }
  if ((name == "price" && isNaN(value)) || Number(value) <= 0) {
    return `${name} must be a non negative number`;
  }
  return "";
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD": {
      const { field, value } = action;
      const errorMsg = validateField(field, value);
      return {
        ...state,
        form: {
          ...state.form,
          [field]: value,
        },
        errors: {
          ...state.errors,
          [field]: errorMsg,
        },
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const AddMovie = ({ movieDetails }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const { form, errors } = formData;
  // console.log(errors)
  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("submitted");
    console.log(Object.values(errors));
    const hasError = Object.values(errors).some((error) => error.trim() !== "");
    // const hasEmpty = Object.values(errors).some((error) => error.trim() === "");
    if (hasError) {
      alert("Please fix all the errors");
      return;
    }

    movieDetails({
      id: Date.now(),
      name: form.mname,
      year: form.year,
      price: form.price,
    });

    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h5>Movie Details</h5>
      <form onSubmit={submit}>
        <input
          type="text"
          name="mname"
          value={form.mname}
          placeholder="Enter movie name"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.mname && <span style={{ color: "red" }}>{errors.mname}</span>}
        <br />
        <br />
        <input
          type="number"
          name="year"
          value={form.year}
          placeholder="Enter release year"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.year && <span style={{ color: "red" }}>{errors.year}</span>}
        <br />
        <br />
        <input
          type="number"
          name="price"
          value={form.price}
          placeholder="Enter movie ticket price"
          onChange={handleChange}
          onBlur={handleChange}
        />
        {errors.price && <span style={{ color: "red" }}>{errors.price}</span>}
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default AddMovie;
