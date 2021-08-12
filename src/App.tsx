import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Hooks from "./pages/Hooks";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/hooks" component={Hooks} />
        <Route path="*" exact={true} component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
