// js/core/nav.js
import { qs, qsAll, on } from "./dom.js";
import { GROUPS } from "./config.js";

export function openGroup(groupId) {
  const groups = qsAll(".nav-group");
  for (const g of groups) {
    const isTarget = g.getAttribute("data-group") === groupId;
    g.classList.toggle("open", isTarget); // ✅ close others, open only target
  }
}


export function setActiveSection(sectionId) {
  // show active section
  const sections = qsAll(".doc-section");
  for (const s of sections) s.classList.toggle("active", s.id === sectionId);

  // highlight nav item
  const items = qsAll(".nav-item");
  for (const it of items) it.classList.toggle("active", it.getAttribute("data-section") === sectionId);

  // update crumb
  const sec = document.getElementById(sectionId);
  const title = sec?.getAttribute("data-title") || sectionId;
  const path = sec?.getAttribute("data-path") || title;

  const crumbPath = qs("#crumbPath");
  const pageTitle = qs("#pageTitle");
  if (crumbPath) crumbPath.textContent = "Docs / " + path;
  if (pageTitle) pageTitle.textContent = title;

  // open correct group
if (sectionId !== "start") {
  for (const gid of Object.keys(GROUPS)) {
    if (GROUPS[gid].includes(sectionId)) {
      openGroup(gid);
      break;
    }
  }
} else {
  // ✅ start page: keep everything collapsed
  qsAll(".nav-group").forEach(g => g.classList.remove("open"));
}


  // set hash without adding history noise
  if (location.hash !== "#" + sectionId) {
    history.replaceState(null, "", "#" + sectionId);
  }
}

export function initNav() {
  // clicking nav items
  qsAll(".nav-item").forEach(a => {
    on(a, "click", (e) => {
      e.preventDefault();
      const id = a.getAttribute("data-section");
      if (id) setActiveSection(id);
    });
  });

  // group toggles
  qsAll("[data-group-toggle]").forEach(btn => {
    on(btn, "click", () => {
      const id = btn.getAttribute("data-group-toggle");
      const group = btn.closest(".nav-group");
      if (!group) return;
      group.classList.toggle("open");
    });
  });

  // brand -> start
  on(qs("#brandHome"), "click", () => setActiveSection("start"));

  // hash routing on load/back-forward
  window.addEventListener("hashchange", () => {
    const id = (location.hash || "#start").slice(1);
    if (id) setActiveSection(id);
  });

  const initial = (location.hash || "#start").slice(1);
  setActiveSection(initial || "start");
}
