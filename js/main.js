const translations = {
  en: {
    "nav.projects":"projects", "nav.about":"about", "nav.experience":"experience", "nav.contact":"contact",
    "hero.status":"Looking for an internship or first job",
    "hero.role":"Backend and data developer",
    "hero.lead":"I study Information and Communication Technology at UFSC and graduate in 2026. I like projects that go from the database all the way to deployment, like ChronosBot, an AI tutor that's live.",
    "hero.cta1":"See projects", "hero.cta2":"Send an email",
    "about.alt":"Photo of Karolini R. Pedrozo",
    "projects.h2":"Projects",
    "projects.p":"What I've built over the last few years, almost all of it from scratch.",
    "projects.site":"Open site", "projects.code":"Code", "projects.live":"live",
    "projects.chronos.kicker":"Main project",
    "projects.chronos.desc":"An AI tutor for History and Geography. Teachers build a knowledge base for each class and students ask questions; Gemini answers using RAG over that material.",
    "projects.chronos.h1":"Embeddings generated in parallel with ThreadPoolExecutor (5 workers).",
    "projects.chronos.h2":"Database on Neon, API on Render, frontend on Vercel.",
    "projects.cyphers.desc":"Collects and analyzes match data from the Riot Games API. .NET backend with Clean Architecture and a React frontend.",
    "projects.agenda.desc":"Step-by-step booking for public health units, built around accessibility and available in Portuguese, English and Spanish.",
    "projects.agenda.tag":"Accessibility",
    "projects.gta.desc":"Python scripts that collect telemetry data, clean it with Pandas and plot it. There's a mirror version that runs without calling the API.",
    "about.h2":"About",
    "about.p1":"I started the ICT degree at UFSC in 2023. Since then I've worked at the university's IT department and at Rexlab, and I'm now at LabTec.",
    "about.p2":"Before tech I worked with children, at a municipal department and in retail. I also do graphic design and digital marketing, which helps a lot when I have to build an interface from scratch. I speak Portuguese and intermediate English.",
    "tools.data":"Data and AI", "tools.infra":"Infra and support",
    "tools.infra.v":"Networking · technical support · Git · Render · Vercel · Neon",
    "exp.h2":"Experience",
    "exp.labtec.date":"2026 – now",
    "exp.labtec.title":'Research fellow · <a href="https://labtec.ufsc.br/" target="_blank" rel="noopener">LabTec/UFSC</a>',
    "exp.labtec.desc":'3D modeling in Blender for <a href="https://holoanapath.ufsc.br/" target="_blank" rel="noopener">HoloAnaPath</a>, a UFSC digital pathology project.',
    "exp.ti.title":'IT intern · <a href="https://sti.ararangua.ufsc.br/" target="_blank" rel="noopener">UFSC Araranguá</a>',
    "exp.ti.desc":"Handled hardware, software and network tickets, kept the equipment inventory, and automated software installs across several departments.",
    "exp.rexlab.title":'Research fellow · <a href="https://rexlab.ufsc.br/" target="_blank" rel="noopener">Rexlab</a>',
    "exp.rexlab.desc":"Supported the remote experimentation systems used by students and researchers, and did statistical analysis and charts for the lab.",
    "exp.caic.title":"Child development assistant · CAIC Jardim das Avenidas",
    "exp.caic.desc":"Ran cognitive and motor development activities with the kids; a lot of the job was communication and settling conflicts.",
    "exp.cultura.title":'Intern · <a href="https://ararangua.sc.gov.br/secretaria-de-educacao-cultura-e-esportes-departamento-de-cultura/" target="_blank" rel="noopener">Araranguá Department of Culture</a>',
    "exp.cultura.desc":"Organized the department's administrative information and kept its records up to date in the system.",
    "exp.fort.title":"Stock assistant · Fort Atacadista",
    "exp.fort.desc":"Restocked and organized inventory, checking dates and display standards.",
    "edu.h2":"Education",
    "edu.grad.title":"BSc in ICT, UFSC", "edu.grad.meta":"Araranguá campus",
    "edu.dados.title":"Data Engineering with AI immersion",
    "edu.backend.title":"Back-End Dev immersion",
    "edu.meta":"Alura · 4 h · certificate",
    "contact.kicker":"Got a job opening or a project?",
    "contact.where":"Araranguá, Brazil",
    "footer.top":"Back to top"
  }
};

const originalPt = {};
document.querySelectorAll('[data-i18n]').forEach(el=>{ originalPt[el.getAttribute('data-i18n')] = el.innerHTML; });
document.querySelectorAll('[data-i18n-alt]').forEach(el=>{ originalPt[el.getAttribute('data-i18n-alt')] = el.alt; });

function setLang(lang){
  document.getElementById('htmlRoot').lang = lang === 'en' ? 'en' : 'pt-BR';
  document.getElementById('btnPt').setAttribute('aria-pressed', String(lang==='pt'));
  document.getElementById('btnEn').setAttribute('aria-pressed', String(lang==='en'));
  const pick = key => lang === 'pt' ? originalPt[key] : translations.en[key];
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const v = pick(el.getAttribute('data-i18n')); if(v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el=>{
    const v = pick(el.getAttribute('data-i18n-alt')); if(v !== undefined) el.alt = v;
  });
}

document.getElementById('btnPt').addEventListener('click', ()=>setLang('pt'));
document.getElementById('btnEn').addEventListener('click', ()=>setLang('en'));
