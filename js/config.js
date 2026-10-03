/* Central configuration: edit these values when the invitation details change. */
const SITE_CONFIG = {
  couple: {
    bride: { en: 'Rattanaporn Setchana', th: 'รัตนาภรณ์ เศรษฐชนะ', shortEn: 'Rattanaporn' },
    groom: { en: 'Ian James Vincent', th: 'เอียน เจมส์ วินเซนต์', shortEn: 'Ian' }
  },
  wedding: {
    dateISO: '2027-04-05T17:00:00+07:00',
    date: { en: 'Monday · April 5 · 2027', th: 'วันจันทร์ · 5 เมษายน · 2570' },
    venue: { en: 'The Garden Hall', th: 'The Garden Hall' },
    location: { en: 'Phatthalung · Thailand', th: 'พัทลุง · ประเทศไทย' }
  },
  music: { src: 'assets/audio/wedding-song.mp3' },
  guestbook: {
    provider: 'local', // 'local' now; switch to 'supabase' after adding credentials
    supabase: {
      url: '',
      anonKey: '',
      table: 'wedding_wishes'
    },
    maxItems: 30
  },
  storageKeys: {
    language: 'rattanapornIanLanguage',
    wishes: 'rattanapornIanWishes'
  }
};
