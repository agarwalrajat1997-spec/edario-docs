// js/core/search.js
import { qs, qsAll, on } from "./dom.js";

export function initSearch() {
  const input = qs("#searchInput");
  if (!input) return;

  on(input, "input", () => {
    const q = (input.value || "").trim().toLowerCase();

    qsAll(".nav-item").forEach(item => {
      const text = item.innerText.toLowerCase();
      item.style.display = text.includes(q) ? "" : "none";
    });

    // hide whole groups if all children hidden
    qsAll(".nav-group").forEach(group => {
      const children = qsAll(".nav-item", group);
      const anyVisible = children.some(a => a.style.display !== "none");
      group.style.display = anyVisible ? "" : "none";
    });
  });
}
