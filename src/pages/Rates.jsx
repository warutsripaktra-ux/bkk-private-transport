import { useState } from 'react';
import { getRoutes, getDestinations, getOrigins, getVehicles } from '../data.js';
import { PageHero, PriceCard, CtaBand, openQuote } from '../components/Parts.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Rates() {
  const { lang, t } = useLanguage();
  const routes = getRoutes(lang);
  const destinations = getDestinations(lang);
  const origins = getOrigins(lang);
  const vehicles = getVehicles(lang);

  const [origin, setOrigin] = useState('all');
  const [dest, setDest] = useState('all');
  const list = routes.filter((r) => (dest === 'all' || r.dest === dest) && (origin === 'all' || r.origin === origin || r.origin === 'all'));

  return (
    <>
      <PageHero
        eyebrow={t('rates.heroEyebrow')}
        title={t('rates.heroTitle')}
        text={t('rates.heroDesc')}
      />
      <section className="container-x py-12">
        <div className="card p-5 grid gap-4 md:grid-cols-[240px_1fr] items-start">
          <label className="label-code text-on-surface-variant flex flex-col gap-1">
            {t('rates.originLabel')}
            <select className="field font-body text-base" value={origin} onChange={(e) => setOrigin(e.target.value)}>
              <option value="all">{t('rates.allOrigins')}</option>
              {origins.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
            </select>
          </label>
          <div>
            <div className="label-code text-on-surface-variant mb-2">{t('rates.destFilterLabel')}</div>
            <div className="flex flex-wrap gap-2">
              {destinations.map((d) => (
                <button
                  key={d.id}
                  onClick={() => setDest(d.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    dest === d.id ? 'bg-primary text-white border-primary' : 'bg-white border-[#CBD5E1] hover:border-primary'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {list.length === 0 && <p className="text-center text-on-surface-variant">{t('common.noRoutesMatch')}</p>}
          {list.map((r) => (
            <div key={r.id}>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="label-code px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container font-bold">{r.meta}</span>
                <span className="label-code px-2 py-0.5 rounded bg-surface-container-highest">{r.km}</span>
                <span className="label-code text-success font-bold flex items-center gap-1">
                  <span className="icon text-base">check_circle</span>{r.note}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{r.title}</h3>
              <p className="text-on-surface-variant mt-1 mb-4 max-w-3xl">{r.desc}</p>
              <div className="grid gap-6 md:grid-cols-3">
                {vehicles.map((_, i) => (
                  <PriceCard key={i} route={r} idx={i} onSelect={(route, v, pr) => openQuote(route, v, pr, lang)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
