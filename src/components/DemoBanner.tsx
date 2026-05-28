import { useTranslation } from 'react-i18next';

export default function DemoBanner() {
  const { t } = useTranslation();
  return (
    <div className="demo-banner">
      <span className="demo-badge">DEMO</span>
      <p>{t('portal.demoNote')}</p>
      <a href="https://savannah-business.com/contact" target="_parent" className="demo-cta">
        {t('portal.contactUs')}
      </a>
    </div>
  );
}
