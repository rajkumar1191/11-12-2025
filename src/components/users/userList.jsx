import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./usersSlice";

export default function UsersList() {
  const dispatch = useDispatch();
  const { list, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  if (status === "loading") return <div>Loading....</div>;
  if (status === "failed") return <div>Error: {error}</div>;

  return (
    <div style={{ padding: "1rem" }}>
      <h3>Users</h3>
      <ul>
        {list.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
