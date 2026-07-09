import { aboutData } from '../data/portfolioData';
import Marquee from './Marquee';
import SectionStars from './SectionStars';

export default function About() {
  return (
    <section id="about" className="panel" aria-labelledby="about-title">
      <SectionStars />
      <Marquee />
      <div className="wm" aria-hidden="true">
        BRIEFING
      </div>
      <div className="panel-inner">
        <div className="mission-tag">
          <span className="t-num">{aboutData.logNum}</span>{' '}
          <span className="scramble">{aboutData.tag}</span>
        </div>
        <h2 className="sec-title split" id="about-title">
          {aboutData.title} <em>{aboutData.titleAccent}</em>
        </h2>
        <div className="about-grid">
          <p className="about-text masklines">
            I focus on building <b>efficient, scalable and reliable applications</b> — and on the
            people who build them with me. With a background spanning{' '}
            <b>teaching, problem-solving and team leadership</b>, I enjoy tackling complex
            challenges and finding practical solutions, whether that&apos;s untangling a queue
            backlog at 2 AM or coordinating five developers toward a deadline. My drive to keep
            learning and to help others is what pushes every mission forward.
          </p>
          <div className="telemetry">
            {aboutData.stats.map((stat) => (
              <div className="tele-card reveal" key={stat.label}>
                <div className="val" data-count={stat.value}>
                  0
                </div>
                <div className="lbl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
