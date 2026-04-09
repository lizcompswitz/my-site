import SiteHeader from './components/SiteHeader.js';
import HeroSection from './components/HeroSection.js';
import CoachesBoxSection from './components/CoachesBoxSection.js';
import LogbookSection from './components/LogbookSection.js';
import AboutSection from './components/AboutSection.js';
import SiteFooter from './components/SiteFooter.js';

const { createApp } = Vue;

const app = createApp({
  components: {
    SiteHeader,
    HeroSection,
    CoachesBoxSection,
    LogbookSection,
    AboutSection,
    SiteFooter,
  },
  template: `
    <site-header />
    <main>
      <hero-section />
      <coaches-box-section />
      <logbook-section />
      <about-section />
    </main>
    <site-footer />
  `,
});

// ── Custom directive: v-reveal (replaces IntersectionObserver JS) ──
app.directive('reveal', {
  mounted(el, binding) {
    const delay = binding.value; // optional delay in seconds
    if (delay) {
      el.style.transitionDelay = delay + 's';
    }
    el.classList.add('reveal');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
  },
});

// ── Active nav link tracking (global, runs once) ──
app.mixin({
  mounted() {
    // Only run from the root instance
    if (this.$parent) return;

    this.$nextTick(() => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

      if (sections.length && navLinks.length) {
        const navObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                  link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                  );
                });
              }
            });
          },
          { rootMargin: '-40% 0px -55% 0px' }
        );
        sections.forEach((s) => navObserver.observe(s));
      }
    });
  },
});

app.mount('#app');
