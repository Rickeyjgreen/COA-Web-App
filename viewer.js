
let data = {};
let contentEl = document.getElementById("content");
let searchEl = document.getElementById("search");
let resultsEl = document.getElementById("search-results");

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
  const q = searchEl.value.toLowerCase();
  resultsEl.innerHTML = "";
  if (q.length < 3) return;

  const results = [];
  for (const section in data) {
    for (const entry of data[section]) {
      for (const field of ["BHSO", "AODE", "Medicaid", "COA_HCSL", "COA_MHSU", "COA_RTX"]) {
        const content = entry[field] || "";
        const idx = content.toLowerCase().indexOf(q);
        if (idx !== -1) {
          const snippet = content.slice(Math.max(0, idx - 30), idx + 70).replaceAll(q, `<mark>${q}</mark>`);
          results.push({
            section,
            element: entry.element,
            loc: entry.loc,
            field,
            snippet
          });
        }
      }
    }
  }

  results.slice(0, 3).forEach(hit => {
    const id = `${hit.section}-${hit.element}-${hit.loc}`;
    const link = `<a href="#${id}" onclick="document.getElementById('${id}').scrollIntoView({behavior: 'smooth'})">${hit.element} (${hit.loc}) — ${hit.field}</a>`;
    resultsEl.innerHTML += `<div class="result">${link}<br><small>${hit.snippet}</small></div>`;
  });
}
