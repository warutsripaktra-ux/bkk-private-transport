export const CONTACT = {
  phone: '084 377 5671',
  tel: '+66843775671',
  linePhone: '098 050 9494',
  line: '@bkkprivatecar',
  wechat: 'bkkprivate_transport',
  email: 'booking@bkkprivatecar.com',
  whatsapp: 'https://wa.me/66843775671',
  address: '888/14 Bangna-Trat Frontage Rd, Bang Phli, Samut Prakan 10540',
  license: 'TAT License #11/09842',
};

export const VEHICLES_DATA = {
  EN: [
    {
      id: 'sedan',
      label: 'Executive Sedan',
      seats: '5 Seats',
      models: 'Honda City, Toyota Camry or equivalent',
      pax: 3,
      bags: '2-3 large bags',
      tag: 'Best Value',
      audience: 'Solo business travelers, couples, or small families',
      features: ['Quiet dual-zone air conditioning', 'Plush leather upholstery', 'USB rapid charging ports', 'Chilled bottled water'],
      image: '/cars/sedan.jpg',
    },
    {
      id: 'suv',
      label: 'SUV / MPV',
      seats: '7 Seats',
      models: 'Toyota Fortuner, Innova Crysta, Isuzu MU-X',
      pax: 4,
      bags: '4-5 large suitcases',
      tag: 'Recommended',
      audience: 'Families, golf travelers, or shoppers with extra suitcases',
      features: ['High ground clearance & commanding view', 'Spacious legroom', 'Reclining middle-row seats', 'Child safety seat on request'],
      image: '/cars/suv.jpg',
    },
    {
      id: 'van',
      label: 'VIP Commuter Van',
      seats: '9-10 Seats',
      models: 'Toyota Commuter VIP / HiAce Custom',
      pax: 9,
      bags: '8-10 large suitcases',
      tag: 'Group Travel',
      audience: 'Large families, group tours, corporate delegations',
      features: ['VIP captain reclining seats', 'High roof walk-in entry', 'Android TV & sound system', 'Large rear luggage compartment'],
      image: '/cars/van.jpg',
    },
  ],
  TH: [
    {
      id: 'sedan',
      label: 'รถเก๋งพรีเมียม (Sedan)',
      seats: '5 ที่นั่ง',
      models: 'Honda City, Toyota Camry หรือเทียบเท่า',
      pax: 3,
      bags: 'กระเป๋าใหญ่ 2-3 ใบ',
      tag: 'คุ้มค่าที่สุด',
      audience: 'ผู้เดินทางคนเดียว, คู่รัก, หรือครอบครัวขนาดเล็ก',
      features: ['ระบบปรับอากาศแยกโซน เย็นสบายเงียบสงบ', 'เบาะหนังนุ่ม นั่งสบายตลอดเส้นทาง', 'ช่องชาร์จ USB ความเร็วสูง', 'บริการน้ำดื่มเย็นฟรีบนรถ'],
      image: '/cars/sedan.jpg',
    },
    {
      id: 'suv',
      label: 'รถยนต์ SUV / MPV',
      seats: '7 ที่นั่ง',
      models: 'Toyota Fortuner, Innova Crysta, Isuzu MU-X',
      pax: 4,
      bags: 'กระเป๋าใหญ่ 4-5 ใบ',
      tag: 'แนะนำยอดนิยม',
      audience: 'ครอบครัว, ผู้โดยสารพร้อมถุงกอล์ฟ หรือกระเป๋าเดินทางหลายใบ',
      features: ['ทัศนวิสัยสูง ปลอดโปร่ง', 'พื้นที่วางขากว้างขวาง นั่งสบาย', 'เบาะแถวกลางปรับเอนได้อิสระ', 'มีคาร์ซีทสำหรับเด็ก (แจ้งล่วงหน้าได้ฟรี)'],
      image: '/cars/suv.jpg',
    },
    {
      id: 'van',
      label: 'รถตู้ VIP Commuter',
      seats: '9-10 ที่นั่ง',
      models: 'Toyota Commuter VIP / HiAce Custom',
      pax: 9,
      bags: 'กระเป๋าใหญ่ 8-10 ใบ',
      tag: 'สำหรับหมู่คณะ',
      audience: 'ครอบครัวใหญ่, ท่องเที่ยวกลุ่มเพื่อน, คณะดูงานองค์กร',
      features: ['เบาะ VIP ปรับเอนอิสระแบบกัปตัน', 'หลังคาสูง ยืนเดินขึ้นลงสะดวก', 'ระบบแอนดรอยด์ทีวีและเครื่องเสียงระดับพรีเมียม', 'ห้องเก็บสัมภาระด้านหลังขนาดใหญ่พิเศษ'],
      image: '/cars/van.jpg',
    },
  ],
};

