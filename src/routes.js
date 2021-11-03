import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import Upgrade from "views/Upgrade.js";
import Predict from "views/Predict";
import Contact from "views/Contact";

const dashboardRoutes = [
  { 
    path: "/dashboard",
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
    icon: "nc-icon nc-notes",
    component: Predict,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
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
    component: Notifications,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
