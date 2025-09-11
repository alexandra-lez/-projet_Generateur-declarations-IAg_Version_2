// DATA | Version 3, Alexandra Lez & Gemini, 11 septembre 2025
const studentTasksData = {
    "NIVEAU 1 : Utilisation limitée": { domains: { "Domaine disciplinaire": ["Trouver inspiration", "Générer des idées", "Explorer un sujet pour mieux le comprendre", "Générer du matériel pour son étude"], "Domaine des langues": ["Identifier ses erreurs et se les faire expliquer", "Reformuler un texte", "Générer un plan pour aider à structurer un texte", "Traduire un texte"]}},
    "NIVEAU 2 : Utilisation guidée": { domains: { "": ["Analyser des contenus", "Obtenir une rétroaction", "Évaluer la qualité de son travail à partir de critères", "Demander à être confronté relativement à ses idées, à sa démarche", "Diriger les processus de résolution de problèmes"]}},
    "NIVEAU 3 : Utilisation balisée": { domains: { "": ["Résumer un texte", "Générer un texte", "Réaliser des calculs mathématiques", "Produire du code informatique", "Résoudre des problèmes complexes", "Répondre à une question", "Générer des images, ou contenus multimédias"]}},
    "NIVEAU 4 : Utilisation libre": { domains: { "": [] }}
};
const teacherTasksData = {
    "Planification et conception": ["Générer des plans de cours", "Créer des exemples ou études de cas", "Concevoir des activités pédagogiques", "Explorer de nouvelles approches pédagogiques"],
    "Création de matériel de cours": ["Rédiger des notes de cours ou synthèses", "Créer des diapositives de présentation", "Générer du contenu pour supports visuels", "Créer des scénarios ou des simulations"],
    "Évaluation des apprentissages": ["Rédiger des questions pour examen", "Élaborer des grilles critériées pour évaluation", "Générer des exemples de réponses (bonnes et mauvaises)"],
    "Soutien aux étudiants et différenciation": ["Créer des exercices de pratique supplémentaires", "Adapter du matériel pour différents niveaux de compétence", "Générer des explications alternatives pour des concepts difficiles"],
    "Communication et tâches administratives": ["Rédaction de messages pour des forums et des courriels", "Assister à la formulation de rétroactions", "Synthétiser des articles pour le développement professionnel"]
};
const gaidetTaxonomyData = {
    "Conceptualisation": ["Génération idées", "Définition objectif de recherche", "Formulation des questions et hypothèses de recherche", "Évaluation de la faisabilité et des risques", "Test hypothèse préliminaire"],
    "Revue de littérature": ["Recherche et systématisation de la littérature", "Rédaction de la revue de littérature", "Analyse des tendances du marché ou des environnements des brevets", "Évaluation de la nouveauté de la recherche et identification des lacunes"],
    "Méthodologie": ["Conception de la recherche", "Développement de protocoles expérimentaux ou de recherche", "Sélection des méthodes de recherche"],
    "Développement logiciel et automatisation": ["Génération de code", "Optimisation du code", "Automatisation des processus", "Création algorithmes pour analyse de données"],
    "Gestion des données": ["Collecte de données", "Validation (évaluation de la qualité et de la fiabilité des données)", "Nettoyage des données", "Conservation et organisation des données", "Analyse des données", "Visualisation", "Test de reproductibilité"],
    "Rédaction et édition": ["Génération de texte", "Relecture et édition", "Synthèse de texte", "Formulation des conclusions", "Adaptation du ton émotionnel", "Traduction", "Reformatage"],
    "Revue éthique": ["Analyse des biais et des discriminations potentielles", "Analyse des risques éthiques", "Suivi de la conformité aux normes éthiques", "Suivi de la confidentialité des données"],
    "Supervision": ["Évaluation de la qualité", "Identification des tendances", "Recommandations", "Soutien à la publication"]
};
// Les données `contextualTips` restent les mêmes que dans votre version
const contextualTips = {
    'Usage non spécifié': { title: "Point de vigilance : responsabilité accrue", content: "Pour tout usage non listé, la responsabilité de la justification et du respect de l'intégrité académique vous incombe entièrement. Documentez bien votre processus." },
    'Générer un texte': { title: "Point de vigilance : voix d'auteur", content: "Le texte généré doit être entièrement retravaillé pour refléter votre style, votre voix et votre pensée critique." },
    // ... (tous vos autres conseils ici)
};


// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    ['teacher', 'researcher', 'balises', 'sans-balises'].forEach(p => {
        const container = document.getElementById(`ai-tools-container-${p}`);
        if(container) addAiToolEntry(p, true);
    });

    if(document.getElementById('tasks-section-balises')) buildStudentBalisesTasksHTML();
    if(document.getElementById('tasks-section-teacher')) buildTeacherTasksHTML();
    if(document.getElementById('tasks-section-researcher')) buildResearcherTasksHTML();

    updateAllDropdowns();
});

// --- FONCTIONS DE CONSTRUCTION DE L'INTERFACE (BUILDERS) ---
function buildTasksFromData(container, data, profile) {
    if (!container) return;
    Object.keys(data).forEach(category => {
        const details = document.createElement('details');
        details.className = 'gaidet-category';
        details.open = true;
        const summary = document.createElement('summary');
        summary.innerHTML = `<span>${category}</span>`;
        details.appendChild(summary);
        data[category].forEach(task => details.appendChild(createTaskItem(task, profile)));
        container.appendChild(details);
    });
}

function buildTeacherTasksHTML() { buildTasksFromData(document.getElementById('tasks-section-teacher'), teacherTasksData, 'teacher');}
function buildResearcherTasksHTML() { buildTasksFromData(document.getElementById('tasks-section-researcher'), gaidetTaxonomyData, 'researcher'); }

function buildStudentBalisesTasksHTML() {
    const container = document.getElementById('tasks-section-balises');
    if (!container) return;
    Object.keys(studentTasksData).forEach(level => {
        const details = document.createElement('details');
        details.className = 'level-details';
        details.open = true;
        details.innerHTML = `<summary><span>${level}</span></summary>`;
        if (level === "NIVEAU 4 : Utilisation libre") {
            const level4Container = document.createElement('div');
            details.appendChild(level4Container);
            const addButton = document.createElement('button');
            addButton.onclick = (e) => { e.preventDefault(); addDynamicTask('student', level4Container, 'balises'); };
            addButton.className = 'button-secondary';
            addButton.innerHTML = '<i class="fas fa-plus"></i> Ajouter une utilisation libre';
            details.appendChild(addButton);
        } else {
            Object.keys(studentTasksData[level].domains).forEach(domain => {
                if (domain) {
                   const domainTitle = document.createElement('h3');
                   domainTitle.textContent = domain;
                   details.appendChild(domainTitle);
                }
                studentTasksData[level].domains[domain].forEach(task => details.appendChild(createTaskItem(task, 'balises')));
            });
        }
        container.appendChild(details);
    });
}

function createTaskItem(task, profile) {
    const item = document.createElement('div');
    item.className = 'task-item';
    // Correction de la clé pour correspondre à "Générer un texte"
    const tipKey = task.trim();
    const tip = contextualTips[tipKey] || contextualTips['Usage non spécifié'];

    item.innerHTML = `
        <div class="task-item-content">
            <label><span><input type="checkbox" data-task-name="${task}" onchange="togglePrompt(this)"> ${task}</span><i class="fas fa-info-circle tip-icon" onclick="toggleTip(event)"></i></label>
            <div class="contextual-tip"><h4><i class="fas fa-lightbulb"></i> ${tip.title}</h4><p>${tip.content}</p></div>
            <div class="prompt-container">
                <div class="input-group"><label>IAg utilisée</label><select class="task-tool-selector-${profile}"><option value="">Sélectionner...</option></select></div>
                <div class="input-group"><label>Requête principale</label><input type="text" class="prompt-input" placeholder="Requête..."></div>
            </div>
        </div>`;
    return item;
}

