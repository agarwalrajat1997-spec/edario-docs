// js/core/steps.js
import { qsAll, on } from "./dom.js";
import { state, ensureSectionState, markStepComplete } from "./state.js";
import { updateAllProgressUI } from "./progress.js";

/* =========================
   Inner (mini) wizards
   =========================
   ✅ Minimal changes:
   - Adds support for TOP jump buttons:
       [data-inner-jumps="schedule-structure-step2"]
       buttons with [data-inner-jump="1|2|3|4..."]
   - Keeps your existing Prev/Next delegation
   - Highlights active jump button with .active
*/

export function initInnerWizards(rootEl = document) {
  if (!rootEl) return;

  const wizards = Array.from(rootEl.querySelectorAll("[data-inner-steps]"));

  wizards.forEach((wiz) => {
    // Only direct children are steps
    const stepEls = Array.from(wiz.querySelectorAll(":scope > [data-inner-step]"));
    if (!stepEls.length) return;

    // prevent double-binding if hydrateSection is called repeatedly
    if (wiz.dataset.bound === "1") return;
    wiz.dataset.bound = "1";

    const wizardId = wiz.getAttribute("data-inner-steps") || "";

    // Jump bar can live outside wiz but inside the section
    const jumpBar = wizardId
      ? rootEl.querySelector(`[data-inner-jumps="${CSS.escape(wizardId)}"]`)
      : null;

    const jumpBtns = jumpBar
      ? Array.from(jumpBar.querySelectorAll("[data-inner-jump]"))
      : [];

    // ✅ Shared nav can live outside wiz too
    const navWrap = wizardId
      ? rootEl.querySelector(`[data-inner-nav="${CSS.escape(wizardId)}"]`)
      : null;

    const navPrev = navWrap ? navWrap.querySelector("[data-inner-prev]") : null;
    const navNext = navWrap ? navWrap.querySelector("[data-inner-next]") : null;

    // Find initial visible step; default to 0
    let idx = stepEls.findIndex((s) => !s.hasAttribute("hidden"));
    if (idx < 0) idx = 0;

    function clamp(i) {
      return Math.max(0, Math.min(i, stepEls.length - 1));
    }

    function syncNavDisabled() {
      const cur = stepEls[idx];
      if (!cur) return;

      // Buttons inside the current inner-step (old pattern)
      const prevInStep = cur.querySelector("[data-inner-prev]");
      const nextInStep = cur.querySelector("[data-inner-next]");

      const atStart = (idx === 0);
      const atEnd = (idx === stepEls.length - 1);

      // ✅ Shared buttons (new pattern)
      if (navPrev) navPrev.disabled = atStart;
      if (navNext) navNext.disabled = atEnd;

      // ✅ Old pattern still works too
      if (prevInStep) prevInStep.disabled = atStart;
      if (nextInStep) nextInStep.disabled = atEnd;
    }

    function syncJumpActive() {
  if (!jumpBtns.length) return;

  const cur = stepEls[idx];
  const curStepNum =
    parseInt(cur?.getAttribute("data-inner-step") || "", 10) || (idx + 1);

  // Find the "section" jump: greatest jump <= current step
  let activeJump = null;

  jumpBtns.forEach((btn) => {
    const n = parseInt(btn.getAttribute("data-inner-jump") || "", 10);
    if (!Number.isFinite(n)) return;
    if (n <= curStepNum && (activeJump === null || n > activeJump)) {
      activeJump = n;
    }
  });

  // Fallback: if current step is before first jump (rare), pick first
  if (activeJump === null) {
    const first = jumpBtns
      .map((b) => parseInt(b.getAttribute("data-inner-jump") || "", 10))
      .filter(Number.isFinite)
      .sort((a, b) => a - b)[0];
    activeJump = first ?? null;
  }

  jumpBtns.forEach((btn) => {
    const n = parseInt(btn.getAttribute("data-inner-jump") || "", 10);
    const isActive = (activeJump !== null && n === activeJump);
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-current", isActive ? "true" : "false");
  });
}


    function playActiveVideo() {
      // Pause all videos first
      stepEls.forEach((s) => {
        s.querySelectorAll("video").forEach((v) => {
          try { v.pause(); } catch (_) {}
        });
      });

      // Play active step’s first video
      const active = stepEls[idx];
      const v = active ? active.querySelector("video") : null;
      if (!v) return;

      try {
        v.load(); // helps when hidden -> shown
        v.play().catch(() => {});
      } catch (_) {}
    }

    function show(i) {
      idx = clamp(i);

      stepEls.forEach((s, si) => {
        if (si === idx) s.removeAttribute("hidden");
        else s.setAttribute("hidden", "");
      });

      syncNavDisabled();
      syncJumpActive();
      playActiveVideo();
    }

    // ✅ Jump buttons (bind once)
    if (jumpBar && jumpBar.dataset.bound !== "1") {
      jumpBar.dataset.bound = "1";

      jumpBar.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-inner-jump]");
        if (!btn) return;

        e.preventDefault();

        const targetStepNum = parseInt(btn.getAttribute("data-inner-jump") || "", 10);
        if (!targetStepNum) return;

        const targetIdx = stepEls.findIndex((s) => {
          const n = parseInt(s.getAttribute("data-inner-step") || "", 10);
          return n === targetStepNum;
        });

        if (targetIdx >= 0) show(targetIdx);
      });
    }

    // ✅ Prev/Next INSIDE the wizard container (old pattern)
    wiz.addEventListener("click", (e) => {
      const prevBtn = e.target.closest("[data-inner-prev]");
      const nextBtn = e.target.closest("[data-inner-next]");
      if (!prevBtn && !nextBtn) return;

      e.preventDefault();

      if (prevBtn) show(idx - 1);
      if (nextBtn) show(idx + 1);
    });

    // ✅ Prev/Next OUTSIDE the wizard container (your new shared buttons)
    if (navWrap && navWrap.dataset.bound !== "1") {
      navWrap.dataset.bound = "1";

      navWrap.addEventListener("click", (e) => {
        const prevBtn = e.target.closest("[data-inner-prev]");
        const nextBtn = e.target.closest("[data-inner-next]");
        if (!prevBtn && !nextBtn) return;

        e.preventDefault();

        if (prevBtn) show(idx - 1);
        if (nextBtn) show(idx + 1);
      });
    }

    // Initialize
    show(idx);
  });
}


