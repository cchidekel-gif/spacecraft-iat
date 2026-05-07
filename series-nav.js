/* ============================================================
   Spacecraft I&T Series — Shared Navigator
   series-nav.js
   
   Drop this file into your repo and reference it from each
   article HTML.  When you publish a new article, edit ONLY the
   matching entry below (set published: true and confirm the url).
   Every article that loads this script will show the updated
   navigator automatically.
   ============================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------
     ARTICLE REGISTRY
     To publish a new article:
       1. Set its  published  field to  true
       2. Confirm its  url  is correct
     That's it — every page picks up the change on next load.
     ---------------------------------------------------------- */
  var articles = [
    // ── Main Series ──────────────────────────────────────────
    { id: "intro", seriesNum: "Intro", title: "Introduction to Spacecraft I&T",                    url: "spacecraft_iat_intro.html",      published: true  },
    { id: "01",    seriesNum: "01",    title: "I&T Program Structure",                              url: "spacecraft_iat_article01.html",  published: true  },
    { id: "02",    seriesNum: "02",    title: "Configuration Management",                           url: "spacecraft_iat_article11.html",  published: true  },
    { id: "03",    seriesNum: "03",    title: "Quality Assurance, Inspection, and Oversight",        url: "spacecraft_iat_article16.html",  published: true  },
    { id: "04",    seriesNum: "04",    title: "The Cleanroom: Environment, Protocol, and Practice",  url: "spacecraft_iat_article02.html",  published: false  },
    { id: "05",    seriesNum: "05",    title: "EGSE and the Test Harness",                          url: "spacecraft_iat_article10.html",  published: false  },
    { id: "06",    seriesNum: "06",    title: "Functional Testing",                                 url: "spacecraft_iat_article03.html",  published: false  },
    { id: "07",    seriesNum: "07",    title: "Flight Software Verification and Validation",        url: "spacecraft_iat_article09.html",  published: false  },
    { id: "08",    seriesNum: "08",    title: "Mass Properties and Structural Loads",               url: "spacecraft_iat_article14.html",  published: false  },
    { id: "09",    seriesNum: "09",    title: "Vibration, Acoustics, and Shock Testing",            url: "spacecraft_iat_article04.html",  published: false  },
    { id: "10",    seriesNum: "10",    title: "Thermal-Vacuum Testing",                             url: "spacecraft_iat_article05.html",  published: false  },
    { id: "11",    seriesNum: "11",    title: "EMC Testing",                                        url: "spacecraft_iat_article12.html",  published: false  },
    { id: "12",    seriesNum: "12",    title: "Instrument Integration and Calibration",             url: "spacecraft_iat_article07.html",  published: false  },
    { id: "13",    seriesNum: "13",    title: "Propulsion System Testing",                          url: "spacecraft_iat_article13.html",  published: false  },
    { id: "14",    seriesNum: "14",    title: "Anomaly Management",                                url: "spacecraft_iat_article06.html",  published: false },
    { id: "15",    seriesNum: "15",    title: "Launch Vehicle Integration",                         url: "spacecraft_iat_article15.html",  published: false },
    { id: "16",    seriesNum: "16",    title: "Launch Readiness and Commissioning",                 url: "spacecraft_iat_article08.html",  published: false  },

    // ── Supplementary ────────────────────────────────────────
    { id: "S1",    seriesNum: "S1",    title: "Small Satellites",                                   url: "",                               published: false },
    { id: "S2",    seriesNum: "S2",    title: "Case Studies",                                       url: "",                               published: false }
  ];

  /* ----------------------------------------------------------
     DETECT CURRENT PAGE
     ---------------------------------------------------------- */
  var currentFile = window.location.pathname.split("/").pop().split("#")[0].split("?")[0];

  function isCurrent(article) {
    return article.published && article.url === currentFile;
  }

  /* ----------------------------------------------------------
     COUNT PUBLISHED (for "Article NN of NN" label)
     ---------------------------------------------------------- */
  var publishedCount = articles.filter(function (a) { return a.published; }).length;

  /* ----------------------------------------------------------
     TOP BREADCRUMB NAVIGATOR
     Renders into <div id="series-nav-top"></div>
     ---------------------------------------------------------- */
  function renderTopNav() {
    var container = document.getElementById("series-nav-top");
    if (!container) return;

    var currentArticle = articles.find(isCurrent);
    var currentSeriesNum = currentArticle ? currentArticle.seriesNum : "";

    // Header line
    var header = document.createElement("div");
    header.className = "sn-top-header";
    header.textContent = "Spacecraft Engineering Series \u00B7 Integration & Test";
    if (currentArticle) {
      header.textContent += " Article " + currentSeriesNum + " of " + publishedCount;
    }
    container.appendChild(header);

    // Breadcrumb dots
    var nav = document.createElement("nav");
    nav.className = "sn-top-breadcrumb";
    nav.setAttribute("aria-label", "Series navigation");

    var prefix = document.createElement("span");
    prefix.className = "sn-top-label";
    prefix.textContent = "Series:";
    nav.appendChild(prefix);

    articles.forEach(function (a, i) {
      // Separator dot
      var sep = document.createElement("span");
      sep.className = "sn-top-sep";
      sep.textContent = " \u00B7 ";
      nav.appendChild(sep);

      if (a.published && !isCurrent(a)) {
        var link = document.createElement("a");
        link.href = a.url + "#top";
        link.className = "sn-top-link";
        link.textContent = a.seriesNum;
        link.title = a.title;
        nav.appendChild(link);
      } else if (isCurrent(a)) {
        var current = document.createElement("span");
        current.className = "sn-top-current";
        current.textContent = a.seriesNum;
        current.title = a.title + " (current)";
        nav.appendChild(current);
      } else {
        // Unpublished — show ID without number/link
        var unpub = document.createElement("span");
        unpub.className = "sn-top-unpublished";
        unpub.textContent = a.seriesNum;
        unpub.title = a.title + " (coming soon)";
        nav.appendChild(unpub);
      }
    });

    container.appendChild(nav);
  }

  /* ----------------------------------------------------------
     BOTTOM DROPDOWN NAVIGATOR
     Renders into <div id="series-nav-bottom"></div>
     ---------------------------------------------------------- */
  function renderBottomNav() {
    var container = document.getElementById("series-nav-bottom");
    if (!container) return;

    var wrapper = document.createElement("div");
    wrapper.className = "sn-bottom-wrapper";

    // Label
    var label = document.createElement("label");
    label.className = "sn-bottom-label";
    label.setAttribute("for", "sn-article-select");
    label.textContent = "Go to article";

    // Select
    var select = document.createElement("select");
    select.id = "sn-article-select";
    select.className = "sn-bottom-select";

    // Placeholder
    var placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = "\u2014 Select any article in the series \u2014";
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);

    // Main series group
    var mainGroup = document.createElement("optgroup");
    mainGroup.label = "\u2500\u2500 Main Series \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";

    // Supplementary group
    var suppGroup = document.createElement("optgroup");
    suppGroup.label = "\u2500\u2500 Supplementary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500";

    articles.forEach(function (a) {
      var opt = document.createElement("option");

      var isSupplement = (a.id === "S1" || a.id === "S2");
      var displayLabel = a.seriesNum + " \u00B7 " + a.title;

      if (a.published) {
        opt.value = a.url + "#top";
        if (isCurrent(a)) {
          displayLabel = "\u25B6 " + displayLabel;
          opt.selected = true;
        }
      } else {
        opt.value = "";
        opt.disabled = true;
        displayLabel = displayLabel + " (Coming Soon)";
      }

      opt.textContent = displayLabel;

      if (isSupplement) {
        suppGroup.appendChild(opt);
      } else {
        mainGroup.appendChild(opt);
      }
    });

    select.appendChild(mainGroup);
    select.appendChild(suppGroup);

    // Navigate on change
    select.addEventListener("change", function () {
      if (this.value) {
        window.location.href = this.value;
      }
    });

    // Go button
    var btn = document.createElement("button");
    btn.className = "sn-bottom-btn";
    btn.textContent = "Open \u2192";
    btn.addEventListener("click", function () {
      if (select.value) {
        window.location.href = select.value;
      }
    });

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    wrapper.appendChild(btn);
    container.appendChild(wrapper);
  }

  /* ----------------------------------------------------------
     NEXT-ARTICLE TEASER
     Renders into <div id="series-nav-next"></div>
     Shows a teaser for the next published article in the series.
     ---------------------------------------------------------- */
  function renderNextArticle() {
    var container = document.getElementById("series-nav-next");
    if (!container) return;

    var currentIndex = articles.findIndex(isCurrent);
    if (currentIndex === -1) return;

    // Find next published article
    var next = null;
    for (var i = currentIndex + 1; i < articles.length; i++) {
      if (articles[i].published) {
        next = articles[i];
        break;
      }
    }
    if (!next) return;

    var teaser = document.createElement("div");
    teaser.className = "sn-next-teaser";

    var label = document.createElement("div");
    label.className = "sn-next-label";
    label.textContent = "Next Article \u00B7 Article " + next.seriesNum + " of " + publishedCount;

    var link = document.createElement("a");
    link.href = next.url + "#top";
    link.className = "sn-next-link";
    link.textContent = next.title;

    teaser.appendChild(label);
    teaser.appendChild(link);
    container.appendChild(teaser);
  }

  /* ----------------------------------------------------------
     FOOTER METADATA
     Renders into <div id="series-nav-footer"></div>
     ---------------------------------------------------------- */
  function renderFooterMeta() {
    var container = document.getElementById("series-nav-footer");
    if (!container) return;

    var currentArticle = articles.find(isCurrent);
    if (!currentArticle) return;

    var meta = document.createElement("div");
    meta.className = "sn-footer-meta";
    meta.innerHTML = "<strong>Series</strong><br>Spacecraft Integration &amp; Test<br>Article " +
      currentArticle.seriesNum + " of " + publishedCount;

    container.appendChild(meta);
  }

  /* ----------------------------------------------------------
     INITIALIZE — run when DOM is ready
     ---------------------------------------------------------- */
  function init() {
    renderTopNav();
    renderNextArticle();
    renderBottomNav();
    renderFooterMeta();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
