/* Shared behaviour for every page: light/dark theme and footer year. */
function applyTheme(t){
  if(t){ document.documentElement.setAttribute('data-theme', t); }
  else { document.documentElement.removeAttribute('data-theme'); }
  var btn = document.getElementById('theme-toggle');
  if(btn){ btn.textContent = (t === 'dark') ? '\u2600' : '\u263E'; }
}
function toggleTheme(){
  var current = document.documentElement.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try{ localStorage.setItem('theme', next); }catch(err){}
}
(function initTheme(){
  var saved = null;
  try{ saved = localStorage.getItem('theme'); }catch(err){}
  if(saved) applyTheme(saved);
})();
(function setYear(){
  var els = document.querySelectorAll('.year');
  for(var i = 0; i < els.length; i++){ els[i].textContent = new Date().getFullYear(); }
})();
