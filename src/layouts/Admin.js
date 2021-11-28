import React, { Component } from "react";
import { useLocation, Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";

import routes from "routes.js";

import sidebarImage from "assets/img/sidebar-4.jpg";
import Dashboard from "views/Dashboard";
import Error from "views/Error";
import User from "views/UserProfile";
import Predict from "views/Predict";
import Contact from "views/Contact";
import About from "views/About";
import Plans from "views/Plans";
import Login from "views/Login";
import Terms from "views/Terms";
import Register from "views/Register";
import { firebaseApp } from "Firebase";
import Upgrade from "views/Upgrade";
import Subscription from "views/Subscription";


function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  
  
  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);
  
  
  
  return (
    <>
      <div className="wrapper">
        <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
        <div className="main-panel" ref={mainPanel}>
          <AdminNavbar />
          <div className="container pb-4 mb-4">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/user" component={User} />
              <Route exact path="/get_quote" component={Predict} />
              <Route exact path="/Contact" component={Contact} />
              <Route exact path="/About" component={About} />
              <Route exact path="/plans" component={Subscription} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/Terms" component={Terms} />
              
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Admin;