/* =========================
   Step hydration
   ========================= */
export function hydrateSection(sectionId) {
  ensureSectionState(sectionId);

  const section = document.getElementById(sectionId);
  if (!section) return;

  const stepsWrap = section.querySelector(`[data-steps="${sectionId}"]`);
  if (!stepsWrap) return;

  const steps = qsAll(".step", stepsWrap);
  const completed = state[sectionId].completedSteps || {};

  // lock/unlock + bind buttons
  for (let idx = 0; idx < steps.length; idx++) {
    const stepEl = steps[idx];
    const stepNum = parseInt(stepEl.getAttribute("data-step"), 10) || idx + 1;
    const prevNum = stepNum - 1;

    const completeBtn = stepEl.querySelector("[data-complete]");
    const toggleBtn = stepEl.querySelector("[data-toggle]");

    const prevDone = prevNum <= 0 ? true : completed[String(prevNum)] === true;
    const isDone = completed[String(stepNum)] === true;

    // ✅ You requested: disable locking globally
    const isLocked = false;

    if (toggleBtn) toggleBtn.disabled = isLocked;

    // Prevent double-binding when hydrateSection is called multiple times
    if (stepEl.dataset.bound !== "1") {
      stepEl.dataset.bound = "1";

      // toggle open via button
      if (toggleBtn) {
        on(toggleBtn, "click", () => {
          if (toggleBtn.disabled) return;
          stepEl.classList.toggle("open");
        });
      }

      // allow clicking header
      const head = stepEl.querySelector(".step-head");
      if (head) {
        on(head, "click", () => {
          if (isLocked) return;
          stepEl.classList.toggle("open");
        });
      }

      // complete
      if (completeBtn) {
        on(completeBtn, "click", () => {
          // support data-requires="sisSelected"
          const req = completeBtn.getAttribute("data-requires");
          if (req === "sisSelected") {
            if (!state[sectionId]?.meta?.sisSelected) return;
          }

          markStepComplete(sectionId, stepNum);
          unlockNextAndOpen(sectionId, stepNum);
        });
      }
    }

    // cursor state (can be set every hydrate)
    const head = stepEl.querySelector(".step-head");
    if (head) {
      head.style.cursor = isLocked ? "not-allowed" : "pointer";
    }

    // reset open state; we’ll auto-open one below
    stepEl.classList.remove("open");
    if (isDone) stepEl.classList.remove("open");
  }

  // Auto-open first incomplete step (since locking is disabled, it’s simply first not-done)
  let firstToOpen = null;
  for (let idx = 0; idx < steps.length; idx++) {
    const stepEl = steps[idx];
    const stepNum = parseInt(stepEl.getAttribute("data-step"), 10) || idx + 1;
    const isDone = state[sectionId].completedSteps[String(stepNum)] === true;

    if (!isDone) {
      firstToOpen = stepEl;
      break;
    }
  }

  if (firstToOpen) {
    firstToOpen.classList.add("open");
  } else if (steps.length) {
    steps[steps.length - 1].classList.add("open");
  }

  // ✅ Initialize any inner mini-wizards inside this section
  initInnerWizards(section);
}

