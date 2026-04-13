import Users from "./components/Users";
import UserCount from "./components/UserCount";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <UserCount />
      <Users />
    </UserProvider>
  );
}

export default App;