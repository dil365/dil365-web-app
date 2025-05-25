import "../styles/pages/Login.css";
import flex from "../styles/modules/flex.module.css";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router";
import { availableRoutes } from "../configs/routes.config";

function LoginPage() {
  const navigate = useNavigate();

  const goToRegisterPage = () => {
    navigate(availableRoutes.register.path);
  }

  return (
    <div id="login-page">
      <div className="login__page-container">

        <div className="login__page-head">
          <div className={flex["flex-row-between-center"]}>

            <div className={flex["flex-column-center"]}>
              <h2>Login to account</h2>
              <p>Welcome back! Please enter your details.</p>
            </div>
          </div>
        </div>

        <form className="login__form-area" onSubmit={(e) => console.log(e)}>
          <InputComponent
            label="Email"
            type="email"
            title="Enter your email"
            name="email"
            autocomplete="email"
            icon="alternate_email"
            placeholder="johndoe@email.com" />
          <InputComponent
            label="Password"
            title="Enter your password"
            name="password"
            autocomplete="current-password"
            placeholder="•••••••••"
            icon="lock"
            type="password" />
          <br />
          <button className="btn__login main" type="button">Login</button>
          <button className="btn__create-account" type="button" onClick={goToRegisterPage}>Create Account</button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
