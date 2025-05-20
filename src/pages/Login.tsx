import { NavLink } from "react-router";
import { availableRoutes } from "../routes.config";

function LoginPage() {
  return (
    <div id="login-page">
      Login Page
      <NavLink to={availableRoutes.home.path}>Home</NavLink>
    </div>
  );
}

export default LoginPage;
