const Guestbook = (() => {
  const form = document.getElementById('wish-form');
  const nameInput = document.getElementById('wish-name');
  const messageInput = document.getElementById('wish-message');
  const submitButton = document.getElementById('wish-submit');
  const status = document.getElementById('wish-status');
  const list = document.getElementById('wish-list');
  const count = document.getElementById('wish-count');
  const charCount = document.getElementById('char-count');
  const config = SITE_CONFIG.guestbook;

  const localSeed = [
    { name: 'Welcome', message: 'Leave your first wish here and make the day even more memorable.', created_at: new Date().toISOString(), demo: true }
  ];

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[char]));
  }

  function getLocal() {
    try {
      const raw = localStorage.getItem(SITE_CONFIG.storageKeys.wishes);
      const items = raw ? JSON.parse(raw) : [];
      return Array.isArray(items) ? items : [];
    } catch (_) { return []; }
  }

  function saveLocal(items) {
    try { localStorage.setItem(SITE_CONFIG.storageKeys.wishes, JSON.stringify(items)); return true; } catch (_) { return false; }
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    const locale = CURRENT_LANGUAGE === 'th' ? 'th-TH' : 'en-GB';
    return new Intl.DateTimeFormat(locale, { day:'numeric', month:'short', year:'numeric' }).format(date);
  }

  function render(items) {
    if (!list || !count) return;
    const visible = items.filter((item) => !item.demo).slice(0, config.maxItems);
    count.textContent = String(visible.length);
    if (!visible.length) {
      list.innerHTML = `<div class="wish-empty">${escapeHtml(TRANSLATIONS.wishEmpty[CURRENT_LANGUAGE])}</div>`;
      return;
    }
    list.innerHTML = visible.map((item) => `
      <article class="wish-item">
        <div class="wish-meta"><div class="wish-name">${escapeHtml(item.name)}</div><div class="wish-date">${escapeHtml(formatDate(item.created_at))}</div></div>
        <p class="wish-message">${escapeHtml(item.message)}</p>
      </article>`).join('');
  }

  async function fetchSupabase() {
    const { url, anonKey, table } = config.supabase;
    const endpoint = `${url.replace(/\/$/,'')}/rest/v1/${encodeURIComponent(table)}?select=id,name,message,created_at&approved=eq.true&order=created_at.desc&limit=${config.maxItems}`;
    const response = await fetch(endpoint, { headers: { apikey: anonKey, Authorization: `Bearer ${anonKey}` } });
    if (!response.ok) throw new Error('Supabase read failed');
    return response.json();
  }

  async function insertSupabase(item) {
    const { url, anonKey, table } = config.supabase;
    const endpoint = `${url.replace(/\/$/,'')}/rest/v1/${encodeURIComponent(table)}`;
    const response = await fetch(endpoint, {
      method:'POST', headers:{ 'Content-Type':'application/json', apikey:anonKey, Authorization:`Bearer ${anonKey}`, Prefer:'return=minimal' },
      body:JSON.stringify({ name:item.name, message:item.message })
    });
    if (!response.ok) throw new Error('Supabase insert failed');
  }

  async function load() {
    if (config.provider === 'supabase' && config.supabase.url && config.supabase.anonKey) {
      try { render(await fetchSupabase()); return; } catch (_) { /* fall back to local cache */ }
    }
    render(getLocal());
  }

  function setStatus(messageKey, kind='') {
    if (!status) return;
    status.className = `form-status ${kind}`.trim();
    status.textContent = TRANSLATIONS[messageKey]?.[CURRENT_LANGUAGE] || messageKey;
  }

  async function submit(event) {
    event.preventDefault();
    const name = nameInput?.value.trim() || '';
    const message = messageInput?.value.trim() || '';
    if (!name || !message) { setStatus('wishRequired','error'); return; }
    submitButton.disabled = true;
    try {
      const item = { name, message, created_at:new Date().toISOString() };
      if (config.provider === 'supabase' && config.supabase.url && config.supabase.anonKey) {
        await insertSupabase(item);
        await load();
        setStatus('wishSuccess','success');
      } else {
        const items = getLocal().filter((item) => !item.demo);
        items.unshift(item);
        saveLocal(items.slice(0, config.maxItems));
        render(items);
        setStatus('wishSavedLocal','success');
      }
      form.reset();
      updateCharCount();
    } catch (error) {
      setStatus('wishError','error');
    } finally {
      submitButton.disabled = false;
    }
  }

  function updateCharCount() {
    if (charCount && messageInput) charCount.textContent = `${messageInput.value.length} / 999`;
  }

  document.addEventListener('languagechange', () => { load(); updateCharCount(); });
  document.addEventListener('DOMContentLoaded', () => {
    form?.addEventListener('submit', submit);
    messageInput?.addEventListener('input', updateCharCount);
    load();
    updateCharCount();
  });

  return { load };
})();
