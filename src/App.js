import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/nav";
import About from "./pages/about";
import Detail from "./pages/detail";
import Home from "./pages/home";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/detail" component={Detail} />
        <Route path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
