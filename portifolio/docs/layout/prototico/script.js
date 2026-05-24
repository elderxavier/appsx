// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
}

// Reveal-on-scroll for timeline items & cards
const revealTargets = document.querySelectorAll(
  '.timeline__item, .skill-card, .about__card, .about__text, .contact'
);

revealTargets.forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(18px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => io.observe(el));

// ──────────────────────────────────────────────────────────
// Experiência profissional — filtros + collapse + counter
// ──────────────────────────────────────────────────────────
(() => {
  const timeline = document.getElementById('xp-timeline');
  if (!timeline) return;

  // 1. Filtros por categoria
  const chips = document.querySelectorAll('.xp-chip');
  const items = timeline.querySelectorAll('.timeline__item');

  const applyFilter = (filter) => {
    timeline.dataset.filter = filter;
    items.forEach((item) => {
      const cats = (item.dataset.cats || '').split(/\s+/);
      const match = filter === 'all' || cats.includes(filter);
      item.classList.toggle('is-hidden', !match);
    });
  };

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => {
        c.classList.remove('is-active');
        c.setAttribute('aria-selected', 'false');
      });
      chip.classList.add('is-active');
      chip.setAttribute('aria-selected', 'true');
      applyFilter(chip.dataset.filter);
    });
  });

  // 2. Toggle "ver experiências antigas"
  const toggleBtn = document.getElementById('xp-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const expanded = timeline.classList.toggle('is-expanded');
      toggleBtn.setAttribute('aria-expanded', String(expanded));
    });
  }

  // 3. Contadores animados nos KPIs (respeita reduced-motion)
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const counters = document.querySelectorAll('.xp-stats__value[data-counter]');
  if (counters.length && !reduceMotion) {
    const animate = (el) => {
      const target = parseInt(el.dataset.counter, 10);
      if (!Number.isFinite(target)) return;
      const duration = 1200;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      };
      requestAnimationFrame(step);
    };
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          counterIO.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((c) => { c.textContent = '0'; counterIO.observe(c); });
  }
})();
