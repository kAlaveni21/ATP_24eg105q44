import { createContext, useState } from "react";

// create context
export const UserContext = createContext();

// provider
function UserProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <UserContext.Provider value={{ count, increment }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;