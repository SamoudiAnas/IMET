import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/thank-you">
          <ThankYou />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
