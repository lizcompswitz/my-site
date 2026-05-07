import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero" id="hero" aria-label="one twelve introduction">
        <div className="hero-left">
          <h1 className="hero-headline">
            <span className="logo-text accent-blue">I12</span><br />
            <span className="accent-pink">one </span>
            <span className="accent-charcoal">twelve</span>
          </h1>
        </div>

        <div className="hero-right">
          <div className="hero-eyebrow">
            <span className="rule-line"></span>
            <span className="label">Welcome to</span>
          </div>
          <h1><em>one twelve.</em></h1>
          <p className="hero-bio">
            112 is a creative brand at the intersection of design leadership,
            athletics, and innovation — building tools for coaches and athletes
            that are as precise as the sport itself.
          </p>
          <div className="hero-actions">
            <Button variant="gold" href="/coaches-box">See what we&apos;re building</Button>
            <Button variant="outline" href="/about">About 112.</Button>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS OVERVIEW ── */}
      <section className="logbook" id="products" aria-label="Products">
        <div className="container">
          <div className="cb-badge-row">
            <Badge variant="cobalt-dark">Our Work</Badge>
          </div>
          <h2 className="mb-10">Built for the track &amp; field world.</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Coaches Box card */}
            <div className="cb-card">
              <div className="cb-card-header">
                <div className="cb-card-dots"><span></span><span></span><span></span></div>
                <span className="cb-card-title">Coaches Box</span>
              </div>
              <div className="cb-card-body">
                <div className="cb-badge-row mb-4">
                  <Badge variant="green">In Progress</Badge>
                  <span className="cb-badge-label">Beta 2026</span>
                </div>
                <p className="mb-6 text-[var(--text-secondary)]">
                  A digital training platform for track &amp; field coaches — build programs,
                  track athlete progress, and manage your season in one place.
                </p>
                <Button variant="gold" href="/coaches-box">Learn More</Button>
              </div>
            </div>

            {/* PV Logbook card */}
            <div className="cb-card">
              <div className="cb-card-header">
                <div className="cb-card-dots"><span></span><span></span><span></span></div>
                <span className="cb-card-title">PV Logbook</span>
              </div>
              <div className="cb-card-body">
                <div className="cb-badge-row mb-4">
                  <Badge variant="cobalt-dark">Published</Badge>
                  <span className="cb-badge-label">Dec. 2020</span>
                </div>
                <p className="mb-6 text-[var(--text-secondary)]">
                  A custom journal for pole vaulters to track every mechanical detail
                  of their vault, capture goals, and reflect on performance.
                </p>
                <Button variant="primary" href="/logbook">Order Now</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── BRAND STRIP ── */}
      <section className="coaches-box dark-ctx" aria-label="About one twelve">
        <div className="container">
          <div className="max-w-[720px] mx-auto text-center">
            <p className="label mb-4 tracking-[0.12em] text-[var(--text-muted)]">THE BRAND</p>
            <h2 className="mb-6">Why <em>one twelve?</em></h2>
            <p className="text-lg leading-relaxed mb-8 text-[var(--text-secondary)]">
              112. is built on the belief that the best tools come from people who
              actually live the sport. As a designer and a pole vault coach, we build
              from the inside out — products that are precise, purposeful, and made
              for the people who show up every day.
            </p>
            <Button variant="outline-light" href="/about">About the brand</Button>
          </div>
        </div>
      </section>
    </>
  );
}
