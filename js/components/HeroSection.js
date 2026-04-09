export default {
  name: 'HeroSection',
  template: `
    <section class="hero" id="hero" aria-label="Introduction">
      <div class="hero-left">
        <h1 class="hero-headline">
          <span class="accent-blue">DESIGNER</span>
          <span class="accent-green">COACH</span>
          <span class="accent-charcoal">PEOPLE-<span class="accent-red">PERSON</span></span>
        </h1>
      </div>

      <div class="hero-right" aria-hidden="true">
        <div class="hero-eyebrow">
          <span class="rule-line"></span>
          <span class="label">Hello there!</span>
        </div>
        <h1><em>Liz here.</em></h1>
        <p class="hero-bio">
          I'm a design leader and college pole vault coach based in Dallas-Fort Worth.
          With over 10 years of experience designing and building digital experiences and coaching athletes, I create tools for the
          track &amp; field world.
        </p>
        <div class="hero-actions">
          <a href="#coaches-box" class="btn btn-gold">See what I'm building</a>
          <a href="#about" class="btn btn-outline">More about Liz</a>
        </div>
      </div>
    </section>
  `,
};
