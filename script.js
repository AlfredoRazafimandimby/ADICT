 

function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  window.scrollTo(0, 0);
}
function filterWorks(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-card').forEach(card => {
    card.style.display = (cat === 'all' || (card.dataset.cat||'').includes(cat)) ? '' : 'none';
  });
}
function sendForm() {
  const prenom = document.getElementById('f-prenom').value.trim();
  const email  = document.getElementById('f-email').value.trim();
  if (!prenom || !email) { alert('Merci de renseigner au moins votre prénom et email.'); return; }
  document.getElementById('success-msg').classList.add('show');
  ['f-prenom','f-nom','f-email','f-message'].forEach(id => document.getElementById(id).value = '');
}
document.querySelectorAll('nav a:not(.nav-cta)').forEach(a => a.addEventListener('click', e => e.preventDefault()));
