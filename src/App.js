import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Register from "./Register"
import Services from "./Services";
import Home from "./Home";
import Navbar from "./Navbar";
import Login from "./Login";
import {Switch,Route,Redirect} from 'react-router-dom';


const App = () => {
  return (
    <>
       <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App
