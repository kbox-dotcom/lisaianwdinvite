const countdownElement = document.querySelector('[data-target]');
const countdownComplete = document.getElementById('countdown-complete');
const countdownTimer = {
  interval: null,
  start() {
    if (!countdownElement) return;
    this.tick();
    this.interval = window.setInterval(() => this.tick(), 1000);
  },
  tick() {
    const target = new Date(countdownElement.dataset.target).getTime();
    const diff = target - Date.now();
    if (diff <= 0) {
      ['days','hours','minutes','seconds'].forEach((unit) => {
        const node = countdownElement.querySelector(`[data-unit="${unit}"]`);
        if (node) node.textContent = unit === 'days' ? '000' : '00';
      });
      countdownComplete?.removeAttribute('hidden');
      if (this.interval) clearInterval(this.interval);
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    const values = { days, hours, minutes, seconds };
    Object.entries(values).forEach(([unit, value]) => {
      const node = countdownElement.querySelector(`[data-unit="${unit}"]`);
      if (node) node.textContent = unit === 'days' ? String(value).padStart(3,'0') : String(value).padStart(2,'0');
    });
  }
};

document.addEventListener('DOMContentLoaded', () => countdownTimer.start());
