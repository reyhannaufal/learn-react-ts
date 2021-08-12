import { useContext, useState } from "react";
import UserContext, { UserState } from "../store";
import faker from "faker";
import Button from "./layout/Button";

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
      <Button
        text="Change context"
        className="mt-2"
        onClick={() =>
          setUser({
            first: faker.name.firstName(),
            last: faker.name.lastName(),
          })
        }
      />
    </UserContext.Provider>
  );
}

export default UseContextComponent;
