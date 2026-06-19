// =====================================================
// REINERDEV - Main JavaScript
// =====================================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- NAVBAR SCROLL ----
  const navbar = document.querySelector('.navbar');
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 40);
    }

    if (backToTop) {
      backToTop.classList.toggle('visible', scrollY > 400);
    }
  }, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- MOBILE MENU ----
  const toggle = document.querySelector('.navbar-toggle');
  const mobileMenu = document.querySelector('.navbar-mobile');

  if (toggle && mobileMenu) {
    toggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      toggle.querySelectorAll('span')[0].style.transform = isOpen ? 'rotate(45deg) translate(5px, 5px)' : '';
      toggle.querySelectorAll('span')[1].style.opacity = isOpen ? '0' : '1';
      toggle.querySelectorAll('span')[2].style.transform = isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '';
    });

    // Close on nav link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
      }
    });
  }

  // ---- INTERSECTION OBSERVER (animations) ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-fade-up').forEach(el => observer.observe(el));

  // ---- ACTIVE NAV LINKS (scroll spy) ----
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => sectionObserver.observe(s));

  // ---- MODAL SYSTEM ----
  const modals = {
    demo: document.getElementById('modal-demo'),
    quote: document.getElementById('modal-quote'),
  };

  function openModal(key) {
    const overlay = modals[key];
    if (!overlay) return;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(key) {
    const overlay = modals[key];
    if (!overlay) return;
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open triggers
  document.querySelectorAll('[data-modal]').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.modal));
  });

  // Close buttons
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', () => {
      Object.keys(modals).forEach(key => closeModal(key));
    });
  });

  // Close on overlay click
  Object.keys(modals).forEach(key => {
    if (modals[key]) {
      modals[key].addEventListener('click', (e) => {
        if (e.target === modals[key]) closeModal(key);
      });
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      Object.keys(modals).forEach(key => closeModal(key));
    }
  });

  // ---- FORM SUBMISSIONS ----
  function handleFormSubmit(formId, successId, toastMsg) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;

      // Loading state
      btn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite">⟳</span> Enviando...';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        // Hide form, show success
        form.style.display = 'none';
        const success = document.getElementById(successId);
        if (success) success.classList.add('show');

        showToast(toastMsg);

        // Reset after 4s
        setTimeout(() => {
          form.style.display = '';
          if (success) success.classList.remove('show');
          form.reset();
          btn.innerHTML = originalText;
          btn.disabled = false;
        }, 4000);
      }, 1500);
    });
  }

  handleFormSubmit('form-demo', 'success-demo', '✅ Solicitud enviada correctamente');
  handleFormSubmit('form-quote', 'success-quote', '✅ Cotización solicitada correctamente');
  handleFormSubmit('form-quote-modal', 'success-qm', '✅ Cotización solicitada correctamente');

  // ---- TOAST NOTIFICATION ----
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      toast.innerHTML = `<span class="toast-icon">✅</span><span class="toast-text"></span>`;
      document.body.appendChild(toast);
    }

    toast.querySelector('.toast-text').textContent = message;
    toast.classList.add('show');

    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // ---- SMOOTH SCROLL for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ---- COUNTER ANIMATION ----
  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(ts) {
      const elapsed = ts - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

  // ---- PRODUCTS TAB (if present) ----
  const tabs = document.querySelectorAll('[data-tab]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const panel = document.querySelector(`[data-tab-panel="${tab.dataset.tab}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // ---- BARS ANIMATION ----
  // Stagger bar heights in dashboard
  const bars = document.querySelectorAll('.dash-bar');
  const heights = [35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95];
  bars.forEach((bar, i) => {
    bar.style.height = (heights[i % heights.length] || 60) + '%';
    bar.style.animationDelay = (i * 0.06) + 's';
  });

  console.log('%cReinerDev 🚀', 'color: #3b82f6; font-size: 24px; font-weight: 900;');
  console.log('%cSoftware SaaS para empresas que buscan crecer.', 'color: #94a3b8; font-size: 14px;');
});

// Spin animation for loading button
const style = document.createElement('style');
style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
document.head.appendChild(style);
