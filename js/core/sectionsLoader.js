// js/core/sectionsLoader.js
import { SECTION_IDS } from "./config.js";

export async function loadSectionsInto(rootEl) {
  if (!rootEl) throw new Error("sections root not found");

  // Clear placeholder
  rootEl.innerHTML = "";

  // Load each section html fragment
  const htmls = await Promise.all(
    SECTION_IDS.map(async (id) => {
      const res = await fetch(`sections/${id}.html`, { cache: "no-store" });
      if (!res.ok) throw new Error(`Failed to load sections/${id}.html`);
      return await res.text();
    })
  );

  // Inject
  rootEl.innerHTML = htmls.join("\n");
}
