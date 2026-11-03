import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputPath = path.resolve('..', 'BKK_Private_Transport_Manual.pdf');
const doc = new PDFDocument({
  size: 'A4',
  margins: { top: 40, bottom: 40, left: 45, right: 45 },
  info: {
    Title: 'คู่มือการใช้งานเว็บไซต์ BKK Private Transport',
    Author: 'BKK Private Transport Co., Ltd.',
  }
});

doc.pipe(fs.createWriteStream(outputPath));

const fontPath = 'C:\\Windows\\Fonts\\tahoma.ttf';
const fontBoldPath = 'C:\\Windows\\Fonts\\tahomabd.ttf';

doc.registerFont('Thai', fontPath);
doc.registerFont('Thai-Bold', fs.existsSync(fontBoldPath) ? fontBoldPath : fontPath);

// Color Palette
const NAVY = '#0E1A2B';
const GOLD = '#C59B27';
const DARK = '#171C25';
const MUTED = '#555555';
const LIGHT_BG = '#F0F3FF';
const BORDER = '#DDE2F0';

function drawHeader(title, subtitle) {
  // Top Banner
  doc.rect(45, 40, 505, 55).fill(NAVY);
  doc.font('Thai-Bold').fontSize(16).fillColor('#FFFFFF').text(title, 60, 52);
  doc.font('Thai').fontSize(10).fillColor(GOLD).text(subtitle, 60, 72);
  doc.y = 110;
}

function drawSectionTitle(num, text) {
  doc.moveDown(0.6);
  const y = doc.y;
  doc.rect(45, y, 22, 20).fill(GOLD);
  doc.font('Thai-Bold').fontSize(11).fillColor('#FFFFFF').text(String(num), 45, y + 3, { width: 22, align: 'center' });
  doc.font('Thai-Bold').fontSize(13).fillColor(NAVY).text(text, 75, y + 3);
  doc.y = y + 28;
}

// ================= PAGE 1 =================
drawHeader('คู่มือการใช้งานเว็บไซต์ (User Manual)', 'BKK Private Transport • Executive Chauffeur Thailand');

// ภาพรวม
drawSectionTitle(1, 'ภาพรวมของเว็บไซต์ (Overview)');
doc.font('Thai').fontSize(10).fillColor(DARK).text(
  'เว็บไซต์ BKK Private Transport เป็นแพลตฟอร์มให้บริการรถรับส่งส่วนตัวและรถตู้ VIP ระหว่างกรุงเทพฯ สนามบินสุวรรณภูมิ (BKK), สนามบินดอนเมือง (DMK) ไปยังพัทยา, หัวหิน, เกาะเสม็ด, เกาะช้าง และทัวร์อยุธยา ด้วยราคาเหมาจ่ายคงที่ (All-inclusive) รวมค่าน้ำมัน ค่าทางด่วน และคนขับเรียบร้อยแล้ว',
  { align: 'justify', lineGap: 3 }
);

// ฟังก์ชันหลัก
drawSectionTitle(2, 'ฟังก์ชันหลักบนเว็บไซต์ (Key Features)');
const features = [
  ['หน้าแรก (Home) & คำนวณราคา (Check Fare):', 'ผู้ใช้สามารถเลือกจุดรับ (สนามบิน/ตัวเมือง), ปลายทาง, วันที่, จำนวนผู้โดยสาร และขนาดรถ ระบบจะคำนวณและแสดงราคาเหมาจ่ายสุทธิให้ทันที พร้อมปุ่มส่งจองเข้า WhatsApp'],
  ['ดูอัตราค่าบริการทั้งหมด (Rates & Destinations):', 'แสดงตารางราคาค่าโดยสารทุกเส้นทางอย่างโปร่งใส สามารถฟิลเตอร์ตามจุดขึ้นรถและปลายทางได้'],
  ['ข้อมูลขบวนรถพรีเมียม (Vehicle Fleet):', 'แสดงรูปถ่ายรถจริง สเปก จำนวนที่นั่ง ความจุสัมภาระ (Sedan 5 ที่นั่ง, SUV 7 ที่นั่ง, VIP Van 9-10 ที่นั่ง)'],
  ['จุดนัดพบสนามบิน (Airport Transfers):', 'ระบุประตูทางออกและจุดนัดพบสำหรับสุวรรณภูมิ (Gate 3-4 ชั้น 2) และดอนเมือง (Gate 5 T1 / Gate 14 T2)'],
  ['ขั้นตอนการจอง (How to Book) & FAQ:', 'อธิบาย 5 ขั้นตอนในการใช้บริการ และคำถามที่พบบ่อย (เรื่องไฟล์ทดีเลย์, การยกเลิก, การชำระเงิน)'],
  ['สลับภาษา (TH / EN):', 'รองรับทั้งภาษาไทยและภาษาอังกฤษ โดยกดปุ่มสลับภาษาที่มุมขวาบน']
];

