import { useEffect, useRef } from 'react';
import { heroData } from '../data/portfolioData';
import RollingButton from './RollingButton';
import SectionStars from './SectionStars';

const ORBIT_RADII = { 1: 0.5, 2: 0.34, 3: 0.17 };

export default function Hero({ reduced, finePointer }) {
  const wrapRef = useRef(null);
  const satsRef = useRef([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    const sats = [...wrap.querySelectorAll('.sat')];
    sats.forEach((s) => {
      s._angle = parseFloat(s.dataset.angle) * (Math.PI / 180);
    });

    let frameId;
    const orbitTick = () => {
      const size = wrap.offsetWidth;
      sats.forEach((s) => {
        const o = s.dataset.orbit;
        const r = size * ORBIT_RADII[o];
        const speed = reduced ? 0 : o === '1' ? 0.0028 : o === '2' ? 0.004 : 0.0055;
        s._angle += speed;
        s.style.transform = `translate(calc(-50% + ${Math.cos(s._angle) * r}px), calc(-50% + ${Math.sin(s._angle) * r * 0.98}px))`;
      });
      frameId = requestAnimationFrame(orbitTick);
    };
    orbitTick();

    return () => cancelAnimationFrame(frameId);
  }, [reduced]);

  useEffect(() => {
    if (reduced || !window.gsap) return undefined;
    const { gsap } = window;
    const wrap = wrapRef.current;
    if (!wrap) return undefined;

    gsap.to('#astro', { y: 20, x: -14, rotation: 9, duration: 3.4, yoyo: true, repeat: -1, ease: 'sine.inOut' });

    if (!finePointer) return undefined;

    const ox = gsap.quickTo(wrap, 'rotationY', { duration: 0.8 });
    const oy = gsap.quickTo(wrap, 'rotationX', { duration: 0.8 });
    const onMove = (e) => {
      ox(((e.clientX / window.innerWidth) - 0.5) * 14);
      oy(-((e.clientY / window.innerHeight) - 0.5) * 14);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced, finePointer]);

  return (
    <section id="hero" className="panel" aria-label="Hero">
      <SectionStars variant="hero" />
      <div className="hero-inner">
        <div>
          <div className="hero-eyebrow reveal-hero">
            <span className="blink" aria-hidden="true" />
            {heroData.eyebrow}
          </div>
          <h1 id="heroTitle">
            {heroData.titleLine1}
            <br />
            {heroData.titleLine2}{' '}
            <span className="accent">{heroData.titleAccent}</span>
          </h1>
          <p className="hero-sub reveal-hero">
            Software Engineer piloting{' '}
            <b>Node.js microservices</b> through production orbit — Express, NestJS, Redis, RabbitMQ.
            I build backends that stay stable under gravity:{' '}
            <b>scalable, efficient, reliable</b>.
          </p>
          <div className="hero-cta reveal-hero">
            <RollingButton href="#launchpad" label="View Launches" variant="cream" />
            <RollingButton href="mailto:shariarhosain131529@gmail.com" label="Open Channel" variant="ghost" />
          </div>
        </div>
        <div className="orbit-wrap" id="orbitWrap" ref={wrapRef}>
          <div className="astro" id="astro" aria-hidden="true">
            🧑‍🚀
          </div>
          <div className="orbit o1" />
          <div className="orbit o2" />
          <div className="orbit o3" />
          <div className="core">
            <span>{heroData.coreLabel}</span>
          </div>
          {heroData.satellites.map((sat) => (
            <div
              key={sat.label}
              className="sat"
              data-orbit={sat.orbit}
              data-angle={sat.angle}
              ref={(el) => {
                if (el) satsRef.current.push(el);
              }}
            >
              {sat.label}
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        Scroll to descend
      </div>
    </section>
  );
}
