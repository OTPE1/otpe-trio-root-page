// ----- Intro overlay control (fade after burst) -----
document.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  if (intro) {
    // Let the burst play ~3.2s then fade away
    setTimeout(() => intro.classList.add('fade-away'), 3200);
    // Fully remove from layout after fade to avoid screen readers hitting it
    setTimeout(() => intro.classList.add('hidden'), 4000);
  }
});

// ----- Local visitor counter (per device for now) -----
(function(){
  const KEY = 'otpe_visits_total';
  const n = parseInt(localStorage.getItem(KEY) || '0', 10) + 1;
  localStorage.setItem(KEY, String(n));
  const el = document.getElementById('visitCount');
  if (el) el.textContent = n.toLocaleString();
})();

// ----- Small hover glow for buttons -----
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".btn").forEach(btn=>{
    btn.addEventListener("mouseenter", ()=> btn.style.boxShadow="0 0 16px rgba(64,224,208,.6)");
    btn.addEventListener("mouseleave", ()=> btn.style.boxShadow="none");
  });
});
