'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';

const navLinks = [
  { href: '/coaches-box', label: 'Coaches Box' },
  { href: '/logbook',     label: 'PV Logbook'  },
  { href: '/about',       label: 'About'        },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-[var(--ink)] border-b border-white/10"
      role="banner"
    >
      <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* ── Wordmark ── */}
        <Link href="/" className="logo-text hover:opacity-75 transition-opacity">
          I12
        </Link>

        {/* ── Desktop Nav (Radix NavigationMenu) ── */}
        <NavigationMenu.Root className="hidden md:flex">
          <NavigationMenu.List className="flex items-center gap-9">

            {navLinks.map(({ href, label }) => (
              <NavigationMenu.Item key={href}>
                <NavigationMenu.Link asChild>
                  <Link
                    href={href}
                    className={[
                      'font-[var(--font-ui)] text-[0.72rem] font-medium tracking-[0.18em] uppercase transition-colors',
                      pathname === href
                        ? 'text-[var(--chalk)]'
                        : 'text-white/50 hover:text-[var(--chalk)]',
                    ].join(' ')}
                  >
                    {label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}

            {/* CTA */}
            <NavigationMenu.Item>
              <NavigationMenu.Link asChild>
                <Link
                  href="/contact"
                  className="font-[var(--font-ui)] text-[0.68rem] font-semibold tracking-[0.15em] uppercase bg-[var(--red)] text-[var(--cream)] px-4 py-2 rounded-sm transition-colors hover:bg-[var(--red-dark)]"
                >
                  Get in Touch
                </Link>
              </NavigationMenu.Link>
            </NavigationMenu.Item>

          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* ── Mobile Nav (Radix Dialog) ── */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button
              className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
              aria-label="Open navigation"
            >
              <span className="block w-6 h-[2px] bg-white/70" />
              <span className="block w-6 h-[2px] bg-white/70" />
              <span className="block w-6 h-[2px] bg-white/70" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            {/* Overlay */}
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" />

            {/* Drawer panel */}
            <Dialog.Content className="fixed top-0 right-0 z-50 h-full w-[280px] bg-[var(--ink)] border-l border-white/10 flex flex-col px-8 py-10 focus:outline-none">
              <Dialog.Title className="sr-only">Navigation</Dialog.Title>

              {/* Close */}
              <Dialog.Close asChild>
                <button
                  className="self-end text-white/50 hover:text-white text-2xl leading-none mb-10 cursor-pointer"
                  aria-label="Close navigation"
                >
                  ✕
                </button>
              </Dialog.Close>

              {/* Logo in drawer */}
              <Link href="/" className="logo-text mb-10">I12</Link>

              {/* Links */}
              <nav className="flex flex-col gap-6">
                {navLinks.map(({ href, label }) => (
                  <Dialog.Close asChild key={href}>
                    <Link
                      href={href}
                      className={[
                        'font-[var(--font-ui)] text-sm font-medium tracking-[0.18em] uppercase transition-colors',
                        pathname === href ? 'text-[var(--chalk)]' : 'text-white/50 hover:text-[var(--chalk)]',
                      ].join(' ')}
                    >
                      {label}
                    </Link>
                  </Dialog.Close>
                ))}
                <Dialog.Close asChild>
                  <Link
                    href="/contact"
                    className="mt-4 text-center font-[var(--font-ui)] text-[0.68rem] font-semibold tracking-[0.15em] uppercase bg-[var(--red)] text-[var(--cream)] px-4 py-3 rounded-sm hover:bg-[var(--red-dark)] transition-colors"
                  >
                    Get in Touch
                  </Link>
                </Dialog.Close>
              </nav>

            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>

      </div>
    </header>
  );
}
