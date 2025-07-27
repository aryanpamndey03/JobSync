gsap.registerPlugin(ScrollTrigger);

const split = new SplitType(".about-col h2", {
  types: "words, chars",
});

const tl = gsap
  .timeline({
    scrollTrigger: {
      trigger: ".about",
      start: "top 50%",
      end: "+=125%",
      scrub: 0.5,
    },
  })
  .set(
    split.chars,
    {
      duration: 0.3,
      color: "#fff",
      stagger: 0.1,
    },
    0.1
  );
  gsap.to(".help-header", {
  scrollTrigger: {
    trigger: ".about",
    start: "top 65%",
    toggleActions: "play none none none",
  },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
});


gsap.registerPlugin(ScrollTrigger);

// Animate help-header in and out smoothly
gsap.fromTo(
  ".help-header",
  {
    opacity: 0,
    y: 40,
  },
  {
    scrollTrigger: {
      trigger: ".about",
      start: "top 75%",
      end: "bottom 50%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  }
);



