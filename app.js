const topics = [
  {
    id: 'executive-readout',
    tag: 'EXECUTIVE-READOUT',
    title: 'Executive Readout',
    status: 'established',
    aliases: ['overview', 'summary', 'bottom line', 'core posture', 'plain english'],
    finding: 'The site is not a traditional guard post. It is a presence, deterrence, observation, and reporting assignment inside a mixed-use supportive housing environment with an overlapping Hope Village operation.',
    said: [
      'This site is not a traditional guard post.',
      'Security is not expected to physically manage clients, perform crisis intervention, or enforce rules hands-on.',
      'The posture is visible, calm, hands-off, documentation-heavy, relationship-aware, boundary-conscious, escalate to staff/police, not force.'
    ],
    meaning: 'Use this section when someone needs the single best operational frame for the whole assignment before drilling into topic-specific questions.',
    unresolved: []
  },
  {
    id: 'core-mission',
    tag: 'CORE-MISSION',
    title: 'Security purpose and plain-English mission',
    status: 'established',
    aliases: ['mission', 'security purpose', 'what is security for', 'why are they there', 'plain english'],
    finding: 'Security is being hired for presence, monitoring, redirection, and reporting rather than detention, removal, or hands-on enforcement.',
    said: [
      'The presence alone is like that helps deter a lot of incidents.',
      'It is really more about 34 clients that live here.',
      'You will not put your hands on anybody.',
      'You just need to call police.'
    ],
    meaning: 'The core workflow is observe, redirect, document, notify, and escalate appropriately.',
    unresolved: []
  },
  {
    id: 'hope-village',
    tag: 'HOPE-VILLAGE',
    title: 'Hope Village footprint and role',
    status: 'established',
    aliases: ['hope village', 'huts', 'outdoor program', 'basement operations', 'homeless living program'],
    finding: 'Hope Village is an outdoor staged homeless-living program behind the building, and its operations are moving into the basement-level area while clients remain outside except for designated service access.',
    said: [
      'It is a staged outdoor space for homeless people to live.',
      'They are moving in here. The clients are not moving in here but all of their operations are moving in here.',
      'This space from this door on belongs to Hope Village.'
    ],
    meaning: 'Security has to understand the difference between the tenant population and Hope Village clients using designated service areas.',
    unresolved: []
  },
  {
    id: 'boundaries',
    tag: 'BOUNDARIES',
    title: 'Hope Village boundaries and movement limits',
    status: 'mostly-established',
    aliases: ['restricted areas', 'where can they go', 'lingering', 'wandering', 'meal times', 'after midnight'],
    finding: 'Hope Village clients should only access the building for defined purposes such as bathrooms, showers, laundry, meals, and staff contact, and should not be hanging out in the rest of the building.',
    said: [
      'They do not have access to the rest of the building except for during meal times.',
      'There is no reason for clients to hang out in here.',
      'If it is past midnight, those doors are shut.'
    ],
    meaning: 'Soft boundary enforcement is a central security task: redirect lingering, wandering, or non-authorized movement and document repeated issues.',
    unresolved: ['Exact after-hours access rules need final written confirmation.']
  },
  {
    id: 'access-control',
    tag: 'ACCESS-CONTROL',
    title: 'Entry points and controlled access',
    status: 'mostly-established',
    aliases: ['doors', 'buzzer', 'card reader', 'elevator', 'keys', 'entry points'],
    finding: 'Entry appears tightly controlled, with the elevator as the main accessible entrance, the basement door functioning as a controlled access point, and at least one emergency-only exit.',
    said: [
      'That is the only handicapped accessible entrance is through the elevator.',
      'This door will always remain locked unless it is buzzed in.',
      'This is an emergency exit only. Not a regular way to get in.'
    ],
    meaning: 'Final post orders must define public doors, staff-only doors, emergency-only doors, buzz-in authority, and response steps for wrong-door access attempts.',
    unresolved: ['Final door-by-door access map and buzzer workflow.']
  },
  {
    id: 'security-station',
    tag: 'SECURITY-STATION',
    title: 'Security post and office setup',
    status: 'unresolved',
    aliases: ['station', 'desk', 'post location', 'office', 'where security sits'],
    finding: 'A stationed presence with computer access and likely camera monitoring was expected, but the exact post location and office setup were not finalized.',
    said: [
      'This is where all the computers are set up.',
      'I do not know if this makes the most sense though.',
      'We are going to be at a station with cameras.'
    ],
    meaning: 'The physical setup needs to be settled before launch because it affects logs, keys, sign-in materials, monitors, and emergency contacts.',
    unresolved: ['Exact desk/post location', 'Monitor access', 'Camera access', 'Key/fob storage', 'Sign-in materials', 'Emergency contact sheet']
  },
  {
    id: 'cameras',
    tag: 'CAMERAS',
    title: 'Surveillance coverage and monitoring scope',
    status: 'unresolved',
    aliases: ['surveillance', 'camera access', 'what can security see', 'live monitoring', 'recording review'],
    finding: 'Camera infrastructure is planned, but the system may not have been fully installed and monitoring responsibilities are divided between building cameras and Hope Village cameras.',
    said: [
      'They will monitor all their own cameras and all that stuff.',
      'You will not monitor cameras out here.',
      'There is cameras you will be able to see every door and every kind of common area space.',
      'I am not sure they have installed the cameras yet.'
    ],
    meaning: 'A camera SOP must define exactly what security can see, what Hope Village staff can see, and whether security is live-monitoring or incident-responding only.',
    unresolved: ['Final installed camera layout', 'Monitor access by role', 'Whether footage review is part of security scope']
  },
  {
    id: 'resident-population',
    tag: 'RESIDENT-POPULATION',
    title: 'Building resident profile',
    status: 'established',
    aliases: ['34 apartments', 'residents', 'tenants', 'mental health', 'physical disability', 'supportive housing'],
    finding: 'The building houses 34 apartments occupied by people with mental health and/or physical disabilities, many coming directly from homelessness.',
    said: [
      'There are 34 apartments in the building on the second, third, fourth.',
      'They all have some sort of mental health or physical disability.',
      'Most of the people coming in here are coming straight from the streets.'
    ],
    meaning: 'Security posture must be trauma-aware, patient, non-reactive, and relationship-conscious rather than confrontational.',
    unresolved: []
  },
  {
    id: 'behaviors',
    tag: 'BEHAVIORS-TO-WATCH',
    title: 'What security is supposed to notice',
    status: 'established',
    aliases: ['behavior watch', 'hallway chaos', 'overnight guests', 'parties', 'smoking', 'laundry disputes'],
    finding: 'Security is expected to notice unauthorized visitors, overnight guests, parties, hallway chaos, screaming, conflict, laundry disputes, smoking, sanitation concerns, unusual odors, and suspicious wandering.',
    said: [
      'You cannot have visitors in there.',
      'You cannot have people spending the night, parties, or people hanging out in apartments.',
      'Make sure there is not somebody screaming and there is not some chaos going on in there.',
      'If you smell somebody smoking weed, you are not going to go in and say you cannot smoke weed.'
    ],
    meaning: 'This is behavioral observation plus environmental reporting, not independent rule enforcement.',
    unresolved: []
  },
  {
    id: 'visitors',
    tag: 'VISITORS',
    title: 'Visitor and vendor control',
    status: 'mostly-established',
    aliases: ['visitor log', 'vendor log', 'sign in', 'tags', 'guest policy'],
    finding: 'Visitors and vendors are expected to be governed by policy, signed in, visually identifiable, and tied to unit or destination awareness.',
    said: [
      'It will be part of the visitor policy.',
      'It will be a log at the security where we will be signing in.',
      'They will have a little tag they have to wear.',
      'Vendors will also sign in.'
    ],
    meaning: 'Security likely owns or co-owns visitor/vendor logging, visual verification, direction, and policy violation flagging.',
    unresolved: ['Final visitor policy details and any exceptions.']
  },
  {
    id: 'shift-logs',
    tag: 'SHIFT-LOGS',
    title: 'Reporting and documentation expectations',
    status: 'established',
    aliases: ['digital shift log', 'sharepoint', 'handoff', 'continuity', 'case manager notification'],
    finding: 'A digital shift log was explicitly discussed and appears central to continuity between security, case managers, program staff, and follow-up actions.',
    said: [
      'It will probably be like on a digital shift log.',
      'We will do it through our shared SharePoint drive.',
      'Only some people who have access get access to.',
      'We could fill that out and then it notifies the case manager.'
    ],
    meaning: 'The log is not just a note pad. It is the continuity bridge between security shifts, case managers, program staff, and follow-up actions.',
    unresolved: ['Required fields and exact shift log workflow should be standardized for all staff, especially weekends.']
  },
  {
    id: 'phi',
    tag: 'PHI',
    title: 'Protected information and confidentiality',
    status: 'established',
    aliases: ['HIPAA', 'protected information', 'client info', 'confidentiality', 'access control'],
    finding: 'The reason the reporting tool must be internal is because client information may be documented.',
    said: [
      'Because it will have client information in it.',
      'PHIs.',
      'Only some people who have access get access to.'
    ],
    meaning: 'Shift reporting must be access-controlled, HIPAA and PHI-conscious, role-limited, and standardized.',
    unresolved: []
  },
  {
    id: 'use-of-force',
    tag: 'USE-OF-FORCE',
    title: 'Hands-off doctrine',
    status: 'established',
    aliases: ['hands off', 'put hands on', 'police', 'physical intervention', 'crisis management'],
    finding: 'Security is explicitly not to put hands on clients and should call police when someone is out of control or unsafe.',
    said: [
      'You will not put your hands on anybody.',
      'You do not need to do any of that. You just need to call police.',
      'If there is anybody out of control call police.',
      'We do not do crisis management.'
    ],
    meaning: 'This is one of the clearest operational boundaries in the document and should be formalized in post orders.',
    unresolved: []
  },
  {
    id: 'on-call-staff',
    tag: 'ON-CALL-STAFF',
    title: 'Program staff backup and escalation',
    status: 'mostly-established',
    aliases: ['on call', 'staff backup', 'escalation', 'case manager', 'call somebody'],
    finding: 'Security is not alone in response structure. Staff will be on-site or on-call depending on circumstance.',
    said: [
      'Staff will be here 24 hours a day.',
      'They will be on call also.',
      'You will have to call somebody and they will come down here and deal with the clients.'
    ],
    meaning: 'Escalation ladder appears to be observe or redirect, document, notify staff or case manager or on-call, then call police if unsafe or out of control.',
    unresolved: ['Exact staffing overlap between VOA staff and Hope Village staff should be documented.']
  },
  {
    id: 'new-and-evolving',
    tag: 'NEW-AND-EVOLVING',
    title: 'Everyone acknowledged this is a startup situation',
    status: 'established',
    aliases: ['startup', 'new', 'build the ship', 'figure it out'],
    finding: 'Both sides explicitly framed this as a new arrangement that will need refinement.',
    said: [
      'This is a new situation for you all to do and it is new to us.',
      'We are going to build the ship as it sails.',
      'It is all new to all of us.'
    ],
    meaning: 'The initial months need tighter-than-normal debrief loops, fast policy translation, daily or weekly refinement, and living SOPs rather than static SOPs.',
    unresolved: []
  },
  {
    id: 'move-in-timeline',
    tag: 'MOVE-IN-TIMELINE',
    title: 'Opening and occupancy timing',
    status: 'partially-established',
    aliases: ['September 15', 'occupancy', 'inspections', 'opening', 'launch date'],
    finding: 'The tentative target sounded like around mid-September, but final timing depends on construction, shafts, occupancy, inspections, and room-level approvals.',
    said: [
      'I would say somewhere around September 15th.',
      'We just have to wait for the occupancy.',
      'That sometimes takes a week to schedule.'
    ],
    meaning: 'September 15 appears to be a working target, not a locked launch date.',
    unresolved: ['Final launch date remains dependent on occupancy and approvals.']
  },
  {
    id: 'move-in-staging',
    tag: 'MOVE-IN-STAGING',
    title: 'Residents will not all arrive at once',
    status: 'established',
    aliases: ['stages', '60 percent', 'rollout'],
    finding: 'Resident onboarding is staged rather than full occupancy on day one.',
    said: [
      'It will be in stages.',
      'We will probably do about 60 percent coming in the first session.',
      'It will not be the full 34 just yet.'
    ],
    meaning: 'Security should expect early confusion during stage one, a recognition curve with names and faces, and procedures that may need adjustment before full occupancy.',
    unresolved: []
  },
  {
    id: 'basement-units',
    tag: 'BASEMENT-UNITS',
    title: 'Additional lower-level apartments',
    status: 'unresolved',
    aliases: ['lower level', 'downstairs', 'four apartments'],
    finding: 'There are four additional apartments downstairs with no fully stated plan yet.',
    said: [
      'There are four additional apartments down here that currently we do not have a plan for but there will be four people living down here as well.'
    ],
    meaning: 'This is a significant unresolved item for patrol routes, occupancy expectations, access control, signage, and incident mapping.',
    unresolved: ['Operational meaning of the four downstairs apartments is still unclear.']
  },
  {
    id: 'signage',
    tag: 'SIGNAGE',
    title: 'Signage and wayfinding',
    status: 'unresolved',
    aliases: ['wayfinding', 'room numbers', 'labels'],
    finding: 'Required occupancy signage will go in first and custom operational signage later.',
    said: [
      'The signage plan is to get in here and hang up all the signs that are required in order to get the occupancy.',
      'Then I will come back through and put signs up that I want.',
      'We will post our own.'
    ],
    meaning: 'Before go-live, security needs entry and exit labels, no-smoking signage, visitor sign-in location signage, room numbering clarity, and restricted-area signs.',
    unresolved: ['Final signage package remains open.']
  },
  {
    id: 'bathroom-shower',
    tag: 'BATHROOM-SHOWER',
    title: 'Restroom and shower use needs tighter clarity',
    status: 'unresolved',
    aliases: ['bathroom', 'shower', 'privacy', 'incidental exposure', 'men women'],
    finding: 'There was confusion around bathroom and shower flow, men and women sides, and what security may incidentally observe.',
    said: [
      'This is the men side, I am pretty sure.',
      'Do the men and women both come in here?',
      'You just happen to see a naked man walking by.'
    ],
    meaning: 'This area needs explicit written protocol covering who uses which side, privacy expectations, when security should or should not enter, and what constitutes an incident versus incidental exposure.',
    unresolved: ['Exact bathroom and shower assignment and privacy rules need formal written guidance.']
  },
  {
    id: 'fire-safety',
    tag: 'FIRE-SAFETY',
    title: 'Fire extinguisher and emergency map questions',
    status: 'unresolved',
    aliases: ['fire safety', 'extinguisher', 'emergency map'],
    finding: 'Fire-safety specifics were asked but not definitively answered in the walkthrough.',
    said: [
      'Will there be fire extinguishers in each room?',
      'That is a question.',
      'Is there a map of them yet?'
    ],
    meaning: 'Do not assume this is resolved. It should be a pre-opening checklist item.',
    unresolved: ['Fire extinguisher placement and emergency maps remain open.']
  },
  {
    id: 'billing',
    tag: 'BILLING',
    title: 'Invoice and payment process',
    status: 'mostly-established',
    aliases: ['billing', 'invoice', 'paul', 'direct deposit'],
    finding: 'Billing was discussed clearly enough to turn into an admin procedure.',
    said: [
      'We cut checks on Tuesdays and Thursdays.',
      'It will be much faster if you do direct deposits.',
      'If you send us an invoice on every Friday then Tuesday or Thursday it will be direct deposit.',
      'Turn it into Paul because Paul does all the security.'
    ],
    meaning: 'Tentative billing workflow is submit invoice to Paul, prefer direct deposit, and align payment to Tuesday or Thursday processing. Friday invoicing appears workable.',
    unresolved: ['Formal invoice cadence and payment contact should be written into the contract workflow.']
  }
];

