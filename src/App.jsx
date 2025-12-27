import About from "./components/About";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import AddMovie from "./components/AddMovie";
import ProtectedRoute from "./guard/ProtectedRoute";
import MovieList from "./components/MovieList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          {/* <Route path="/" element={<Dashboard />} /> */}
          <Route path="/movielist" element={<MovieList />} />
          <Route path="/addmovie" element={<AddMovie />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
