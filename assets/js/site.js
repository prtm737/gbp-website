(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  var yearEls = document.querySelectorAll('[data-year]');
  for (var y = 0; y < yearEls.length; y += 1) {
    yearEls[y].textContent = String(new Date().getFullYear());
  }

  var header = document.getElementById('site-header');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  var themeBtn = document.querySelector('[data-theme-toggle]');
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  function syncThemeButton() {
    if (!themeBtn) return;
    var dark = root.dataset.theme === 'dark';
    themeBtn.setAttribute('aria-pressed', dark ? 'true' : 'false');
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#08140f' : '#0c3d2c');
  }
  syncThemeButton();
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem('gbp-theme', next);
      } catch (e) {}
      syncThemeButton();
    });
  }

  var nav = document.getElementById('mobile-nav');
  var navOpen = document.querySelector('[data-nav-open]');
  var navPanel = nav ? nav.querySelector('.mobile-nav-panel') : null;
  var lastFocus = null;
  var navCloseButtons = nav ? nav.querySelectorAll('[data-nav-close]') : [];

  function openNav() {
    if (!nav) return;
    lastFocus = document.activeElement;
    nav.classList.add('is-open');
    nav.removeAttribute('inert');
    nav.setAttribute('aria-hidden', 'false');
    if (navOpen) navOpen.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
    var first = nav.querySelector('button, a');
    if (first) first.focus();
  }

  function closeNav() {
    if (!nav || !nav.classList.contains('is-open')) return;
    nav.classList.remove('is-open');
    nav.setAttribute('inert', '');
    nav.setAttribute('aria-hidden', 'true');
    if (navOpen) navOpen.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  if (navOpen) navOpen.addEventListener('click', openNav);
  for (var n = 0; n < navCloseButtons.length; n += 1) {
    navCloseButtons[n].addEventListener('click', closeNav);
  }
  if (nav) {
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) closeNav();
    });
    nav.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeNav();
        return;
      }
      if (event.key !== 'Tab' || !navPanel) return;
      var focusables = navPanel.querySelectorAll('a[href], button:not([disabled]), input, select, textarea');
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    });
  }

  var dialog = document.getElementById('search-dialog');
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchOpeners = document.querySelectorAll('[data-search-open]');
  var searchClose = document.querySelector('[data-search-close]');
  var index = [];
  var activeResult = -1;
  var searchReturnFocus = null;

  try {
    var indexEl = document.getElementById('search-index');
    if (indexEl) index = JSON.parse(indexEl.textContent || '[]');
  } catch (e) {
    index = [];
  }

  var searchIcon =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderSearch(query) {
    if (!searchResults) return;
    var q = query.trim().toLowerCase();
    var matches = [];
    if (q) {
      matches = index.filter(function (item) {
        return (item.title + ' ' + item.desc + ' ' + (item.keywords || '') + ' ' + item.kind)
          .toLowerCase()
          .indexOf(q) !== -1;
      });
    } else {
      matches = index.slice(0, 7);
    }
    matches = matches.slice(0, 8);
    activeResult = matches.length ? 0 : -1;

    if (!matches.length) {
      searchResults.innerHTML = '<p class="search-empty">No results for “' + escapeHtml(query) + '”. Try “labs”, “honey” or “incubation”.</p>';
      return;
    }

    searchResults.innerHTML = matches
      .map(function (item, i) {
        return (
          '<a class="search-result' + (i === 0 ? ' is-active' : '') + '" href="' + item.href + '" role="option" aria-selected="' + (i === 0) + '" data-result="' + i + '">' +
          '<span class="search-result-kind">' + searchIcon + '</span>' +
          '<span class="search-result-copy"><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.kind) + ' · ' + escapeHtml(item.desc) + '</small></span>' +
          '<span class="search-result-go">Open</span></a>'
        );
      })
      .join('');
  }

  function setActiveResult(next) {
    var items = searchResults ? searchResults.querySelectorAll('.search-result') : [];
    if (!items.length) return;
    for (var i = 0; i < items.length; i += 1) {
      items[i].classList.toggle('is-active', i === next);
      items[i].setAttribute('aria-selected', i === next ? 'true' : 'false');
    }
    activeResult = next;
    items[next].scrollIntoView({ block: 'nearest' });
  }

  function openSearch() {
    if (!dialog) return;
    searchReturnFocus = document.activeElement;
    if (typeof dialog.showModal === 'function') {
      if (!dialog.open) dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    renderSearch(searchInput ? searchInput.value : '');
    if (searchInput) {
      searchInput.focus();
      searchInput.select();
    }
  }

  function closeSearch() {
    if (!dialog) return;
    if (typeof dialog.close === 'function' && dialog.open) dialog.close();
    else dialog.removeAttribute('open');
    if (searchReturnFocus && typeof searchReturnFocus.focus === 'function') searchReturnFocus.focus();
  }

  for (var s = 0; s < searchOpeners.length; s += 1) {
    searchOpeners[s].addEventListener('click', openSearch);
  }
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  if (dialog) {
    dialog.addEventListener('click', function (event) {
      if (event.target === dialog) closeSearch();
    });
    dialog.addEventListener('cancel', function (event) {
      event.preventDefault();
      closeSearch();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      renderSearch(searchInput.value);
    });
    searchInput.addEventListener('keydown', function (event) {
      var items = searchResults ? searchResults.querySelectorAll('.search-result') : [];
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (items.length) setActiveResult((activeResult + 1) % items.length);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (items.length) setActiveResult((activeResult - 1 + items.length) % items.length);
      } else if (event.key === 'Enter') {
        if (activeResult >= 0 && items[activeResult]) {
          event.preventDefault();
          window.location.href = items[activeResult].getAttribute('href');
        }
      }
    });
  }

  if (searchResults) {
    searchResults.addEventListener('mousemove', function (event) {
      var result = event.target.closest('.search-result');
      if (!result) return;
      var idx = Number(result.getAttribute('data-result'));
      if (idx !== activeResult) setActiveResult(idx);
    });
  }

  document.addEventListener('keydown', function (event) {
    var key = event.key.toLowerCase();
    if ((event.metaKey || event.ctrlKey) && key === 'k') {
      event.preventDefault();
      if (dialog && dialog.open) closeSearch();
      else openSearch();
    }
    if (key === '/' && !event.metaKey && !event.ctrlKey) {
      var tag = (event.target.tagName || '').toLowerCase();
      if (tag !== 'input' && tag !== 'textarea' && tag !== 'select') {
        event.preventDefault();
        openSearch();
      }
    }
  });

  var newsList = document.getElementById('news-list');
  var newsSearch = document.getElementById('news-search');
  var emptyState = document.querySelector('[data-empty]');
  var activeCat = 'all';

  function applyNewsFilter() {
    if (!newsList) return;
    var q = newsSearch ? newsSearch.value.trim().toLowerCase() : '';
    var items = newsList.querySelectorAll('.news-item');
    var shown = 0;
    for (var i = 0; i < items.length; i += 1) {
      var item = items[i];
      var catOk = activeCat === 'all' || item.getAttribute('data-cat') === activeCat;
      var searchOk = !q || (item.getAttribute('data-search') || '').indexOf(q) !== -1;
      var show = catOk && searchOk;
      item.hidden = !show;
      if (show) shown += 1;
    }
    if (emptyState) {
      emptyState.hidden = shown !== 0;
      emptyState.classList.toggle('is-visible', shown === 0);
    }
  }

  var tabGroups = document.querySelectorAll('[data-tabs]');
  for (var g = 0; g < tabGroups.length; g += 1) {
    (function (group) {
      var target = document.querySelector(group.getAttribute('data-tabs'));
      if (!target) return;
      var tabs = group.querySelectorAll('[data-tab]');
      for (var t = 0; t < tabs.length; t += 1) {
        tabs[t].addEventListener('click', function () {
          for (var k = 0; k < tabs.length; k += 1) {
            var on = tabs[k] === this;
            tabs[k].classList.toggle('is-active', on);
            tabs[k].setAttribute('aria-pressed', on ? 'true' : 'false');
          }
          var cat = this.getAttribute('data-tab');
          if (target.id === 'news-list') {
            activeCat = cat;
            applyNewsFilter();
          } else {
            var items = target.querySelectorAll('.news-item');
            for (var j = 0; j < items.length; j += 1) {
              items[j].hidden = cat !== 'all' && items[j].getAttribute('data-cat') !== cat;
            }
          }
        });
      }
    })(tabGroups[g]);
  }

  if (newsSearch) {
    newsSearch.addEventListener('input', applyNewsFilter);
  }
  if (newsList) applyNewsFilter();

  var toast = document.getElementById('toast');
  var toastTimer = null;
  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(function () {
      toast.classList.remove('is-visible');
    }, 3200);
  }

  var form = document.getElementById('contact-form');
  var formStatus = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (typeof form.checkValidity === 'function' && !form.checkValidity()) {
        form.reportValidity();
        return;
      }
      var data = new FormData(form);
      var name = String(data.get('name') || '').trim();
      var email = String(data.get('email') || '').trim();
      var org = String(data.get('organisation') || '').trim();
      var interest = String(data.get('interest') || '').trim();
      var message = String(data.get('message') || '').trim();
      var subject = 'Website enquiry — ' + (interest || 'General');
      var lines = [
        'Name: ' + name,
        'Email: ' + email,
        'Organisation: ' + (org || '—'),
        'Interested in: ' + interest,
        '',
        message
      ];
      var href = 'mailto:info2gbp@guwahatibiotechpark.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(lines.join('\n'));
      if (formStatus) {
        formStatus.hidden = false;
        formStatus.classList.remove('is-error');
        formStatus.textContent = 'Opening your email app with the enquiry filled in. If nothing opens, write to info2gbp@guwahatibiotechpark.com.';
      }
      showToast('Opening your email app…');
      window.location.href = href;
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var sectionHeads = document.querySelectorAll('.section-head');
  for (var h = 0; h < sectionHeads.length; h += 1) {
    if (!sectionHeads[h].classList.contains('reveal')) sectionHeads[h].classList.add('reveal');
  }

  var reveals = document.querySelectorAll('.reveal');
  var previousParent = null;
  var groupIndex = 0;
  for (var r = 0; r < reveals.length; r += 1) {
    if (reveals[r].parentElement !== previousParent) {
      previousParent = reveals[r].parentElement;
      groupIndex = 0;
    } else {
      groupIndex += 1;
    }
    reveals[r].style.setProperty('--reveal-delay', (groupIndex % 6) * 55 + 'ms');
  }

  if (reveals.length && 'IntersectionObserver' in window && !reduceMotion) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    for (var r = 0; r < reveals.length; r += 1) observer.observe(reveals[r]);
  } else {
    for (var r2 = 0; r2 < reveals.length; r2 += 1) reveals[r2].classList.add('is-visible');
  }

  var statNumbers = document.querySelectorAll('.stats dt');
  if (statNumbers.length && 'IntersectionObserver' in window && !reduceMotion) {
    var statObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = Number(el.getAttribute('data-count'));
          var started = null;
          var duration = 1200;
          var step = function (now) {
            if (started === null) started = now;
            var progress = Math.min((now - started) / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = String(Math.round(target * eased));
            if (progress < 1) window.requestAnimationFrame(step);
          };
          window.requestAnimationFrame(step);
          statObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    for (var s = 0; s < statNumbers.length; s += 1) {
      var raw = statNumbers[s].textContent.trim();
      if (/^\d+$/.test(raw)) {
        statNumbers[s].setAttribute('data-count', raw);
        statNumbers[s].textContent = '0';
        statObserver.observe(statNumbers[s]);
      }
    }
  }

  if (!reduceMotion && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var glows = document.querySelectorAll('.bento-card');
    var moveGlow = function (event) {
      var rect = this.getBoundingClientRect();
      this.style.setProperty('--mx', (((event.clientX - rect.left) / rect.width) * 100).toFixed(1) + '%');
      this.style.setProperty('--my', (((event.clientY - rect.top) / rect.height) * 100).toFixed(1) + '%');
    };
    for (var gI = 0; gI < glows.length; gI += 1) glows[gI].addEventListener('pointermove', moveGlow);
  }

  var progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.setAttribute('aria-hidden', 'true');
  document.body.appendChild(progressBar);
  var progressTick = false;
  var updateProgress = function () {
    var doc = document.documentElement;
    var max = doc.scrollHeight - window.innerHeight;
    var value = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
    progressBar.style.setProperty('--scroll', value.toFixed(4));
  };
  updateProgress();
  window.addEventListener(
    'scroll',
    function () {
      if (progressTick) return;
      progressTick = true;
      window.requestAnimationFrame(function () {
        updateProgress();
        progressTick = false;
      });
    },
    { passive: true }
  );
  window.addEventListener('resize', updateProgress);
})();