const fuzzy = [
  'Final security desk location.',
  'Exact camera layout and monitor access.',
  'Exact bathroom and shower assignment and privacy procedures.',
  'Fire extinguisher and emergency map placement.',
  'Final signage package.',
  'Final visitor policy details.',
  'Exact after-hours access rules.',
  'Exact staffing overlap between VOA staff and Hope Village staff.',
  'What the four downstairs apartments will mean operationally.',
  'Exact post orders for wandering or noncompliant individuals.'
];

const nextDocs = [
  'Cleaned meeting brief',
  'Open questions list for Tamara',
  'Draft site post orders',
  'Shift log format',
  'One-page weekend staff protocol',
  'Visitor and vendor sign-in workflow'
];

const quickPrompts = [
  'What was decided versus still fuzzy?',
  'What was said about Hope Village boundaries?',
  'What exactly was said about use of force?',
  'Show everything about shift logs and PHI.',
  'What are the biggest unresolved startup risks?',
  'What next documents should be built from this?'
];

function lower(text) {
  return String(text || '').toLowerCase();
}

function statusMeta(status) {
  if (status === 'established') return { label: 'Established', className: 'status-established' };
  if (status === 'mostly-established') return { label: 'Mostly established', className: 'status-mostly-established' };
  if (status === 'partially-established') return { label: 'Partially established', className: 'status-partially-established' };
  return { label: 'Unresolved', className: 'status-unresolved' };
}

