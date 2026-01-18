// js/core/state.js
import { loadState, saveState } from "./storage.js";

export let state = loadState();

export function ensureSectionState(sectionId) {
  if (!state[sectionId]) {
    state[sectionId] = { completedSteps: {}, meta: {} };
    saveState(state);
  }
  if (!state[sectionId].completedSteps) {
    state[sectionId].completedSteps = {};
    saveState(state);
  }
}

export function setSectionMeta(sectionId, patch) {
  ensureSectionState(sectionId);
  state[sectionId].meta = { ...(state[sectionId].meta || {}), ...(patch || {}) };
  saveState(state);
}

export function markStepComplete(sectionId, stepNum) {
  ensureSectionState(sectionId);
  state[sectionId].completedSteps[String(stepNum)] = true;
  saveState(state);
}

export function resetSection(sectionId) {
  ensureSectionState(sectionId);
  state[sectionId].completedSteps = {};
  saveState(state);
}