function addDynamicTask(type, container = null, profile) {
    if(!container) container = document.getElementById(`dynamic-tasks-container-${profile}`);
    const item = document.createElement('div');
    item.className = 'dynamic-task-item';
    const placeholder = (type === 'teacher') ? "Par exemple, création d'une vidéo de synthèse..."
                      : (type === 'researcher') ? "Par exemple, transcription d'entrevues..."
                      : "Décrivez l'usage...";
    const tip = contextualTips['Usage non spécifié'];
    item.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <input type="text" class="dynamic-task-description" placeholder="${placeholder}" style="flex-grow: 1;">
            <i class="fas fa-info-circle tip-icon" onclick="toggleTip(event)"></i>
            <button class="button-danger" onclick="this.closest('.dynamic-task-item').remove()"><i class="fas fa-trash"></i></button>
        </div>
        <div class="contextual-tip"><h4><i class="fas fa-lightbulb"></i> ${tip.title}</h4><p>${tip.content}</p></div>
        <div class="input-group"><label>IAg utilisée</label><select class="task-tool-selector-${profile}"><option value="">Sélectionner...</option></select></div>
        <div class="input-group"><label>Requête principale</label><input type="text" class="prompt-input" placeholder="Requête..."></div>`;
    container.appendChild(item);
    updateAllDropdowns();
}

// --- LOGIQUE DE L'INTERFACE ---
function toggleTip(event) {
    const parent = event.target.closest('.task-item-content, .dynamic-task-item');
    const tipElement = parent.querySelector('.contextual-tip');
    tipElement.style.display = (tipElement.style.display === 'block') ? 'none' : 'block';
}

function togglePrompt(checkbox) {
    const promptContainer = checkbox.closest('.task-item-content').querySelector('.prompt-container');
    promptContainer.style.display = checkbox.checked ? 'block' : 'none';
}

function addAiToolEntry(profile, isFirst = false) {
    const container = document.getElementById(`ai-tools-container-${profile}`);
    const entry = document.createElement('div');
    entry.className = 'ai-tool-entry';
    entry.innerHTML = `<div class="grid-inputs">
        <div class="input-group"><label>Nom (et version)</label><input type="text" class="ai-name" placeholder="Ex: ChatGPT (GPT-4)" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>Entité créatrice</label><input type="text" class="ai-creator" placeholder="Ex: OpenAI" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>Année</label><input type="text" class="ai-date" placeholder="Ex: 2025" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>URL</label><input type="text" class="ai-url" placeholder="Ex: https://chatgpt.com/" oninput="updateAllDropdowns()"></div>
    </div>`;
    if (!isFirst) {
        const removeBtn = document.createElement('button');
        removeBtn.innerHTML = '<i class="fas fa-times"></i> Supprimer';
        removeBtn.className = 'button-danger';
        removeBtn.style.cssText = 'position:absolute; top:1rem; right:1rem;';
        removeBtn.onclick = () => { entry.remove(); updateAllDropdowns(); };
        entry.appendChild(removeBtn);
    }
    container.appendChild(entry);
}

function updateAllDropdowns() {
    ['teacher', 'researcher', 'balises', 'sans-balises'].forEach(p => {
        if(document.getElementById(`ai-tools-container-${p}`)){
            updateTaskToolDropdowns(p)
        }
    });
}

function updateTaskToolDropdowns(profile) {
    const tools = Array.from(document.querySelectorAll(`#ai-tools-container-${profile} .ai-name`)).map(i => i.value.trim()).filter(Boolean);
    document.querySelectorAll(`.task-tool-selector-${profile}`).forEach(selector => {
        const selectedValue = selector.value;
        selector.innerHTML = '<option value="">Sélectionner...</option>';
        tools.forEach(tool => selector.innerHTML += `<option value="${tool}">${tool}</option>`);
        if (tools.includes(selectedValue)) selector.value = selectedValue;
    });
}

function checkChecklistCompletion(profile) {
    const allChecked = Array.from(document.querySelectorAll(`#self-assessment-checklist-${profile} input`)).every(cb => cb.checked);
    document.getElementById(`generate-btn-${profile}`).disabled = !allChecked;
}

