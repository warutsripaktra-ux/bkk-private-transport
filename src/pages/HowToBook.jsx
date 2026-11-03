import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getBookSteps, getFaq } from '../data.js';
import { PageHero, SectionHead } from '../components/Parts.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function HowToBook() {
  const { lang, t } = useLanguage();
  const bookSteps = getBookSteps(lang);
  const faqList = getFaq(lang);
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHero
        eyebrow={t('howToBook.heroEyebrow')}
        title={t('howToBook.heroTitle')}
        text={t('howToBook.heroDesc')}
      />
      <section className="container-x py-12">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {bookSteps.map((s, i) => (
            <li key={s.title} className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-12 h-12 rounded-full bg-secondary-container text-on-secondary-container font-bold font-head text-xl flex items-center justify-center">{i + 1}</span>
                <span className="icon text-gold text-3xl">{s.icon}</span>
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-on-surface-variant mt-2">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>
      <section className="container-x pb-12 max-w-3xl">
        <SectionHead
          eyebrow={t('howToBook.faqEyebrow')}
          title={t('howToBook.faqTitle')}
        />
        <div className="space-y-3">
          {faqList.map((f, i) => (
            <div key={f.q} className="card">
              <button
                className="w-full flex justify-between items-center p-5 text-left font-semibold"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {f.q}
                <span className="icon">{open === i ? 'expand_less' : 'expand_more'}</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-on-surface-variant">{f.a}</p>}
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/contact" className="btn-gold">{t('howToBook.bookNowBtn')}</Link>
        </div>
      </section>
    </>
  );
}
