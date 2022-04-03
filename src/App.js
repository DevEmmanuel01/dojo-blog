import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
// Full react tutorial #5 - Multiple COmponets
function App() {
  return (
    <Router>
      <div className="App">
        {/* Nesting the navbar in the template */}
        {/*in js*/}
        <Navbar />
        {/* Nesting the HomePage in the template */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
