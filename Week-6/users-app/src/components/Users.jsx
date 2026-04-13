import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Users() {
  const [users, setUsers] = useState([]);
  const { increment } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {users.map((user) => (
          <div className="col-md-3 mb-4" key={user.id}>
            <div className="card h-100 shadow">
              <div className="card-body text-center">
                <h5>{user.name}</h5>
                <p>{user.email}</p>

                <button
                  className="btn btn-success"
                  onClick={increment}
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;