export function hydrateAllSections() {
  const sections = Array.from(document.querySelectorAll(".doc-section")).map((s) => s.id);
  for (const id of sections) hydrateSection(id);
}

/* =========================
   Completion flow
   ========================= */
export function unlockNextAndOpen(sectionId, currentStepNum) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  hydrateSection(sectionId);
  updateAllProgressUI();

  const stepsWrap = section.querySelector(`[data-steps="${sectionId}"]`);
  if (!stepsWrap) return;

  const next = stepsWrap.querySelector(`.step[data-step="${currentStepNum + 1}"]`);
  if (next) {
    next.classList.add("open");
    next.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

// SIS branching: show only the selected SIS flow blocks (genesis vs generic)
/* =========================================================
   Uploading Data — SIS branching (Genesis vs Generic)
   Scoped only to #uploading-data (won't affect other sections)
========================================================= */
(function () {
  const SECTION_SEL = '#uploading-data';
  const STORAGE_KEY = 'edario_sis_choice_uploading_data';

  function applySIS(value) {
    const section = document.querySelector(SECTION_SEL);
    if (!section) return;

    section.querySelectorAll('[data-sis-flow="genesis"]').forEach(el => {
      el.hidden = (value !== 'genesis');
    });
    section.querySelectorAll('[data-sis-flow="generic"]').forEach(el => {
      el.hidden = (value !== 'generic');
    });
  }

  function getCurrentChoice() {
    const section = document.querySelector(SECTION_SEL);
    if (!section) return 'generic';

    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'genesis' || saved === 'generic') return saved;

    const checked = section.querySelector('input[name="sis-choice"][data-sis-choice]:checked');
    return checked ? checked.value : 'generic';
  }

  function syncRadios(value) {
    const section = document.querySelector(SECTION_SEL);
    if (!section) return;

    section.querySelectorAll('input[name="sis-choice"][data-sis-choice]').forEach(r => {
      r.checked = (r.value === value);
    });
  }

  function init() {
    const section = document.querySelector(SECTION_SEL);
    if (!section) return;

    const choice = getCurrentChoice();
    syncRadios(choice);
    applySIS(choice);
  }

  // Delegated listener (works even if content loads later)
  document.addEventListener('change', function (e) {
    const t = e.target;
    if (!t || !t.matches(`${SECTION_SEL} input[name="sis-choice"][data-sis-choice]`)) return;

    localStorage.setItem(STORAGE_KEY, t.value);
    applySIS(t.value);
  });

  // Run once when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // If the section is injected later, re-init when it appears
  const obs = new MutationObserver(() => {
    const section = document.querySelector(SECTION_SEL);
    if (!section) return;

    // only init once flows exist
    if (section.querySelector('[data-sis-flow="genesis"]') && section.querySelector('[data-sis-flow="generic"]')) {
      init();
    }
  });
  obs.observe(document.documentElement, { childList: true, subtree: true });
})();