features.forEach(([bold, desc]) => {
  doc.font('Thai-Bold').fontSize(9.5).fillColor(NAVY).text('• ' + bold, { continued: true });
  doc.font('Thai').fontSize(9.5).fillColor(DARK).text(' ' + desc, { lineGap: 2 });
});

// ขั้นตอนการจอง
drawSectionTitle(3, 'ขั้นตอนการจองรถของลูกค้า (Customer Journey)');
const steps = [
  ['1. ค้นหาและเลือกรถ', 'เลือกเส้นทางและประเภทรถที่เหมาะสมผ่านหน้าแรก หรือหน้ารวมราคา'],
  ['2. กดติดต่อหรือจอง', 'กดปุ่ม "Book via WhatsApp" เพื่อส่งข้อมูลสรุปการเดินทาง หรือกดเลือกแอปที่ต้องการ'],
  ['3. สแกน QR Code', 'สามารถกดดู QR Code ได้ทั้ง WhatsApp, LINE และ WeChat ได้ทันที'],
  ['4. รับการยืนยัน', 'แอดมินยืนยันคิวรถ ส่งรูปคนขับ เบอร์โทร และทะเบียนรถให้ลูกค้า'],
  ['5. ชำระเงินหน้างาน', 'จ่ายเงินสดให้คนขับเมื่อถึงปลายทาง หรือสแกน Thai QR PromptPay สะดวกสบาย']
];

steps.forEach(([title, detail]) => {
  doc.rect(45, doc.y, 505, 20).fill(LIGHT_BG);
  doc.font('Thai-Bold').fontSize(9.5).fillColor(NAVY).text(title, 55, doc.y - 15, { width: 140 });
  doc.font('Thai').fontSize(9.5).fillColor(DARK).text(detail, 200, doc.y - 14, { width: 340 });
  doc.y += 4;
});

// Footer Page 1
doc.font('Thai').fontSize(8).fillColor(MUTED).text('หน้า 1 จาก 2  •  BKK Private Transport Co., Ltd.', 45, 790, { align: 'center', width: 505 });

// ================= PAGE 2 =================
doc.addPage();
drawHeader('ข้อมูลเส้นทาง ราคา และการจัดการ (Admin Guide)', 'BKK Private Transport • Executive Chauffeur Thailand');

// ตารางราคา
drawSectionTitle(4, 'สรุปอัตราค่าบริการมาตรฐาน (Standard Rates Matrix)');
const tableData = [
  ['เส้นทาง (Route)', 'Sedan (5 ที่นั่ง)', 'SUV (7 ที่นั่ง)', 'VIP Van (9-10 ที่นั่ง)'],
  ['กรุงเทพฯ - พัทยา (Bangkok - Pattaya)', '1,500 ฿', '1,800 ฿', '2,500 ฿'],
  ['กรุงเทพฯ - หัวหิน (Bangkok - Hua Hin)', '2,200 ฿', '2,800 ฿', '3,200 ฿'],
  ['สนามบินดอนเมือง - หัวหิน (DMK - Hua Hin)', '2,500 ฿', '3,000 ฿', '3,500 ฿'],
  ['สนามบินสุวรรณภูมิ - หัวหิน (BKK - Hua Hin)', '2,500 ฿', '3,000 ฿', '3,500 ฿'],
  ['กรุงเทพฯ / ดอนเมือง - ท่าเรือเกาะเสม็ด', '2,500 ฿', '3,000 ฿', '3,500 ฿'],
  ['สนามบินสุวรรณภูมิ - ท่าเรือเกาะเสม็ด', '2,000 ฿', '3,500 ฿', '3,000 ฿'],
  ['กรุงเทพฯ / ดอนเมือง - เกาะช้าง', '3,500 ฿', '4,000 ฿', '5,000 ฿'],
  ['สนามบินสุวรรณภูมิ - เกาะช้าง', '3,200 ฿', '3,500 ฿', '4,500 ฿'],
];

