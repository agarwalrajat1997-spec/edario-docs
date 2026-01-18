// js/app.js
import { qs, qsAll, on } from "./core/dom.js";
import { loadSectionsInto } from "./core/sectionsLoader.js";
import { initNav } from "./core/nav.js";
import { hydrateAllSections } from "./core/steps.js";
import { initSearch } from "./core/search.js";
import { initSisSelection } from "./core/sis.js";
import { updateAllProgressUI } from "./core/progress.js";

async function boot() {
  const root = document.getElementById("sectionsRoot");
  await loadSectionsInto(root);

  // wire up nav + steps
  initNav();
  hydrateAllSections();

  // search + special widgets
  initSearch();
  initSisSelection();

  // progress (even if hidden via css)
  updateAllProgressUI();

  // Expand/Collapse all (current visible section)
  on(qs("#expandAll"), "click", () => {
    const active = document.querySelector(".doc-section.active");
    if (!active) return;
    qsAll(".step", active).forEach(s => s.classList.add("open"));
  });

  on(qs("#collapseAll"), "click", () => {
    const active = document.querySelector(".doc-section.active");
    if (!active) return;
    qsAll(".step", active).forEach(s => s.classList.remove("open"));
  });

  // Jump buttons (data-jump="section-id")
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-jump]");
    if (!btn) return;
    const id = btn.getAttribute("data-jump");
    if (!id) return;
    location.hash = "#" + id; // triggers nav
  });
}

boot().catch(err => {
  console.error(err);
  const root = document.getElementById("sectionsRoot");
  if (root) {
    root.innerHTML = `
      <div class="panel"><div class="steps content">
        <p><strong>Boot error:</strong> ${String(err)}</p>
        <p class="muted">Open DevTools → Console for details.</p>
      </div></div>
    `;
  }
});