function scoreTopic(topic, query) {
  if (!query) return 1;
  const q = lower(query);
  let score = 0;
  const hay = lower(topic.title + ' ' + topic.tag + ' ' + topic.finding + ' ' + topic.meaning + ' ' + topic.aliases.join(' ') + ' ' + topic.said.join(' ') + ' ' + topic.unresolved.join(' '));
  if (hay.indexOf(q) >= 0) score += 20;
  q.split(' ').forEach(function(part) {
    if (part && hay.indexOf(part) >= 0) score += 3;
  });
  return score;
}

const state = {
  query: '',
  status: 'all',
  selectedId: topics[0].id
};

function renderStats() {
  const unresolvedCount = topics.filter((t) => t.status === 'unresolved').length;
  const stats = document.getElementById('stats');
  stats.innerHTML = [
    ['Topics', topics.length],
    ['Unresolved', unresolvedCount],
    ['Open items', fuzzy.length]
  ].map(([label, value]) => `
    <div class="stat-card">
      <div class="label">${label}</div>
      <div class="value">${value}</div>
    </div>
  `).join('');
}

function getMatchedTopics() {
  return topics
    .map((topic) => ({ topic, score: scoreTopic(topic, state.query) }))
    .filter((item) => {
      const statusOk = state.status === 'all' || item.topic.status === state.status;
      const queryOk = state.query ? item.score > 0 : true;
      return statusOk && queryOk;
    })
    .sort((a, b) => (b.score - a.score) || a.topic.title.localeCompare(b.topic.title));
}

