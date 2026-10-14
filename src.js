import './style.css';

// EDIT THIS SECTION BEFORE PUBLISHING.
const profile = {
  name: 'Arya Uprale',
  initials: 'AU',
  role: 'IT • Application Support • Integrations',
  location: 'Houston, TX',
  email: 'upralearya@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arya-u-774ba2367/', // e.g. https://www.linkedin.com/in/your-profile/
  github: 'https://github.com/aryauprale',   // e.g. https://github.com/your-username
  resume: 'https://itportfolio-mu.vercel.app/Uprale_Arya_Resume.pdf',
};

const projects = [
  {
    number: '01', category: 'ORACLE INTEGRATION CLOUD', title: 'Employee Onboarding Integration',
    description: 'An app-driven integration practice project that accepts employee data, applies conditional routing, maps fields, invokes a mock HCM worker API, and returns a response.',
    tags: ['OIC', 'REST', 'Mapping', 'Switch logic', 'Fault handling'],
    details: ['Configured a REST-triggered app-driven orchestration.', 'Mapped inbound employee details to an outbound service request.', 'Used conditional branches for different processing paths.', 'Tested API authentication and response handling.'],
    link: ''
  },
  {
    number: '02', category: 'ORACLE INTEGRATION CLOUD', title: 'SFTP Employee File Processing',
    description: 'A scheduled integration practice flow for retrieving an employee CSV file securely, staging it, reading records, and inspecting processing results.',
    tags: ['OIC', 'SFTP', 'CSV', 'Scheduled integration'],
    details: ['Set up an SFTP connection and download operation.', 'Configured Stage File to read structured CSV data.', 'Validated, activated, and tested the flow with employee records.'],
    link: ''
  },
  {
    number: '03', category: 'FULL-STACK DEVELOPMENT', title: 'ProTrade — Trading Simulator',
    description: 'A team capstone web application simulating stock trading, account balances, portfolios, transactions, and administrator functions.',
    tags: ['Python', 'Flask', 'SQLite', 'Jinja', 'Tailwind CSS'],
    details: ['Led project coordination and contributed to the application workflow.', 'Worked on authentication, user roles, portfolio views, and transaction history.', 'Troubleshot database, routing, and UI errors.'],
    link: ''
  },
  {
    number: '04', category: 'ORACLE FUSION HCM', title: 'HCM Reporting & Data Exploration',
    description: 'Hands-on learning projects exploring legal employers, worker assignments, and workforce structures through Oracle HCM reporting tools and SQL.',
    tags: ['BI Publisher', 'SQL', 'Core HCM', 'OTBI'],
    details: ['Explored effective-dated HCM tables and organizational relationships.', 'Practiced assembling a BI Publisher SQL data set for legal employer reporting.', 'Compared operational analysis in OTBI with formatted BI Publisher reports.'],
    link: ''
  }
];

const skills = [
  { title: 'Application Support', items: ['Incident triage & troubleshooting', 'User support workflows', 'Root-cause investigation', 'Technical documentation', 'Testing & validation'] },
  { title: 'Oracle & Integrations', items: ['Oracle Integration Cloud (OIC)', 'Oracle Fusion HCM concepts', 'REST / SOAP APIs', 'SFTP & file processing', 'Data mapping & orchestration'] },
  { title: 'Development & Data', items: ['Python & Flask', 'SQL / SQLite', 'JavaScript / HTML / CSS', 'Git & GitHub', 'BI Publisher / OTBI learning'] },
];

const safe = (s) => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ext = (url, label, css='') => url ? `<a class="${css}" href="${safe(url)}" target="_blank" rel="noopener noreferrer">${label}<span aria-hidden="true"> ↗</span></a>` : '';
const projectMarkup = (p, i) => `<article class="project" style="--i:${i}"><div class="project-top"><span>${p.category}</span><span class="project-num">${p.number} / 04</span></div><div class="project-art art-${i}" aria-hidden="true"><div class="art-grid"></div><div class="art-symbol">${['{ ↔ }','⇢ CSV ⇢','&lt;/&gt;','▤'][i]}</div><div class="art-chip">${['API → LOGIC → API','SFTP → STAGE FILE','FLASK · SQLITE','SQL → REPORT'][i]}</div></div><div class="project-content"><h3>${safe(p.title)}</h3><p>${safe(p.description)}</p><div class="tags">${p.tags.map(t => `<span>${safe(t)}</span>`).join('')}</div><button class="project-toggle" type="button" aria-expanded="false" aria-controls="details-${i}">Explore project <span aria-hidden="true">↗</span></button><div id="details-${i}" class="project-details" hidden><h4>What I worked on</h4><ul>${p.details.map(d=>`<li>${safe(d)}</li>`).join('')}</ul>${ext(p.link,'View project','detail-link')}</div></div></article>`;

