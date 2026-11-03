import { createContext, useContext, useState, useEffect } from 'react';
import { CONTACT } from '../data.js';

const QR = {
  wechat: { name: 'WeChat', img: '/qr/wechat.png', hint: `WeChat ID: ${CONTACT.wechat}`, color: '#07C160', icon: 'mark_chat_unread', text: 'Scan with WeChat to add us as a contact.' },
  whatsapp: { name: 'WhatsApp', img: '/qr/whatsapp.png', hint: CONTACT.phone, color: '#25D366', icon: 'chat', text: 'Scan with WhatsApp to add us as a contact.', link: CONTACT.whatsapp, linkLabel: 'Open WhatsApp chat' },
  line: { name: 'LINE', img: '/qr/line.png', hint: `LINE: ${CONTACT.linePhone}`, color: '#06C755', icon: 'forum', text: 'Scan with LINE to add us as a friend.' },
};

const Ctx = createContext(() => {});
export const useContactQR = () => useContext(Ctx);

export function ContactQRProvider({ children }) {
  const [key, setKey] = useState(null);
  const q = key && QR[key];

  useEffect(() => {
    if (!key) return;
    const onKey = (e) => e.key === 'Escape' && setKey(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [key]);

  return (
    <Ctx.Provider value={setKey}>
      {children}
      {q && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60" onClick={() => setKey(null)}>
          <div role="dialog" aria-modal="true" className="relative bg-white rounded-2xl shadow-raised w-full max-w-sm p-6 text-center" onClick={(e) => e.stopPropagation()}>
            <button aria-label="Close" className="absolute top-3 right-3 w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center" onClick={() => setKey(null)}>
              <span className="icon">close</span>
            </button>
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: q.color }}><span className="icon text-xl">{q.icon}</span></span>
              <h3 className="text-xl font-bold">{q.name}</h3>
            </div>
            <div className="mx-auto w-fit max-w-full rounded-2xl overflow-hidden border-4 shadow-card" style={{ borderColor: q.color }}>
              <img src={q.img} alt={`${q.name} QR code`} className="block max-h-[60vh] max-w-full object-contain" />
            </div>
            <p className="mt-3 text-sm text-on-surface-variant">{q.text}</p>
            <p className="label-code mt-1 font-bold">{q.hint}</p>
            {q.link && <a href={q.link} target="_blank" rel="noreferrer" className="btn-gold mt-4 w-full">{q.linkLabel}</a>}
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
