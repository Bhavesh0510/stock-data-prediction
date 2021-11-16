import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Typography from "views/Typography.js";
import Subscription from "views/Subscription.js";
import About from "views/About.js";
import Terms from "views/Terms.js";
import Predict from "views/Predict";
import Contact from "views/Contact";
import Plans from "views/Plans";

const dashboardRoutes = [
  {
    upgrade : true,
    path: "/plans",
    name: "Upgrade Plan",
    icon: "nc-icon nc-chart-pie-35",
    component: Plans,
    layout: "/admin",
  },
  { 
    path: "/",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/get_quote",
    name: "Mine Prediction",
    icon: "nc-icon nc-chart-bar-32",
    component: Predict,
    layout: "/admin",
  },
  {
    path: "/Subscription",
    name: "Subscription",
    icon: "nc-icon nc-paper-2",
    component: Subscription,
    layout: "/admin",
  },
  {
    path: "/Contact",
    name: "Contact",
    icon: "nc-icon nc-pin-3",
    component: Contact,
    layout: "/admin",
  },
  {
    path: "/About",
    name: "About Us",
    icon: "nc-icon nc-bell-55",
    component: About,
    layout: "/admin",
  },
  {
    path: "/Terms",
    name: "T&C",
    icon: "nc-icon nc-notes",
    component: Terms,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
