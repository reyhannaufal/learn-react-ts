import { useReducer } from "react";
import Button from "./layout/Button";

const initialState = {
  counter: 1,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
      throw new Error("Bad action");
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <div>{state.counter}</div>
      <div className="space-x-2">
        <Button
          text="increment"
          onClick={() => dispatch({ type: "increment", payload: 10 })}
        />

        <Button
          text="decrement"
          onClick={() => dispatch({ type: "decrement", payload: 10 })}
        />
      </div>
    </div>
  );
}
