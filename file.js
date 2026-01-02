/* Basic interactivity: menu toggle, smooth scroll, portfolio modal, contact form */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');
  menuToggle?.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });

  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const el = document.querySelector(href);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({behavior:'smooth', block:'start'});
        // hide mobile nav after click
        if (window.innerWidth < 700) nav.style.display = '';
      }
    });
  });

  // Portfolio modal
  const modal = document.getElementById('modal');
  const imgEl = document.getElementById('modalImg');
  const titleEl = document.getElementById('modalTitle');
  const descEl = document.getElementById('modalDesc');
  const modalClose = document.getElementById('modalClose');

  document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', () => {
      const title = item.dataset.title || '';
      const desc = item.dataset.desc || '';
      const src = item.dataset.img || (item.querySelector('img')?.src || '');

      imgEl.src = src;
      titleEl.textContent = title;
      descEl.textContent = desc;
      modal.setAttribute('aria-hidden', 'false');
    });
  });

  modalClose.addEventListener('click', () => modal.setAttribute('aria-hidden', 'true'));
  modal.addEventListener('click', (ev) => { if (ev.target === modal) modal.setAttribute('aria-hidden','true'); });

  // Contact form validation & fake submit
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg = document.getElementById('cmsg').value.trim();

    if (!name || !email || !msg) {
      showToast('Please fill all fields.');
      return;
    }

    // In a real site you'd send to a server here (fetch / AJAX)
    showToast('Thanks! Message sent — I will reply soon.');
    contactForm.reset();
  });

  // toast helper
  function showToast(txt){
    toast.textContent = txt;
    toast.classList.add('show');
    setTimeout(()=> toast.classList.remove('show'), 2500);
  }

  // set current year
  document.getElementById('year').textContent = new Date().getFullYear();
});
