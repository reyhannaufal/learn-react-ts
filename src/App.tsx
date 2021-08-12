import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hooks from "./pages/Hooks";

function App() {
  return (
    <>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/hooks" component={Hooks} />
      </Router>
    </>
  );
}

export default App;
