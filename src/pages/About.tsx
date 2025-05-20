import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'az') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting', { name: 'User' })}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('az')}>Azerbaijani</button>
    </div>
  );
}

export default AboutPage;