import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | 112.',
  description: 'Get in touch with one twelve — for product questions, collaborations, or just to say hello.',
};

const contactLinks = [
  { href: 'mailto:elizcomposto@gmail.com',                          label: 'Email Us ↗',                        style: 'btn btn-primary'  },
  { href: 'mailto:elizcomposto@gmail.com?subject=Coaches Box Interest', label: 'Stay in the Loop on Coaches Box', style: 'btn btn-gold'     },
  { href: 'https://www.linkedin.com/in/elizabethcomposto/',         label: 'Connect on LinkedIn ↗',             style: 'btn btn-outline', external: true },
  { href: 'https://www.instagram.com/lizcompswitz',                 label: 'Follow on Instagram ↗',             style: 'btn btn-outline', external: true },
];

export default function ContactPage() {
  return (
    <section className="about" id="contact" aria-label="Contact">
      <div className="container">
        <div className="max-w-[640px] mx-auto">

          <div className="cb-badge-row mb-6">
            <span className="badge badge--green">Open to Chat</span>
          </div>

          <h2>Get in Touch.</h2>
          <p className="mt-4 mb-8 text-lg">
            Whether you&apos;re a coach interested in Coaches Box, a vaulter who wants a
            logbook, or someone who just wants to connect — we&apos;d love to hear from you.
          </p>

          <div className="flex flex-col gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`${link.style} text-center`}
                {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