export const ORIGINS_DATA = {
  EN: [
    { id: 'bkk', label: 'Suvarnabhumi Airport (BKK)' },
    { id: 'dmk', label: 'Don Mueang Airport (DMK)' },
    { id: 'city', label: 'Bangkok Downtown / Sukhumvit / Silom' },
  ],
  TH: [
    { id: 'bkk', label: 'สนามบินสุวรรณภูมิ (BKK)' },
    { id: 'dmk', label: 'สนามบินดอนเมือง (DMK)' },
    { id: 'city', label: 'ตัวเมืองกรุงเทพฯ / สุขุมวิท / สีลม' },
  ],
};

// prices in THB: [5 seats (sedan), 7 seats (suv), van]
// origin: 'bkk' | 'dmk' | 'city' | 'all' ("Bangkok" = any Bangkok pickup, shown for every origin)
const ROUTE_BASE = [
  // --- Airport <-> Bangkok city ---
  { id: 'bkk-city', origin: 'bkk', dest: 'city', price: [700, 800, 1300], popular: true,
    en: { title: 'Suvarnabhumi Airport (BKK) to Bangkok City', meta: 'Approx. 45m - 1h', km: '30-35 km', note: 'Instant Confirmation', desc: 'Direct private transfer to any hotel or residence in Bangkok (Sukhumvit, Silom, Siam, Sathorn, Riverside). Express highway tolls, fuel and airport meet & greet included.' },
    th: { title: 'สนามบินสุวรรณภูมิ (BKK) ไป ตัวเมืองกรุงเทพฯ', meta: 'ประมาณ 45 นาที - 1 ชม.', km: '30-35 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงถึงโรงแรมหรือที่พักในกรุงเทพฯ (สุขุมวิท, สีลม, สาทร, สยาม, ริมเจ้าพระยา) รวมค่าทางด่วนพิเศษ ค่าน้ำมัน และคนขับถือป้ายต้อนรับเรียบร้อย' } },
  { id: 'dmk-city', origin: 'dmk', dest: 'city', price: [700, 800, 1300], popular: true,
    en: { title: 'Don Mueang Airport (DMK) to Bangkok City', meta: 'Approx. 35m - 50m', km: '25-30 km', note: 'Instant Confirmation', desc: 'Direct transfer from DMK to central Bangkok. Don Mueang Tollway express pass, fuel, driver and arrivals greeting included.' },
    th: { title: 'สนามบินดอนเมือง (DMK) ไป ตัวเมืองกรุงเทพฯ', meta: 'ประมาณ 35 - 50 นาที', km: '25-30 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากสนามบินดอนเมืองถึงใจกลางกรุงเทพฯ รวมค่าทางด่วนดอนเมือง ค่าน้ำมัน คนขับ และป้ายต้อนรับ' } },
  { id: 'city-bkk', origin: 'city', dest: 'bkk', price: [700, 800, 1300],
    en: { title: 'Bangkok City to Suvarnabhumi Airport (BKK)', meta: 'Approx. 45m - 1h', km: '30-35 km', note: 'On-Time Guaranteed', desc: 'Pick up from your Bangkok hotel lobby or residence directly to Suvarnabhumi departure gate. Highway tolls and fuel included.' },
    th: { title: 'ตัวเมืองกรุงเทพฯ ไป สนามบินสุวรรณภูมิ (BKK)', meta: 'ประมาณ 45 นาที - 1 ชม.', km: '30-35 กม.', note: 'ตรงเวลาแน่นอน', desc: 'รับที่โรงแรมหรือที่พักในกรุงเทพฯ ส่งถึงประตูผู้โดยสารขาออกสุวรรณภูมิ รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'city-dmk', origin: 'city', dest: 'dmk', price: [700, 800, 1300],
    en: { title: 'Bangkok City to Don Mueang Airport (DMK)', meta: 'Approx. 35m - 50m', km: '25-30 km', note: 'On-Time Guaranteed', desc: 'Hotel pick up straight to Don Mueang Airport Terminal 1 or 2 departure hall. Expressway and fuel included.' },
    th: { title: 'ตัวเมืองกรุงเทพฯ ไป สนามบินดอนเมือง (DMK)', meta: 'ประมาณ 35 - 50 นาที', km: '25-30 กม.', note: 'ตรงเวลาแน่นอน', desc: 'รับที่โรงแรม ส่งถึงอาคารผู้โดยสารขาออกดอนเมือง T1 หรือ T2 รวมค่าทางด่วนและน้ำมัน' } },

  // --- Pattaya ---
  { id: 'bangkok-pattaya', origin: 'all', dest: 'pattaya', price: [1500, 1800, 2500], popular: true,
    en: { title: 'Bangkok to Pattaya', meta: 'Approx. 2h', km: '150 km', note: 'Instant Confirmation', desc: 'Door-to-door private transfer to your hotel in Pattaya Central, North, South or Jomtien. Motorway tolls and fuel included.' },
    th: { title: 'กรุงเทพฯ ไป พัทยา', meta: 'ประมาณ 2 ชม.', km: '150 กม.', note: 'ยืนยันทันที', desc: 'รับส่งถึงหน้าโรงแรมในพัทยากลาง เหนือ ใต้ หรือจอมเทียน รวมค่าทางด่วนและน้ำมัน' } },

  // --- Hua Hin ---
  { id: 'bkk-huahin', origin: 'bkk', dest: 'hua-hin', price: [2500, 3000, 3500],
    en: { title: 'Suvarnabhumi Airport (BKK) to Hua Hin', meta: 'Approx. 3h 30m', km: '230 km', note: 'Instant Confirmation', desc: 'Direct private transfer from Suvarnabhumi to Hua Hin and Cha-Am hotels. Tolls and fuel included.' },
    th: { title: 'สนามบินสุวรรณภูมิ (BKK) ไป หัวหิน', meta: 'ประมาณ 3 ชม. 30 นาที', km: '230 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากสุวรรณภูมิถึงโรงแรมในหัวหินและชะอำ รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'dmk-huahin', origin: 'dmk', dest: 'hua-hin', price: [2500, 3000, 3500],
    en: { title: 'Don Mueang Airport (DMK) to Hua Hin', meta: 'Approx. 3h 30m', km: '230 km', note: 'Instant Confirmation', desc: 'Direct private transfer from Don Mueang to Hua Hin and Cha-Am hotels. Tolls and fuel included.' },
    th: { title: 'สนามบินดอนเมือง (DMK) ไป หัวหิน', meta: 'ประมาณ 3 ชม. 30 นาที', km: '230 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากดอนเมืองถึงโรงแรมในหัวหินและชะอำ รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'bangkok-huahin', origin: 'all', dest: 'hua-hin', price: [2200, 2800, 3200],
    en: { title: 'Bangkok to Hua Hin', meta: 'Approx. 3h', km: '200 km', note: 'Instant Confirmation', desc: 'Private transfer from your Bangkok hotel to Hua Hin and Cha-Am. Tolls and fuel included.' },
    th: { title: 'กรุงเทพฯ ไป หัวหิน', meta: 'ประมาณ 3 ชม.', km: '200 กม.', note: 'ยืนยันทันที', desc: 'รับจากโรงแรมในกรุงเทพฯ ส่งถึงหัวหินและชะอำ รวมค่าทางด่วนและน้ำมัน' } },

  // --- Koh Samet (Ban Phe Pier) ---
  { id: 'bkk-samet', origin: 'bkk', dest: 'koh-samet', price: [2000, 3500, 3000],
    en: { title: 'Suvarnabhumi Airport (BKK) to Koh Samet Pier', meta: 'Approx. 2h 30m', km: '190 km', note: 'Instant Confirmation', desc: 'Direct transfer from Suvarnabhumi to Ban Phe Pier for Koh Samet speedboats and ferries. Tolls and fuel included.' },
    th: { title: 'สนามบินสุวรรณภูมิ (BKK) ไป ท่าเรือเกาะเสม็ด', meta: 'ประมาณ 2 ชม. 30 นาที', km: '190 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากสุวรรณภูมิถึงท่าเรือบ้านเพ เพื่อต่อเรือสปีดโบ๊ทหรือเฟอร์รี่ไปเกาะเสม็ด รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'dmk-samet', origin: 'dmk', dest: 'koh-samet', price: [2500, 3000, 3500],
    en: { title: 'Don Mueang Airport (DMK) to Koh Samet Pier', meta: 'Approx. 3h', km: '220 km', note: 'Instant Confirmation', desc: 'Direct transfer from Don Mueang to Ban Phe Pier for Koh Samet speedboats and ferries. Tolls and fuel included.' },
    th: { title: 'สนามบินดอนเมือง (DMK) ไป ท่าเรือเกาะเสม็ด', meta: 'ประมาณ 3 ชม.', km: '220 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากดอนเมืองถึงท่าเรือบ้านเพ เพื่อต่อเรือสปีดโบ๊ทหรือเฟอร์รี่ไปเกาะเสม็ด รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'bangkok-samet', origin: 'all', dest: 'koh-samet', price: [2500, 3000, 3500],
    en: { title: 'Bangkok to Koh Samet Pier', meta: 'Approx. 3h', km: '210 km', note: 'Instant Confirmation', desc: 'Private transfer from your Bangkok hotel to Ban Phe Pier for Koh Samet. Tolls and fuel included.' },
    th: { title: 'กรุงเทพฯ ไป ท่าเรือเกาะเสม็ด', meta: 'ประมาณ 3 ชม.', km: '210 กม.', note: 'ยืนยันทันที', desc: 'รับจากโรงแรมในกรุงเทพฯ ส่งถึงท่าเรือบ้านเพ เพื่อไปเกาะเสม็ด รวมค่าทางด่วนและน้ำมัน' } },

  // --- Koh Chang ---
  { id: 'bkk-chang', origin: 'bkk', dest: 'koh-chang', price: [3200, 3500, 4500],
    en: { title: 'Suvarnabhumi Airport (BKK) to Koh Chang', meta: 'Approx. 4h 30m', km: '310 km', note: 'Instant Confirmation', desc: 'Direct transfer from Suvarnabhumi to Laem Ngop Pier (ferry to Koh Chang). Tolls and fuel included.' },
    th: { title: 'สนามบินสุวรรณภูมิ (BKK) ไป เกาะช้าง', meta: 'ประมาณ 4 ชม. 30 นาที', km: '310 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากสุวรรณภูมิถึงท่าเรือแหลมงอบ เพื่อต่อเรือเฟอร์รี่ไปเกาะช้าง รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'dmk-chang', origin: 'dmk', dest: 'koh-chang', price: [3500, 4000, 5000],
    en: { title: 'Don Mueang Airport (DMK) to Koh Chang', meta: 'Approx. 5h', km: '340 km', note: 'Instant Confirmation', desc: 'Direct transfer from Don Mueang to Laem Ngop Pier (ferry to Koh Chang). Tolls and fuel included.' },
    th: { title: 'สนามบินดอนเมือง (DMK) ไป เกาะช้าง', meta: 'ประมาณ 5 ชม.', km: '340 กม.', note: 'ยืนยันทันที', desc: 'รับส่งตรงจากดอนเมืองถึงท่าเรือแหลมงอบ เพื่อต่อเรือเฟอร์รี่ไปเกาะช้าง รวมค่าทางด่วนและน้ำมัน' } },
  { id: 'bangkok-chang', origin: 'all', dest: 'koh-chang', price: [3500, 4000, 5000],
    en: { title: 'Bangkok to Koh Chang', meta: 'Approx. 5h', km: '320 km', note: 'Instant Confirmation', desc: 'Private transfer from your Bangkok hotel to Laem Ngop Pier (ferry to Koh Chang). Tolls and fuel included.' },
    th: { title: 'กรุงเทพฯ ไป เกาะช้าง', meta: 'ประมาณ 5 ชม.', km: '320 กม.', note: 'ยืนยันทันที', desc: 'รับจากโรงแรมในกรุงเทพฯ ส่งถึงท่าเรือแหลมงอบ เพื่อต่อเรือเฟอร์รี่ไปเกาะช้าง รวมค่าทางด่วนและน้ำมัน' } },

  // --- Day trips ---
  { id: 'bkk-ayutthaya', origin: 'all', dest: 'ayutthaya', price: [2200, 2700, 3500],
    en: { title: 'Ayutthaya UNESCO Heritage Tour', meta: 'Full day (8 hrs)', km: 'Heritage tour', note: 'Flexible Sightseeing', desc: 'Dedicated vehicle and chauffeur: Bang Pa-In Summer Palace, Wat Mahathat, Wat Chaiwatthanaram and lunch stop.' },
    th: { title: 'ทัวร์มรดกโลกอยุธยา', meta: 'เต็มวัน (8 ชม.)', km: 'ทัวร์ประวัติศาสตร์', note: 'เที่ยวได้อิสระ', desc: 'เหมารถพร้อมคนขับตลอดวัน: พระราชวังบางปะอิน, วัดมหาธาตุ, วัดไชยวัฒนาราม และแวะรับประทานอาหารกลางวัน' } },
  { id: 'city-charter', origin: 'city', dest: 'charter', price: [2500, 3000, 3800],
    en: { title: 'Bangkok Metropolitan Custom Charter', meta: '10 hrs chauffeur hire', km: 'Custom itinerary', note: 'Full Day Independence', desc: 'Unlimited city stops: Grand Palace, ICONSIAM, Wat Arun, Chatuchak Market or corporate roadshows.' },
    th: { title: 'เหมารถในกรุงเทพฯ ตามต้องการ', meta: 'เหมา 10 ชม.', km: 'กำหนดเส้นทางเอง', note: 'อิสระทั้งวัน', desc: 'แวะได้ไม่จำกัดจุดในเมือง: พระบรมมหาราชวัง, ไอคอนสยาม, วัดอรุณ, ตลาดนัดจตุจักร หรือเดินทางไปประชุมนอกสถานที่' } },
];

export const ROUTES_DATA = {
  EN: ROUTE_BASE.map(({ en, th, ...r }) => ({ ...r, ...en })),
  TH: ROUTE_BASE.map(({ en, th, ...r }) => ({ ...r, ...th })),
};

export const DESTINATIONS_DATA = {
  EN: [
    { id: 'all', label: 'All Routes' },
    { id: 'city', label: 'Bangkok City' },
    { id: 'pattaya', label: 'Pattaya' },
    { id: 'hua-hin', label: 'Hua Hin' },
    { id: 'koh-samet', label: 'Koh Samet Pier' },
    { id: 'koh-chang', label: 'Koh Chang' },
    { id: 'ayutthaya', label: 'Ayutthaya' },
    { id: 'charter', label: 'BKK City Charter' },
  ],
  TH: [
    { id: 'all', label: 'ทุกเส้นทาง' },
    { id: 'city', label: 'ตัวเมืองกรุงเทพฯ' },
    { id: 'pattaya', label: 'พัทยา' },
    { id: 'hua-hin', label: 'หัวหิน / ชะอำ' },
    { id: 'koh-samet', label: 'ท่าเรือเกาะเสม็ด' },
    { id: 'koh-chang', label: 'เกาะช้าง' },
    { id: 'ayutthaya', label: 'อยุธยา' },
    { id: 'charter', label: 'เหมารถในกรุงเทพฯ' },
  ],
};


export const BOOK_STEPS_DATA = {
  EN: [
    { icon: 'route', title: 'Choose Route & Car Size', text: 'Select your airport and destination, then pick a 5-seat sedan, 7-seat SUV or 9-10 seat VIP van.' },
    { icon: 'send', title: 'Send Your Details', text: 'Submit flight number, date and passengers by form, WhatsApp or LINE. No credit card deposit required.' },
    { icon: 'mark_email_read', title: 'Receive Instant Voucher', text: 'Get your confirmation voucher with driver photo, phone number and license plate before you fly.' },
    { icon: 'meeting_room', title: 'Meet at Arrival Gate', text: 'Your chauffeur waits with a name sign: BKK Gate 3-4 (Level 2); DMK Gate 5 (T1) or Gate 14 (T2).' },
    { icon: 'directions_car', title: 'Enjoy the Ride', text: 'Luggage loaded into a pre-cooled private vehicle with refreshments. Relax all the way to your hotel.' },
  ],
  TH: [
    { icon: 'route', title: 'เลือกรถและเส้นทาง', text: 'เลือกจุดรับ-ส่ง และขนาดรถยนต์ที่เหมาะกับคุณ ทั้ง Sedan 5 ที่นั่ง, SUV 7 ที่นั่ง หรือ VIP Van 9-10 ที่นั่ง' },
    { icon: 'send', title: 'ส่งข้อมูลการเดินทาง', text: 'แจ้งเที่ยวบิน วันเวลา และจำนวนผู้โดยสารผ่านฟอร์ม, WhatsApp หรือ LINE ไม่ต้องใช้บัตรเครดิต' },
    { icon: 'mark_email_read', title: 'รับใบยืนยันการจอง', text: 'รับ Voucher ยืนยันทันที พร้อมข้อมูลและเบอร์ติดต่อคนขับ รวมถึงทะเบียนรถก่อนออกเดินทาง' },
    { icon: 'meeting_room', title: 'พบคนขับที่จุดนัดพบสนามบิน', text: 'คนขับถือป้ายชื่อรอต้อนรับ ณ ประตูทางออก: สุวรรณภูมิ ประตู 3-4 (ชั้น 2) / ดอนเมือง ประตู 5 (T1) หรือ ประตู 14 (T2)' },
    { icon: 'directions_car', title: 'เดินทางสู่ที่หมายอย่างสบายใจ', text: 'คนขับช่วยยกสัมภาระขึ้นรถส่วนตัวที่เปิดแอร์รอไว้ พักผ่อนและผ่อนคลายตลอดทางถึงหน้าโรงแรม' },
  ],
};

export const FAQ_DATA = {
  EN: [
    { q: 'How fast is confirmation?', a: 'Typically under 90 seconds on WhatsApp, and within 15 minutes by email, any hour of the day.' },
    { q: 'What if my flight is delayed?', a: 'We track every flight in real time and include complimentary waiting time for delays.' },
    { q: 'Are tolls and fuel included?', a: 'Yes. All quoted rates include expressway tolls, fuel, driver, airport parking and meet & greet.' },
    { q: 'How can I pay?', a: 'Pay in Thai Baht cash to your chauffeur, via Thai QR PromptPay, or by bank transfer. No credit card pre-charge.' },
    { q: 'Can I cancel?', a: 'Free cancellation up to 24 hours before pickup.' },
  ],
  TH: [
    { q: 'ได้รับการยืนยันการจองเร็วแค่ไหน?', a: 'ยืนยันรวดเร็วภายใน 90 วินาทีทาง WhatsApp และไม่เกิน 15 นาทีทางอีเมล ตลอด 24 ชั่วโมง' },
    { q: 'หากเที่ยวบินล่าช้า (Flight Delay) จะทำอย่างไร?', a: 'ทีมงานติดตามสถานะเที่ยวบินแบบ Real-time ตลอดเวลา คนขับรอฟรีโดยไม่มีค่าใช้จ่ายเพิ่มเติมกรณีไฟล์ทดีเลย์' },
    { q: 'ราคารวมค่าทางด่วนและน้ำมันแล้วหรือยัง?', a: 'ราคานี้เป็นราคาสุทธิ (All-inclusive) รวมค่าทางด่วน ค่าน้ำมัน ค่าจ้างคนขับ ค่าจอดรถสนามบิน และป้ายต้อนรับแล้ว ไม่มีบวกเพิ่มหน้างาน' },
    { q: 'ช่องทางการชำระเงินมีอะไรบ้าง?', a: 'สามารถจ่ายเงินสด (บาท) ให้คนขับโดยตรงเมื่อถึงที่หมาย, สแกน Thai QR PromptPay หรือโอนเข้าบัญชีธนาคาร ไม่ต้องมัดจำบัตรเครดิต' },
    { q: 'สามารถยกเลิกการจองได้หรือไม่?', a: 'ยกเลิกฟรี ไม่มีค่าธรรมเนียม เพียงแจ้งล่วงหน้าอย่างน้อย 24 ชั่วโมงก่อนเวลานัดหมาย' },
  ],
};

export const getVehicles = (lang = 'EN') => VEHICLES_DATA[lang] || VEHICLES_DATA.EN;
export const getOrigins = (lang = 'EN') => ORIGINS_DATA[lang] || ORIGINS_DATA.EN;
export const getRoutes = (lang = 'EN') => ROUTES_DATA[lang] || ROUTES_DATA.EN;
export const getDestinations = (lang = 'EN') => DESTINATIONS_DATA[lang] || DESTINATIONS_DATA.EN;
export const getBookSteps = (lang = 'EN') => BOOK_STEPS_DATA[lang] || BOOK_STEPS_DATA.EN;
export const getFaq = (lang = 'EN') => FAQ_DATA[lang] || FAQ_DATA.EN;

// Backward-compatible defaults (EN)
export const VEHICLES = VEHICLES_DATA.EN;
export const ORIGINS = ORIGINS_DATA.EN;
export const ROUTES = ROUTES_DATA.EN;
export const DESTINATIONS = DESTINATIONS_DATA.EN;
export const BOOK_STEPS = BOOK_STEPS_DATA.EN;
export const FAQ = FAQ_DATA.EN;

export const THB = (n) => '฿ ' + Number(n).toLocaleString('en-US');