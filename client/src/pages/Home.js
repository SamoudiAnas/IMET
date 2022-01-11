import React from "react";

//homepage components
import Header from "./HomeSections/Header";
import Struggles from "./HomeSections/Struggles";
import NotifyMe from "./HomeSections/NotifyMe";
import Solutions from "./HomeSections/Solutions";
import Copyright from "./HomeSections/Copyright";

function Home() {
  return (
    <div>
      <Header />
      <Struggles />
      <Solutions />
      <NotifyMe />
      <Copyright />
    </div>
  );
}

export default Home;
