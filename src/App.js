import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Adder from "./components/forms/Adder"
import Length from "./components/forms/Length"
import List from "./components/forms/List"
import PasswordStrength from "./components/forms/PasswordStrength"
import TempConverter from "./components/forms/TempConverter"
import ToggleText from "./components/state/ToggleText";
import Die from "./components/stateTricksy/Die";

const App = () => (
  <Router >
    <Header>Hello, world</Header>
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
    <Footer />
  </Router>
);

export default App;