let curY = doc.y;
tableData.forEach((row, i) => {
  const isHeader = i === 0;
  doc.rect(45, curY, 505, 20).fill(isHeader ? NAVY : (i % 2 === 0 ? LIGHT_BG : '#FFFFFF'));
  doc.rect(45, curY, 505, 20).stroke(BORDER);
  
  const textColor = isHeader ? '#FFFFFF' : DARK;
  const f = isHeader ? 'Thai-Bold' : 'Thai';
  
  doc.font(f).fontSize(8.5).fillColor(textColor);
  doc.text(row[0], 52, curY + 5, { width: 220 });
  doc.text(row[1], 275, curY + 5, { width: 75, align: 'center' });
  doc.text(row[2], 355, curY + 5, { width: 75, align: 'center' });
  doc.text(row[3], 435, curY + 5, { width: 95, align: 'center' });
  
  curY += 20;
});
doc.y = curY + 10;

// ช่องทางการติดต่อ
drawSectionTitle(5, 'ช่องทางติดต่อที่ติดตั้งในระบบ (Contact Channels)');
doc.font('Thai').fontSize(9.5).fillColor(DARK).text(
  '• เบอร์โทรศัพท์หลัก / Voice Hotline: 084 377 5671 (คลิกแล้วโทรออกทันที)\n' +
  '• WhatsApp VIP: 084 377 5671 (กดปุ่มแล้วเปิด QR Code หรือคลิกลิงก์คุยตรง)\n' +
  '• LINE Official: 098 050 9494 (กดแล้วแสดง QR Code พร้อมแอดเพื่อน)\n' +
  '• WeChat: ID bkkprivate_transport (กดแล้วเปิดภาพ QR Code WeChat ทันที)',
  { lineGap: 3 }
);

// การดูแลและแก้ไขข้อมูล
drawSectionTitle(6, 'โครงสร้างไฟล์สำหรับผู้ดูแลระบบ (Developer & Admin Guide)');
const codeFiles = [
  ['bkk-private-transport/src/data.js', 'แก้ไขราคา เส้นทาง สเปกรถ และเบอร์โทรศัพท์ติดต่อ'],
  ['bkk-private-transport/src/translations.js', 'แก้ไขข้อความภาษาไทยและภาษาอังกฤษทั้งเว็บ'],
  ['bkk-private-transport/public/cars/', 'เก็บรูปถ่ายรถจริง (sedan.jpg, suv.jpg, van.jpg)'],
  ['bkk-private-transport/public/qr/', 'เก็บรูปภาพ QR Code (line.png, wechat.png, whatsapp.png)']
];

codeFiles.forEach(([file, desc]) => {
  doc.font('Thai-Bold').fontSize(9).fillColor(GOLD).text('• ' + file);
  doc.font('Thai').fontSize(9).fillColor(DARK).text('  ' + desc, { lineGap: 2 });
});

// คำสั่งที่ใช้บ่อย
doc.moveDown(0.3);
doc.rect(45, doc.y, 505, 38).fill(NAVY);
doc.font('Thai-Bold').fontSize(9).fillColor(GOLD).text('คำสั่งที่ใช้ในการรันและอัปเดตระบบ:', 55, doc.y - 32);
doc.font('Thai').fontSize(8.5).fillColor('#FFFFFF').text('• รันดูบนเครื่อง: npm run dev    • สร้างไฟล์ Production: npm run build    • อัปเดตขึ้น GitHub: git push', 55, doc.y - 18);

// Footer Page 2
doc.font('Thai').fontSize(8).fillColor(MUTED).text('หน้า 2 จาก 2  •  BKK Private Transport Co., Ltd.', 45, 790, { align: 'center', width: 505 });

doc.end();
console.log('PDF generated successfully at:', outputPath);
