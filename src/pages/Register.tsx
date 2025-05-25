import "../styles/pages/Register.css";
import flex from "../styles/modules/flex.module.css";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router";
import { availableRoutes } from "../configs/routes.config";
import { useState, type FormEvent } from "react";

function RegisterPage() {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate(availableRoutes.login.path);
  }

  const [formValue, setFormValue] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    birthdate: ''
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with value:', event);
  };

  const maxDateValue = () => {
    const minAcceptableAge = 10; 
    const today = new Date();
    const year = today.getFullYear() - minAcceptableAge; 
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div id="register-page">
      <div className="register__page-container">

        <div className="register__page-head">
          <div className={flex["flex-row-between-center"]}>
            <div className={flex["flex-column-center"]}>
              <h2>Register to account</h2>
              <p>Welcome back! Please enter your details.</p>
            </div>
            <div></div>
          </div>
        </div>

        <form className="register__form-area" onSubmit={handleSubmit}>
          <div style={{ gap: ".5rem" }} className={flex["flex-row-center"]}>
            <InputComponent
              label="First Name"
              type="text"
              title="Enter your first name"
              name="firstname"
              autocomplete="given-name"
              icon="person"
              required
              placeholder="John" />
            <InputComponent
              label="Last Name"
              type="text"
              title="Enter your last name"
              name="lastname"
              autocomplete="family-name"
              icon="person"
              required
              placeholder="Doe" />
          </div>
          <InputComponent
            label="Email"
            type="email"
            title="Enter your email"
            name="email"
            autocomplete="email"
            icon="alternate_email"
            required
            placeholder="johndoe@email.com" />
          <InputComponent
            label="Password"
            title="Enter your password"
            name="password"
            autocomplete="current-password"
            placeholder="•••••••••"
            icon="lock_open"
            required
            type="password" />
          <InputComponent
            label="Birth Date"
            title="Enter your birth date"
            name="Date"
            autocomplete="bday"
            pattern="\d{2}-\d{2}-\d{4}"
            placeholder="•••••••••"
            max={maxDateValue()}
            icon="cake_candles"
            required
            type="date" />
          <br />
          <button
            className="btn__register main"
            type="submit">Create Account</button>
          <button
            type="button"
            className="btn__login-account"
            onClick={goToLoginPage}>Already have account?</button>
        </form>

      </div>
    </div>
  );
}

export default RegisterPage;
