import "../styles/pages/Register.css";
import flex from "../styles/modules/flex.module.css";
import InputComponent from "../components/Input";
import { useNavigate } from "react-router";
import { availableRoutes } from "../configs/routes.config";
import { useState, type FormEvent } from "react";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

function RegisterPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    console.log('Form submitted with value:', formValue);
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
        <img src={logo} />

        <div className="register__page-head">
          <div className={flex["flex-row-between-center"]}>
            <div className={flex["flex-column-center"]}>
              <h2>{t('pages.register.headline1')}</h2>
              <p>{t('pages.register.headline2')}</p>
            </div>
            <div></div>
          </div>
        </div>

        <form className="register__form-area" onSubmit={handleSubmit}>
          <div style={{ gap: ".5rem" }} className={flex["flex-row-center"]}>
            <InputComponent
              bridge={(value) => { setFormValue({ ...formValue, first_name: value.toString() }) }}
              label={t('pages.register.form.first_name')}
              title={t('pages.register.form.first_name_desc')}
              type="text"
              name="firstname"
              autocomplete="given-name"
              icon="person"
              required
              placeholder="John" />
            <InputComponent
              bridge={(value) => { setFormValue({ ...formValue, last_name: value.toString() }) }}
              label={t('pages.register.form.last_name')}
              title={t('pages.register.form.last_name_desc')}
              type="text"
              name="lastname"
              autocomplete="family-name"
              icon="person"
              required
              placeholder="Doe" />
          </div>
          <InputComponent
            bridge={(value) => { setFormValue({ ...formValue, email: value.toString() }) }}
            label={t('pages.register.form.email')}
            title={t('pages.register.form.email_desc')}
            type="email"
            name="email"
            autocomplete="email"
            icon="alternate_email"
            required
            placeholder="johndoe@email.com" />
          <InputComponent
            bridge={(value) => { setFormValue({ ...formValue, password: value.toString() }) }}
            label={t('pages.register.form.password')}
            title={t('pages.register.form.password_desc')}
            name="password"
            autocomplete="current-password"
            placeholder="•••••••••"
            icon="lock_open"
            required
            type="password" />
          <InputComponent
            bridge={(value) => { setFormValue({ ...formValue, birthdate: value.toString() }) }}
            label={t('pages.register.form.birth_date')}
            title={t('pages.register.form.birth_date_desc')}
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
            type="submit">{t('pages.register.form.create_account')}</button>
          <button
            type="button"
            className="btn__login-account"
            onClick={goToLoginPage}>{t('pages.register.form.already_have_account')}</button>
        </form>

      </div>
    </div>
  );
}

export default RegisterPage;
