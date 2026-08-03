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
    //
    // Each entry contains:
    //   id         — internal key
    //   seriesNum  — display number in navigator ("01", "S1", etc.)
    //   title      — full article title
    //   url        — HTML filename (same directory as this script)
    //   published  — flip to true when the article goes live
    //   topics     — array of tag strings shown in the footer
    //   audience   — one-sentence audience description for the footer
    //
    // To publish a new article:
    //   1. Set  published: true
    //   2. Confirm  url  matches the HTML filename
    //   3. Fill in  topics  and  audience

    { id: "intro", seriesNum: "Intro",
      title:    "Introduction to Spacecraft I&T",
      url:      "spacecraft_iat_intro.html",
      published: true,
      topics:   ["Integration & Test", "Test Philosophy", "Test-As-You-Fly", "Hardware Hierarchy", "Lessons Learned", "Verification"],
      audience: "New engineers, students, and anyone curious about what happens between spacecraft design and launch \u2014 no prior I&T experience required."
    },
     { id: "01", seriesNum: "01",
  title:    "I&T Program Structure",
  url:      "spacecraft_iat_article01.html",
  published: true,
  topics:   ["I&T Plan", "Integration Levels", "Model Philosophy", "STM", "EM", "QM", "PFM", "FM", "Technical Reviews", "EGSE", "Test Facilities", "Test Phases", "Qualification", "Protoflight", "Characterization Testing"],
  audience: "I&T engineers, program managers, and systems engineers responsible for planning, structuring, or reviewing a spacecraft integration and test campaign."
},
   { id: "02", seriesNum: "02",
  title:    "Configuration Management",
  url:      "spacecraft_iat_article11.html",
  published: true,
  topics:   ["Configuration Management", "CCB", "As-Built Record", "Traveller", "PCA", "FCA", "CSA", "ECN"],
  audience: "New and early-career spacecraft engineers and technicians who work with flight hardware and need to understand why the documentation discipline surrounding that work is as important as the technical work itself."
},
    { id: "03", seriesNum: "03",
  title:    "Quality Assurance, Inspection, and Oversight",
  url:      "spacecraft_iat_article16.html",
  published: true,
  topics:   ["Quality Assurance", "Inspection", "Workmanship", "Stop-Work", "Quality Culture", "NCR", "MRB", "Supplier Quality"],
  audience: "Every person who works on flight hardware \u2014 engineer, technician, manager, or inspector. Quality assurance is not a specialty discipline; it is a shared responsibility that every participant in the I&T program must understand and practice."
},
      { id: "04", seriesNum: "04",
      title:    "The Cleanroom: Where Discipline Meets Flight Hardware",
      url:      "spacecraft_iat_article02.html",
      published: true,
      topics:   ["Cleanroom", "Contamination Control", "Molecular Contamination", "ESD", "FOD", "ISO 14644", "ASTM E595", "Gowning", "Cleanroom Culture"],
      audience: "Anyone who works with flight hardware or oversees those who do — engineers, technicians, and QA personnel — and needs to understand the contamination control, ESD, and FOD disciplines that protect hardware from irreversible, often invisible damage."
    },
      { id: "05", seriesNum: "05",
      title:    "EGSE and the Test Harness",
      url:      "spacecraft_iat_article10.html",
      published: true,
      topics:   ["EGSE", "Test Harness", "Ground Loops", "Simulators", "Power EGSE", "RF EGSE", "Calibration"],
      audience: "I&T engineers, test conductors, and anyone who designs, operates, or interprets results from spacecraft test infrastructure — and needs to understand how EGSE fidelity, calibration, and configuration control determine whether a test result can be trusted."
    },
    { id: "06", seriesNum: "06",
      title:    "Functional Testing",
      url:      "spacecraft_iat_article03.html",
      published: true,
      topics:   ["Functional Test", "Test-as-You-Fly", "Verification", "Requirements", "Fault Protection", "Anomaly Mgmt"],
      audience: "I&T engineers and test conductors responsible for verifying spacecraft functions against requirements, and who need to understand the traceability, pass/fail, and anomaly-disposition disciplines that make a test result defensible."
    },
    { id: "07", seriesNum: "07",
      title:    "Flight Software Verification and Validation",
      url:      "spacecraft_iat_article09.html",
      published: false,
      topics:   ["Flight Software", "V&V", "DO-178C", "Fault Protection", "HIL Testing", "FLATSAT"],
      audience: "New and early-career spacecraft engineers, aerospace students, and I&T practitioners who need to understand flight software V&V without specializing in it."
    },
   { id: "08", seriesNum: "08",
      title:    "Mass Properties and Structural Loads",
      url:      "spacecraft_iat_article14.html",
      published: false,
      topics:   ["Mass Properties", "Structural Analysis", "FEM", "Coupled Loads", "Modal Survey", "Factor of Safety"],
      audience: "I&T engineers and program staff who interact with structural and mass properties data and need to understand how it is generated, what it means, and why it matters for launch readiness."
    },
   { id: "09", seriesNum: "09",
      title:    "Vibration, Acoustics, and Shock Testing",
      url:      "spacecraft_iat_article04.html",
      published: false,
      topics:   ["Vibration", "Acoustics", "Shock", "Qualification", "Acceptance Testing", "Notching", "Force Limiting"],
      audience: "I&T engineers, structural and environmental test engineers, and program staff responsible for planning and executing mechanical environmental test campaigns."
    },
   { id: "10", seriesNum: "10",
      title:    "Thermal-Vacuum Testing",
      url:      "spacecraft_iat_article05.html",
      published: false,
      topics:   ["Thermal-Vacuum", "Thermal Balance", "Thermal Cycling", "Thermal Model", "Cryogenic Testing", "Outgassing"],
      audience: "I&T engineers, thermal engineers, and program staff responsible for planning and executing thermal-vacuum test campaigns."
    },
    { id: "11", seriesNum: "11",
      title:    "EMC Testing",
      url:      "spacecraft_iat_article12.html",
      published: false,
      topics:   ["EMC", "MIL-STD-461", "Conducted Emissions", "Radiated Emissions", "Bonding", "Grounding", "Interference"],
      audience: "I&T engineers, EMC specialists, and systems engineers responsible for ensuring electromagnetic compatibility across the integrated spacecraft."
    },
     { id: "12", seriesNum: "12",
      title:    "Instrument Integration and Calibration",
      url:      "spacecraft_iat_article07.html",
      published: false,
      topics:   ["Instrument Integration", "Calibration", "PI Model", "Optical Instruments", "Contamination", "Interface Verification"],
      audience: "I&T engineers, instrument scientists, and systems engineers working at the spacecraft-payload interface who need to understand the special challenges of science instrument integration and calibration."
    },
    { id: "13", seriesNum: "13",
      title:    "Propulsion System Testing",
      url:      "spacecraft_iat_article13.html",
      published: false,
      topics:   ["Propulsion", "Hazardous Operations", "Leak Testing", "Propellant Loading", "Test-as-You-Fly", "Thruster Verification"],
      audience: "I&T engineers, propulsion engineers, and safety personnel responsible for propulsion system integration, test, and hazardous operations during ground processing."
    },
   { id: "14", seriesNum: "14",
      title:    "Anomaly Management",
      url:      "spacecraft_iat_article06.html",
      published: false,
      topics:   ["Anomaly Management", "Discrepancy Report", "Root Cause Analysis", "Waivers", "Normalization of Deviance", "Corrective Action"],
      audience: "Every member of an I&T team \u2014 engineers, technicians, managers, and quality personnel \u2014 who must understand the discipline of finding, documenting, and resolving the unexpected."
    },
   { id: "15", seriesNum: "15",
      title:    "Launch Vehicle Integration",
      url:      "spacecraft_iat_article15.html",
      published: false,
      topics:   ["Launch Vehicle", "ICD", "Payload User's Guide", "Coupled Loads", "Separation System", "Encapsulation"],
      audience: "Spacecraft I&T engineers, systems engineers, and program managers who must manage the technical and programmatic interface between the spacecraft and the launch vehicle."
    },
    { id: "16", seriesNum: "16",
      title:    "Launch Readiness and Commissioning",
      url:      "spacecraft_iat_article08.html",
      published: false,
      topics:   ["Launch Readiness", "LRR", "Pre-Ship Review", "Countdown", "Commissioning", "Early Orbit Operations"],
      audience: "Every member of a spacecraft program team \u2014 from the engineers who built and tested the hardware to the managers who must make the launch decision \u2014 and anyone who wants to understand what it takes to justify putting a spacecraft on a rocket."
    },

    // ── Supplementary ────────────────────────────────────────
   { id: "S1", seriesNum: "S1",
      title:    "Small Satellites",
      url:      "",
      published: false,
      topics:   ["SmallSat", "CubeSat", "Test Tailoring", "Rideshare", "Protoflight", "Risk Acceptance"],
      audience: "Engineers and program managers working on small satellite programs who need to understand which I&T principles scale down, which break, and what cannot be compromised regardless of spacecraft size."
    },
    { id: "S2", seriesNum: "S2",
      title:    "Case Studies",
      url:      "",
      published: false,
      topics:   ["Lessons Learned", "Mission Failures", "Mars Climate Orbiter", "Hubble", "JWST", "Columbia", "Apollo"],
      audience: "Anyone in the spacecraft community who wants to understand how real missions succeeded or failed \u2014 and what their I&T programs did or did not do that made the difference."
    }
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
     ARTICLE FOOTER
     Renders into <footer id="series-nav-footer"></footer>
     Produces the three-column layout: Series | Topics | Audience
     using existing CSS classes: article-footer, footer-inner,
     footer-col, footer-label, footer-text, tags, tag.
     ---------------------------------------------------------- */
  function renderFooterMeta() {
    var container = document.getElementById("series-nav-footer");
    if (!container) return;

    var currentArticle = articles.find(isCurrent);
    if (!currentArticle) return;

    // Apply the existing footer class to the container element
    container.className = "article-footer";

    var inner = document.createElement("div");
    inner.className = "footer-inner";

    // ── Column 1: Series ──────────────────────────────────
    var col1 = document.createElement("div");
    col1.className = "footer-col";

    var label1 = document.createElement("div");
    label1.className = "footer-label";
    label1.textContent = "Series";

    var text1 = document.createElement("div");
    text1.className = "footer-text";
    text1.innerHTML = "Spacecraft Integration &amp; Test<br>Article " +
      currentArticle.seriesNum + " of " + publishedCount;

    col1.appendChild(label1);
    col1.appendChild(text1);

    // ── Column 2: Topics ──────────────────────────────────
    var col2 = document.createElement("div");
    col2.className = "footer-col";

    var label2 = document.createElement("div");
    label2.className = "footer-label";
    label2.textContent = "Topics";

    var tagsDiv = document.createElement("div");
    tagsDiv.className = "tags";

    if (currentArticle.topics && currentArticle.topics.length > 0) {
      currentArticle.topics.forEach(function (t) {
        var span = document.createElement("span");
        span.className = "tag";
        span.textContent = t;
        tagsDiv.appendChild(span);
      });
    }

    col2.appendChild(label2);
    col2.appendChild(tagsDiv);

    // ── Column 3: Audience ────────────────────────────────
    var col3 = document.createElement("div");
    col3.className = "footer-col";

    var label3 = document.createElement("div");
    label3.className = "footer-label";
    label3.textContent = "Audience";

    var text3 = document.createElement("div");
    text3.className = "footer-text";
    text3.textContent = currentArticle.audience || "";

    col3.appendChild(label3);
    col3.appendChild(text3);

    // Assemble
    inner.appendChild(col1);
    inner.appendChild(col2);
    inner.appendChild(col3);
    container.appendChild(inner);
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
