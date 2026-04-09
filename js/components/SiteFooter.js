export default {
  name: 'SiteFooter',
  template: `
    <footer class="site-footer dark-ctx" role="contentinfo">
      <div class="footer-inner">
        <div class="footer-top">

          <div class="footer-brand">
            <a href="index.html" class="wordmark">
              <img src="docs/liz-assets/liz-logo.svg" alt="Liz Composto" class="site-logo-footer" />
            </a>
          </div>

          <div class="footer-nav-group" v-for="group in navGroups" :key="group.title">
            <h4>{{ group.title }}</h4>
            <ul>
              <li v-for="link in group.links" :key="link.label">
                <a
                  :href="link.href"
                  :target="link.external ? '_blank' : undefined"
                  :rel="link.external ? 'noopener' : undefined"
                >{{ link.label }}</a>
              </li>
            </ul>
          </div>

        </div>

        <div class="footer-bottom">
          <p class="footer-copy">&copy; {{ year }} Liz Schweitzer. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="#">Back to Top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  `,
  data() {
    return {
      year: new Date().getFullYear(),
      navGroups: [
        {
          title: 'Navigate',
          links: [
            { label: 'About', href: '#about' },
            { label: 'Coaches Box', href: '#coaches-box' },
            { label: 'Pole Vault Logbook', href: '#logbook' },
          ],
        },
        {
          title: 'Projects',
          links: [
            {
              label: 'Pole Vault Logbook ↗',
              href: 'https://www.lulu.com/shop/elizabeth-composto-schweitzer/pole-vault-logbook/paperback/product-zm9v2dw.html',
              external: true,
            },
            { label: 'Coaches Box (coming soon)', href: '#coaches-box' },
          ],
        },
        {
          title: 'Connect',
          links: [
            { label: 'Email', href: 'mailto:elizcomposto@gmail.com' },
            { label: 'LinkedIn ↗', href: 'https://www.linkedin.com/in/elizabethcomposto/', external: true },
            { label: 'Instagram ↗', href: 'https://www.instagram.com/lizcompswitz', external: true },
          ],
        },
      ],
    };
  },
};
