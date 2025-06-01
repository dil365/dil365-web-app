import { createBrowserRouter } from "react-router";

import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import DefaultLayout from "../layouts/default";
import LoginPage from "../pages/Login";
import AuthLayout from "../layouts/auth";
import RegisterPage from "../pages/Register";
import LabPage from "../pages/Lab";
import Guard from "../components/Guard";
import checkAuth from "../utils/checkAuth";

export const availableRoutes = {
  home: {
    path: '/',
    layout: DefaultLayout,
    Component: HomePage,
    auth: true,
    action: () => { },
    middleware: () => {
    },
    loader: async () => { },
  },
  about: {
    path: "/about",
    layout: null,
    Component: AboutPage,
    auth: false,
    action: () => { },
    middleware: () => { },
    loader: () => { },
  },
  login: {
    path: "/login",
    layout: AuthLayout,
    Component: LoginPage,
    auth: false,
    action: () => { },
    middleware: async () => {
      await checkAuth()
        .then(() => { window.location.href = availableRoutes.home.path })
        .catch(() => true)
    },
    loader: () => { },
  },
  register: {
    path: "/register",
    layout: AuthLayout,
    Component: RegisterPage,
    auth: false,
    action: () => { },
    middleware: async () => {
      await checkAuth()
        .then(() => { window.location.href = availableRoutes.home.path })
        .catch(() => true)
    },
    loader: () => { },
  },
  lab: {
    path: "/lab",
    layout: null,
    Component: LabPage,
    auth: true,
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
  const item = {
    key,
    path: value.path,
    Component: value.Component,
    action: () => { },
    loader: () => { },
  }
  if (value.action) { item.action = value.action }
  if (value.loader) { item.loader = value.loader }
  if (value.layout) {
    item.Component = () => Guard({
      config: {
        path: value.path,
        isAuthRequired: !!value.auth,
        middleware: value.middleware
      },
      children: value.layout({ children: value.Component() })
    });
  } else {
    item.Component = () => Guard({
      config: {
        path: value.path,
        isAuthRequired: !!value.auth,
        middleware: value.middleware
      },
      children: value.Component()
    })
  }

  return item;
});

export default createBrowserRouter(browserRouteItems);
