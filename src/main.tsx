import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import {
  Dashboard,
  Detail,
  About
} from './pages';
import ScrollToTop from "./helpers/ScrollToTop";

const routeList = [
  {
    path: "/",
    element: <Dashboard/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Router>
      <ScrollToTop/>
      <Routes>
        {
          routeList.map(el => (
            <Route path={el.path} element={el.element} />
          ))
        }
      </Routes>
    </Router>
  </React.StrictMode>
);