import UseEffectComponent from "./UseEffectComponent";
import UseStateComponent from "./useStateComponent";
import UseContextComponent from "./UseContextComponent";
import UseReducerComponent from "./UseReducerComponent";

function App() {
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

export default App;
