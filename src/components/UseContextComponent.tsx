import { useContext, useState } from "react";
import UserContext, { UserState } from "../store";
import faker from "faker";

function ConsumerComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <p>First: {user.first}</p>
      <p>Last: {user.last}</p>
    </div>
  );
}

function UseContextComponent() {
  const [user, setUser] = useState<UserState>({
    first: "Dud",
    last: "Doe",
  });
  return (
    <UserContext.Provider value={user}>
      <ConsumerComponent />
      <button
        onClick={() =>
          setUser({
            first: faker.name.firstName(),
            last: faker.name.lastName(),
          })
        }
      >
        Change Context
      </button>
    </UserContext.Provider>
  );
}

export default UseContextComponent;
