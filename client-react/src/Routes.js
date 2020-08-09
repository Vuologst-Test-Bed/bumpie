import React from "react";
import { Route, Switch } from "react-router-dom";

import NotificationSettings from "./notification-settings";
import SignIn from "./signin";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/notification-settings">
        <NotificationSettings />
      </Route>
      <Route exact path="/sign-in">
        <SignIn />
      </Route>
    </Switch>
  );
}