function renderQuickPrompts() {
  const el = document.getElementById('quickPrompts');
  el.innerHTML = quickPrompts.map((prompt) => `<button data-prompt="${prompt.replace(/"/g, '&quot;')}">${prompt}</button>`).join('');
  el.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', () => {
      state.query = button.dataset.prompt;
      document.getElementById('searchInput').value = state.query;
      render();
    });
  });
}

function renderTopicList(matches) {
  const el = document.getElementById('topicList');
  if (!matches.length) {
    el.innerHTML = `<div class="empty">No direct match. Try broader terms like boundaries, logs, bathroom, visitor, or open question.</div>`;
    return;
  }

  if (!matches.some((item) => item.topic.id === state.selectedId)) {
    state.selectedId = matches[0].topic.id;
  }

  el.innerHTML = matches.slice(0, 12).map((item) => {
    const meta = statusMeta(item.topic.status);
    const active = item.topic.id === state.selectedId ? 'active' : '';
    return `
      <button class="topic-card ${active}" data-topic-id="${item.topic.id}">
        <div class="tag">[${item.topic.tag}]</div>
        <div class="title">${item.topic.title}</div>
        <div class="summary">${item.topic.finding}</div>
        <div class="status-pill ${active ? '' : meta.className}">${meta.label}</div>
      </button>
    `;
  }).join('');

  el.querySelectorAll('[data-topic-id]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedId = button.dataset.topicId;
      render();
    });
  });
}

