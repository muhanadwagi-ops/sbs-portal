import { useTranslation } from 'react-i18next';

interface ProductTileProps {
  productKey: string;
  accentColor: string;
  icon: string;
  isDemo: boolean;
}

export default function ProductTile({ productKey, accentColor, icon, isDemo }: ProductTileProps) {
  const { t } = useTranslation();
  return (
    <div className="product-tile" style={{ borderTop: `4px solid ${accentColor}` }}>
      <div className="tile-icon" style={{ color: accentColor }}>{icon}</div>
      <h3 className="tile-name">{t(`products.${productKey}.name`)}</h3>
      <p className="tile-tagline">{t(`products.${productKey}.tagline`)}</p>
      {isDemo && <span className="tile-demo-badge">Demo</span>}
      <button
        className="tile-btn"
        style={{ backgroundColor: accentColor }}
        onClick={() => window.alert(`${t(`products.${productKey}.name`)} — coming soon`)}
      >
        {t('portal.launchProduct')}
      </button>
    </div>
  );
}
