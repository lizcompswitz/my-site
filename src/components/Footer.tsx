import Link from 'next/link';

const navGroups = [
  {
    title: 'Products',
    links: [
      { href: '/coaches-box', label: 'Coaches Box' },
      { href: '/logbook',     label: 'PV Logbook'  },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/about',   label: 'About'   },
      { href: '/contact', label: 'Contact' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { href: 'mailto:elizcomposto@gmail.com',                      label: 'Email',        external: false },
      { href: 'https://www.linkedin.com/in/elizabethcomposto/',     label: 'LinkedIn ↗',   external: true  },
      { href: 'https://www.instagram.com/lizcompswitz',             label: 'Instagram ↗',  external: true  },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white/55 pt-16 pb-8" role="contentinfo">
      <div className="max-w-[1280px] mx-auto px-6">

        {/* ── Top row ── */}
        <div className="flex flex-wrap justify-between gap-12 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="logo-text hover:opacity-75 transition-opacity">
              I12
            </Link>
            <p className="font-[var(--font-body)] italic text-[0.9rem] text-white/50">
              Design. Coach. Create.
            </p>
          </div>

          {/* Nav groups */}
          {navGroups.map(({ title, links }) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="font-[var(--font-ui)] text-[0.6rem] font-bold tracking-[0.22em] uppercase text-[var(--cobalt)]">
                {title}
              </h4>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    {'external' in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener"
                        className="text-[0.8rem] text-white/55 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-[0.8rem] text-white/55 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-wrap justify-between items-center gap-4 pt-8">
          <p className="text-[0.7rem] tracking-[0.08em] text-white/40">
            &copy; 2026 one twelve. All rights reserved.
          </p>
          <a
            href="#"
            className="text-[0.7rem] tracking-[0.08em] text-white/40 hover:text-[var(--cobalt)] transition-colors"
          >
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
