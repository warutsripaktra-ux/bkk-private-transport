import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getRoutes, getVehicles, getOrigins, THB } from '../data.js';
import { PriceCard, SectionHead, CtaBand, openQuote } from '../components/Parts.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Home() {
  const { lang, t } = useLanguage();
  const routes = getRoutes(lang);
  const vehicles = getVehicles(lang);
  const origins = getOrigins(lang);

  const [f, setF] = useState({ from: 'bkk', to: 'pattaya', date: '', pax: '3-4', vehicle: 'suv' });
  const [quote, setQuote] = useState(null);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const check = (e) => {
    e.preventDefault();
    const r = routes.find((r) => r.origin === f.from && r.dest === f.to)
           || routes.find((r) => r.dest === f.to && (r.origin === f.from || r.origin === 'all'))
           || routes.find((r) => r.dest === f.to);
    const idx = vehicles.findIndex((v) => v.id === f.vehicle);
    setQuote(r ? { r, v: vehicles[idx] || vehicles[0], price: r.price[idx >= 0 ? idx : 0] } : null);
  };

  const trustList = t('home.trust') || [];
  const paxOptions = t('home.paxOptions') || [];

  return (
    <>
      <section className="relative bg-surface-container-low overflow-hidden pt-16 pb-20">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl" />
        <div className="container-x relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-surface-container label-code shadow-sm mb-4">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            {t('home.badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl">{t('home.heroTitle')}</h1>
          <p className="mt-4 text-lg text-on-surface-variant max-w-2xl">{t('home.heroDesc')}</p>

          <form onSubmit={check} className="card w-full mt-10 p-6 text-left grid gap-4 md:grid-cols-2 lg:grid-cols-6 items-end shadow-xl">
            <label className="flex flex-col gap-1 label-code text-on-surface-variant">
              {t('home.pickupLabel')}
              <select className="field font-body text-base" value={f.from} onChange={set('from')}>
                {origins.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-1 label-code text-on-surface-variant">
              {t('home.dropoffLabel')}
              <select className="field font-body text-base" value={f.to} onChange={set('to')}>
                <option value="city">{lang === 'TH' ? 'ตัวเมืองกรุงเทพฯ (โรงแรม / ที่พัก)' : 'Bangkok City (Hotels / Residences)'}</option>
                <option value="pattaya">{lang === 'TH' ? 'พัทยา (ตัวเมือง / ชายหาด / จอมเทียน)' : 'Pattaya Hotel / Central'}</option>
                <option value="hua-hin">{lang === 'TH' ? 'หัวหิน / ชะอำ' : 'Hua Hin / Cha-Am'}</option>
                <option value="ayutthaya">{lang === 'TH' ? 'อุทยานประวัติศาสตร์อยุธยา' : 'Ayutthaya Historic Park'}</option>
                <option value="koh-samet">{lang === 'TH' ? 'ท่าเรือเกาะเสม็ด (บ้านเพ)' : 'Koh Samet Pier (Ban Phe)'}</option>
                <option value="koh-chang">{lang === 'TH' ? 'เกาะช้าง (ท่าเรือแหลมงอบ)' : 'Koh Chang (Laem Ngop Pier)'}</option>
                <option value="bkk">{lang === 'TH' ? 'สนามบินสุวรรณภูมิ (BKK)' : 'Suvarnabhumi Airport (BKK)'}</option>
                <option value="dmk">{lang === 'TH' ? 'สนามบินดอนเมือง (DMK)' : 'Don Mueang Airport (DMK)'}</option>
              </select>
            </label>
            <label className="flex flex-col gap-1 label-code text-on-surface-variant">
              {t('home.dateLabel')}
              <input type="date" className="field font-body text-base" value={f.date} onChange={set('date')} />
            </label>
            <label className="flex flex-col gap-1 label-code text-on-surface-variant">
              {t('home.guestsLabel')}
              <select className="field font-body text-base" value={f.pax} onChange={set('pax')}>
                {paxOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1 label-code text-on-surface-variant">
              {t('home.vehicleLabel')}
              <select className="field font-body text-base" value={f.vehicle} onChange={set('vehicle')}>
                {vehicles.map((v) => <option key={v.id} value={v.id}>{v.label} ({v.seats})</option>)}
              </select>
            </label>
            <button className="btn-primary w-full">
              {t('common.checkFare')} <span className="icon">arrow_forward</span>
            </button>
          </form>

          {quote && (
            <div className="card w-full mt-4 p-5 flex flex-col md:flex-row items-center justify-between gap-4 border-gold/50">
              <div className="text-left">
                <div className="label-code text-gold font-bold">{t('common.fixedFare')}</div>
                <div className="font-head font-semibold">{quote.r.title} · {quote.v.label}</div>
              </div>
              <div className="text-3xl font-bold font-head">{THB(quote.price)} <span className="label-code text-on-surface-variant font-normal">{t('common.thb')}</span></div>
              <button className="btn-gold" onClick={() => openQuote(quote.r, quote.v, quote.price, lang)}>
                {t('common.bookViaWhatsApp')}
              </button>
            </div>
          )}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full mt-8">
            {trustList.map(([i, tit, sub]) => (
              <div key={tit} className="flex items-center gap-2 p-3 rounded-lg bg-white/70 text-left">
                <span className="icon text-gold text-2xl">{i}</span>
                <div>
                  <div className="text-sm font-semibold leading-tight">{tit}</div>
                  <div className="label-code text-on-surface-variant">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-16">
        <SectionHead
          eyebrow={t('home.section1Eyebrow')}
          title={t('home.section1Title')}
          text={t('home.section1Desc')}
        />
        {routes.slice(0, 3).map((r) => (
          <div key={r.id} className="mb-12">
            <div className="p-5 rounded-2xl bg-surface-container-low mb-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center"><span className="icon">flight</span></div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{r.title}</h3>
                <p className="text-sm text-on-surface-variant">{r.meta} • {r.km} • {t('common.tollsIncluded')}</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {vehicles.map((_, i) => <PriceCard key={i} route={r} idx={i} onSelect={(route, v, pr) => openQuote(route, v, pr, lang)} />)}
            </div>
          </div>
        ))}
        <div className="text-center">
          <Link to="/rates" className="btn-outline">{t('common.viewAllRates')}</Link>
        </div>
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="container-x">
          <SectionHead
            center
            eyebrow={t('home.section2Eyebrow')}
            title={t('home.section2Title')}
            text={t('home.section2Desc')}
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {vehicles.map((v) => (
              <div key={v.id} className="card p-6">
                <div className="relative h-48 rounded-lg overflow-hidden bg-surface-container mb-4">
                  <img src={v.image} alt={v.label} className="w-full h-full object-cover" style={{ objectPosition: '50% 65%' }} loading="lazy" />
                  <span className="absolute top-3 left-3 bg-primary/80 text-white label-code px-2 py-1 rounded">{v.seats}</span>
                </div>
                <h3 className="text-xl font-semibold">{v.label}</h3>
                <p className="label-code text-gold font-bold mt-1">{v.models}</p>
                <p className="mt-3 text-sm text-on-surface-variant">{t('common.recommendedFor')} {v.audience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
