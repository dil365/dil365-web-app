import { createBrowserRouter } from "react-router";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import DefaultLayout from "../layouts/default";
import LoginPage from "../pages/Login";
import AuthLayout from "../layouts/auth";
import RegisterPage from "../pages/Register";
import LabPage from "../pages/Lab";

export const availableRoutes = {
  home: {
    path: '/',
    layout: DefaultLayout,
    Component: HomePage,
    action: () => {},
    middleware: () => {
      
    },
    loader: async () => {},
  },
  about: {
    path: "/about",
    layout: null,
    Component: AboutPage,
    action: () => { },
    middleware: () => { },
    loader: () => { },
  },
  login: {
    path: "/login",
    layout: AuthLayout,
    Component: LoginPage,
    action: () => { },
    middleware: () => { },
    loader: () => { },
  },
  register: {
    path: "/register",
    layout: AuthLayout,
    Component: RegisterPage,
    action: () => { },
    middleware: () => { },
    loader: () => { },
  },
  lab: {
    path: "/lab",
    layout: null,
    Component: LabPage,
    action: () => { },
    middleware: () => { },
    loader: async () => {
      try {
        const clapsit = await fetch("https://clapsit.com/api/v1/aim/json_generator/674");
        const data = await clapsit.json();
        return data;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  },
}

const browserRouteItems = Object.entries(availableRoutes).map(([key, value]) => {
  if (value.middleware) {
    value.middleware();
  }
  const item = {
    key,
    path: value.path,
    Component: value.Component,
    action: () => { },
    middleware: () => { },
    loader: () => { },
  }
  if (value.layout) {
    item.Component = () => value.layout({ children: value.Component() });
  }
  if (value.action) {
    item.action = value.action;
  }
  if (value.loader) {
    item.loader = value.loader;
  }

  return item;
});

export default createBrowserRouter(browserRouteItems);
