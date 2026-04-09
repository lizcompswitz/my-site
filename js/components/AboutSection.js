import WeatherWidget from './WeatherWidget.js';

export default {
  name: 'AboutSection',
  components: { WeatherWidget },
  template: `
    <section class="about" id="about" aria-label="About Liz">
      <div class="container">
        <div class="about-layout">

          <!-- Left: Text content -->
          <div class="about-content reveal">
            <h2>About Liz.</h2>
            <p>
              I'm a design leader and a college pole vault coach based in DFW,
              passionate about creating digital experiences, mentoring designers,
              and coaching athletes.
            </p>
            <p>
              As a design lead, I've worked across healthcare, finance, and the
              public sector. I thrive on collaboration — partnering with and managing
              teams of business experts, product owners, designers, and engineers to
              develop thoughtful solutions. The best part of the job? Connecting with
              people through empathy, research, and creativity.
            </p>
            <p>
              That same people-centered mindset powers my work as a pole vault coach
              at the University of Texas at Arlington. I'm dedicated to providing the
              best student-athlete experience through positive team culture,
              high-quality training, and genuine mentorship.
            </p>
            <a href="mailto:elizcomposto@gmail.com" class="btn btn-primary">Say Hello</a>
          </div>

          <!-- Right: Photo + stats -->
          <div class="about-photo-wrap reveal reveal-delay-15">
            <div class="about-photo-frame">
              <img src="docs/liz-assets/1-liz-photo.jpg" alt="Liz Composto" />
            </div>
            <p class="about-photo-caption">Liz Schweitzer · DFW, Texas</p>
            <weather-widget />
          </div>

        </div>
      </div>
    </section>
  `,
};
