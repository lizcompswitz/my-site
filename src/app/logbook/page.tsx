import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
  title: 'PV Logbook | Built by 112',
  description: 'A custom journal for pole vaulters to track every mechanical detail of their vault, capture goals, and reflect on training and performance.',
};

const galleryImages = [
  { src: '/docs/liz-assets/pvlb-img1.jpeg', alt: 'PV Logbook interior spread 1' },
  { src: '/docs/liz-assets/pvlb-img2.jpeg', alt: 'PV Logbook interior spread 2' },
  { src: '/docs/liz-assets/pvlb-img3.jpeg', alt: 'PV Logbook interior spread 3' },
  { src: '/docs/liz-assets/pvlb-img4.jpeg', alt: 'PV Logbook interior spread 4' },
];

export default function LogbookPage() {
  return (
    <>
      {/* ── HERO SECTION ── */}
      <section className="logbook" id="logbook" aria-label="Pole Vault Logbook">
        <div className="container">
          <div className="logbook-layout">

            {/* Cover photo */}
            <div className="about-photo-frame">
              <Image
                src="/docs/liz-assets/pvlb-img0.jpeg"
                alt="Pole Vault Logbook cover"
                width={600}
                height={800}
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                priority
              />
            </div>

            {/* Content */}
            <div className="logbook-content reveal reveal-delay-15">
              <div className="cb-badge-row reveal">
                <Badge variant="cobalt-dark">Published</Badge>
                <span className="cb-badge-label">Dec. 2020</span>
              </div>

              <h2>POLE VAULT<br />LOGBOOK</h2>

              <p className="logbook-desc">
                As a collegiate vaulter, I ritually wrote down everything regarding my vault
                during a practice or competition. This included the pole I was jumping with,
                where I ran from on the runway, what height or drill I was attempting, and more.
              </p>
              <p className="logbook-desc">
                I created this custom journal for pole vaulters to track every mechanical detail
                of their vault, capture goals, and reflect on their training and performance.
              </p>
              <p className="logbook-desc">
                <em>A charitable donation is made with every purchase.</em>
              </p>

              <div className="logbook-specs">
                <div className="logbook-spec"><span className="spec-val">144</span><span className="spec-key">Pages</span></div>
                <div className="logbook-spec"><span className="spec-val">A5</span><span className="spec-key">Format</span></div>
                <div className="logbook-spec"><span className="spec-val">$26.99</span><span className="spec-key">Price</span></div>
                <div className="logbook-spec"><span className="spec-val">Coil</span><span className="spec-key">Bound</span></div>
              </div>

              <div className="actions-row">
                <Button
                  variant="primary"
                  href="https://www.lulu.com/shop/elizabeth-composto-schweitzer/pole-vault-logbook/paperback/product-zm9v2dw.html"
                >
                  Order on Lulu
                </Button>
                <Button
                  variant="outline"
                  href="https://www.lulu.com/shop/elizabeth-composto-schweitzer/coaches-box/paperback/product-w4y2z2r.html?srsltid=AfmBOortPc2m89hD8aSj-_Ri9Tbnl-0Y9KAZKo9eCtkS8fESaYLpYmF9&page=1&pageSize=4"
                >
                  Order the coach version
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── INSIDE THE LOGBOOK ── */}
      <section className="coaches-box dark-ctx" aria-label="Inside the logbook">
        <div className="container">
          <SectionHeader
            badge="Inside the Book"
            badgeVariant="cobalt-dark"
            title="Built for the serious vaulter."
            subtitle="Every page is designed around the real needs of a pole vaulter — from runway marks to bar heights, from drill notes to competition reflections."
          />

          {/* Photo gallery grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
          }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ borderRadius: '4px', overflow: 'hidden' }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={450}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE BREAKDOWN ── */}
      <section className="logbook" aria-label="Logbook features">
        <div className="container">
          <div className="cb-badge-row mb-6">
            <Badge variant="green">What&apos;s Inside</Badge>
          </div>
          <h2 className="mb-8">Track everything that matters.</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {[
              { icon: '📏', title: 'Runway Marks', desc: 'Log your exact approach marks for every practice and competition.' },
              { icon: '🏋️', title: 'Pole Details', desc: 'Track pole weight, length, and flex to dial in your equipment.' },
              { icon: '📐', title: 'Bar Heights', desc: 'Record attempts, makes, and misses at every height.' },
              { icon: '🎯', title: 'Drill Notes', desc: 'Capture coaching cues and technical feedback from each session.' },
              { icon: '🏆', title: 'Goals', desc: 'Set seasonal targets and track progress toward your personal best.' },
              { icon: '💭', title: 'Reflections', desc: 'Space to reflect on mindset, effort, and what to carry forward.' },
            ].map((feature) => (
              <div key={feature.title} style={{
                padding: '1.5rem',
                background: 'var(--surface-alt)',
                borderRadius: '4px',
                border: '1px solid var(--border)',
              }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
                <h4 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Logo + final CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {/* <Image
              src="/docs/liz-assets/pvlb-logo.png"
              alt="PV Logbook logo"
              width={120}
              height={120}
              style={{ objectFit: 'contain' }}
            /> */}
            <div>
              <p style={{ marginBottom: '1rem', color: 'var(--text-secondary)' }}>
                Available now through Lulu Press. A portion of every sale goes to charity.
              </p>
              <Button
                variant="primary"
                href="https://www.lulu.com/shop/elizabeth-composto-schweitzer/pole-vault-logbook/paperback/product-zm9v2dw.html"
              >
                Order Your Copy ↗
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
