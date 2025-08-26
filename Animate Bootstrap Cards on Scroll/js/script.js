gsap.registerPlugin(ScrollTrigger);

    // Animate all cards when they enter viewport
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",   // trigger when card is 80% down viewport
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
});