document.querySelector('#app').innerHTML = `
<header class="site-header"><div class="nav wrap"><a class="logo" href="#top" aria-label="Home"><span class="logo-mark">${safe(profile.initials)}</span><span>${safe(profile.name)}<small>PORTFOLIO / 2026</small></span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><a class="nav-cta" href="#contact">Let's connect <span>↗</span></a><button class="menu-btn" aria-label="Open navigation" aria-expanded="false">☰</button></div></header>
<main id="top">
<section class="hero wrap"><div class="hero-copy"><div class="eyebrow"><span class="status-dot"></span> OPEN TO ENTRY-LEVEL OPPORTUNITIES <span class="eyebrow-line"></span> HOUSTON, TX</div><p class="overline">HELLO, I'M ${safe(profile.name).toUpperCase()}</p><h1>Making technology<br/><em>work better.</em></h1><p class="hero-desc">IT graduate focused on application support, enterprise systems, and integrations. I enjoy figuring out how systems connect, solving problems, and building practical solutions.</p><div class="hero-actions"><a class="primary-btn" href="#projects">Explore my work <span>↗</span></a><a class="text-link" href="#contact">Get in touch <span>↗</span></a></div><div class="hero-meta"><div><strong>IT</strong><span>Education</span></div><div><strong>OIC</strong><span>Integration projects</span></div><div><strong>HCM</strong><span>Enterprise systems</span></div></div></div><div class="hero-visual"><div class="visual-label">SYSTEM STATUS <span>● ONLINE</span></div><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><div class="orbit orbit-three"></div><div class="core"><span>CONNECT</span><b>↗</b><span>BUILD · SOLVE</span></div><div class="floating-card fc-one"><span class="tiny-dot"></span><span>API connected</span><span class="check">✓</span></div><div class="floating-card fc-two"><span class="tiny-dot blue"></span><span>Data validated</span><span class="check">✓</span></div><div class="visual-bottom">01 / LOGIC & HUMAN-CENTERED TECH</div></div></section>
<section class="ticker" aria-label="Areas of focus"><div class="ticker-inner">APPLICATION SUPPORT <span>✳</span> ORACLE INTEGRATION CLOUD <span>✳</span> ENTERPRISE SYSTEMS <span>✳</span> PYTHON & SQL <span>✳</span> PROBLEM SOLVING <span>✳</span></div></section>
<section id="about" class="section about wrap"><div class="section-heading"><div class="kicker"><span>01</span> / ABOUT ME</div><h2>Curious by nature.<br/><em>Technical by practice.</em></h2></div><div class="about-body"><p class="lead">I like the space where <strong>people, technology, and problem-solving</strong> meet.</p><p>My background in Information Technology introduced me to software development, databases, networking, and systems support. More recently, I've been building hands-on experience with Oracle Integration Cloud and Oracle Fusion HCM concepts.</p><p>I'm especially interested in roles where I can investigate issues, support users, understand business workflows, and help applications communicate reliably.</p><div class="about-note"><span class="note-icon">✳</span><span>Currently exploring opportunities in <strong>Application Support, IT Support, and Enterprise Application Integrations.</strong></span></div></div></section>
<section id="projects" class="section projects-section"><div class="wrap"><div class="section-heading project-heading"><div><div class="kicker"><span>02</span> / SELECTED WORK</div><h2>Proof of <em>practice.</em></h2></div><p>A collection of practical builds, integrations, and technical problem-solving projects.</p></div><div class="project-grid">${projects.map(projectMarkup).join('')}</div></div></section>
<section id="skills" class="section skills-section wrap"><div class="section-heading"><div class="kicker"><span>03</span> / TOOLKIT</div><h2>What I bring <em>to the table.</em></h2></div><div class="skills-grid">${skills.map((s,i)=>`<div class="skill-group"><div class="skill-head"><span>0${i+1}</span><h3>${safe(s.title)}</h3><span>↗</span></div><ul>${s.items.map(item=>`<li>${safe(item)}</li>`).join('')}</ul></div>`).join('')}</div><div class="learning-strip"><span class="status-dot"></span><strong>ALWAYS LEARNING</strong><p>Continuously practicing integration patterns, reporting, security, troubleshooting, and enterprise workflows.</p></div></section>
<section id="contact" class="contact-section"><div class="wrap contact-inner"><div class="kicker"><span>04</span> / LET'S TALK</div><h2>Have an opportunity?<br/><em>Let's connect.</em></h2><p>I'm looking for a chance to contribute, learn, and grow on a technical team.</p><a class="contact-email" href="mailto:${safe(profile.email)}">${safe(profile.email)} <span>↗</span></a><div class="contact-links">${ext(profile.linkedin,'LinkedIn')}${ext(profile.github,'GitHub')}${profile.resume ? `<a href="${safe(profile.resume)}" target="_blank" rel="noopener noreferrer">Résumé ↗</a>` : ''}<span>${safe(profile.location)}</span></div></div></section>
</main><footer class="footer"><div class="wrap footer-inner"><span>© ${new Date().getFullYear()} ${safe(profile.name)}</span><span>Designed with intention. Built to connect.</span><a href="#top">BACK TO TOP ↑</a></div></footer>`;

document.querySelectorAll('.project-toggle').forEach(button => {button.addEventListener('click', () => {const details = document.getElementById(button.getAttribute('aria-controls')); const isOpen = button.getAttribute('aria-expanded') === 'true';button.setAttribute('aria-expanded', String(!isOpen));details.hidden = isOpen; button.innerHTML = isOpen ? 'Explore project <span aria-hidden="true">↗</span>' : 'Close details <span aria-hidden="true">−</span>';});});
const menu = document.querySelector('.menu-btn'); menu.addEventListener('click', () => {const nav = document.querySelector('.nav nav'); const open = nav.classList.toggle('open');menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');}); document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.nav nav').classList.remove('open');menu.setAttribute('aria-expanded','false');}));
