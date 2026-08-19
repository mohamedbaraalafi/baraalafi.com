/* Interactive charts for publication-subsidy-reform-tunisia.html.
   Built as hand-rolled SVG (no external chart library), consistent with the
   other interactive charts on this site (see the tn-shocks chart on
   publication-tunisia-two-shocks.html). All data below is taken directly
   from FINAL_full_pipeline.R's output (subsidy_incidence_ALL_DATA.xlsx),
   the same numbers reported in the paper's tables and figures. */
(function () {

  // ---- DATA -----------------------------------------------------------

  // Population-weighted share of each product's subsidy value captured by
  // each decile (D1 = poorest ... D10 = richest), percent. Reproduces the
  // paper's Figures 1, 2 and 3.
  var DECILES = {
    'total': [7.47, 8.49, 8.79, 9.27, 9.50, 9.92, 10.83, 10.68, 11.30, 13.77],
    'Bread & flour': [8.74, 10.07, 10.86, 10.38, 10.21, 10.95, 10.83, 9.06, 10.17, 8.74],
    'Semolina, couscous, pasta & rice': [12.58, 11.25, 11.24, 10.26, 10.11, 10.04, 9.42, 9.23, 8.52, 7.35],
    'Sugar': [8.28, 8.96, 9.05, 9.59, 9.08, 9.62, 10.24, 9.53, 8.73, 16.92],
    'Vegetable oil': [10.13, 13.67, 8.61, 10.70, 9.24, 10.91, 9.90, 8.62, 9.21, 9.02],
    'Milk': [7.24, 9.18, 9.71, 9.95, 9.85, 10.33, 9.89, 9.32, 8.96, 15.58],
    'Coffee': [5.72, 10.15, 8.77, 8.75, 8.69, 9.67, 10.21, 11.41, 10.60, 16.02],
    'Electricity & Gas': [7.03, 7.84, 8.36, 9.28, 9.55, 9.72, 11.32, 11.08, 11.66, 14.17],
    'GPL': [10.68, 11.26, 11.52, 10.91, 11.09, 10.26, 9.82, 9.34, 8.35, 6.77],
    'Essence': [2.41, 4.63, 5.16, 6.43, 8.09, 8.89, 11.83, 13.62, 16.77, 22.19],
    'Gasoil': [5.03, 6.36, 9.47, 8.77, 8.29, 10.57, 12.53, 11.16, 14.53, 13.28]
  };

  // Share of each product's subsidy value captured by poor (14.2% of the
  // population) and extreme-poor (2.2%) households. Reproduces Table 1 /
  // Figure 5 of the paper. Sorted descending by poor share.
  // Share of each product's subsidy value captured by poor (16.6% of the
  // population) and extreme-poor (2.9%) households. Recomputed from the
  // updated incidence pipeline (EBCNV 2021 household quantities x the
  // survey's own official poverty/extreme-poverty flags). Sorted descending
  // by poor share.
  var POVERTY = [
    { t: 'Semolina', poor: 21.0, extreme: 4.6 },
    { t: 'GPL', poor: 13.7, extreme: 1.8 },
    { t: 'Couscous', poor: 13.6, extreme: 1.7 },
    { t: 'Pasta', poor: 13.5, extreme: 1.9 },
    { t: 'Bread', poor: 11.3, extreme: 1.4 },
    { t: 'Vegetable oil', poor: 10.5, extreme: 1.2 },
    { t: 'Flour', poor: 8.5, extreme: 0.8 },
    { t: 'Milk', poor: 8.1, extreme: 0.9 },
    { t: 'Electricity & Gas', poor: 7.9, extreme: 0.9 },
    { t: 'Coffee', poor: 6.0, extreme: 0.4 },
    { t: 'Gasoil', poor: 3.4, extreme: 0.0 },
    { t: 'Essence', poor: 2.6, extreme: 0.2 }
  ];
  var POOR_POP_SHARE = 16.6, EXTREME_POP_SHARE = 2.9;

  // Split of each product's OFFICIAL fiscal cost between the bottom 60% of
  // households, the top 40% of households, and non-household consumption
  // (firms, institutions, and other channels invisible to a household
  // survey by construction). Percent of total fiscal cost. Sorted
  // descending by non-household share. Source: updated incidence pipeline
  // (EBCNV 2021 quantities x Budget Citoyen 2025 unit subsidy rates).
  var HOUSEHOLD_SPLIT = [
    { t: 'Gasoil', b60: 2.6, t40: 4.5 },
    { t: 'Flour', b60: 10.5, t40: 12.6 },
    { t: 'Vegetable oil', b60: 23.7, t40: 21.6 },
    { t: 'Couscous', b60: 25.9, t40: 25.0 },
    { t: 'Pasta', b60: 36.3, t40: 32.7 },
    { t: 'Milk', b60: 36.5, t40: 38.8 },
    { t: 'Essence', b60: 23.6, t40: 59.4 },
    { t: 'Semolina', b60: 53.7, t40: 29.9 },
    { t: 'GPL', b60: 51.5, t40: 44.6 },
    { t: 'Bread*', b60: 55.2, t40: 44.8 }
  ];

  // Estimated annual state savings from limiting each subsidy to the bottom
  // 60% of the population -- i.e. removing BOTH the top-40%-household leg
  // AND the non-household leg (firms, institutions, leakage). Gasoil is
  // deliberately kept subsidized for everyone (kept: true, v: 0): diesel
  // prices feed directly into freight, public transport and agricultural
  // costs, so removing it -- even just for richer households -- risks a
  // broad inflationary pass-through that would hurt the same poor
  // households the reform is meant to protect.
  var SAVINGS = [
    { t: 'Bread*', cat: 'food', v: 596.6 },
    { t: 'Vegetable oil', cat: 'food', v: 580.1 },
    { t: 'GPL', cat: 'energy', v: 517.9 },
    { t: 'Essence', cat: 'energy', v: 326.1 },
    { t: 'Pasta', cat: 'food', v: 315.0 },
    { t: 'Milk', cat: 'food', v: 241.5 },
    { t: 'Couscous', cat: 'food', v: 197.3 },
    { t: 'Semolina', cat: 'food', v: 193.7 },
    { t: 'Flour', cat: 'food', v: 136.1 },
    { t: 'Gasoil', cat: 'energy', v: 0, kept: true }
  ];

  var DECILE_LABELS = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10'];

  // ---- helpers ----------------------------------------------------------

  function fmt1(v) { return v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }

  function ensureTooltip(mount) {
    var tip = mount.querySelector('.chart-tooltip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'chart-tooltip';
      mount.appendChild(tip);
    }
    return tip;
  }

  // Interpolate between two hex colors, t in [0,1]
  function lerpColor(c1, c2, t) {
    function hex(c) { return [parseInt(c.slice(1, 3), 16), parseInt(c.slice(3, 5), 16), parseInt(c.slice(5, 7), 16)]; }
    var a = hex(c1), b = hex(c2);
    var r = Math.round(a[0] + (b[0] - a[0]) * t);
    var g = Math.round(a[1] + (b[1] - a[1]) * t);
    var bl = Math.round(a[2] + (b[2] - a[2]) * t);
    return 'rgb(' + r + ',' + g + ',' + bl + ')';
  }

  var PALETTES = {
    food: ['#16315F', '#2F80ED'],
    energy: ['#8C1D22', '#F0A24B'],
    mixed: ['#16315F', '#2F80ED']
  };

  // ---- decile bar chart (reusable, one per product) ---------------------

  function renderDecileChart(mount) {
    var key = mount.getAttribute('data-decile-chart');
    var palette = PALETTES[mount.getAttribute('data-decile-color')] || PALETTES.mixed;
    var values = DECILES[key];
    if (!values) return;

    var W = 400, H = 250, padL = 34, padR = 10, padT = 14, padB = 26;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var maxVal = Math.max.apply(null, values.concat([10])) * 1.12;
    var n = values.length;
    var bw = (plotW / n) * 0.62;
    var step = plotW / n;

    function yPix(v) { return padT + plotH - (v / maxVal) * plotH; }
    function xPix(i) { return padL + i * step + (step - bw) / 2; }

    var yTicks = [];
    var tickStep = maxVal > 18 ? 5 : (maxVal > 9 ? 5 : 2);
    for (var g = 0; g <= maxVal; g += tickStep) yTicks.push(g);

    var grid = '', ylabels = '';
    yTicks.forEach(function (g) {
      var y = yPix(g);
      grid += '<line x1="' + padL + '" y1="' + y.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + y.toFixed(1) + '" stroke="var(--border)" stroke-width="1"/>';
      ylabels += '<text x="' + (padL - 6) + '" y="' + (y + 3.5) + '" text-anchor="end" font-size="9" fill="var(--text-muted)">' + g + '</text>';
    });

    var refY = yPix(10);
    var refLine = '<line x1="' + padL + '" y1="' + refY.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + refY.toFixed(1) + '" stroke="var(--text-muted)" stroke-width="1.1" stroke-dasharray="3,3"/>';

    var bars = '', xlabels = '';
    values.forEach(function (v, i) {
      var x = xPix(i), y = yPix(v), h = plotH + padT - y;
      var t = i / (n - 1);
      var color = lerpColor(palette[0], palette[1], t);
      bars += '<rect data-bar data-i="' + i + '" x="' + x.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + bw.toFixed(1) + '" height="' + Math.max(h, 0).toFixed(1) + '" rx="2.5" fill="' + color + '" opacity="0.92"/>';
      xlabels += '<text x="' + (x + bw / 2).toFixed(1) + '" y="' + (H - padB + 13) + '" text-anchor="middle" font-size="9" fill="var(--text-muted)">' + DECILE_LABELS[i] + '</text>';
    });

    var svg = '<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg">' +
      grid + refLine + ylabels + bars + xlabels +
      '</svg>';
    mount.innerHTML = svg;

    var tip = ensureTooltip(mount);
    var svgEl = mount.querySelector('svg');
    var rects = mount.querySelectorAll('[data-bar]');

    rects.forEach(function (rect) {
      function activate(clientX, clientY) {
        var i = parseInt(rect.getAttribute('data-i'), 10);
        var rectBox = svgEl.getBoundingClientRect();
        var sx = rectBox.width / W, sy = rectBox.height / H;
        var bx = parseFloat(rect.getAttribute('x')) + parseFloat(rect.getAttribute('width')) / 2;
        var by = parseFloat(rect.getAttribute('y'));
        tip.innerHTML = '<b>' + DECILE_LABELS[i] + '</b><span class="tt-sub">' + fmt1(values[i]) + '% of subsidy value</span>';
        tip.style.left = (bx * sx) + 'px';
        tip.style.top = (by * sy) + 'px';
        tip.classList.add('visible');
        rects.forEach(function (r) { r.setAttribute('opacity', '0.92'); });
        rect.setAttribute('opacity', '1');
      }
      rect.addEventListener('mouseenter', function (e) { activate(e.clientX, e.clientY); });
      rect.addEventListener('touchstart', function (e) { if (e.touches[0]) activate(e.touches[0].clientX, e.touches[0].clientY); }, { passive: true });
    });
    mount.addEventListener('mouseleave', function () {
      tip.classList.remove('visible');
      rects.forEach(function (r) { r.setAttribute('opacity', '0.92'); });
    });
  }

  // ---- poverty-focused horizontal grouped bar chart ----------------------

  function renderPovertyChart(mount) {
    var W = 700, rowH = 34, padL = 190, padR = 60, padT = 10, padB = 34;
    var n = POVERTY.length;
    var H = padT + padB + n * rowH;
    var plotW = W - padL - padR;
    var dataMax = Math.max.apply(null, POVERTY.map(function (d) { return Math.max(d.poor, d.extreme); }));
    var maxVal = Math.max(20, Math.ceil((dataMax + 2) / 5) * 5);

    function xPix(v) { return padL + (v / maxVal) * plotW; }

    var xTicks = [];
    for (var g = 0; g <= maxVal; g += 5) xTicks.push(g);
    var grid = '', xlabels = '';
    xTicks.forEach(function (g) {
      var x = xPix(g);
      grid += '<line x1="' + x.toFixed(1) + '" y1="' + padT + '" x2="' + x.toFixed(1) + '" y2="' + (H - padB) + '" stroke="var(--border)" stroke-width="1"/>';
      xlabels += '<text x="' + x.toFixed(1) + '" y="' + (H - padB + 16) + '" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">' + g + '%</text>';
    });

    var refPoor = xPix(POOR_POP_SHARE);
    var refExtreme = xPix(EXTREME_POP_SHARE);
    var refLines = '<line x1="' + refPoor.toFixed(1) + '" y1="' + padT + '" x2="' + refPoor.toFixed(1) + '" y2="' + (H - padB) + '" stroke="#E0A000" stroke-width="1.3" stroke-dasharray="3,3"/>' +
      '<line x1="' + refExtreme.toFixed(1) + '" y1="' + padT + '" x2="' + refExtreme.toFixed(1) + '" y2="' + (H - padB) + '" stroke="#B3282D" stroke-width="1.3" stroke-dasharray="3,3"/>';

    var rows = '', labels = '';
    POVERTY.forEach(function (d, i) {
      var cy = padT + i * rowH;
      var hBar = 10;
      var yPoor = cy + 4, yExtreme = cy + 4 + hBar + 3;
      var wPoor = xPix(d.poor) - padL, wExtreme = xPix(d.extreme) - padL;
      rows += '<rect data-poverty-bar data-i="' + i + '" data-series="poor" x="' + padL + '" y="' + yPoor.toFixed(1) + '" width="' + Math.max(wPoor, 1).toFixed(1) + '" height="' + hBar + '" rx="2" fill="#E0A000" opacity="0.92"/>';
      rows += '<rect data-poverty-bar data-i="' + i + '" data-series="extreme" x="' + padL + '" y="' + yExtreme.toFixed(1) + '" width="' + Math.max(wExtreme, 1).toFixed(1) + '" height="' + hBar + '" rx="2" fill="#B3282D" opacity="0.92"/>';
      labels += '<text x="' + (padL - 10) + '" y="' + (cy + rowH / 2 + 3.5) + '" text-anchor="end" font-size="10.5" fill="var(--text)">' + d.t + '</text>';
    });

    var legend = '<g transform="translate(' + padL + ', 0)">' +
      '<rect x="0" y="-2" width="10" height="10" rx="2" fill="#E0A000"/><text x="15" y="7" font-size="10" fill="var(--text-muted)">Poor</text>' +
      '<rect x="70" y="-2" width="10" height="10" rx="2" fill="#B3282D"/><text x="85" y="7" font-size="10" fill="var(--text-muted)">Extreme poor</text>' +
      '</g>';

    var svg = '<svg viewBox="0 0 ' + W + ' ' + (H + 14) + '" xmlns="http://www.w3.org/2000/svg">' +
      '<g transform="translate(0,14)">' + grid + refLines + rows + labels + xlabels + '</g>' + legend +
      '</svg>';
    mount.innerHTML = svg;

    var tip = ensureTooltip(mount);
    var svgEl = mount.querySelector('svg');
    var bars = mount.querySelectorAll('[data-poverty-bar]');
    bars.forEach(function (bar) {
      function activate() {
        var i = parseInt(bar.getAttribute('data-i'), 10);
        var series = bar.getAttribute('data-series');
        var d = POVERTY[i];
        var val = series === 'poor' ? d.poor : d.extreme;
        var label = series === 'poor' ? 'Poor households' : 'Extreme-poor households';
        var rectBox = svgEl.getBoundingClientRect();
        var sx = rectBox.width / W, sy = rectBox.height / (H + 14);
        var bx = parseFloat(bar.getAttribute('x')) + parseFloat(bar.getAttribute('width'));
        var by = parseFloat(bar.getAttribute('y')) + 14;
        tip.innerHTML = '<b>' + d.t + '</b><span class="tt-sub">' + label + ': ' + fmt1(val) + '%</span>';
        tip.style.left = (bx * sx) + 'px';
        tip.style.top = (by * sy) + 'px';
        tip.classList.add('visible');
      }
      bar.addEventListener('mouseenter', activate);
      bar.addEventListener('touchstart', activate, { passive: true });
    });
    mount.addEventListener('mouseleave', function () { tip.classList.remove('visible'); });
  }

  // ---- household vs non-household stacked bar chart ---------------------

  var HH_COLORS = { b60: 'var(--navy-700)', t40: '#F0A24B', nonhh: '#B3282D' };

  function renderHouseholdSplitChart(mount) {
    var W = 700, rowH = 34, padL = 150, padR = 60, padT = 10, padB = 34;
    var n = HOUSEHOLD_SPLIT.length;
    var H = padT + padB + n * rowH;
    var plotW = W - padL - padR;
    var maxVal = 100;

    function xPix(v) { return padL + (v / maxVal) * plotW; }

    var xTicks = [0, 20, 40, 60, 80, 100];
    var grid = '', xlabels = '';
    xTicks.forEach(function (g) {
      var x = xPix(g);
      grid += '<line x1="' + x.toFixed(1) + '" y1="' + padT + '" x2="' + x.toFixed(1) + '" y2="' + (H - padB) + '" stroke="var(--border)" stroke-width="1"/>';
      xlabels += '<text x="' + x.toFixed(1) + '" y="' + (H - padB + 16) + '" text-anchor="middle" font-size="9.5" fill="var(--text-muted)">' + g + '%</text>';
    });

    var rows = '', labels = '';
    HOUSEHOLD_SPLIT.forEach(function (d, i) {
      var cy = padT + i * rowH;
      var barH = 16;
      var y = cy + (rowH - barH) / 2 + 4;
      var nonhh = Math.max(100 - d.b60 - d.t40, 0);
      var x0 = padL, x1 = xPix(d.b60), x2 = xPix(d.b60 + d.t40), x3 = xPix(100);
      rows += '<rect data-hh-bar data-i="' + i + '" data-series="b60" x="' + x0.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + Math.max(x1 - x0, 0.5).toFixed(1) + '" height="' + barH + '" fill="' + HH_COLORS.b60 + '" opacity="0.92"/>';
      rows += '<rect data-hh-bar data-i="' + i + '" data-series="t40" x="' + x1.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + Math.max(x2 - x1, 0.5).toFixed(1) + '" height="' + barH + '" fill="' + HH_COLORS.t40 + '" opacity="0.92"/>';
      rows += '<rect data-hh-bar data-i="' + i + '" data-series="nonhh" x="' + x2.toFixed(1) + '" y="' + y.toFixed(1) + '" width="' + Math.max(x3 - x2, 0.5).toFixed(1) + '" height="' + barH + '" fill="' + HH_COLORS.nonhh + '" opacity="0.92"/>';
      labels += '<text x="' + (padL - 10) + '" y="' + (cy + rowH / 2 + 3.5) + '" text-anchor="end" font-size="10.5" fill="var(--text)">' + d.t + '</text>';
    });

    var svg = '<svg viewBox="0 0 ' + W + ' ' + (H + 4) + '" xmlns="http://www.w3.org/2000/svg">' +
      '<g transform="translate(0,4)">' + grid + rows + labels + xlabels + '</g>' +
      '</svg>';
    mount.innerHTML = svg;

    var tip = ensureTooltip(mount);
    var svgEl = mount.querySelector('svg');
    var bars = mount.querySelectorAll('[data-hh-bar]');
    var seriesLabel = { b60: 'Bottom 60% of households', t40: 'Top 40% of households', nonhh: 'Non-household' };
    bars.forEach(function (bar) {
      function activate() {
        var i = parseInt(bar.getAttribute('data-i'), 10);
        var series = bar.getAttribute('data-series');
        var d = HOUSEHOLD_SPLIT[i];
        var val = series === 'b60' ? d.b60 : (series === 't40' ? d.t40 : Math.max(100 - d.b60 - d.t40, 0));
        var rectBox = svgEl.getBoundingClientRect();
        var sx = rectBox.width / W, sy = rectBox.height / (H + 4);
        var bx = parseFloat(bar.getAttribute('x')) + parseFloat(bar.getAttribute('width')) / 2;
        var by = parseFloat(bar.getAttribute('y')) + 4;
        tip.innerHTML = '<b>' + d.t + '</b><span class="tt-sub">' + seriesLabel[series] + ': ' + fmt1(val) + '%</span>';
        tip.style.left = (bx * sx) + 'px';
        tip.style.top = (by * sy) + 'px';
        tip.classList.add('visible');
      }
      bar.addEventListener('mouseenter', activate);
      bar.addEventListener('touchstart', activate, { passive: true });
    });
    mount.addEventListener('mouseleave', function () { tip.classList.remove('visible'); });
  }

  // ---- reform-savings ranked bar list -------------------------------------

  function renderSavingsChart() {
    var mount = document.getElementById('savings-chart');
    if (!mount) return;
    var activeVals = SAVINGS.filter(function (x) { return !x.kept; }).map(function (x) { return x.v; });
    var max = Math.max.apply(null, activeVals);
    mount.innerHTML = SAVINGS.map(function (item) {
      if (item.kept) {
        return '<div class="bar-row bar-row-kept">' +
          '<div class="bar-row-top"><span class="bl">' + item.t + ' <em>&mdash; kept subsidized, excluded from reform</em></span>' +
          '<span class="bv bv-kept">0 M DT</span></div>' +
          '<div class="bar-track"><div class="bar-fill kept" style="width:100%"></div></div>' +
          '</div>';
      }
      var pct = Math.max((item.v / max) * 100, 2.5);
      return '<div class="bar-row">' +
        '<div class="bar-row-top"><span class="bl">' + item.t + '</span>' +
        '<span class="bv">' + fmt1(item.v) + ' M DT</span></div>' +
        '<div class="bar-track"><div class="bar-fill' + (item.cat === 'energy' ? ' energy' : '') + '" style="width:' + pct.toFixed(1) + '%"></div></div>' +
        '</div>';
    }).join('');
  }

  // ---- init ---------------------------------------------------------------

  function renderAll() {
    document.querySelectorAll('[data-decile-chart]').forEach(renderDecileChart);
    document.querySelectorAll('[data-poverty-chart]').forEach(renderPovertyChart);
    document.querySelectorAll('[data-household-chart]').forEach(renderHouseholdSplitChart);
    renderSavingsChart();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
  } else {
    renderAll();
  }
  var themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) themeToggle.addEventListener('click', function () { setTimeout(renderAll, 0); });
  window.addEventListener('resize', function () {
    clearTimeout(window._subsResizeT);
    window._subsResizeT = setTimeout(renderAll, 150);
  });
})();
