import Search from "./Search";
import { Route, Switch } from "react-router-dom";
import ResultList from "./SearchResults/ResultList";

function App() {
  return (
    <div className="App">
      <div className="search">
        <Search />
      </div>
      <div className="container">
        <Switch>
          <Route path="/results">
            <ResultList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