function copyToClipboard(elementId, button) {
    const textarea = document.getElementById(elementId);
    textarea.select();
    document.execCommand('copy');
    button.textContent = 'Copié !';
    setTimeout(() => { button.textContent = 'Copier'; }, 2000);
}

// --- LOGIQUE DE GÉNÉRATION DE TEXTE ---

// Fonction principale appelée par le bouton "Générer"
function generateOutputs(profile) {
    // On s'assure que les éléments de sortie existent pour éviter les erreurs
    const outputElement = document.getElementById(`output-${profile}`);
    const biblioElement = document.getElementById(`bibliography-output-${profile}`);
    if (!outputElement || !biblioElement) {
        console.error(`Les éléments de sortie pour le profil '${profile}' sont introuvables.`);
        return;
    }

    let declarationText = '';
    switch (profile) {
        case 'teacher':
            declarationText = generateTeacherDeclaration();
            break;
        case 'researcher':
            declarationText = generateResearcherDeclaration();
            break;
        case 'balises':
            declarationText = generateStudentBalisesDeclaration();
            break;
        case 'sans-balises':
            declarationText = generateStudentSansBalisesDeclaration();
            break;
        default:
            console.error(`Profil inconnu: ${profile}`);
            return;
    }
    
    outputElement.value = declarationText;
    biblioElement.value = generateBibliographyText(profile);
}


function generateBibliographyText(profile) {
    const entries = document.querySelectorAll(`#ai-tools-container-${profile} .ai-tool-entry`);
    let biblioText = Array.from(entries).map(entry => {
        const creator = entry.querySelector(".ai-creator").value.trim() || "[Entité]";
        const date = entry.querySelector(".ai-date").value.trim() || "[Année]";
        const name = entry.querySelector(".ai-name").value.trim() || "[Outil]";
        const url = entry.querySelector(".ai-url").value.trim() || "[URL]";
        if (name) {
            return `${creator}. (${date}). *${name}* [Grand modèle de langage]. ${url}`;
        }
        return null;
    }).filter(Boolean).join('\n');
    
    return biblioText;
}

function getCommonHeaderText(profile) {
    const llmList = Array.from(document.querySelectorAll(`#ai-tools-container-${profile} .ai-name`))
        .map(i => i.value.trim()).filter(Boolean).join(', ') || "[non spécifié]";

    if (profile === 'teacher') {
        const teacherName = document.getElementById(`teacher-name-teacher`).value.trim() || "[non spécifié]";
        const courseTitle = document.getElementById(`course-title-teacher`).value.trim() || "[non spécifié]";
        const sessionDate = document.getElementById(`session-date-teacher`).value.trim() || "[non spécifiée]";
        return `DÉCLARATION D'USAGE DE L'IAg DANS L'ENSEIGNEMENT\n================================================\n\nPersonne enseignante: ${teacherName}\nCours: ${courseTitle}\nSession: ${sessionDate}\n\nOUTILS D'IAG UTILISÉS: ${llmList}\n\n`;
    } else if (profile === 'researcher') {
        const researcherName = document.getElementById(`researcher-name-researcher`).value.trim() || "[non spécifié]";
        const projectTitle = document.getElementById(`project-title-researcher`).value.trim() || "[non spécifié]";
        const date = document.getElementById(`date-researcher`).value.trim() || "[non spécifiée]";
        return `DÉCLARATION D'USAGE DE L'IAg EN RECHERCHE\n==========================================\n\nChercheur/Chercheuse: ${researcherName}\nProjet/Article: ${projectTitle}\nDate: ${date}\n\nOUTILS D'IAG UTILISÉS: ${llmList}\n\n`;
    } else {
        const teacherName = document.getElementById(`teacher-name-${profile}`).value.trim() || "[non spécifié]";
        const courseTitle = document.getElementById(`course-title-${profile}`).value.trim() || "[non spécifié]";
        const sessionDate = document.getElementById(`session-date-${profile}`).value.trim() || "[non spécifiée]";
        const studentName = document.getElementById(`student-name-${profile}`).value.trim() || "[non spécifié(e)]";
        const productionTitle = document.getElementById(`production-title-${profile}`).value.trim() || "[non spécifiée]";
        return `DÉCLARATION D'UTILISATION D'IAg\n==================================\n\nCours: ${courseTitle}\nPersonne enseignante: ${teacherName}\nSession, date: ${sessionDate}\nPersonne étudiante: ${studentName}\nProduction: "${productionTitle}"\n\nOUTILS D'IAG UTILISÉS: ${llmList}\n\n`;
    }
}

