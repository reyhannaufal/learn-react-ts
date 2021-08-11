import { createContext } from "react";

const initialState = {
  first: "Reyhan",
  last: "Naufal",
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;
