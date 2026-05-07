import type { Metadata } from 'next';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'About | 112.',
  description: 'one twelve is a brand built at the intersection of design, coaching, and creation — founded by Liz Composto Schweitzer.',
};

export default function AboutPage() {
  return (
    <section className="about" id="about" aria-label="About one twelve">
      <div className="container">
        <div className="about-layout">

          {/* Left: Text content */}
          <div className="about-content">
            <div className="cb-badge-row mb-6">
              <Badge variant="cobalt-dark">The Brand</Badge>
            </div>
            <h2>About 112.</h2>

            <p>
              one twelve is a creative company built at the intersection of design leadership,
              athletics, and innovation. Founded by Liz Composto Schweitzer, 112. exists to
              build tools and experiences for the track &amp; field world — and beyond.
            </p>
            <p>
              The name reflects precision, repetition, and the pursuit of excellence — the
              same qualities that define great coaching and great design. Every product we
              build starts with a real problem, lived from the inside.
            </p>

            <h3 className="mt-8 mb-3 font-[var(--font-display)] text-xl tracking-wide">Meet Liz.</h3>
            <p>
              Liz is a design leader and college pole vault coach based in Dallas-Fort Worth.
              With over 10 years of experience designing digital experiences and coaching
              athletes, she creates tools that bridge the gap between sport and technology.
            </p>
            <p>
              As a design lead, Liz has worked across healthcare, finance, and the public
              sector — partnering with teams of business experts, product owners, designers,
              and engineers to build thoughtful solutions. The best part? Connecting with
              people through empathy, research, and creativity.
            </p>
            <p>
              That same people-centered mindset powers her work as a pole vault coach at the
              University of Texas at Arlington — building positive team culture, high-quality
              training, and genuine mentorship.
            </p>

            <div className="actions-row mt-8">
              <Button variant="primary" href="mailto:elizcomposto@gmail.com">Say Hello</Button>
              <Button variant="outline" href="/contact">Get in Touch</Button>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="about-photo-wrap">
            <div className="about-photo-frame">
              <Image
                src="/docs/liz-assets/1-liz-photo.jpg"
                alt="Liz Composto Schweitzer"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="about-photo-caption">Liz Schweitzer · DFW, Texas</p>
          </div>

        </div>
      </div>
    </section>
  );
}
