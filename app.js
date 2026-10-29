let activeModule = 'module4';
const $ = (selector) => document.querySelector(selector);

function getModuleData() { return studyData.modules[activeModule]; }

function renderModuleChrome() {
  const isPlayItSafe = activeModule === 'module1' || activeModule === 'module2';
  const isModule2 = activeModule === 'module2';
  const isModule3 = activeModule === 'module3';
  const isModule5 = activeModule === 'module5';
  const isModule6 = activeModule === 'module6';
  $('#module-label').innerHTML = isPlayItSafe ? `COURSE 02 <span>•</span> MODULE 0${isModule2 ? '2' : '1'}` : isModule6 ? 'COURSE 03 <span>•</span> MODULE 04' : isModule5 ? 'COURSE 03 <span>•</span> MODULE 03' : isModule3 ? 'COURSE 03 <span>•</span> MODULE 02' : 'COURSE 01 <span>•</span> MODULE 04';
  $('#hero-title').innerHTML = isModule6 ? 'Harden the<br><em>network.</em>' : isModule5 ? 'Defend the<br><em>network.</em>' : isModule3 ? 'Connect &<br><em>protect.</em>' : isModule2 ? 'Frameworks &<br><em>controls.</em>' : isPlayItSafe ? 'Play it<br><em>safe.</em>' : 'Tools of the<br><em>trade.</em>';
  $('#hero-copy').textContent = isModule6 ? 'A focused study view of brute force prevention, network hardening, cloud security, cryptography, and NIST response planning.' : isModule5 ? 'A focused study view of packet analysis, denial-of-service attacks, packet sniffing, and IP spoofing.' : isModule3 ? 'A focused study view of network protocols, wireless security, firewalls, proxies, and VPNs.' : isModule2 ? 'A focused study view of frameworks, controls, NIST functions, OWASP principles, and security audits.' : isPlayItSafe ? 'A focused study view of security domains, risk management, and the threats analysts learn to manage.' : 'A focused study view of the concepts, tools, and analyst skills from your Foundations notes.';
  $('#progress-value').textContent = isPlayItSafe || isModule3 || isModule5 || isModule6 ? '100%' : '64%';
  $('#progress-bar').style.width = isPlayItSafe || isModule3 || isModule5 || isModule6 ? '100%' : '64%';
  $('#progress-note').textContent = isModule6 ? 'Your selected Chapter 3, Module 4 notes are organized here.' : isModule5 ? 'Your selected Chapter 3, Module 3 notes are organized here.' : isModule3 ? 'Your selected Chapter 3, Module 2 notes are organized here.' : isModule2 ? 'Your selected Chapter 2, Module 2 notes are organized here.' : isPlayItSafe ? 'Your selected Chapter 2, Module 1 notes are organized here.' : 'Keep going. You have 3 topics marked for review.';
  $('#concept-heading').innerHTML = isModule6 ? 'Build layers.<br><em>Reduce exposure.</em>' : isModule5 ? 'Read the traffic.<br><em>Recognize the attack.</em>' : isModule3 ? 'Networks that<br><em>connect and protect.</em>' : isModule2 ? 'Frameworks that<br><em>make security actionable.</em>' : isPlayItSafe ? 'The <em>CISSP domains.</em>' : 'What you should<br><em>walk away with.</em>';
  $('#tool-heading').textContent = isModule6 ? 'Hardening and monitoring toolkit.' : isModule5 ? 'Tools for network investigation.' : isModule3 ? 'Protocols and network defenses.' : isModule2 ? 'Frameworks, controls, and audits.' : isPlayItSafe ? 'Frameworks and practices.' : 'The analyst’s toolkit.';
  $('#activity-heading').textContent = isModule6 ? 'Build the incident response plan.' : isModule5 ? 'Practice in context.' : 'Practice activities.';
  $('#source-name').textContent = isModule6 ? 'Chapter 3 Module 4.txt' : isModule5 ? 'Chapter 3 Module 3.txt' : isModule3 ? 'Chapter 3 Module 2.txt' : isModule2 ? 'Play It Safe Module 2.txt' : isPlayItSafe ? 'Play It Safe Manage Security Risks.txt' : 'Foundations of Cybersecurity.txt';
}

