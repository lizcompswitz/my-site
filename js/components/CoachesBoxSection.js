export default {
  name: 'CoachesBoxSection',
  template: `
    <section class="coaches-box dark-ctx" id="coaches-box" aria-label="Coaches Box application">
      <div class="container">

        <div class="cb-badge-row reveal">
          <span class="badge badge--green">In Progress</span>
          <span class="cb-badge-label">Beta Release in 2026</span>
        </div>

        <div class="cb-layout">

          <!-- Left: copy -->
          <div class="cb-copy reveal">
            <h2 class="cb-headline">
              Coaches<br><span class="accent-red">Box</span>
            </h2>
            <h3 class="cb-subhead">Reimagining the coaches box.</h3>
            <p class="cb-desc">
              During track and field meets, coaches are confined to a designated area called a "coaches box" or "coaching box."
              While meant to ensure safety and reduce distractions, these spaces are often poorly placed and uncomfortable.
              <br><br>
              Most stadiums weren't designed with them in mind, forcing coaches to watch from awkward angles with nowhere to sit—while being constantly barked at to "get in the box."
              As a college pole vault coach, I've felt the frustration trying to coach my athletes from these suboptimal areas.
              <br><br>
              In an effort to reclaim the space, at least metaphorically, I created Coaches Box (the digital tool) to be the exact opposite of coaching boxes (the physical spaces).
            </p>
            <h3 class="cb-subhead">Finally, a coaches box worth standing in.</h3>
            <p class="cb-desc">
              Coaches Box brings structure to a sport that lives both in and outside the lines.
              It helps track and field coaches build and evolve training programs, track athlete progress, and define program goals—all in one place.
              Built by a coach who values both experimentation and organization, Coaches Box makes creating and sustaining effective training simple.
            </p>

            <div class="actions-row">
              <a href="mailto:elizcomposto@gmail.com?subject=Coaches Box Interest" class="btn btn-gold">Stay in the Loop</a>
              <a href="#about" class="btn btn-outline-light">Learn More About Liz</a>
            </div>
          </div>

          <!-- Right: UI mockup card -->
          <div class="cb-card reveal reveal-delay-15" aria-hidden="true">
            <div class="cb-card-header">
              <div class="cb-card-dots">
                <span></span><span></span><span></span>
              </div>
              <span class="cb-card-title">Coaches Box — Training Planner</span>
            </div>
            <div class="cb-card-body">
              <div class="cb-stat-row">
                <div class="cb-stat" v-for="stat in stats" :key="stat.label">
                  <span class="stat-num">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>

              <div class="cb-block-list">
                <div class="cb-block-item" v-for="block in blocks" :key="block.name">
                  <div class="cb-block-color" :class="'cb-block-color-' + block.color"></div>
                  <div class="cb-block-info">
                    <div class="cb-block-name">{{ block.name }}</div>
                    <div class="cb-block-meta">{{ block.meta }}</div>
                  </div>
                  <span class="cb-block-tag" :class="'cb-block-tag-' + block.color">{{ block.tag }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  data() {
    return {
      stats: [
        { value: '12', label: 'Athletes' },
        { value: '4', label: 'Events' },
        { value: 'W8', label: 'Current' },
      ],
      blocks: [
        { name: 'Approach Run — 6 Step', meta: 'Technical · 35 min', tag: 'Speed', color: 'gold' },
        { name: 'Plant & Takeoff Drills', meta: 'Skill · 45 min', tag: 'Technique', color: 'green' },
        { name: 'Box & Inversion Work', meta: 'Strength · 30 min', tag: 'Power', color: 'blue' },
        { name: 'Competition Simulation', meta: 'Full Vault · 60 min', tag: 'Compete', color: 'purple' },
      ],
    };
  },
};
