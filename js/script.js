gsap.registerPlugin(ScrollTrigger);

gsap.fromTo('.left', {
  x: -500,
  duration: 1,
}, {
  x: 0,
  scrollTrigger: {
    trigger: '#banner',
  },
});
gsap.fromTo('.top', {
  y: -500,
  duration: 1,
}, {
  y: 0,
  scrollTrigger: {
    trigger: '#banner',
  },
});
gsap.fromTo('.bottom', {
  y: 500,
  duration: 1,
}, {
  y: 0,
  scrollTrigger: {
    trigger: '#partners',
    start: "top 40%",
    end: "top center",
    scrub: 1,
  },
});

gsap.fromTo('.right', {
  x: 500,
  duration: 1,
}, {
  x: 0,
  scrollTrigger: {
    trigger: '#banner',
  },
});

gsap.fromTo('.scale', {
  scale: 1.4,
  x: "70%"
}, {
  scale: 1,
  x: "0%",
  scrollTrigger: {
    trigger: '#about',
    start: "top 30%",
    end: "bottom center",
    scrub: 1,
    transition: "ease-in"
  },
});

gsap.fromTo('.sTop', {
  y: -500,
  opacity:0,
}, {
  y: 0,
  opacity:1,
  scrollTrigger: {
    markers:true,
    start: "top 40%",
    end: "top center",
    trigger: '#services',
    scrub:1
  },
});
gsap.fromTo('.sBottom', {
  y: 500,
  duration: 1,
}, {
  y: 0,
  scrollTrigger: {
    trigger: '#services ',
    start: "top 40%",
    end: "top center",
    scrub: 1,
  },
});