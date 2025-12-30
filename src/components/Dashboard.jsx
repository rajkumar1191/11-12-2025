import "./../App.css";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Parent from "./Parent";
import UseMemoExample from "./Memo";
import Counter from "./counter/counter";
import UsersList from "./users/userList";

function Dashboard() {
  return (
    <>
      <Header />
      <Counter />
      <UsersList />
      {/* <Parent />
      <UseMemoExample /> */}
      {/* outlet is use to render child which matched route */}
      <Outlet />
    </>
  );
}

export default Dashboard;
