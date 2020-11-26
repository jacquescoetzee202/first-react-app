import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import FourOhFour from "./components/FourOhFour"
import Adder from "./components/forms/Adder"
import Length from "./components/forms/Length"
import List from "./components/forms/List"
import PasswordStrength from "./components/forms/PasswordStrength"
import TempConverter from "./components/forms/TempConverter"
import ToggleText from "./components/state/ToggleText";
import Die from "./components/stateTricksy/Die";
import Gif from "./components/Gif";
import Square from "./components/Square";

const App = () => (
  <Router >
    <Header>Hello, world</Header>
    <Switch>
      <Route exact path="/">
        <Gif />
      </Route>
      <Route exact path="/lists">
        <Adder />
        <List />
      </Route>
      <Route exact path="/form-checker">
        <Length />
        <PasswordStrength />
      </Route>
      <Route exact path="/temp-converter">
        <TempConverter />
      </Route>
      <Route path="/text-toggle/:target" render={({ match }) => (
        <ToggleText initial="Hello" alternate={ match.params.target } />
      )} >
      </Route>
      <Route exact path="/die/:sides" render={({ match }) => (
        <Die sides={ match.params.sides }></Die>
        )}>
      </Route>
      <Route exact path="/squares/:colour" render={({ match }) => (
        <Square colour={ match.params.colour }></Square>
      )}>
      </Route>
      <FourOhFour />
    </Switch>
    <Footer />
  </Router>
);

export default App;

