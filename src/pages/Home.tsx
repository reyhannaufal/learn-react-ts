import UseContextComponent from "../components/UseContextComponent";
import UseEffectComponent from "../components/UseEffectComponent";
import UseReducerComponent from "../components/UseReducerComponent";
import UseStateComponent from "../components/useStateComponent";

export default function Home() {
  return (
    <div className="App">
      <h1>useState</h1>
      <UseStateComponent />
      <h1>UseEffect</h1>
      <UseEffectComponent />
      <h1>useContext</h1>
      <UseContextComponent />
      <h1>useReducer</h1>
      <UseReducerComponent />
    </div>
  );
}
