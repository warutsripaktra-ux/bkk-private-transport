import { Link } from 'react-router-dom';
import { getRoutes, THB } from '../data.js';
import { PageHero, SectionHead, CtaBand } from '../components/Parts.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Airport() {
  const { lang, t } = useLanguage();
  const routes = getRoutes(lang);

  const airportList = t('airport.airports') || [];
  const paymentList = t('airport.payments') || [];
  const featureList = t('airport.features') || [];

  return (
    <>
      <PageHero
        eyebrow={t('airport.heroEyebrow')}
        title={t('airport.heroTitle')}
        text={t('airport.heroDesc')}
      />
      <section className="container-x py-12 grid gap-6 md:grid-cols-2">
        {airportList.map((a, idx) => {
          const matchedRoute = routes[idx] || routes[0];
          return (
            <div key={a.code} className="card p-8">
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-2xl bg-primary text-gold px-3 py-1 rounded-lg">{a.code}</span>
                <h2 className="text-2xl font-semibold">{a.name}</h2>
              </div>
              <p className="mt-4 flex gap-2">
                <span className="icon text-gold">pin_drop</span>
                <span><b>{t('common.meetingPoint')}</b> {a.point}</span>
              </p>
              <p className="mt-2 text-on-surface-variant">{a.note}</p>
              <div className="mt-6 p-4 rounded-lg bg-surface-container-low flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t('airport.toBangkokFrom')}</span>
                  <span className="font-head font-bold text-xl text-gold">{THB(700)} <span className="text-xs font-normal text-on-surface-variant">{t('common.thb')}</span></span>
                </div>
                <div className="flex items-center justify-between border-t border-black/5 pt-2">
                  <span className="text-sm font-medium">{t('airport.toPattayaFrom')}</span>
                  <span className="font-head font-bold text-xl">{THB(a.code === 'BKK' ? 1200 : 1500)} <span className="text-xs font-normal text-on-surface-variant">{t('common.thb')}</span></span>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {featureList.map((feat) => (
                  <li key={feat} className="flex gap-2 items-center">
                    <span className="icon text-success text-base">verified</span>{feat}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section className="bg-surface-container-low py-16">
        <div className="container-x">
          <SectionHead
            center
            eyebrow={t('airport.paymentEyebrow')}
            title={t('airport.paymentTitle')}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {paymentList.map(([i, tit, desc]) => (
              <div key={tit} className="card p-6">
                <span className="icon text-gold text-3xl">{i}</span>
                <h3 className="text-lg font-semibold mt-2">{tit}</h3>
                <p className="text-sm text-on-surface-variant mt-1">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/how-to-book" className="btn-outline">{t('common.seeHowBookingWorks')}</Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
