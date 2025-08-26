gsap.registerPlugin(ScrollTrigger);

    // --- Split hero title into spans ---
    const heroTitle = document.querySelector(".hero-title");
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    text.split(" ").forEach(word => {
      let span = document.createElement("span");
      span.textContent = word + " ";
      heroTitle.appendChild(span);
    });

    // Navbar animation
    gsap.from(".navbar", { duration: 0.8, y: -80, opacity: 0, ease: "power4.out" });

    // Hero title (word-by-word reveal)
    gsap.to(".hero-title span", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
      stagger: 0.2
    });

    // Hero subtitle
    gsap.from(".hero-subtitle", { duration: 1, y: 50, opacity: 0, delay: 1, ease: "power3.out" });

    // Hero background parallax effect
    gsap.to(".hero-section", {
      backgroundPosition: "50% 80%",
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Card animations (scroll-based)
    gsap.from(".card", {
      scrollTrigger: {
        trigger: ".card",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Modal animations
    const modalEl = document.getElementById('exampleModal');

    // Run animation each time modal starts opening
    modalEl.addEventListener('show.bs.modal', () => {
    gsap.fromTo(
        ".modal-dialog",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "back.out(1.7)" }
        );
    });

    // Reset when modal closes
    modalEl.addEventListener('hidden.bs.modal', () => {
        gsap.set(".modal-dialog", { clearProps: "all" });
});