function renderDetail(topic) {
  const meta = statusMeta(topic.status);
  const el = document.getElementById('topicDetail');
  el.innerHTML = `
    <div class="detail-header">
      <div>
        <div class="detail-tag">[${topic.tag}]</div>
        <h2>${topic.title}</h2>
      </div>
      <div class="status-pill ${meta.className}">${meta.label}</div>
    </div>

    <div class="detail-grid">
      <div class="detail-card">
        <div class="card-label">What was established</div>
        <div class="card-body">${topic.finding}</div>
      </div>
      <div class="detail-card">
        <div class="card-label">Operational meaning</div>
        <div class="card-body">${topic.meaning}</div>
      </div>
    </div>

    <div class="panel-header"><h2>Best supporting statements</h2></div>
    <div class="quote-list">
      ${topic.said.map((quote) => `<div class="callout quote">&ldquo;${quote}&rdquo;</div>`).join('')}
    </div>

    <div class="panel-header" style="margin-top:18px;"><h2>What still needs clarification</h2></div>
    <div class="unresolved-list">
      ${topic.unresolved.length
        ? topic.unresolved.map((item) => `<div class="callout">${item}</div>`).join('')
        : '<div class="callout">No major open question flagged here beyond normal startup refinement.</div>'}
    </div>
  `;
}

