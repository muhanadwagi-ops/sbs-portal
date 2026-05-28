import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { useTranslation } from 'react-i18next';
import type { SBSTokenPayload } from './types/jwt';
import PortalHome from './components/PortalHome';
import './i18n';

type State = { status: 'loading' } | { status: 'ready'; payload: SBSTokenPayload } | { status: 'error'; message: string };

function getToken(): string | null {
  const m = window.location.hash.match(/[#&]token=([^&]+)/);
  return m ? m[1] : null;
}

export default function App() {
  const { t } = useTranslation();
  const [state, setState] = useState<State>({ status: 'loading' });

  useEffect(() => {
    const raw = getToken();
    if (!raw) { setState({ status: 'error', message: 'No token found. Please log in.' }); return; }
    try {
      const payload = jwtDecode<SBSTokenPayload>(raw);
      const now = Math.floor(Date.now() / 1000);
      if (payload.exp && payload.exp < now) { setState({ status: 'error', message: t('portal.tokenError') }); return; }
      setState({ status: 'ready', payload });
    } catch {
      setState({ status: 'error', message: t('portal.tokenError') });
    }
  }, [t]);

  if (state.status === 'loading') return (
    <div className="portal-loading"><div className="spinner" /><p>{t('portal.loading')}</p></div>
  );

  if (state.status === 'error') return (
    <div className="portal-error">
      <p>{state.message}</p>
      <a href="https://savannah-business.com/portal" target="_parent">← Back to login</a>
    </div>
  );

  return <PortalHome payload={state.payload} />;
}
