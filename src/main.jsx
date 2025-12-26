import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>
);

/*

ES6 Topics for React:

  1. let & const (Block Scope) 

    React components rely heavily on predictable, scoped variables.
    const → functions, components, state variables
    let → loop counters, reassignable values

  2. Arrow Functions => fat arrow function


    const functionName = function(){
     return data
    }

    const functionName = () => data;
  

    React uses arrow functions:
    1. Component definitions
    2. Event handlers
    3. Inline callbacks

    Key concepts:
      Short syntax
      Implicit return
      No own this

  3. Template Literals

    console.log("hello" +name+ " welcome")

    Dynamic strings for:

      classNames
      API URLs
      Console logs
      Inline JSX strings

      Example:
        `Hello ${name}`

  4. Destructuring 

    const nameObj = {
      id: "sr342"
      name:"raj",
      name1:"raj",
      name2:"raj",
      name3:"raj",
      name4:"raj",
      name5:"raj",
      name6:"raj",
      name7:"raj",
      name8:"raj",
      name9:"raj",
    }

    const { name, id } = nameObj;

    console.log(name)

    const arr = [nameObj , nameObj],

    const [ a , b ] = arr;



    Used constantly in React:
    Props
    State
    Objects returned from hooks

    Examples:

    const {name, age} = props;
    const [count, setCount] = useState(0);

  5. Spread & Rest Operators

    const personDetails = {
      name: "Raj",
      age: "31",
      location: "chennai"
    }

    const newObj = {
      ...personDetails, address: "dfgfdgfd", isStudent: false
    }

    const array1 = [1,2,3,4,5];

    const array2 = [...array1, 'b','c','d'];

    function functionName(a,b,c){
      return a+b+c;
    }

    functionName(10,20,30);

    const functionName = (...numbers) => {
      return a+b+c;
    }

    functionName(10,20,30);


    Spread (…)

      Used for:
      Copying arrays/objects
      Updating state immutably
      Passing props

    Rest (…)

      Used in:

      Function parameters
      Filtering props
      Examples:

      const newArr = [...arr];
      const newObj = {...obj, updated: true};

  6. Default Parameters

      Useful for reusable components & helper functions.

      function Button({ label = "Click Me" }) {}

  7. Enhanced Object Literals

    Cleaner syntax for:

    State objects

    Config objects

    API payloads

    const user = { name, age };

  8. Promises

    React heavily integrates with async operations.

    then, catch

    Error handling

    API calls

  9. async/await

    The modern way to handle APIs.

    const data = await fetchData();


  10. Array Methods (MUST master)

    React uses these constantly:
      map → rendering lists
        const arr = [1,2,3,4,5];
        const result = arr.map((val)=> val*2);
        //[2,4,6,8,10]

      filter → filtering UI
        const arr = [1,2,3,4,5];
        const result = arr.filter((val)=> val > 2);
        //[3,4,5]
      reduce → complex logic
        const arr = [1,2,3,4,5];
        const persons = [
          {
            id: 1,
            name: "Raj",
            mark: 25
          },
          {
            id: 2,
            name: "Raj",
            mark: 20
          },
          {
            id: 3,
            name: "Raj",
            mark: 30
          }
        ]
        const result = arr.reduce((acc, cur)=> acc + cur, 0);
        const result1 = persons.reduce((acc, cur)=> acc + cur.mark, 0);
        //totalcount of arr
      find → lookups
        const arr = [1,2,3,4,5];
        const result = arr.find((val)=> val.mark > 20);
        //3
        //{
            id: 1,
            name: "Raj",
            mark: 25
          }
      some/every → validation
        some -> atleast one item need to be true
        const arr = [1,2,3,4,5];
        const result = arr.some((val)=> val > 5);
        //false

        every -> every item need to be true
        const arr = [1,2,3,4,5];
        const result = arr.every((val)=> val > 4);
        //false

  11. Modules (import/export)

    React depends entirely on ES modules.

    default export
    named export
    importing components
    importing hooks
    importing utilities


  12. Optional Chaining

  Avoids crashes:

    user?.address?.city

    const user{
      address:{
        city:"Chennai"
      }
    }

    if(user?.address?.city){
      //
    } else{

    }

    console.log(`my location  ${user?.address?.city}`)

  13. Nullish Coalescing (??)
    value ?? "default"

    const name = name ?? "Rajkumar";

*/