function getReflectionText(profile) {
    const reflectionProcess = document.getElementById(`reflection-process-${profile}`).value.trim();
    const reflectionLimitsElem = document.getElementById(`reflection-limits-${profile}`);
    const reflectionLimits = reflectionLimitsElem ? reflectionLimitsElem.value.trim() : "";
    const reflectionSkillElem = document.getElementById(`reflection-skill-${profile}`);
    const reflectionSkill = reflectionSkillElem ? reflectionSkillElem.value.trim() : "";

    if (!reflectionProcess && !reflectionLimits && !reflectionSkill) return "";

    let text = `\nRÉFLEXION SUR LA DÉMARCHE (FACULTATIVE)\n----------------------------------------\n`;
    if (reflectionProcess) text += `Apports de l'IAg au processus:\n${reflectionProcess}\n\n`;
    if (reflectionLimits) text += `Limites identifiées et processus de validation:\n${reflectionLimits}\n\n`;
    if (reflectionSkill) text += `Modélisation d'une pratique éthique:\n${reflectionSkill}\n\n`;
    return text;
}

function getIntegrityText(profile) {
    const roleText = (profile === 'teacher') ? `l'enseignant(e)`
                   : (profile === 'researcher') ? `le chercheur ou la chercheuse`
                   : `l'étudiant(e)`;
    const confirmationText = (profile === 'teacher' || profile === 'researcher') 
                           ? `confirme avoir respecté sa checklist d'intégrité.`
                           : `confirme avoir respecté sa checklist d'intégrité et assume l'entière responsabilité du contenu final.`;
    
    return `\nENGAGEMENT D'INTÉGRITÉ\n----------------------\nEn générant cette déclaration, ${roleText} ${confirmationText}`;
}

// **CORRECTION MAJEURE**: Cette fonction a été refactorisée pour être plus simple et réutilisable.
function getTasksText(profile, containerId, title) {
    const tasksByCategory = {};
    
    // Collecter les tâches prédéfinies cochées
    document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`).forEach(cb => {
        const categoryElement = cb.closest('details')?.querySelector('summary > span');
        if (!categoryElement) return; // Sécurité si la structure est inattendue

        const category = categoryElement.textContent;
        const taskLabel = cb.dataset.taskName;
        const tool = cb.closest('.task-item-content').querySelector(`.task-tool-selector-${profile}`).value.trim();
        const prompt = cb.closest('.task-item-content').querySelector('.prompt-input').value.trim();

        if (!tasksByCategory[category]) tasksByCategory[category] = [];
        tasksByCategory[category].push({taskLabel, tool, prompt});
    });

    // Construire le texte
    let body = "";
    if (Object.keys(tasksByCategory).length > 0) {
        if(title) body += `\n${title.toUpperCase()}\n${'-'.repeat(title.length)}\n`;
        Object.keys(tasksByCategory).forEach(category => {
            body += `\n**${category}**\n`;
            tasksByCategory[category].forEach(t => {
                body += `- ${t.taskLabel}`;
                if (t.tool) body += ` (IAg: ${t.tool})`;
                if (t.prompt) body += `\n  Requête: "${t.prompt}"`;
                body += `\n`;
            });
        });
    }
    return body;
}


function getDynamicTasksText(profile, containerId, title) {
    const tasks = [];
    document.querySelectorAll(`#${containerId} .dynamic-task-item`).forEach(item => {
        const taskLabel = item.querySelector('.dynamic-task-description').value.trim();
        if (!taskLabel) return;
        const tool = item.querySelector(`.task-tool-selector-${profile}`).value.trim();
        const prompt = item.querySelector('.prompt-input').value.trim();
        tasks.push({taskLabel, tool, prompt});
    });

    let body = "";
    if (tasks.length > 0) {
        body += `\n**${title}**\n`;
        tasks.forEach(t => {
            body += `- ${t.taskLabel}`;
            if (t.tool) body += ` (IAg: ${t.tool})`;
            if (t.prompt) body += `\n  Requête: "${t.prompt}"`;
            body += `\n`;
        });
    }
    return body;
}


