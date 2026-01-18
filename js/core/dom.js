// js/core/dom.js
export const qs = (sel, root = document) => root.querySelector(sel);
export const qsAll = (sel, root = document) => Array.from(root.querySelectorAll(sel));

export function on(el, evt, fn, opts) {
  if (!el) return;
  el.addEventListener(evt, fn, opts);
}
