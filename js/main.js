document.addEventListener('DOMContentLoaded', () => {
  const openToggle = document.getElementById('open-toggle');
  const cover = document.getElementById('cover');
  const openLabel = document.getElementById('open-invitation');

  document.body.classList.add('locked');
  openLabel?.addEventListener('click', () => {
    window.setTimeout(() => document.body.classList.remove('locked'), 750);
  });

  const reveals = document.querySelectorAll('.reveal');
  if (!CSS.supports('animation-timeline: view()') && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
    reveals.forEach((el) => { el.classList.add('reveal-js'); observer.observe(el); });
  }

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // Close the cover with Escape after it has been opened.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && openToggle?.checked) {
      openToggle.checked = false;
      document.body.classList.add('locked');
    }
  });
});
