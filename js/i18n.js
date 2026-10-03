const TRANSLATIONS = {
  coverEyebrow:{en:'Together with their families',th:'ขอเรียนเชิญร่วมเป็นเกียรติในพิธีมงคลสมรส'},
  brideShort:{en:'Dao',th:'ดาว'},
  groomShort:{en:'Ian',th:'เอียน'},
  coverDate:{en:'Monday · April 5 · 2027',th:'วันจันทร์ · 5 เมษายน · 2570'},
  openInvitation:{en:'Open Invitation',th:'เปิดคำเชิญ'},
  heroKicker:{en:'A beautiful beginning',th:'จุดเริ่มต้นที่งดงาม'},
  heroSub:{en:'Invite you to celebrate their wedding',th:'ขอเชิญคุณร่วมเฉลิมฉลองวันสำคัญของเรา'},
  location:{en:'Phatthalung · Thailand',th:'พัทลุง · ประเทศไทย'},
  scrollCue:{en:'Scroll to discover',th:'เลื่อนลงเพื่อค้นพบเรื่องราว'},
  coupleKicker:{en:'The couple',th:'คู่บ่าวสาว'},
  coupleTitle:{en:'Two names, one story.',th:'สองชื่อ กับเรื่องราวเดียวกัน'},
  coupleLead:{en:'A celebration of the two people at the heart of this beautiful day.',th:'เฉลิมฉลองให้กับสองคนสำคัญที่อยู่ใจกลางวันอันแสนพิเศษนี้'},
  brideLabel:{en:'The Bride',th:'เจ้าสาว'},
  brideName:{en:'Rattanaporn Setchana',th:'รัตนาภรณ์ เศรษฐชนะ'},
  brideThai:{en:'รัตนาภรณ์ เศรษฐชนะ',th:'รัตนาภรณ์ เศรษฐชนะ'},
  groomLabel:{en:'The Groom',th:'เจ้าบ่าว'},
  groomName:{en:'Ian James Vincent',th:'เอียน เจมส์ วินเซนต์'},
  groomThai:{en:'เอียน เจมส์ วินเซนต์',th:'เอียน เจมส์ วินเซนต์'},
  storyKicker:{en:'Our story',th:'เรื่องราวของเรา'},
  storyTitle:{en:'Two hearts,<br>one beautiful chapter.',th:'สองหัวใจ<br>กับบทหนึ่งที่งดงาม'},
  storyP1:{en:'Some moments quietly become memories. Some memories become stories. And some stories become the beginning of a lifetime together.',th:'บางช่วงเวลาค่อย ๆ กลายเป็นความทรงจำ บางความทรงจำกลายเป็นเรื่องราว และบางเรื่องราวก็กลายเป็นจุดเริ่มต้นของชีวิตที่เราจะเดินไปด้วยกัน'},
  storyP2:{en:'We are delighted to celebrate this beautiful new chapter surrounded by the people who have made our journey so meaningful.',th:'เราทั้งสองยินดีเป็นอย่างยิ่งที่จะได้เฉลิมฉลองบทใหม่อันงดงามนี้ ท่ามกลางผู้คนที่ทำให้เส้นทางของเรามีความหมายเสมอมา'},
  signature:{en:'With love, Rattanaporn & Ian',th:'ด้วยรัก, รัตนาภรณ์ & เอียน'},
  saveDate:{en:'Save the date',th:'โปรดจดจำวันที่แสนพิเศษ'},
  month:{en:'April',th:'เมษายน'},
  year:{en:'2027',th:'2570'},
  dateDay:{en:'Monday',th:'วันจันทร์'},
  dateNote:{en:'A day we will remember forever',th:'วันที่เราจะจดจำตลอดไป'},
  countdownKicker:{en:'The countdown',th:'นับถอยหลัง'},
  countdownTitle:{en:'Until we say “I do”',th:'นับถอยหลังสู่วันที่เราจะบอกว่า “ตกลง”'},
  countdownLead:{en:'Counting every moment until our wedding day.',th:'นับทุกช่วงเวลาที่เหลือก่อนถึงวันสำคัญของเรา'},
  days:{en:'Days',th:'วัน'},hours:{en:'Hours',th:'ชั่วโมง'},minutes:{en:'Minutes',th:'นาที'},seconds:{en:'Seconds',th:'วินาที'},
  countdownComplete:{en:'Today is the day. Welcome to our celebration.',th:'วันนี้คือวันสำคัญของเรา ยินดีต้อนรับสู่การเฉลิมฉลอง'},
  galleryKicker:{en:'A glimpse of us',th:'เรื่องราวของเราผ่านภาพความทรงจำ'},
  galleryTitle:{en:'Moments worth keeping.',th:'ช่วงเวลาที่อยากเก็บไว้ตลอดไป'},
  galleryLead:{en:'A small collection of moments from our journey together.',th:'ภาพเล็ก ๆ ที่รวบรวมช่วงเวลาสำคัญจากเส้นทางของเราสองคน'},
  celebrationKicker:{en:'The celebration',th:'งานเฉลิมฉลอง'},
  celebrationTitle:{en:'Join us in Phatthalung.',th:'แล้วเจอกันที่พัทลุง'},
  celebrationLead:{en:'We cannot wait to celebrate this special day with you.',th:'เราอดใจรอไม่ไหวที่จะได้ฉลองวันพิเศษนี้ร่วมกับคุณ'},
  venueName:{en:'The Garden Hall',th:'The Garden Hall'},
  venueDate:{en:'Monday, April 5, 2027',th:'วันจันทร์ที่ 5 เมษายน 2570'},
  venueLocation:{en:'Phatthalung, Thailand',th:'พัทลุง ประเทศไทย'},
  ceremony:{en:'Wedding Ceremony',th:'พิธีแต่งงาน'},ceremonyTime:{en:'5:00 PM',th:'17:00 น.'},
  arrive:{en:'Please arrive from 4:30 PM',th:'ขอเชิญแขกมาถึงตั้งแต่เวลา 16:30 น.'},
  dinner:{en:'Dinner & Celebration',th:'งานเลี้ยงและการเฉลิมฉลอง'},dinnerTime:{en:'6:30 PM',th:'18:30 น.'},
  foodMemories:{en:'Good food, music & memories',th:'อาหารอร่อย เสียงเพลง และความทรงจำดี ๆ'},
  eveningEnds:{en:'Evening Ends',th:'ส่งท้ายค่ำคืน'},endTime:{en:'8:30 PM',th:'20:30 น.'},
  thankCelebrate:{en:'Thank you for celebrating with us',th:'ขอบคุณที่มาร่วมเฉลิมฉลองกับเรา'},
  day:{en:'Timeline',th:'ลำดับช่วงเวลา'},timelineTitle:{en:'A little timeline.',th:'ช่วงเวลาสำคัญในวันงาน'},
  time1:{en:'8:08 AM',th:'08:08 น.'},time2:{en:'9:09 AM',th:'09:09 น.'},time3:{en:'6:30 PM',th:'18:30 น.'},
  guestArrival:{en:'Khan Maak Procession',th:'พิธีแห่ขันหมาก'},welcome:{en:'Welcome, mingle & settle in.',th:'ต้อนรับ พูดคุย และเตรียมพร้อมสำหรับช่วงเวลาพิเศษ'},
  foreverBegins:{en:'The moment our forever begins.',th:'ช่วงเวลาที่คำว่า “ตลอดไป” ของเราเริ่มต้นขึ้น'},
  goodFood:{en:'Good food, music & celebration.',th:'อาหารอร่อย เสียงเพลง และช่วงเวลาแห่งความสุข'},
  allDay:{en:'All day long',th:'ตลอดทั้งวัน'},endOfEvening:{en:'End of the Evening',th:'ส่งท้ายค่ำคืน'},nextMemory:{en:'Until our next beautiful memory.',th:'แล้วพบกันอีกครั้งในความทรงจำดี ๆ ครั้งต่อไป'},
  dressCode:{en:'Dress code',th:'การแต่งกาย'},dressTitle:{en:'Elegant Earth Tones.',th:'โทนเอิร์ธโทนเรียบหรู'},
  dressLead:{en:'We would love for our guests to dress in warm, neutral and earthy tones.',th:'ขอเชิญแขกทุกท่านแต่งกายในโทนสีอบอุ่น สุภาพ และเป็นธรรมชาติ'},
  dressNote:{en:'Formal / Semi-formal · Comfortable elegance',th:'สุภาพ / กึ่งทางการ · เรียบหรูและสบาย'},
  wishesKicker:{en:'Guestbook',th:'สมุดอวยพรออนไลน์'},wishesTitle:{en:'Leave us a little love.',th:'ฝากคำอวยพรถึงเราสักหน่อย'},
  wishesLead:{en:'Share a wish, a memory, or a few words for the couple. Your message will become part of our wedding memories.',th:'ฝากคำอวยพร ความทรงจำ หรือข้อความดี ๆ ถึงคู่บ่าวสาว ข้อความของคุณจะกลายเป็นส่วนหนึ่งของความทรงจำในวันสำคัญของเรา'},
  wishNameLabel:{en:'Your name',th:'ชื่อของคุณ'},wishMessageLabel:{en:'Your message',th:'คำอวยพร'},wishSubmit:{en:'Send your wishes',th:'ส่งคำอวยพร'},latestWishes:{en:'Latest wishes',th:'คำอวยพรล่าสุด'},
  wishPlaceholderName:{en:'Your name',th:'ชื่อของคุณ'},wishPlaceholderMessage:{en:'Write your wishes...',th:'เขียนคำอวยพรของคุณ...'},
  wishSuccess:{en:'Thank you. Your wish has been added.',th:'ขอบคุณสำหรับคำอวยพร ข้อความของคุณถูกเพิ่มแล้ว'},wishSavedLocal:{en:'Saved on this device. Connect the guestbook backend for public online sharing.',th:'บันทึกไว้ในอุปกรณ์นี้แล้ว เชื่อมต่อ backend เพื่อเปิดใช้งานสมุดอวยพรออนไลน์แบบสาธารณะ'},wishError:{en:'Something went wrong. Please try again.',th:'เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง'},wishRequired:{en:'Please add your name and a message.',th:'กรุณากรอกชื่อและคำอวยพร'},wishEmpty:{en:'Be the first to leave a wish.',th:'มาร่วมฝากคำอวยพรแรกให้เรากันเถอะ'},
  musicPlay:{en:'Music',th:'เพลง'},musicOn:{en:'Playing',th:'กำลังเล่น'},musicOff:{en:'Music',th:'เพลง'},musicMissing:{en:'Add assets/audio/wedding-song.mp3 to enable music.',th:'เพิ่มไฟล์ assets/audio/wedding-song.mp3 เพื่อเปิดเพลง'},
  beforeDay:{en:'Before the big day',th:'ก่อนถึงวันสำคัญ'},hopeThere:{en:"We hope you'll be there.",th:'เราหวังว่าจะได้พบคุณในวันสำคัญของเรา'},
  rsvpLead:{en:'Your presence would make our celebration even more meaningful. Please let us know if you can join us.',th:'การมีคุณร่วมอยู่ในวันพิเศษนี้จะทำให้การเฉลิมฉลองของเรามีความหมายยิ่งขึ้น กรุณาแจ้งให้เราทราบว่าคุณสามารถมาร่วมงานได้หรือไม่'},
  viewLocation:{en:'View Location',th:'ดูสถานที่จัดงาน'},rsvp:{en:'RSVP',th:'ยืนยันการเข้าร่วมงาน'},calendar:{en:'Add to Calendar',th:'เพิ่มลงในปฏิทิน'},hashtag:{en:'Our hashtag',th:'แฮชแท็กของเรา'},
  thankYou:{en:'Thank you',th:'ขอบคุณ'},farewellTitle:{en:'Thank you for<br>being part of our story.',th:'ขอบคุณที่<br>เป็นส่วนหนึ่งในเรื่องราวของเรา'},
  farewellLead:{en:'Thank you for celebrating this beautiful beginning with us. We look forward to making memories together.',th:'ขอบคุณที่มาร่วมเฉลิมฉลองจุดเริ่มต้นอันงดงามนี้ไปกับเรา เรารอคอยที่จะได้สร้างความทรงจำดี ๆ ร่วมกัน'},
  footer:{en:'Rattanaporn & Ian · April 5, 2027 · Phatthalung, Thailand',th:'รัตนาภรณ์ & เอียน · 5 เมษายน 2570 · พัทลุง ประเทศไทย'}
};

let CURRENT_LANGUAGE = 'en';

function setLanguage(lang, persist = true) {
  if (!['en','th'].includes(lang)) return;
  CURRENT_LANGUAGE = lang;
  document.body.classList.add('language-changing');
  requestAnimationFrame(() => {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const value = TRANSLATIONS[key]?.[lang];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll('input[data-i18n-placeholder], textarea[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      const value = TRANSLATIONS[key]?.[lang];
      if (value !== undefined) element.placeholder = value;
    });
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    if (persist) {
      try { localStorage.setItem(SITE_CONFIG.storageKeys.language, lang); } catch (_) {}
    }
    document.body.classList.remove('language-changing');
    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  let saved = 'en';
  try {
    const value = localStorage.getItem(SITE_CONFIG.storageKeys.language);
    if (value === 'en' || value === 'th') saved = value;
  } catch (_) {}
  document.querySelectorAll('[data-lang]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  document.querySelector('#wish-name')?.setAttribute('data-i18n-placeholder', 'wishPlaceholderName');
  document.querySelector('#wish-message')?.setAttribute('data-i18n-placeholder', 'wishPlaceholderMessage');
  setLanguage(saved, false);
});
