// js/core/progress.js
import { GROUPS } from "./config.js";
import { state, ensureSectionState } from "./state.js";

export function percent(sectionId) {
  ensureSectionState(sectionId);
  const section = document.getElementById(sectionId);
  if (!section) return 0;

  const stepsWrap = section.querySelector(`[data-steps="${sectionId}"]`);
  if (!stepsWrap) return 0;

  const steps = Array.from(stepsWrap.querySelectorAll(".step"));
  const total = steps.length || 0;
  if (!total) return 0;

  const completed = state[sectionId].completedSteps || {};
  let done = 0;
  for (const stepEl of steps) {
    const n = parseInt(stepEl.getAttribute("data-step"), 10);
    if (completed[String(n)] === true) done++;
  }
  return Math.round((done / total) * 100);
}

export function groupPercent(groupId) {
  const ids = GROUPS[groupId] || [];
  if (!ids.length) return 0;
  let sum = 0;
  for (const id of ids) sum += percent(id);
  return Math.round(sum / ids.length);
}

export function updateAllProgressUI() {
  // badges/bars might be hidden by CSS, but this keeps logic stable
  const allSections = Array.from(document.querySelectorAll(".doc-section")).map(s => s.id);

  for (const id of allSections) {
    ensureSectionState(id);
    const pct = percent(id);

    const badge = document.querySelector(`[data-badge="${id}"]`);
    const pctEl = document.querySelector(`[data-progress="${id}"]`);
    const barEl = document.querySelector(`[data-progressbar="${id}"]`);

    if (badge) badge.textContent = pct + "%";
    if (pctEl) pctEl.textContent = (id === "start") ? "—" : (pct + "%");
    if (barEl) barEl.style.width = pct + "%";
  }

  for (const gid of Object.keys(GROUPS)) {
    const gp = groupPercent(gid);
    const gb = document.querySelector(`[data-group-badge="${gid}"]`);
    const dot = document.querySelector(`[data-group-dot="${gid}"]`);
    if (gb) gb.textContent = gp + "%";
    if (dot) dot.classList.toggle("done", gp === 100);
  }
}
