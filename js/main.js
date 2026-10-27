const translations = {
  en: {
    "nav.about":"about", "nav.projects":"projects", "nav.experience":"experience", "nav.contact":"contact",
    "intro.role":"Backend and data · Araranguá, Brazil",
    "intro.lead":'I study Information and Communication Technology at UFSC and graduate in 2026. I\'ve worked in IT support, networking and data management, and backend and data is where I want to go next. My main side project is <a href="https://chronos-bot-5vhx.vercel.app/" target="_blank" rel="noopener">ChronosBot</a>, an AI tutoring platform.',
    "intro.status":"I'm looking for an internship or first job in software development, IT support or data.",
    "about.h2":"About",
    "about.p1":"I started the ICT degree at UFSC in 2023, on the Araranguá campus. Since then I've interned at the university's IT department, held a research fellowship at Rexlab, where I supported the remote experimentation systems and did data analysis, and I'm now a fellow at LabTec.",
    "about.p2":"Before tech I worked with children, at a municipal department and in retail. I also do graphic design and digital marketing, which comes in handy when I have to build an interface from scratch.",
    "about.p3":"I speak Portuguese and intermediate English.",
    "about.alt":"Photo of Karolini R. Pedrozo",
    "tools.h2":"Tools",
    "tools.data":"Data and AI", "tools.data.v":"PostgreSQL with pgvector, ChromaDB, Gemini API, RAG",
    "tools.infra":"Infra and support", "tools.infra.v":"Technical support, networking, Git, Render, Vercel, Neon",
    "projects.h2":"Projects", "projects.live":"live", "projects.code":"code",
    "projects.chronos.desc":"An AI tutor for History and Geography. Teachers build a knowledge base for each class and students ask questions; Gemini answers using RAG over that material.",
    "projects.chronos.h1":"Embeddings and answers through the Gemini API.",
    "projects.chronos.h2":"Embeddings generated in parallel with ThreadPoolExecutor (5 workers).",
    "projects.chronos.h3":"Database on Neon, API on Render, frontend on Vercel.",
    "projects.cyphers.desc":"Collects and analyzes match data from the Riot Games API.",
    "projects.cyphers.h1":".NET/C# backend with Clean Architecture and async REST endpoints.",
    "projects.cyphers.h2":"React and TypeScript frontend with global state.",
    "projects.cyphers.h3":"Relational modeling and query tuning in PostgreSQL.",
    "projects.gta.desc":"Python scripts that collect telemetry data, clean it with Pandas and plot it. There's a mirror repository that runs without calling the API, to compare both architectures.",
    "projects.agenda.desc":"A scheduling page designed around accessibility, available in more than one language.",
    "exp.h2":"Experience",
    "exp.labtec.date":"2026 – now",
    "exp.labtec.title":'Research fellow <span class="org">· <a href="https://labtec.ufsc.br/" target="_blank" rel="noopener">LabTec/UFSC</a></span>',
    "exp.labtec.desc":'3D modeling in Blender for <a href="https://holoanapath.ufsc.br/" target="_blank" rel="noopener">HoloAnaPath</a>, a UFSC digital pathology project.',
    "exp.ti.title":'IT intern <span class="org">· <a href="https://sti.ararangua.ufsc.br/" target="_blank" rel="noopener">UFSC Araranguá</a></span>',
    "exp.ti.desc":"Handled hardware, software and network tickets, kept the equipment inventory, and automated software installs across several departments.",
    "exp.rexlab.title":'Research fellow <span class="org">· <a href="https://rexlab.ufsc.br/" target="_blank" rel="noopener">Rexlab</a>, Remote Experimentation Lab</span>',
    "exp.rexlab.desc":"Supported the remote experimentation systems used by students and researchers, and did statistical analysis and charts for the lab.",
    "exp.caic.title":'Child development assistant <span class="org">· CAIC Jardim das Avenidas</span>',
    "exp.caic.desc":"Ran cognitive and motor development activities with the kids; a lot of the job was communication and settling conflicts.",
    "exp.cultura.title":'Intern <span class="org">· <a href="https://ararangua.sc.gov.br/secretaria-de-educacao-cultura-e-esportes-departamento-de-cultura/" target="_blank" rel="noopener">Araranguá Department of Culture</a></span>',
    "exp.cultura.desc":"Organized the department's administrative information and kept its records up to date in the system.",
    "exp.fort.title":'Stock assistant <span class="org">· Fort Atacadista</span>',
    "exp.fort.desc":"Restocked and organized inventory, checking dates and display standards.",
    "edu.h2":"Education",
    "edu.grad.title":'BSc in ICT <span class="org">· <a href="https://tic.ufsc.br/" target="_blank" rel="noopener">UFSC</a>, Araranguá campus</span>',
    "edu.dados.title":'Data Engineering with AI immersion <span class="org">· Alura, 4 h</span>',
    "edu.backend.title":'Back-End Dev immersion <span class="org">· Alura, 4 h</span>',
    "edu.cert":"certificate",
    "contact.h2":"Contact",
    "contact.p":"Email is the fastest way to reach me.",
    "contact.where":"Where", "contact.where.v":"Araranguá, Brazil"
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
