import type { Metadata } from 'next';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Coaches Box | 112.',
  description: 'A digital training platform for track & field coaches. Build programs, track athlete progress, and manage your season — all in one place.',
};

export default function CoachesBoxPage() {
  return (
    <section className="coaches-box dark-ctx" id="coaches-box" aria-label="Coaches Box">
      <div className="container">

        <div className="cb-badge-row">
          <Badge variant="green">In Progress</Badge>
          <span className="cb-badge-label">Beta Release in 2026</span>
        </div>

        <div className="cb-layout">

          {/* Left: copy */}
          <div className="cb-copy">
            <h2 className="cb-headline">
              Coaches<br /><span className="accent-red">Box</span>
            </h2>
            <h3 className="cb-subhead">Reimagining the coaches box.</h3>
            <p className="cb-desc">
              During track and field meets, coaches are confined to a designated area called a
              &ldquo;coaches box.&rdquo; While meant to ensure safety and reduce distractions, these spaces
              are often poorly placed and uncomfortable.
            </p>
            <p className="cb-desc">
              Most stadiums weren&apos;t designed with them in mind, forcing coaches to watch from
              awkward angles with nowhere to sit — while being constantly barked at to &ldquo;get in
              the box.&rdquo; As a college pole vault coach, I&apos;ve felt the frustration of trying to
              coach from these suboptimal areas.
            </p>
            <p className="cb-desc">
              In an effort to reclaim the space, at least metaphorically, I created Coaches Box
              (the digital tool) to be the exact opposite of coaching boxes (the physical spaces).
            </p>
            <h3 className="cb-subhead">Finally, a coaches box worth standing in.</h3>
            <p className="cb-desc">
              Coaches Box brings structure to a sport that lives both in and outside the lines.
              It helps track and field coaches build and evolve training programs, track athlete
              progress, and define program goals — all in one place.
            </p>
            <div className="actions-row mt-8">
              <Button variant="gold" href="mailto:elizcomposto@gmail.com?subject=Coaches Box Interest">
                Stay in the Loop
              </Button>
              <Button variant="outline-light" href="/about">Learn More About 112.</Button>
            </div>
          </div>

          {/* Right: UI mockup card */}
          <div className="cb-card" aria-hidden="true">
            <div className="cb-card-header">
              <div className="cb-card-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="cb-card-title">Coaches Box — Training Planner</span>
            </div>
            <div className="cb-card-body">
              <div className="cb-stat-row">
                <div className="cb-stat"><span className="stat-num">12</span><span className="stat-label">Athletes</span></div>
                <div className="cb-stat"><span className="stat-num">4</span><span className="stat-label">Events</span></div>
                <div className="cb-stat"><span className="stat-num">W8</span><span className="stat-label">Current</span></div>
              </div>
              <div className="cb-block-list">
                {[
                  { color: 'gold',   name: 'Approach Run — 6 Step', meta: 'Technical · 35 min', tag: 'Speed'    },
                  { color: 'green',  name: 'Plant & Takeoff Drills', meta: 'Skill · 45 min',     tag: 'Technique'},
                  { color: 'blue',   name: 'Box & Inversion Work',   meta: 'Strength · 30 min',  tag: 'Power'    },
                  { color: 'purple', name: 'Competition Simulation', meta: 'Full Vault · 60 min', tag: 'Compete'  },
                ].map((block) => (
                  <div key={block.name} className="cb-block-item">
                    <div className={`cb-block-color cb-block-color-${block.color}`}></div>
                    <div className="cb-block-info">
                      <div className="cb-block-name">{block.name}</div>
                      <div className="cb-block-meta">{block.meta}</div>
                    </div>
                    <span className={`cb-block-tag cb-block-tag-${block.color}`}>{block.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
