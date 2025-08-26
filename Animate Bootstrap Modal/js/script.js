const modalEl = document.getElementById('theModal');
    modalEl.addEventListener('shown.bs.modal', () => {
      gsap.from(".modal-content", {duration: 0.6, y: -100, opacity: 0, ease: "back.out(1.7)"});
    });

    modalEl.addEventListener('hide.bs.modal', () => {
      gsap.to(".modal-content", {duration: 0.4, y: 100, opacity: 0, ease: "power2.in"});
});