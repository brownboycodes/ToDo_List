import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/page_components/About";
import MainPage from "./components/page_components/MainPage";
import NotFound from "./components/page_components/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
