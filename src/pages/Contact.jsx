import { CONTACT } from '../data.js';
import { PageHero } from '../components/Parts.jsx';
import { useContactQR } from '../components/ContactQR.jsx';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function Contact() {
  const { t } = useLanguage();
  const showQR = useContactQR();

  const channels = t('contact.channels') || [];

  // [icon, label, subtitle, target]: 'whatsapp' | 'line' | 'wechat' open a QR popup, others are plain links
  const [wa, line, call] = channels;
  const allChannels = [
    wa && [wa[0], wa[1], CONTACT.phone, 'whatsapp'],
    line && [line[0], line[1], CONTACT.linePhone, 'line'],
    ['mark_chat_unread', 'WeChat', CONTACT.wechat, 'wechat'],
    call && [call[0], call[1], CONTACT.phone, `tel:${CONTACT.tel}`],
  ].filter(Boolean);
  const isQR = (x) => ['whatsapp', 'line', 'wechat'].includes(x);

  return (
    <>
      <PageHero
        eyebrow={t('contact.heroEyebrow')}
        title={t('contact.heroTitle')}
        text={t('contact.heroDesc')}
      />
      <section className="container-x py-12 max-w-2xl mx-auto space-y-4">
        {allChannels.map(([icon, label, sub, target]) => {
          const inner = (
            <>
              <span className="w-12 h-12 rounded-xl bg-primary text-gold flex items-center justify-center"><span className="icon">{icon}</span></span>
              <span className="flex-1 text-left">
                <span className="block font-semibold">{label}</span>
                <span className="text-sm text-on-surface-variant">{sub}</span>
              </span>
              <span className="icon text-gold">{isQR(target) ? 'qr_code_2' : 'arrow_forward'}</span>
            </>
          );
          const cls = 'card p-5 flex items-center gap-4 hover:shadow-raised transition w-full';
          return isQR(target)
            ? <button key={label} type="button" onClick={() => showQR(target)} className={cls}>{inner}</button>
            : <a key={label} href={target} className={cls}>{inner}</a>;
        })}
      </section>
    </>
  );
}
