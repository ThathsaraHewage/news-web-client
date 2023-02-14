import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// home page
import Home from "./core/Home";

// auth
import Signin from "./user/Signin";
import Signup from "./user/Signup";

// dashboards
import AdminRoutes from "./user-auth/AdminRoutes";
import AdminDashBoard from "./user/AdminDashBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signin" exact component={Signin} />
        <AdminRoutes path="/admin/dashboard" exact component={AdminDashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
