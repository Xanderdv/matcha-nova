/* Matcha Nova – kleine interacties, geen externe bibliotheken */
(function () {
  // Navigatie krijgt een lijn zodra je scrolt
  var nav = document.querySelector('.nav');
  var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Video: pauzeknop + respecteer "minder beweging"
  var video = document.getElementById('heroVideo');
  var toggle = document.getElementById('videoToggle');
  if (video && toggle) {
    var setLabel = function () {
      var paused = video.paused;
      toggle.textContent = paused ? 'Speel video af' : 'Pauzeer video';
      toggle.setAttribute('aria-pressed', String(paused));
    };
    toggle.addEventListener('click', function () {
      if (video.paused) { video.play(); } else { video.pause(); }
    });
    video.addEventListener('play', setLabel);
    video.addEventListener('pause', setLabel);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { video.pause(); }
    setLabel();
  }

  // Secties zacht laten verschijnen bij het scrollen
  var targets = document.querySelectorAll('.section__head, .card, .story__img, .story__text, .signup__text, .signup__form');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) { el.classList.add('reveal'); io.observe(el); });
  }

})();
