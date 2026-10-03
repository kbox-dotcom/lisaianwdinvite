const music = document.getElementById('wedding-music');
const musicButton = document.getElementById('music-toggle');

function syncMusicUI(playing) {
  if (!musicButton) return;
  musicButton.classList.toggle('is-playing', playing);
  musicButton.setAttribute('aria-pressed', String(playing));
  const label = musicButton.querySelector('.music-label');
  if (label) label.dataset.i18n = playing ? 'musicOn' : 'musicOff';
  if (typeof setLanguage === 'function') setLanguage(CURRENT_LANGUAGE, false);
}

async function toggleMusic() {
  if (!music || !musicButton) return;
  try {
    if (music.paused) {
      await music.play();
      syncMusicUI(true);
    } else {
      music.pause();
      syncMusicUI(false);
    }
  } catch (error) {
    const missing = new Event('musicmissing');
    document.dispatchEvent(missing);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!musicButton) return;

  musicButton.addEventListener('click', toggleMusic);

  // Start wedding music when the guest opens the invitation
  const openButton = document.querySelector('.open-invitation');

  openButton?.addEventListener('click', async () => {
    if (!music) return;

    try {
      await music.play();
      syncMusicUI(true);
    } catch (error) {
      console.error('Music could not start:', error);
    }
  }, { once: true });

  music?.addEventListener('play', () => syncMusicUI(true));
  music?.addEventListener('pause', () => syncMusicUI(false));
  music?.addEventListener('error', () => document.dispatchEvent(new Event('musicmissing')));
  document.addEventListener('musicmissing', () => {
    const key = 'music-status';
    let status = document.getElementById(key);
    if (!status) {
      status = document.createElement('div');
      status.id = key;
      status.className = 'toast';
      document.body.appendChild(status);
    }
    status.textContent = TRANSLATIONS.musicMissing[CURRENT_LANGUAGE];
    status.classList.add('show');
    window.clearTimeout(status._timeout);
    status._timeout = window.setTimeout(() => status.classList.remove('show'), 3600);
  });
});
