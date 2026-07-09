import { useEffect } from 'react';
import { waitForGsap } from '../utils/gsap';
import { projectsData } from '../data/portfolioData';

const GLYPHS = '!<>-_\\/[]{}—=+*^?#@%&';

/*
 * Replicates the original HTML portfolio's script order exactly:
 * 1. Create ScrollSmoother (paused) and the hero timeline (paused).
 * 2. Run the loader boot sequence; on liftoff: hide loader, unlock body,
 *    unpause smoother, play hero, refresh triggers.
 * 3. Create every other ScrollTrigger immediately (not deferred).
 */
export function useGsapAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 821px)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let ctx = null;
    let smoother = null;
    let cancelled = false;

    document.body.classList.add('locked');

    let safetyUnlock = null;
    const unlock = () => {
      if (safetyUnlock) window.clearTimeout(safetyUnlock);
      const loader = document.getElementById('loader');
      if (loader) loader.style.display = 'none';
      document.body.classList.remove('locked');
    };

    safetyUnlock = window.setTimeout(unlock, 5000);

    waitForGsap()
      .then((gsap) => {
        if (cancelled) return;

        const ScrollTrigger = window.ScrollTrigger;
        const ScrollSmoother = window.ScrollSmoother;
        const SplitText = window.SplitText;

        ctx = gsap.context(() => {
          /* ============ SMOOTH SCROLL (desktop only — native scroll on mobile) ============ */
          if (!reduced && ScrollSmoother && isDesktop) {
            smoother = ScrollSmoother.create({
              wrapper: '#smooth-wrapper',
              content: '#smooth-content',
              smooth: 1.8,
              effects: true,
              smoothTouch: 0.15,
            });
            smoother.paused(true); // locked until launch sequence finishes
          }

          /* ============ HERO TIMELINE (built now, played after loader) ============ */
          let heroTl = null;
          if (!reduced && SplitText) {
            const heroSplit = new SplitText('#heroTitle', { type: 'chars,lines' });
            gsap.set('#heroTitle', { perspective: 900 });
            heroTl = gsap.timeline({ paused: true, defaults: { ease: 'power4.out' } });
            heroTl
              .from(heroSplit.chars, {
                y: 120,
                rotationX: -95,
                opacity: 0,
                transformOrigin: '50% 100% -20',
                duration: 1.15,
                stagger: { each: 0.026, from: 'start' },
              }, 0)
              .from('nav', { y: -70, opacity: 0, duration: 0.8, ease: 'power3.out' }, 0)
              .from('.nav-links li', { y: -24, opacity: 0, duration: 0.6, stagger: 0.07 }, 0.15)
              .from('.reveal-hero', { y: 36, opacity: 0, duration: 0.9, stagger: 0.14 }, 0.45)
              .from('.orbit', { scale: 0.55, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out' }, 0.35)
              .from('.core', { scale: 0, duration: 1, ease: 'back.out(1.7)' }, 0.5)
              .from('.sat', { scale: 0, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'back.out(2)' }, 0.8)
              .from('.astro', { y: -50, opacity: 0, duration: 1 }, 0.9)
              .from('.scroll-hint', { opacity: 0, duration: 1 }, 1.2);
          }

          /* ============ LAUNCH-SEQUENCE PRELOADER ============ */
          const loader = document.getElementById('loader');
          if (reduced) {
            unlock();
          } else {
            const statuses = [
              'FUELING MAIN ENGINES',
              'GUIDANCE SYSTEMS ONLINE',
              'TELEMETRY LINKED',
              'T-MINUS <b>3</b>',
              'T-MINUS <b>2</b>',
              'T-MINUS <b>1</b>',
              '<b>LIFTOFF</b>',
            ];
            const lcount = document.getElementById('lcount');
            const lbar = document.getElementById('lbar');
            const lstatus = document.getElementById('lstatus');
            const boot = { v: 0 };
            const bootTl = gsap.timeline({
              onComplete() {
                gsap
                  .timeline()
                  .to('.l-inner', { opacity: 0, scale: 0.94, duration: 0.35, ease: 'power2.in' })
                  .to('.l-curtain.c1', { yPercent: -101, duration: 0.9, ease: 'power4.inOut' }, '-=.05')
                  .to('.l-curtain.c2', { yPercent: 101, duration: 0.9, ease: 'power4.inOut' }, '<')
                  .add(() => {
                    if (loader) loader.style.display = 'none';
                    document.body.classList.remove('locked');
                    document.documentElement.style.setProperty(
                      '--section-h',
                      `${window.visualViewport?.height ?? window.innerHeight}px`
                    );
                    if (smoother) smoother.paused(false);
                    if (heroTl) heroTl.play();
                    ScrollTrigger.refresh();
                  }, '-=.25');
              },
            });
            bootTl.to(boot, {
              v: 100,
              duration: 2.1,
              ease: 'power2.inOut',
              onUpdate() {
                const n = Math.round(boot.v);
                if (lcount) lcount.textContent = String(n).padStart(3, '0');
                if (lbar) lbar.style.width = `${n}%`;
                if (lstatus) {
                  lstatus.innerHTML =
                    statuses[Math.min(statuses.length - 1, Math.floor((n / 100) * statuses.length))];
                }
              },
            });
          }

          /* ============ MOON: float + scroll parallax ============ */
          if (!reduced) {
            gsap.to('#moon', { y: 26, x: 10, duration: 7, yoyo: true, repeat: -1, ease: 'sine.inOut' });
            gsap.to('#moon', {
              yPercent: 60,
              xPercent: 30,
              scale: 0.8,
              ease: 'none',
              scrollTrigger: { start: 0, end: 'max', scrub: 1.2 },
            });
          }

          /* ============ PROGRESS BAR ============ */
          gsap.to('#progress', {
            width: '100%',
            ease: 'none',
            scrollTrigger: { scrub: 0.3, start: 0, end: 'max' },
          });

          /* ============ HERO GENTLE EXIT ============ */
          if (!reduced && isDesktop) {
            gsap.to('.hero-inner', {
              opacity: 0,
              y: -50,
              ease: 'none',
              scrollTrigger: {
                trigger: '#about',
                start: 'top 70%',
                end: 'top 15%',
                scrub: true,
                invalidateOnRefresh: true,
              },
            });
          }

          /* ============ VELOCITY-REACTIVE MARQUEE ============ */
          if (!reduced) {
            const mTween = gsap.to('#marquee', { xPercent: -50, duration: 26, repeat: -1, ease: 'none' });
            const mProxy = { ts: 1 };
            ScrollTrigger.create({
              start: 0,
              end: 'max',
              onUpdate(self) {
                const v = self.getVelocity();
                const target = gsap.utils.clamp(-5, 5, (v >= 0 ? 1 : -1) * Math.max(1, Math.abs(v) / 450));
                mProxy.ts = target;
                mTween.timeScale(target);
                gsap.to(mProxy, {
                  ts: v < 0 ? -1 : 1,
                  duration: 1,
                  overwrite: true,
                  onUpdate: () => mTween.timeScale(mProxy.ts),
                });
              },
            });
          }

          /* ============ STACKED PANEL TRANSITIONS ============ */
          if (isDesktop && !reduced) {
            const panels = gsap.utils.toArray('.panel');
            panels.forEach((panel, i) => {
              if (i === panels.length - 1) return;
              if (panel.id === 'launchpad') return;
              const next = panels[i + 1];
              ScrollTrigger.create({
                trigger: panel,
                start: 'top top',
                endTrigger: next,
                end: 'top top',
                pin: true,
                pinSpacing: false,
              });
              gsap.fromTo(
                panel,
                { scale: 1, rotation: 0, filter: 'brightness(1)' },
                {
                  scale: 0.93,
                  rotation: -0.8,
                  filter: 'brightness(.55)',
                  transformOrigin: 'center top',
                  ease: 'none',
                  scrollTrigger: { trigger: next, start: 'top bottom', end: 'top top', scrub: true },
                }
              );
            });
          }

          /* ============ GIANT WATERMARK PARALLAX ============ */
          gsap.utils.toArray('.wm').forEach((wm) => {
            gsap.fromTo(
              wm,
              { xPercent: 6 },
              {
                xPercent: -28,
                ease: 'none',
                scrollTrigger: { trigger: wm.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
              }
            );
          });

          /* ============ SECTION TITLE SPLITS ============ */
          if (SplitText) {
            document.querySelectorAll('.split').forEach((el) => {
              const sp = new SplitText(el, { type: 'lines,words', mask: 'lines' });
              gsap.from(sp.words, {
                yPercent: 120,
                duration: reduced ? 0 : 1,
                stagger: 0.05,
                ease: 'power4.out',
                scrollTrigger: { trigger: el, start: 'top 86%' },
              });
            });

            document.querySelectorAll('.masklines').forEach((el) => {
              const sp = new SplitText(el, { type: 'lines', mask: 'lines' });
              gsap.from(sp.lines, {
                yPercent: 110,
                duration: reduced ? 0 : 0.9,
                stagger: 0.08,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 85%' },
              });
            });
          }

          /* ============ SCRAMBLE / DECODE TAGS ============ */
          document.querySelectorAll('.scramble').forEach((el) => {
            const finalText = el.textContent;
            ScrollTrigger.create({
              trigger: el,
              start: 'top 90%',
              once: true,
              onEnter() {
                if (reduced) return;
                let frame = 0;
                const total = Math.max(22, finalText.length * 2.2);
                const iv = setInterval(() => {
                  frame += 1;
                  el.textContent = finalText
                    .split('')
                    .map((c, i) => {
                      if (c === ' ') return ' ';
                      return i < (frame / total) * finalText.length
                        ? c
                        : GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
                    })
                    .join('');
                  if (frame >= total) {
                    el.textContent = finalText;
                    clearInterval(iv);
                  }
                }, 28);
              },
            });
          });

          /* ============ SCROLL REVEALS ============ */
          gsap.utils.toArray('.reveal').forEach((el) => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration: reduced ? 0 : 1,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 88%' },
            });
          });

          /* ============ COUNTERS ============ */
          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = +el.dataset.count;
            ScrollTrigger.create({
              trigger: el,
              start: 'top 90%',
              once: true,
              onEnter() {
                if (reduced) {
                  el.textContent = target;
                  return;
                }
                gsap.fromTo(
                  el,
                  { textContent: 0 },
                  { textContent: target, duration: 1.6, ease: 'power2.out', snap: { textContent: 1 } }
                );
              },
            });
          });

          /* ============ 3D TILT CARDS ============ */
          if (finePointer && !reduced) {
            document.querySelectorAll('.tilt').forEach((card) => {
              const qx = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' });
              const qy = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' });
              card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                qx(((e.clientX - r.left) / r.width - 0.5) * 10);
                qy(-((e.clientY - r.top) / r.height - 0.5) * 10);
              });
              card.addEventListener('mouseleave', () => {
                qx(0);
                qy(0);
              });
            });
          }

          /* ============ HORIZONTAL LAUNCHPAD ============ */
          const totalProjects = projectsData.projects.length;
          if (isDesktop) {
            const track = document.getElementById('htrack');
            const hwrap = document.getElementById('hwrap');
            if (track && hwrap) {
              const getDist = () => track.scrollWidth - hwrap.offsetWidth;
              gsap.to(track, {
                x: () => -getDist(),
                ease: 'none',
                scrollTrigger: {
                  trigger: '#launchpad',
                  start: 'top top',
                  end: () => `+=${getDist()}`,
                  pin: true,
                  scrub: reduced ? false : 1,
                  invalidateOnRefresh: true,
                  onUpdate(self) {
                    const hbar = document.getElementById('hbar');
                    const hcount = document.getElementById('hcount');
                    if (hbar) hbar.style.width = `${self.progress * 100}%`;
                    if (hcount) {
                      const n = Math.min(
                        totalProjects,
                        Math.max(1, Math.round(self.progress * (totalProjects - 1)) + 1)
                      );
                      hcount.textContent = `${String(n).padStart(2, '0')} / ${String(totalProjects).padStart(2, '0')}`;
                    }
                  },
                },
              });

              if (!reduced) {
                const proxy = { skew: 0 };
                const skewSetter = gsap.quickSetter('.launch', 'skewX', 'deg');
                const clamp = gsap.utils.clamp(-6, 6);
                ScrollTrigger.create({
                  trigger: '#launchpad',
                  start: 'top bottom',
                  end: 'bottom top',
                  onUpdate(self) {
                    const skew = clamp(self.getVelocity() / -400);
                    if (Math.abs(skew) > Math.abs(proxy.skew)) {
                      proxy.skew = skew;
                      gsap.to(proxy, {
                        skew: 0,
                        duration: 0.7,
                        ease: 'power3',
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew),
                      });
                    }
                  },
                });
              }
            }
          } else {
            gsap.utils.toArray('.launch').forEach((el) => {
              gsap.from(el, {
                y: 50,
                opacity: 0,
                duration: reduced ? 0 : 0.9,
                ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 90%' },
              });
            });
          }

          ScrollTrigger.sort();
          ScrollTrigger.refresh();
        });
      })
      .catch(() => {
        // GSAP failed to load — show the page without animations
        unlock();
        document.querySelectorAll('.reveal').forEach((el) => {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      });

    return () => {
      cancelled = true;
      window.clearTimeout(safetyUnlock);
      if (ctx) ctx.revert();
      if (smoother) smoother.kill();
      document.body.classList.remove('locked');
    };
  }, []);
}
