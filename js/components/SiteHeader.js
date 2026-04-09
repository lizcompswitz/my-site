export default {
  name: 'SiteHeader',
  template: `
    <header class="site-header dark-ctx" :class="{ scrolled }" role="banner">
      <div class="header-inner">
        <a href="index.html" class="wordmark">
          <img src="docs/liz-assets/liz-logo.svg" alt="Liz Composto" class="site-logo" />
        </a>
        <nav class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Primary navigation">
          <ul>
            <li><a href="#about" @click="closeMenu">About</a></li>
            <li><a href="#coaches-box" @click="closeMenu">Coaches Box</a></li>
            <li><a href="#logbook" @click="closeMenu">Logbook</a></li>
            <li><a href="mailto:elizcomposto@gmail.com" class="nav-cta" @click="closeMenu">Get in Touch</a></li>
          </ul>
        </nav>
        <button
          class="nav-toggle"
          :aria-label="menuOpen ? 'Close navigation' : 'Open navigation'"
          :aria-expanded="menuOpen.toString()"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  data() {
    return {
      scrolled: false,
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
    onScroll() {
      this.scrolled = window.scrollY > 20;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
