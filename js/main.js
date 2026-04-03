// ============================================================
//  LIZ COMPOSTO — main.js
// ============================================================

// ── Scroll: header shadow ───────────────────────────────────
const header = document.querySelector('.site-header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ── Hamburger menu toggle ───────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.main-nav');
if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  // Close menu when a nav link is tapped
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open navigation');
    });
  });
}

// ── Scroll: reveal animation ────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach(el => revealObserver.observe(el));
}

// ── Active nav link on scroll ───────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

if (sections.length && navLinks.length) {
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => navObserver.observe(s));
}

// ── Weather widget using Open-Meteo API ─────────────────────
(function() {
  const widget = document.getElementById('weather-widget');
  if (!widget) return;
  
  const weatherEmoji = {
    0: '☀️', 1: '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️',
    51: '🌦️', 53: '🌦️', 55: '🌧️', 61: '🌧️', 63: '🌧️', 65: '🌧️',
    71: '🌨️', 73: '🌨️', 75: '🌨️', 80: '🌦️', 81: '🌧️', 82: '🌧️',
    85: '🌨️', 86: '🌨️', 95: '⛈️', 96: '⛈️', 99: '⛈️'
  };

  const weatherDesc = {
    0: 'Clear', 1: 'Mostly Clear', 2: 'Partly Cloudy', 3: 'Cloudy',
    45: 'Foggy', 48: 'Foggy', 51: 'Light Drizzle', 53: 'Drizzle',
    55: 'Heavy Drizzle', 61: 'Light Rain', 63: 'Rain', 65: 'Heavy Rain',
    71: 'Light Snow', 73: 'Snow', 75: 'Heavy Snow', 80: 'Rain Showers',
    81: 'Rain Showers', 82: 'Heavy Rain', 85: 'Snow Showers',
    86: 'Heavy Snow', 95: 'Thunderstorm', 96: 'Thunderstorm',
    99: 'Severe Thunderstorm'
  };

  function showError(message) {
    widget.innerHTML = `<div class="weather-error">${message}</div>`;
  }

  function showWeather(temp, code) {
    const emoji = weatherEmoji[code] || '🌡️';
    const desc = weatherDesc[code] || 'Unknown';
    
    widget.innerHTML = `
      <div class="weather-content">
        <div class="weather-emoji">${emoji}</div>
        <div class="weather-info">
          <div class="weather-temp">${Math.round(temp)}°F</div>
          <div class="weather-desc">${desc}</div>
        </div>
      </div>
    `;
  }

  function fetchWeather(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&temperature_unit=fahrenheit&timezone=auto`;
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const temp = data.current.temperature_2m;
        const code = data.current.weather_code;
        showWeather(temp, code);
      })
      .catch(() => showError('Weather unavailable'));
  }

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      () => {
        fetchWeather(32.7767, -96.7970); // DFW fallback
      }
    );
  } else {
    fetchWeather(32.7767, -96.7970); // DFW fallback
  }
})();