function generateStudentBalisesDeclaration() {
    const profile = 'balises';
    let header = getCommonHeaderText(profile);
    let body = `DÉTAIL DES USAGES DÉCLARÉS\n--------------------------\n`;
    
    const tasksText = getTasksText(profile, 'tasks-section-balises', ''); // On utilise la nouvelle fonction
    const dynamicTasksText = getDynamicTasksText(profile, 'tasks-section-balises', 'NIVEAU 4 : Utilisation libre');

    if (!tasksText.trim() && !dynamicTasksText.trim()) {
        body += "Aucune tâche spécifique n'a été déclarée.\n";
    } else {
        body += tasksText;
        body += dynamicTasksText.replace('**NIVEAU 4 : Utilisation libre**', '\n**NIVEAU 4 : Utilisation libre**'); // Assure un formatage propre
    }
    
    return header + body + getReflectionText(profile) + getIntegrityText(profile);
}

function generateStudentSansBalisesDeclaration() {
    const profile = 'sans-balises';
    let header = getCommonHeaderText(profile);
    let body = "DÉTAIL DES USAGES DÉCLARÉS\n--------------------------\n";
    let dynamicBody = getDynamicTasksText(profile, 'dynamic-tasks-container-sans-balises', 'Usages');
    
    if(dynamicBody.trim()){
        body += dynamicBody;
    } else {
        body += "Aucun usage spécifique n'a été déclaré.\n";
    }
    return header + body + getReflectionText(profile) + getIntegrityText(profile);
}

function generateTeacherDeclaration() {
    const profile = 'teacher';
    let header = getCommonHeaderText(profile);
    
    // Cadre d'utilisation (plus robuste)
    const policyLevelInput = document.querySelector('#teacher-policy-choice input[name="student-level"]:checked');
    const policyLevel = policyLevelInput ? policyLevelInput.value : null;
    let policyText = `\nCADRE D'UTILISATION POUR LES ÉTUDIANT(E)S\n---------------------------------------------\n`;
    policyText += policyLevel
        ? `Le niveau d'utilisation de l'IAg autorisé dans ce cours est le **Niveau ${policyLevel}**. Se référer au plan de cours pour les détails.\n\n`
        : `Le cadre d'utilisation de l'IAg pour les étudiant(e)s n'a pas été spécifié via cet outil.\n\n`;

    // Usages
    const predefinedBody = getTasksText(profile, 'tasks-section-teacher', "Usages pédagogiques déclarés");
    const dynamicBody = getDynamicTasksText(profile, 'dynamic-tasks-container-teacher', "Autres usages (spécifiés par l'enseignant)");
    
    let body = "";
    if (!predefinedBody.trim() && !dynamicBody.trim()) {
        body = "Aucun usage spécifique n'a été déclaré.\n";
    } else {
        body = predefinedBody + dynamicBody;
    }
    
    return header + policyText + body + getReflectionText(profile) + getIntegrityText(profile);
}

function generateResearcherDeclaration() {
    const profile = 'researcher';
    let header = getCommonHeaderText(profile);

    const predefinedBody = getTasksText(profile, 'tasks-section-researcher', "Usages en recherche déclarés (selon la taxonomie GAIDeT)");
    const dynamicBody = getDynamicTasksText(profile, 'dynamic-tasks-container-researcher', "Autres usages (spécifiés par le chercheur)");

    let body = "";
    if (!predefinedBody.trim() && !dynamicBody.trim()) {
        body = "Aucun usage spécifique n'a été déclaré.\n";
    } else {
        body = predefinedBody + dynamicBody;
    }

    return header + body + getReflectionText(profile) + getIntegrityText(profile);
}
