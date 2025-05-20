import { NavLink } from "react-router";
import { availableRoutes } from "../routes.config";

function RegisterPage() {
  return (
    <div id="register-page">
      <h1>Register Page</h1>
      <NavLink to={availableRoutes.login.path}>Login</NavLink>
    </div>
  );
}

export default RegisterPage;
