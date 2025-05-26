import "../styles/pages/Login.css";
import flex from "../styles/modules/flex.module.css";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router";
import { availableRoutes } from "../configs/routes.config";
import { useState, type FormEvent } from "react";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToLoginPage = () => {
    navigate(availableRoutes.register.path);
  }

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with value:', formValue);
  };


  return (
    <div id="login-page">
      <div className="login__page-container">
        <img src={logo} />

        <div className="login__page-head">
          <div className={flex["flex-row-between-center"]}>
            <div className={flex["flex-column-center"]}>
              <h2>{t('pages.login.headline1')}</h2>
              <p>{t('pages.login.headline2')}</p>
            </div>
            <div></div>
          </div>
        </div>

        <form className="login__form-area" onSubmit={handleSubmit}>
          <InputComponent
            bridge={(value) => { setFormValue({ ...formValue, email: value.toString() }) }}
            label={t('pages.login.form.email')}
            title={t('pages.login.form.email_desc')}
            type="email"
            name="email"
            autocomplete="email"
            icon="alternate_email"
            required
            placeholder="johndoe@email.com" />
          <InputComponent
            bridge={(value) => { setFormValue({ ...formValue, password: value.toString() }) }}
            label={t('pages.login.form.password')}
            title={t('pages.login.form.password_desc')}
            name="password"
            autocomplete="current-password"
            placeholder="•••••••••"
            icon="lock_open"
            required
            type="password" />
          <br />
          <button
            className="btn__login main"
            type="submit">{t('pages.login.form.login')}</button>
          <button
            type="button"
            className="btn__login-account"
            onClick={goToLoginPage}>{t('pages.login.form.create_account')}</button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