function renderOpenQuestions() {
  const unresolvedTopics = topics.filter((topic) => topic.unresolved.length > 0 || topic.status === 'unresolved');
  const el = document.getElementById('openQuestions');
  el.innerHTML = unresolvedTopics.slice(0, 10).map((topic) => `
    <div class="list-item">
      <div class="list-tag">[${topic.tag}]</div>
      <div><strong>${topic.title}</strong></div>
      <div style="margin-top:8px; color:#475569; line-height:1.55;">${topic.unresolved[0] || 'Needs final written clarification.'}</div>
    </div>
  `).join('');
}

function renderNextDocs() {
  const el = document.getElementById('nextDocs');
  el.innerHTML = nextDocs.map((item, index) => `
    <div class="list-item">
      <strong>${index + 1}. ${item}</strong>
    </div>
  `).join('');
}

function render() {
  const matches = getMatchedTopics();
  renderTopicList(matches);
  const selected = topics.find((topic) => topic.id === state.selectedId) || topics[0];
  renderDetail(selected);
  renderOpenQuestions();
  renderNextDocs();
}

document.getElementById('searchInput').addEventListener('input', (event) => {
  state.query = event.target.value;
  render();
});

document.getElementById('statusFilter').addEventListener('change', (event) => {
  state.status = event.target.value;
  render();
});

renderStats();
renderQuickPrompts();
render();
