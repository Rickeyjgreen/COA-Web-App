// Global state object to hold all regulatory data
let data = {};

// DOM element references
const contentEl = document.getElementById("content");
const searchEl  = document.getElementById("search");
const resultsEl = document.getElementById("search-results");

fetch("data.json").then(r => r.json()).then(json => {
  data = json;
  renderAll();
});

function scrollToSection(section) {
  const sectionEl = document.querySelector(`[data-section='${section}']`);
  if (sectionEl) sectionEl.scrollIntoView({ behavior: "smooth" });
}

function renderAll() {
  for (const section in data) {
    const div = document.createElement("div");
    div.setAttribute("data-section", section);
    div.innerHTML = `<h2>${section}</h2>` + data[section].map(entry => `
      <div class="entry" id="${section}-${entry.element}-${entry.loc}">
        <h3>${entry.element} (${entry.loc})</h3>
        ${["BHSO", "AODE", "Medicaid", "COA_HCSL", "COA_MHSU", "COA_RTX"].map(label => `
          <div><strong>${label}:</strong><p>${entry[label] || "<em>No content</em>"}</p></div>
        `).join("")}
      </div>
    `).join("");
    contentEl.appendChild(div);
  }
}

function performSearch() {
  const query = searchEl.value.trim().toLowerCase();
  resultsEl.innerHTML = "";
  
  // require at least 2 characters to prevent overwhelming results
  if (query.length < 2) {
    resultsEl.innerHTML = "<em>Type at least 2 characters to search.</em>";
    return;
  }

  const hits = [];
  // iterate all sections and entries to collect matches
  for (const section of Object.keys(data)) {
    for (const entry of data[section]) {
      for (const field of ["BHSO", "AODE", "Medicaid", "COA_HCSL", "COA_MHSU", "COA_RTX"]) {
        const content = entry[field] || "";
        const lowerContent = content.toLowerCase();
        const idx = lowerContent.indexOf(query);
        if (idx !== -1) {
          // Build a contextual snippet around the match
          const start = Math.max(0, idx - 30);
          const end   = Math.min(content.length, idx + query.length + 70);
          let snippet = content.slice(start, end);
          // Highlight occurrences of the query in the snippet (case-insensitive)
          const regex = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
          snippet = snippet.replace(regex, match => `<mark>${match}</mark>`);
          hits.push({ section, element: entry.element, loc: entry.loc, field, snippet });
        }
      }
    }
  }

  // Sort results by section name then element for consistency
  hits.sort((a, b) => {
    if (a.section === b.section) {
      return a.element.localeCompare(b.element);
    }
    return a.section.localeCompare(b.section);
  });

  // Limit the number of displayed results to avoid overwhelming the user
  const MAX_RESULTS = 10;
  const displayed = hits.slice(0, MAX_RESULTS);

  if (hits.length === 0) {
    resultsEl.innerHTML = `<p>No matches found for <strong>${query}</strong>.</p>`;
    return;
  }

  // If there are more results than displayed, inform the user
  if (hits.length > MAX_RESULTS) {
    const message = `<p>Showing ${MAX_RESULTS} of ${hits.length} matches. Refine your search for more specific results.</p>`;
    resultsEl.innerHTML += message;
  }

  // Render each search hit
  for (const hit of displayed) {
    const id = `${hit.section}-${hit.element}-${hit.loc}`;
    const link = `<a href="#${id}" onclick="document.getElementById('${id}').scrollIntoView({behavior: 'smooth'})">${hit.element} (${hit.loc}) — ${hit.field}</a>`;
    resultsEl.innerHTML += `<div class="result">${link}<br><small>${hit.snippet}</small></div>`;
  }
}