function renderConcepts() {
  const moduleData = getModuleData();
  $('#concepts').innerHTML = moduleData.concepts.map((item) => `
    <article class="concept-card ${item.tone}"><div class="card-top"><span>${item.number}</span><span class="tag">${item.tag}</span></div><h3>${item.title}</h3><p>${item.text}</p><button class="learn-more" data-toast="${item.title} added to your review list">Mark for review <span>+</span></button></article>`).join('');
}

function renderTools() {
  const moduleData = getModuleData();
  $('#tools').innerHTML = `<div class="tool-header"><span>TOOL / IDEA</span><span>WHAT IT DOES</span><span>USE IT TO</span></div>` + moduleData.tools.map((tool) => `<div class="tool-row"><strong>${tool[0]}</strong><span>${tool[1]}</span><span>${tool[2]}</span></div>`).join('');
}

function renderActivities() {
  const activities = getModuleData().activities || [];
  $('#activities-list').innerHTML = activities.length ? activities.map((item) => `
    <article class="activity-card ${item.tone}">
      <div class="activity-top"><span class="tag">${item.tag}</span><span>${item.type} · ${item.duration}</span></div>
      <h3>${item.title}</h3>
      <p class="activity-result"><b>Required:</b> ${item.required}<br><b>Result:</b> ${item.result}</p>
      <p>${item.summary}</p>
      ${item.sections ? `<div class="activity-sections">${item.sections.map(([heading, text]) => `<details><summary>${heading}<span>+</span></summary><p>${text}</p></details>`).join('')}</div>` : ''}
      ${item.links ? `<div class="activity-links">${item.links.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener">${label} ↗</a>`).join('')}</div>` : ''}
    </article>`).join('') : '<p class="empty">No activities recorded for this module.</p>';
}

function renderGlossary(filter = '') {
  const moduleData = getModuleData();
  const terms = moduleData.glossary.filter(([term, definition]) => `${term} ${definition}`.toLowerCase().includes(filter.toLowerCase()));
  $('#glossary-list').innerHTML = terms.length ? terms.map(([term, definition]) => `<details class="glossary-item"><summary><b>${term}</b><span>+</span></summary><p>${definition}</p></details>`).join('') : '<p class="empty">No matching terms.</p>';
}

function renderQuestions() {
  const questions = studyData.questions[activeModule];
  $('#question-list').innerHTML = questions.map((item, index) => `<details class="question-card"><summary><span class="question-number">${String(index + 1).padStart(2, '0')}</span><span>${item.q}</span><b>Reveal</b></summary><div class="answer"><strong>${item.a}</strong><p>${item.why}</p></div></details>`).join('');
  $('#concept-count').textContent = String(getModuleData().concepts.length).padStart(2, '0');
  $('#glossary-count').textContent = String(getModuleData().glossary.length).padStart(2, '0');
  $('#question-count').textContent = String(questions.length).padStart(2, '0');
  $('#glossary-pill').textContent = `${getModuleData().glossary.length} terms`;
}

function renderModule() { renderModuleChrome(); renderConcepts(); renderTools(); renderActivities(); renderGlossary($('#glossary-search').value); renderQuestions(); }

function setupInteractions() {
  $('#glossary-search').addEventListener('input', (event) => renderGlossary(event.target.value));
  document.addEventListener('click', (event) => {
    const scrollTarget = event.target.closest('[data-scroll]');
    if (scrollTarget) document.querySelector(scrollTarget.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' });
    const review = event.target.closest('[data-toast]');
    if (review) showToast(review.dataset.toast);
    const module = event.target.closest('[data-module]');
    if (module && studyData.modules[module.dataset.module]) {
      activeModule = module.dataset.module;
      document.querySelectorAll('[data-module]').forEach((item) => item.classList.toggle('active', item === module));
      renderModule();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    else if (module && module.textContent.includes('Coming next')) showToast('The next module is ready for your notes.');
  });
  $('.mobile-menu').addEventListener('click', () => { const open = $('.sidebar').classList.toggle('open'); $('.mobile-menu').setAttribute('aria-expanded', open); });
}

function showToast(message) { const toast = document.createElement('div'); toast.className = 'toast'; toast.textContent = message; document.body.append(toast); setTimeout(() => toast.remove(), 2600); }

renderModule(); setupInteractions();
