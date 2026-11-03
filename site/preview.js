/* Statische Vorschau: wechselt nur zwischen Screenshots. */
(function () {
  var P = window.PREVIEW, lang = 'en'
  var browser = function () { var l = (navigator.languages && navigator.languages[0]) || navigator.language || 'en'; return l.toLowerCase().indexOf('de') === 0 ? 'de' : 'en' }
  try { var stored = localStorage.getItem('site_lang'); lang = stored ? (stored === 'de' ? 'de' : 'en') : browser() } catch (e) { lang = browser() }
  var $ = function (s) { return document.querySelector(s) }
  var st = { t: 0, p: 0 }
  var tabEls = [], pillEls = []
  function T(o) { return typeof o === 'string' ? o : (o[lang] || o.en) }

  // Zustand aus der URL (#t=1&v=2)
  var m = /t=(\d+)&v=(\d+)/.exec(location.hash)
  if (m && P.tabs[+m[1]] && P.tabs[+m[1]].views[+m[2]]) { st.t = +m[1]; st.p = +m[2] }
  function syncUrl() { try { history.replaceState(null, '', '#t=' + st.t + '&v=' + st.p) } catch (e) { /* ohne History-API */ } }

  function buildTabs() {
    var tabs = $('#tabs'); tabs.innerHTML = ''; tabEls = []
    P.tabs.forEach(function (tb, i) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'tab'; b.id = 'tab' + i
      b.setAttribute('role', 'tab'); b.setAttribute('aria-controls', 'panel')
      b.innerHTML = '<b></b><small></small>'
      b.onclick = function () { st.t = i; st.p = 0; buildPills(); draw() }
      tabs.appendChild(b); tabEls.push(b)
    })
    tabs.onkeydown = function (e) {
      var n = P.tabs.length, k = e.key, to = -1
      if (k === 'ArrowRight') to = (st.t + 1) % n; else if (k === 'ArrowLeft') to = (st.t + n - 1) % n
      else if (k === 'Home') to = 0; else if (k === 'End') to = n - 1
      if (to < 0) return
      e.preventDefault(); st.t = to; st.p = 0; buildPills(); draw(); tabEls[to].focus()
    }
  }
  function buildPills() {
    var pills = $('#pills'); pills.innerHTML = ''; pillEls = []
    P.tabs[st.t].views.forEach(function (v, j) {
      var b = document.createElement('button'); b.type = 'button'; b.className = 'pill'
      b.onclick = function () { st.p = j; draw() }
      pills.appendChild(b); pillEls.push(b)
    })
  }
  // Beschriftung und Zustand werden an den vorhandenen Knöpfen geändert, damit der Tastaturfokus erhalten bleibt
  function draw() {
    document.documentElement.lang = lang
    $('#ttl').textContent = T(P.title); $('#nt').textContent = T(P.note_t); $('#nb').textContent = T(P.note_b)
    $('#req').textContent = T(P.req); $('#chip').textContent = T(P.chip); $('#ov').textContent = T(P.ov); $('#other').textContent = T(P.other_t)
    tabEls.forEach(function (b, i) {
      b.querySelector('b').textContent = T(P.tabs[i].name); b.querySelector('small').textContent = T(P.tabs[i].sub)
      b.setAttribute('aria-selected', i === st.t); b.tabIndex = i === st.t ? 0 : -1
    })
    var cur = P.tabs[st.t]
    pillEls.forEach(function (b, j) { b.textContent = T(cur.views[j].name); b.setAttribute('aria-pressed', j === st.p) })
    var v = cur.views[st.p], img = $('#img'); if (img.getAttribute('src') !== v.img) img.src = v.img
    img.alt = T(cur.name) + ' – ' + T(v.name)
    $('#panel').setAttribute('aria-labelledby', 'tab' + st.t)
    $('#pills').setAttribute('aria-label', lang === 'de' ? 'Ansicht' : 'View'); $('#tabs').setAttribute('aria-label', lang === 'de' ? 'Bereiche' : 'Sections')
    $('#cap').textContent = T(P.cap); $('#lang').value = lang
    syncUrl()
  }
  $('#lang').onchange = function () { lang = this.value; try { localStorage.setItem('site_lang', lang) } catch (e) { /* ohne Speicher */ } draw() }
  buildTabs(); buildPills(); draw()
})()
