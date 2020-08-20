import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";
import SignIn from "./signin";
import FAQ from "./faq";
import Home from "./home";
import AboutUsPage from "./about-us";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/notification-settings">
        <NotificationSettings />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/faq">
        <FAQ />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
<<<<<<< sign-up-design
      <Route exact path="about-us">
=======
      <Route exact path="/about-us">
>>>>>>> Gatsby removal (#56)
        <AboutUsPage />
      </Route>
    </Switch>
  );
}
