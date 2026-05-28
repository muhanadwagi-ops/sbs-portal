import { useTranslation } from 'react-i18next';
import { setLanguage } from '../i18n';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  return (
    <button className="lang-toggle" onClick={() => setLanguage(i18n.language === 'en' ? 'ar' : 'en')}>
      {t('lang.toggle')}
    </button>
  );
}
