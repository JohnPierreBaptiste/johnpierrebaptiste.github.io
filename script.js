// ========================================
// JohnPierreBaptiste — Site Interactions
// ========================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Scroll Reveal ----
  const reveals = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, index * 100);
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  reveals.forEach(el => revealObserver.observe(el));

  // ---- Nav Scroll Effect ----
  const nav = document.querySelector('.nav');
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 80) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ---- Smooth Scroll for Nav Links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ---- Staggered Reveal for Work Items ----
  const workItems = document.querySelectorAll('.work-item');
  const workObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.parentElement.querySelectorAll('.work-item');
        items.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, i * 150);
        });
        workObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  if (workItems.length > 0) {
    workObserver.observe(workItems[0]);
  }

  // ---- Staggered Reveal for Writing Items ----
  const writingItems = document.querySelectorAll('.writing-item');
  const writingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const items = entry.target.parentElement.querySelectorAll('.writing-item');
        items.forEach((item, i) => {
          setTimeout(() => {
            item.classList.add('visible');
          }, i * 120);
        });
        writingObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 });

  if (writingItems.length > 0) {
    writingObserver.observe(writingItems[0]);
  }

  // ---- Fade scroll indicator on scroll ----
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', () => {
      const opacity = Math.max(0, 1 - window.pageYOffset / 300);
      scrollIndicator.style.opacity = opacity;
    }, { passive: true });
  }

});
