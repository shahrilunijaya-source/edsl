function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = lang === 'ms' ? (el.dataset.ms || el.dataset.en) : el.dataset.en;
  });
  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    el.placeholder = lang === 'ms' ? (el.dataset.msPlaceholder || el.dataset.enPlaceholder) : el.dataset.enPlaceholder;
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('text-white', btn.dataset.lang === lang);
    btn.classList.toggle('text-slate-400', btn.dataset.lang !== lang);
  });
  localStorage.setItem('edsl-lang', lang);
}
document.addEventListener('DOMContentLoaded', () => {
  setLang(localStorage.getItem('edsl-lang') || 'en');
});
