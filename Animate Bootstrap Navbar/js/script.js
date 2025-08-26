gsap.from(".navbar", {duration: 0.8, y: -80, opacity: 0, ease: "power4.out"});
    gsap.from(".nav-item", {
        duration: 0.6, 
        y: -20, 
        opacity: 0, 
        stagger: 0.2, 
        delay: 0.3, 
        ease: "back.out(1.7)"
});