import "./../App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Parent from "./Parent";
import UseMemoExample from "./Memo";

function Dashboard() {
  return (
    <>
      <Header />
      <Parent />
      <UseMemoExample />
      {/* outlet is use to render child which matched route */}
      <Outlet />
    </>
  );
}

export default Dashboard;
