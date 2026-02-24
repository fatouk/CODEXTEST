const modules = [
  { title: 'Communication professionnelle', progress: 72, coach: 'Coach: Nadia' },
  { title: 'Méthodes agiles pour débutants', progress: 58, coach: 'Coach: Marc' },
  { title: 'Initiation UX/UI', progress: 91, coach: 'Coach: Inès' }
];

const moduleList = document.getElementById('moduleList');
const moduleCounter = document.getElementById('moduleCounter');
const themeToggle = document.getElementById('themeToggle');

function renderModules() {
  moduleList.innerHTML = '';

  modules.forEach((module) => {
    const item = document.createElement('article');
    item.className = 'module-item';
    item.innerHTML = `
      <div>
        <strong>${module.title}</strong>
        <p>${module.coach}</p>
      </div>
      <div>
        <div class="progress" aria-label="Progression de ${module.title}">
          <span style="width: ${module.progress}%"></span>
        </div>
        <small>${module.progress}%</small>
      </div>
    `;
    moduleList.appendChild(item);
  });

  moduleCounter.textContent = `${modules.length} modules`;
}

function setupThemeToggle() {
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');
    themeToggle.textContent = isDark ? 'Mode clair' : 'Mode sombre';
  });
}

renderModules();
setupThemeToggle();
