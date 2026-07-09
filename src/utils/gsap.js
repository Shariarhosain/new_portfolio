export function useReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useMediaQuery(query) {
  return window.matchMedia(query).matches;
}

export function waitForGsap(timeoutMs = 8000) {
  return new Promise((resolve, reject) => {
    const check = () => {
      if (window.gsap && window.ScrollTrigger) {
        const { gsap } = window;
        if (window.ScrollSmoother && window.SplitText) {
          gsap.registerPlugin(window.ScrollTrigger, window.ScrollSmoother, window.SplitText);
        } else {
          gsap.registerPlugin(window.ScrollTrigger);
        }
        resolve(gsap);
        return true;
      }
      return false;
    };
    if (check()) return;

    const deadline = Date.now() + timeoutMs;
    const interval = setInterval(() => {
      if (check()) {
        clearInterval(interval);
      } else if (Date.now() > deadline) {
        clearInterval(interval);
        reject(new Error('GSAP failed to load'));
      }
    }, 50);
  });
}
