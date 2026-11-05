import { useState } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import { CONTACT } from '../data.js';
import { ContactQRProvider, useContactQR } from './ContactQR.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Layout() {
  return (
    <ContactQRProvider>
      <LayoutInner />
    </ContactQRProvider>
  );
}

function LayoutInner() {
  const showQR = useContactQR();
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const NAV = [
    ['/', t('nav.home')],
    ['/rates', t('nav.rates')],
    ['/fleet', t('nav.fleet')],
    ['/airport-transfers', t('nav.airport')],
    ['/how-to-book', t('nav.howToBook')],
    ['/contact', t('nav.contact')],
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="bg-primary text-white py-1 text-[13px]">
          <div className="container-x flex items-center justify-between">
            <span className="flex items-center gap-1">
              <span className="icon text-secondary-container text-base">support_agent</span>
              {t('nav.hotline')}
              <span className="hidden md:inline ml-4">WhatsApp: {CONTACT.phone} | LINE: {CONTACT.linePhone}</span>
            </span>
            <div className="flex items-center gap-3 label-code">
              <span className="hidden sm:inline">BKK • DMK • HKT</span>
              <div className="flex rounded-full bg-white/10 p-0.5">
                {['TH', 'EN'].map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-0.5 rounded-full font-semibold text-xs transition-colors ${
                      lang === l ? 'bg-white text-primary shadow-sm' : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-x h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-lg bg-primary text-gold flex items-center justify-center"><span className="icon">local_taxi</span></span>
            <span className="flex flex-col leading-tight">
              <span className="font-head font-semibold text-lg">{t('nav.title')}</span>
              <span className="label-code uppercase text-on-surface-variant">{t('nav.subtitle')}</span>
            </span>
          </Link>
          <nav className="hidden xl:flex items-center gap-6">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `text-sm font-semibold transition-colors ${isActive ? 'text-gold' : 'text-on-surface-variant hover:text-on-surface'}`}>{label}</NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button onClick={() => showQR('whatsapp')} className="hidden sm:inline-flex items-center gap-1 px-5 py-2 rounded-lg bg-secondary-container text-on-secondary-container font-head font-semibold text-sm hover:bg-secondary-fixed shadow-sm">
              <span className="icon text-lg">send</span>{t('nav.bookNow')}
            </button>
            <button className="xl:hidden w-10 h-10 rounded-lg bg-primary text-white flex items-center justify-center" aria-label="Menu" onClick={() => setOpen(!open)}>
              <span className="icon">{open ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
        {open && (
          <nav className="xl:hidden border-t border-[#E2E8F0] bg-white">
            {NAV.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)} className={({ isActive }) => `block px-6 py-3 font-semibold ${isActive ? 'text-gold' : ''}`}>{label}</NavLink>
            ))}
          </nav>
        )}
      </header>

      <main className="flex-1"><Outlet /></main>

      <footer className="bg-primary text-white mt-16">
        <div className="container-x py-12 grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-head font-bold text-xl">{t('nav.title')}</div>
            <p className="mt-2 text-white/70 max-w-md text-sm">{t('nav.footerDesc')}</p>
          </div>
          <div>
            <div className="font-head font-semibold mb-3">{t('nav.explore')}</div>
            <ul className="space-y-2 text-sm text-white/70">
              {NAV.slice(1).map(([to, label]) => <li key={to}><Link className="hover:text-white" to={to}>{label}</Link></li>)}
            </ul>
          </div>
          <div className="text-sm text-white/70 space-y-2">
            <div className="font-head font-semibold text-white mb-3">{t('nav.contactInfo')}</div>
            <a className="block hover:text-white" href={`tel:${CONTACT.tel}`}>โทร: {CONTACT.phone}</a>
            <div className="text-white/80">LINE: {CONTACT.linePhone}</div>
            <div className="flex flex-wrap gap-2 pt-1">
              {[['whatsapp', 'WhatsApp'], ['line', 'LINE'], ['wechat', 'WeChat']].map(([k, l]) => (
                <button key={k} onClick={() => showQR(k)} className="px-3 py-1 rounded-full border border-white/30 text-white hover:bg-white/10">{l}</button>
              ))}
            </div>
            <div>{CONTACT.address}</div>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} Bangkok Private Transport Co., Ltd. {t('nav.rights')}</div>
      </footer>
    </div>
  );
}
