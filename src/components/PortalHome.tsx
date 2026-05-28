import { useTranslation } from 'react-i18next';
import type { SBSTokenPayload } from '../types/jwt';
import ProductTile from './ProductTile';
import DemoBanner from './DemoBanner';
import LanguageToggle from './LanguageToggle';

const PRODUCTS = [
  { key: 'cca',        color: '#ca0378', icon: '💬' },
  { key: 'pos',        color: '#f1368f', icon: '🛒' },
  { key: 'inventory',  color: '#8ad0c3', icon: '📦' },
  { key: 'operations', color: '#031ce8', icon: '📋' },
  { key: 'manpower',   color: '#ca0378', icon: '👥' },
];

export default function PortalHome({ payload }: { payload: SBSTokenPayload }) {
  const { t } = useTranslation();
  const { accessFlags, isDemo } = payload;

  const visible = PRODUCTS.filter(p =>
    isDemo || accessFlags[p.key as keyof typeof accessFlags]
  );

  return (
    <div className="portal-root">
      <header className="portal-header">
        <div className="portal-logo">
          <span className="logo-text">Savannah</span>
          <span className="logo-sub">Business Solutions</span>
        </div>
        <LanguageToggle />
      </header>

      {isDemo && <DemoBanner />}

      <main className="portal-main">
        <h1 className="portal-welcome">
          {isDemo ? t('portal.welcomeDemo') : t('portal.welcome')}
        </h1>
        <p className="portal-section-label">
          {isDemo ? t('portal.allProducts') : t('portal.yourProducts')}
        </p>

        {visible.length === 0 ? (
          <p className="portal-empty">{t('portal.noAccess')}</p>
        ) : (
          <div className="tiles-grid">
            {visible.map(p => (
              <ProductTile key={p.key} productKey={p.key} accentColor={p.color} icon={p.icon} isDemo={isDemo} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
