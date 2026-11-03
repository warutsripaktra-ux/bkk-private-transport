import { Link } from 'react-router-dom';
import { getVehicles, THB, CONTACT } from '../data.js';
import { useLanguage } from '../context/LanguageContext.jsx';
import { useContactQR } from './ContactQR.jsx';

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="bg-surface-container-low relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl" />
      <div className="container-x py-16 relative">
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mt-2 max-w-3xl">{title}</h1>
        <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">{text}</p>
      </div>
    </section>
  );
}

export function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={`mb-10 ${center ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl md:text-4xl font-bold mt-1">{title}</h2>
      {text && <p className="mt-2 text-on-surface-variant">{text}</p>}
    </div>
  );
}

export function PriceCard({ route, idx, onSelect }) {
  const { lang, t } = useLanguage();
  const vehicles = getVehicles(lang);
  const v = vehicles[idx] || vehicles[0];
  const rec = idx === 1;

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-white p-6 flex flex-col justify-between border ${rec ? 'border-gold/50 shadow-raised' : 'border-[#E2E8F0] shadow-card'} hover:shadow-raised transition-shadow`}>
      {rec && <span className="absolute top-0 right-0 bg-gold text-white label-code font-bold px-3 py-1 rounded-bl-xl">{t('common.recommended')}</span>}
      <div>
        <span className="label-code uppercase text-on-surface-variant">{v.seats}</span>
        <h4 className="text-xl font-semibold">{v.label}</h4>
        <p className="text-sm text-on-surface-variant mt-1">{v.models}</p>
        <ul className="mt-4 space-y-1 text-sm text-on-surface-variant">
          <li className="flex gap-2 items-center"><span className="icon text-gold text-base">person</span>{t('common.upTo')} {v.pax} {t('common.passengers')}</li>
          <li className="flex gap-2 items-center"><span className="icon text-gold text-base">luggage</span>{v.bags}</li>
          <li className="flex gap-2 items-center"><span className="icon text-gold text-base">toll</span>{t('common.tollsIncluded')}</li>
        </ul>
      </div>
      <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
        <div>
          <span className="label-code text-on-surface-variant block">{t('common.totalFlatRate')}</span>
          <span className="text-2xl font-bold font-head">{THB(route.price[idx])} <span className="label-code font-normal text-on-surface-variant">{t('common.thb')}</span></span>
        </div>
        <button onClick={() => onSelect(route, v, route.price[idx], lang)} className={rec ? 'btn-gold !h-10 !px-4 text-sm' : 'btn-primary !h-10 !px-4 text-sm'}>{t('common.select')}</button>
      </div>
    </div>
  );
}

export function openQuote(route, vehicle, price, lang = 'EN') {
  const finalPrice = price || (route && vehicle && route.price ? route.price[0] : 0);
  const msg = lang === 'TH'
    ? `สวัสดีครับ สนใจจองรถรับส่ง: ${route?.title || ''} (${vehicle?.label || ''}) - ${THB(finalPrice)} บาท`
    : `Hello, I'd like to book: ${route?.title || ''} (${vehicle?.label || ''}) - ${THB(finalPrice)} THB`;
  window.open(`${CONTACT.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
}

export function CtaBand() {
  const { t } = useLanguage();
  const showQR = useContactQR();

  return (
    <section className="container-x mt-16">
      <div className="rounded-2xl bg-primary text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-bold">{t('common.readyToRide')}</h2>
          <p className="text-white/70 mt-2">{t('common.readyDesc')}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <button onClick={() => showQR('whatsapp')} className="btn-gold">{t('common.whatsappQuote')}</button>
          <Link to="/contact" className="btn-outline !text-white !border-white hover:!bg-white/10">{t('common.requestBooking')}</Link>
        </div>
      </div>
    </section>
  );
}
