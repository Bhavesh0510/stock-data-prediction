import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AdminLayout from "layouts/Admin.js";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Reducer/RootReducer";

const store = createStore(rootReducer)


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route path="/" render={(props) => <AdminLayout {...props} />} />
    </Switch>
    </BrowserRouter>
    </Provider>,
  document.getElementById("root")
);
