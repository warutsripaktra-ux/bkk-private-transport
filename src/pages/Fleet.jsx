import { Link } from 'react-router-dom';
import { getVehicles, getRoutes, THB } from '../data.js';
import { PageHero, CtaBand } from '../components/Parts.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Fleet() {
  const { lang, t } = useLanguage();
  const vehicles = getVehicles(lang);
  const routes = getRoutes(lang);
  const stats = t('fleet.stats') || [];

  return (
    <>
      <PageHero
        eyebrow={t('fleet.heroEyebrow')}
        title={t('fleet.heroTitle')}
        text={t('fleet.heroDesc')}
      />
      <section className="container-x py-12">
        <div className="grid grid-cols-3 gap-4 max-w-xl mb-10 text-center">
          {stats.map(([a, b]) => (
            <div key={b} className="card p-4">
              <div className="text-2xl font-bold font-head text-gold">{a}</div>
              <div className="label-code text-on-surface-variant">{b}</div>
            </div>
          ))}
        </div>
        <div className="space-y-8">
          {vehicles.map((v, i) => (
            <article key={v.id} className="card overflow-hidden grid md:grid-cols-5">
              <div className="md:col-span-2 h-64 md:h-auto bg-surface-container">
                <img src={v.image} alt={v.label} className="w-full h-full object-cover" style={{ objectPosition: '50% 65%' }} loading="lazy" />
              </div>
              <div className="md:col-span-3 p-6 md:p-8 flex flex-col">
                <span className="eyebrow">{lang === 'TH' ? `คลาส 0${i + 1} • ${v.tag}` : `Class 0${i + 1} • ${v.tag}`}</span>
                <h2 className="text-3xl font-bold mt-1">{v.label}</h2>
                <p className="text-on-surface-variant">{v.models}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="label-code px-3 py-1 rounded-full bg-surface-container">{t('common.upTo')} {v.pax} {t('common.passengers')}</span>
                  <span className="label-code px-3 py-1 rounded-full bg-surface-container">{v.bags}</span>
                  <span className="label-code px-3 py-1 rounded-full bg-surface-container">{v.seats}</span>
                </div>
                <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-sm">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="icon text-gold text-base">check_circle</span>{f}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-on-surface-variant">{t('common.idealFor')} {v.audience}</p>
                <div className="mt-auto pt-6 flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <span className="label-code text-on-surface-variant block">{t('common.oneWayFrom')}</span>
                    <span className="text-2xl font-bold font-head">
                      {THB(routes[0]?.price[i] || 1200)} <span className="label-code font-normal">{t('common.thb')}</span>
                    </span>
                  </div>
                  <Link to="/rates" className="btn-primary">{t('common.seeRates')}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
