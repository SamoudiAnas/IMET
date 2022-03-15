import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import Status from "./components/Status";
import AdminAuth from "./pages/Admin/AdminAuth";
import Dashboard from "./pages/Admin/Dashboard";
import Messages from "./pages/Admin/Messages";
import Subscriptions from "./pages/Admin/Subscriptions";
import Shop from "./pages/Shop";
import InterestInProducts from "./pages/Admin/InterestInProducts";
import Auth from "./pages/User/Auth";
import CreateAccount from "./pages/User/CreateAccount";
import CreateNewAccount from "./pages/User/CreateNewAccount";
import MyProfile from "./pages/User/MyProfile";

function App() {
  return (
    <BrowserRouter>
      <Status />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/shop">
          <Shop />
        </Route>

        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>

        <Route exact path="/thank-you">
          <ThankYou />
        </Route>

        <Route path="/new-account">
          <CreateNewAccount />
        </Route>

        <Route path="/my-profile">
          <MyProfile />
        </Route>
        <Route exact path="/create-new-account">
          <CreateAccount />
        </Route>

        <Route exact path="/admin/login">
          <AdminAuth />
        </Route>
        <Route exact path="/admin/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/admin/messages">
          <Messages />
        </Route>
        <Route exact path="/admin/subscriptions">
          <Subscriptions />
        </Route>
        <Route exact path="/admin/interests">
          <InterestInProducts />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
