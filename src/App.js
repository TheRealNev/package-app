import Platforms from "./components/Platforms";
import Package from "./components/Package";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Platforms} />
            <Route exact path="/:platform/:name" component={Package} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
