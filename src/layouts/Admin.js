import React, { Component, useEffect } from "react";
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
// import { firebaseApp } from "Firebase";
// import { auth } from 'Firebase';
import { auth,db } from "../firebase";
import { useDispatch, useSelector } from "react-redux";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setuser } from "Reducer/Action";


function Admin() {
  const [image, setImage] = React.useState(sidebarImage);
  const [color, setColor] = React.useState("black");
  const [hasImage, setHasImage] = React.useState(true);
  const location = useLocation();
  const mainPanel = React.useRef(null);
  const dispatch = useDispatch()
  
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
  
  useEffect(() => {
    if (auth?.currentUser?.uid) {
      db.collection("users").doc(auth?.currentUser?.uid).get().then(doc => {
        if (doc.exists) {
            dispatch(setuser(doc.data()))
        }
        else {
            console.log("No DATA FOUND");
        }
    }).catch(e => console.log("error:", e))
      
    }
  },[])
  
  // const user = useSelector(state => state.userData)
  // useEffect(() => {
  //   console.log(user);
  // }, [user])
  
  const notify = (msg) => {
    toast(<b>{msg}</b>, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      });
  }
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
              <Route exact path="/login" render = {()=><Login notify={notify} />} />
              <Route exact path="/register" render={() => <Register notify={notify} />} />
              <Route exact path="/Terms" component={Terms} />
              <Route component={Error} />
            </Switch>
          </div>
          <Footer />
        </div>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover
              />
      </div>
    </>
  );
}

export default Admin;
