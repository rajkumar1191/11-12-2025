import "./../App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Header />
      {/* outlet is use to render child which matched route */}
      <Outlet />
    </>
  );
}

export default Dashboard;
