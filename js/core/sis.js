// js/core/sis.js
import { qsAll, qs, on } from "./dom.js";
import { setSectionMeta, state } from "./state.js";
import { hydrateSection } from "./steps.js";

export function initSisSelection() {
  const buttons = qsAll(".sis-btn");
  if (!buttons.length) return;

  const label = qs("#selectedSisLabel");
  const hint = qs("#sisHint");

  buttons.forEach(btn => {
    on(btn, "click", () => {
      const sis = btn.getAttribute("data-sis") || btn.textContent.trim();
      setSectionMeta("uploading-data", { sisSelected: sis });

      // UI
      buttons.forEach(b => b.classList.toggle("active", b === btn));
      if (label) label.textContent = sis;
      if (hint) hint.textContent = "Looks good. Click “Confirm SIS & unlock next”.";

      // re-hydrate upload steps so data-requires works
      hydrateSection("uploading-data");
    });
  });

  // restore previous selection on load
  const saved = state?.["uploading-data"]?.meta?.sisSelected;
  if (saved) {
    if (label) label.textContent = saved;
    if (hint) hint.textContent = "Previously selected. You can change this anytime.";
    buttons.forEach(b => {
      const sis = b.getAttribute("data-sis") || b.textContent.trim();
      b.classList.toggle("active", sis === saved);
    });
  }
}
