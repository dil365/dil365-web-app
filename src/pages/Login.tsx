import "../styles/pages/Login.css";
import flex from "../styles/modules/flex.module.css";
import logo from "../assets/logo.svg";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router";
import { availableRoutes } from "../configs/routes.config";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { setFormValue } from "../store/loginSlice";
import type { FormEvent } from "react";
import { _UsersService } from "../services/users";
import type { LoginFormType } from "../types/auth.types";

function LoginPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goToRegisterPage = () => {
    navigate(availableRoutes.register.path);
  }

  const dispatch = useDispatch();
  const form: LoginFormType = useSelector((state: {login: LoginFormType}) => state.login);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const response = await _UsersService.login.POST(form);
    console.log(response);
  }
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

        <form className="login__form-area" onSubmit={(event) => handleSubmit(event)}>
          <InputComponent
            bridge={(value) => { dispatch(setFormValue({key: 'email', value})) }}
            label={t('pages.login.form.email')}
            title={t('pages.login.form.email_desc')}
            type="email"
            name="email"
            autocomplete="email"
            icon="alternate_email"
            required
            placeholder="johndoe@email.com" />
          <InputComponent
            bridge={(value) => { dispatch(setFormValue({key: 'password', value})) }}
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
            onClick={goToRegisterPage}>{t('pages.login.form.create_account')}</button>
        </form>

      </div>
    </div>
  );
}

export default LoginPage;
