// DATA
const studentTasksData = {
  "NIVEAU 1 : Utilisation limitée": { domains: { "Domaine disciplinaire": ["S'inspirer", "Générer des idées", "Explorer un sujet pour mieux le comprendre", "Générer du matériel pour son étude"], "Domaine des langues": ["Identifier ses erreurs et se les faire expliquer", "Reformuler un texte", "Générer un plan pour aider à structurer un texte", "Traduire un texte"]}},
  "NIVEAU 2 : Utilisation guidée": { domains: { "": ["Analyser des contenus", "Obtenir une rétroaction", "Évaluer la qualité de son travail à partir de critères", "Demander à être confronté relativement à ses idées, à sa démarche", "Diriger les processus de résolution de problèmes"]}},
  "NIVEAU 3 : Utilisation balisée": { domains: { "": ["Résumer ou rédiger des parties d'un texte", "Générer un texte ou un modèle d'une production et l'adapter", "Réaliser des calculs mathématiques", "Produire du code informatique", "Résoudre des problèmes complexes", "Répondre à une question", "Générer des images, ou contenus multimédias"]}},
  "NIVEAU 4 : Utilisation libre": { domains: { "": [] }}
};
const teacherTasksData = {
    "Planification et Conception": ["Générer des plans de cours", "Créer des exemples ou études de cas", "Concevoir des activités d'apprentissage", "Explorer de nouvelles approches pédagogiques"],
    "Création de matériel de cours": ["Rédiger des notes de cours ou synthèses", "Créer des diapositives de présentation", "Générer du contenu pour supports visuels", "Créer des scénarios ou des simulations"],
    "Évaluation des apprentissages": ["Rédiger des questions d'examen", "Élaborer des grilles d'évaluation", "Générer des exemples de réponses (bonnes et mauvaises)"],
    "Soutien aux étudiants et différenciation": ["Créer des exercices de pratique supplémentaires", "Adapter du matériel pour différents niveaux de compétence", "Générer des explications alternatives pour des concepts difficiles"],
    "Communication et Tâches administratives": ["Rédiger des annonces ou courriels", "Assister à la formulation de rétroactions", "Synthétiser des articles pour le développement professionnel"]
};
const gaidetTaxonomyData = {
    "Conceptualisation": ["Génération d'idées", "Définition de l'objectif de recherche", "Formulation des questions et hypothèses de recherche", "Évaluation de la faisabilité et des risques", "Test d'hypothèse préliminaire"],
    "Revue de littérature": ["Recherche et systématisation de la littérature", "Rédaction de la revue de littérature", "Analyse des tendances du marché et/ou de l'environnement des brevets", "Évaluation de la nouveauté de la recherche et identification des lacunes"],
    "Méthodologie": ["Conception de la recherche", "Développement de protocoles expérimentaux ou de recherche", "Sélection des méthodes de recherche"],
    "Développement logiciel et automatisation": ["Génération de code", "Optimisation du code", "Automatisation des processus", "Création d'algorithmes pour l'analyse de données"],
    "Gestion des données": ["Collecte de données", "Validation (évaluation de la qualité et de la fiabilité des données)", "Nettoyage des données", "Conservation et organisation des données", "Analyse des données", "Visualisation", "Test de reproductibilité"],
    "Rédaction et édition": ["Génération de texte", "Relecture et édition", "Synthèse de texte", "Formulation des conclusions", "Adaptation du ton émotionnel", "Traduction", "Reformatage"],
    "Revue éthique": ["Analyse des biais et des discriminations potentielles", "Analyse des risques éthiques", "Suivi de la conformité aux normes éthiques", "Suivi de la confidentialité des données"],
    "Supervision": ["Évaluation de la qualité", "Identification des tendances", "Recommandations", "Soutien à la publication"]
};
const contextualTips = {
    // General
    'Usage non spécifié': { title: "Vigilance : Responsabilité accrue", content: "Pour tout usage non listé, la responsabilité de la justification et du respect de l'intégrité académique vous incombe entièrement. Documentez bien votre processus." },
    
    // Teacher
    'Générer des plans de cours': { title: "Bonne pratique", content: "Utilisez l'IA pour générer une structure de base, mais personnalisez-la en y intégrant votre expertise, le contexte de votre cours et les besoins spécifiques de vos étudiants." },
    'Créer des exemples ou études de cas': { title: "Vigilance : Authenticité", content: "Les exemples générés peuvent être génériques. Adaptez-les pour qu'ils soient authentiques et pertinents pour le champ disciplinaire et le vécu de vos étudiants." },
    'Concevoir des activités d\'apprentissage': { title: "Bonne pratique : Alignement pédagogique", content: "Assurez-vous que chaque activité suggérée par l'IA est directement alignée sur un objectif d'apprentissage précis de votre cours." },
    'Rédiger des notes de cours ou synthèses': { title: "Vigilance : Exactitude et profondeur", content: "Validez chaque information factuelle. L'IA peut résumer, mais c'est votre expertise qui ajoute la profondeur et la perspective critique nécessaires." },
    'Créer des diapositives de présentation': { title: "Bonne pratique : Support visuel, pas script", content: "Utilisez l'IA pour structurer vos idées et suggérer des visuels. Le contenu de chaque diapositive doit rester concis et servir de support à votre discours, non le remplacer." },
    'Générer du contenu pour supports visuels': { title: "Vigilance : Pertinence et clarté", content: "Un bon visuel (schéma, infographie) simplifie une idée complexe. Assurez-vous que le résultat est clair, non surchargé, et qu'il illustre fidèlement le concept." },
    'Rédiger des questions d\'examen': { title: "Vigilance : Validité et équité", content: "Vérifiez que les questions évaluent le bon niveau de compétence (mémorisation vs analyse) et ne contiennent pas de biais culturels ou linguistiques." },
    'Élaborer des grilles d\'évaluation': { title: "Bonne pratique : Clarté des critères", content: "Une grille générée par l'IA est un bon point de départ. Affinez les descripteurs de chaque critère pour qu'ils soient clairs, observables et sans ambiguïté pour vous et vos étudiants." },
    'Rédiger des annonces ou courriels': { title: "Vigilance : Ton et personnalisation", content: "Ajustez toujours le ton du message pour qu'il corresponde à votre style de communication habituel. Évitez les formulations trop formelles ou impersonnelles." },
    'Assister à la formulation de rétroactions': { title: "Vigilance : Rétroaction constructive", content: "L'IA peut identifier des erreurs, mais une rétroaction efficace doit être constructive et personnalisée. Assurez-vous que vos commentaires se concentrent sur les prochaines étapes et le développement de l'étudiant." },
    'Explorer de nouvelles approches pédagogiques': { title: "Bonne pratique : Innovation éclairée", content: "Utilisez l'IA comme un partenaire de brainstorming pour découvrir des stratégies pédagogiques. Validez toujours ces approches avec la littérature scientifique et adaptez-les à votre contexte." },
    'Créer des scénarios ou des simulations': { title: "Vigilance : Réalisme et objectifs", content: "Les scénarios doivent être plausibles et directement liés aux objectifs d'apprentissage. Guidez l'IA avec un contexte précis pour éviter les situations caricaturales ou non pertinentes." },
    'Générer des exemples de réponses (bonnes et mauvaises)': { title: "Bonne pratique : Outil didactique", content: "C'est un excellent moyen de montrer concrètement vos attentes. Assurez-vous que les 'mauvaises' réponses illustrent des erreurs communes et constructives." },
    'Créer des exercices de pratique supplémentaires': { title: "Vigilance : Qualité et cohérence", content: "Vérifiez que la difficulté et le format des exercices sont cohérents avec ceux vus en classe. La qualité prime sur la quantité." },
    'Adapter du matériel pour différents niveaux de compétence': { title: "Bonne pratique : Différenciation", content: "Pour différencier efficacement, fournissez à l'IA le texte original et des instructions claires (ex: 'Simplifie ce texte pour un niveau débutant', 'Ajoute des questions de réflexion pour un niveau avancé')." },
    'Générer des explications alternatives pour des concepts difficiles': { title: "Bonne pratique : Flexibilité cognitive", content: "L'IA peut proposer des analogies ou des métaphores variées pour un même concept. C'est un excellent moyen d'aider les étudiants ayant différents styles d'apprentissage." },
    'Synthétiser des articles pour le développement professionnel': { title: "Vigilance : Perte de nuance", content: "Un résumé d'IA est un point de départ. Pour une compréhension profonde, la lecture critique de l'article original reste indispensable, surtout pour évaluer la méthodologie." },
    
    // GAIDET / Researcher
    'Génération d\'idées': { title: "Bonne pratique", content: "Utilisez l'IA pour la divergence (générer beaucoup d'idées), mais gardez le contrôle de la convergence (choisir, critiquer et affiner les meilleures)." },
    'Définition de l\'objectif de recherche': { title: "Vigilance", content: "L'IA peut aider à clarifier un objectif, mais celui-ci doit découler de votre compréhension profonde du domaine et d'une lacune réelle dans les connaissances." },
    'Formulation des questions et hypothèses de recherche': { title: "Bonne pratique", content: "Excellent pour reformuler ou explorer des angles différents. Assurez-vous que l'hypothèse finale est testable, précise et pertinente pour votre projet." },
    'Évaluation de la faisabilité et des risques': { title: "Vigilance", content: "L'IA peut identifier des risques communs, mais ne peut évaluer les contraintes contextuelles (accès aux données, budget, temps). Cette évaluation reste une responsabilité humaine." },
    'Test d\'hypothèse préliminaire': { title: "Bonne pratique", content: "Utile pour des simulations ou des modélisations basées sur des données existantes. Considérez ceci comme une exploration, pas une validation formelle." },
    'Recherche et systématisation de la littérature': { title: "Vigilance : Sources fantômes", content: "Validez chaque référence générée dans des bases de données académiques. L'IA peut 'halluciner' des sources qui n'existent pas." },
    'Rédaction de la revue de littérature': { title: "Vigilance : Plagiat et synthèse", content: "Le texte généré est une compilation, pas une synthèse critique. Vous devez réécrire, analyser et intégrer les sources pour créer un argumentaire original." },
    'Analyse des tendances du marché et/ou de l\'environnement des brevets': { title: "Bonne pratique", content: "L'IA excelle à analyser de grands volumes de données. Utilisez-la pour identifier des motifs, mais validez les conclusions avec votre expertise du domaine." },
    'Évaluation de la nouveauté de la recherche et identification des lacunes': { title: "Vigilance", content: "L'IA peut identifier des lacunes apparentes, mais l'évaluation de la nouveauté requiert une connaissance fine du domaine que seule l'expertise humaine peut fournir." },
    'Conception de la recherche': { title: "Bonne pratique", content: "Utile pour explorer différentes approches méthodologiques. Votre rôle est de choisir et de justifier le devis le plus approprié pour répondre à votre question de recherche." },
    'Développement de protocoles expérimentaux ou de recherche': { title: "Vigilance", content: "L'IA peut générer des protocoles standards. Assurez-vous de les adapter précisément à votre contexte et de détailler chaque étape pour garantir la reproductibilité." },
    'Sélection des méthodes de recherche': { title: "Vigilance", content: "L'IA peut suggérer des méthodes populaires, mais pas toujours les plus pertinentes. Justifiez votre choix en fonction de votre cadre théorique et de vos objectifs." },
    'Génération de code': { title: "Vigilance : Erreurs subtiles", content: "Le code peut sembler fonctionnel mais contenir des erreurs logiques. Comprenez chaque ligne et testez-le rigoureusement avant de l'utiliser pour votre analyse." },
    'Optimisation du code': { title: "Bonne pratique", content: "Excellent pour améliorer l'efficacité du code. Vérifiez que l'optimisation ne modifie pas le résultat de l'analyse." },
    'Automatisation des processus': { title: "Bonne pratique", content: "Idéal pour les tâches répétitives. Documentez clairement le processus automatisé pour assurer la transparence et la reproductibilité." },
    'Création d\'algorithmes pour l\'analyse de données': { title: "Vigilance", content: "La conception d'un algorithme pertinent requiert une expertise profonde. Utilisez l'IA comme un assistant, mais la logique et la validation de l'algorithme doivent être humaines." },
    'Collecte de données': { title: "Vigilance : Éthique et biais", content: "Si vous utilisez l'IA pour la collecte (ex: web scraping), assurez-vous de respecter les conditions d'utilisation et d'être conscient des biais potentiels dans les données collectées." },
    'Validation (évaluation de la qualité et de la fiabilité des données)': { title: "Vigilance", content: "L'IA peut identifier des anomalies, mais la décision finale sur la validité d'une donnée repose sur votre jugement et votre connaissance du contexte." },
    'Nettoyage des données': { title: "Bonne pratique", content: "Très efficace pour les tâches de nettoyage standard. Conservez une trace de toutes les modifications apportées pour garantir la traçabilité." },
    'Conservation et organisation des données': { title: "Bonne pratique", content: "L'IA peut aider à structurer et à organiser les données. Assurez-vous que le plan de gestion de données est clair et respecte les normes de votre institution." },
    'Analyse des données': { title: "Vigilance : Biais d'interprétation", content: "L'IA identifie des corrélations, pas des causalités. L'interprétation des résultats et leur mise en contexte exigent votre expertise scientifique." },
    'Visualisation': { title: "Bonne pratique", content: "Utilisez l'IA pour générer différents types de graphiques, mais choisissez celui qui représente vos données de la manière la plus claire et la plus honnête." },
    'Test de reproductibilité': { title: "Vigilance", content: "L'IA peut aider à ré-exécuter un code, mais la reproductibilité implique de comprendre et de pouvoir expliquer chaque étape de l'analyse, ce qui reste une tâche humaine." },
    'Génération de texte': { title: "Vigilance : Voix d'auteur", content: "Utilisez le texte généré comme une première ébauche. Votre travail consiste à le réécrire entièrement pour y infuser votre voix, votre style et votre argumentation." },
    'Relecture et édition': { title: "Bonne pratique", content: "Excellent outil pour corriger la grammaire, la syntaxe et améliorer la fluidité. Assurez-vous que les corrections ne changent pas le sens de vos propos." },
    'Synthèse de texte': { title: "Vigilance", content: "Le résumé de l'IA est factuel, pas critique. Il vous appartient d'analyser et de synthétiser les idées principales dans le contexte de votre propre recherche." },
    'Formulation des conclusions': { title: "Vigilance", content: "Les conclusions doivent découler directement de vos résultats et de votre analyse. L'IA peut aider à les formuler, mais ne peut pas les créer." },
    'Adaptation du ton émotionnel': { title: "Bonne pratique", content: "Utile pour ajuster le style d'un texte pour différents publics (ex: communication scientifique). Gardez le contrôle pour que le ton reste authentique." },
    'Traduction': { title: "Vigilance : Nuances terminologiques", content: "La traduction est souvent de bonne qualité, mais peut manquer des termes techniques précis de votre domaine. Une révision par un expert est essentielle." },
    'Reformatage': { title: "Bonne pratique", content: "Très efficace pour adapter un manuscrit aux normes de différentes revues. Vérifiez toujours le résultat final attentivement." },
    'Analyse des biais et des discriminations potentielles': { title: "Vigilance", content: "Ironiquement, l'IA peut être biaisée elle-même. Utilisez-la comme un outil de détection préliminaire, mais la responsabilité d'une analyse éthique approfondie vous incombe." },
    'Analyse des risques éthiques': { title: "Vigilance", content: "L'IA peut lister des risques standards, mais ne peut pas évaluer la complexité d'une situation éthique particulière. Consultez toujours les comités d'éthique compétents." },
    'Suivi de la conformité aux normes éthiques': { title: "Vigilance", content: "L'IA peut vérifier la présence de certains éléments (ex: consentement), mais ne peut pas juger de la validité réelle de la conformité éthique." },
    'Suivi de la confidentialité des données': { title: "Vigilance : Ne soumettez pas de données confidentielles", content: "N'utilisez jamais de données de recherche confidentielles ou personnelles dans une IAg publique. Utilisez l'IA pour développer des stratégies de protection, pas pour analyser les données elles-mêmes." },
    'Évaluation de la qualité': { title: "Vigilance", content: "L'IA peut évaluer la structure ou la clarté, mais pas la validité scientifique ou la pertinence d'un argument. Cette évaluation critique est au cœur du travail de recherche." },
    'Identification des tendances': { title: "Bonne pratique", content: "L'IA peut identifier des tendances dans de grands ensembles de données (ex: résultats de recherche), mais c'est à vous d'interpréter leur signification." },
    'Recommandations': { title: "Vigilance", content: "Les recommandations générées sont basées sur des modèles statistiques. Elles doivent être évaluées de manière critique à la lumière de votre expertise et des objectifs de votre recherche." },
    'Soutien à la publication': { title: "Bonne pratique", content: "Utile pour rédiger une lettre de présentation ou des réponses aux évaluateurs. Personnalisez toujours le contenu pour qu'il soit spécifique et sincère." },
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AI tool entries for all profiles
    ['teacher', 'researcher', 'balises', 'sans-balises'].forEach(p => {
        const container = document.getElementById(`ai-tools-container-${p}`);
        if(container) addAiToolEntry(p, true);
    });

    // Build task lists based on which page is loaded
    if(document.getElementById('tasks-section-balises')) buildStudentBalisesTasksHTML();
    if(document.getElementById('tasks-section-teacher')) buildTeacherTasksHTML();
    if(document.getElementById('tasks-section-researcher')) buildResearcherTasksHTML();

    updateAllDropdowns();
});

// BUILDERS
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
    const tipKey = task.trim().replace(/'/g, "\\'");
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
    const placeholder = (type === 'teacher') ? "Ex: Création d'une vidéo de synthèse..." 
                    : (type === 'researcher') ? "Ex: Transcription d'entrevues..." 
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

// SHARED UI LOGIC
function toggleTip(event) {
    const parent = event.target.closest('.task-item-content, .dynamic-task-item');
    parent.querySelector('.contextual-tip').style.display = (parent.querySelector('.contextual-tip').style.display === 'block') ? 'none' : 'block';
}
function togglePrompt(checkbox) {
    checkbox.closest('.task-item-content').querySelector('.prompt-container').style.display = checkbox.checked ? 'block' : 'none';
}
function addAiToolEntry(profile, isFirst = false) {
    const container = document.getElementById(`ai-tools-container-${profile}`);
    const entry = document.createElement('div');
    entry.className = 'ai-tool-entry';
    entry.innerHTML = `<div class="grid-inputs">
        <div class="input-group"><label>Nom (et version)</label><input type="text" class="ai-name" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>Entité créatrice</label><input type="text" class="ai-creator" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>Année</label><input type="text" class="ai-date" oninput="updateAllDropdowns()"></div>
        <div class="input-group"><label>URL</label><input type="text" class="ai-url" oninput="updateAllDropdowns()"></div>
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

// GENERATION LOGIC
function generateOutputs(profile) {
    const declarationText = (profile === 'teacher') ? generateTeacherDeclaration()
                        : (profile === 'researcher') ? generateResearcherDeclaration()
                        : (profile === 'balises') ? generateStudentBalisesDeclaration()
                        : generateStudentSansBalisesDeclaration();
    document.getElementById(`output-${profile}`).value = declarationText;
    document.getElementById(`bibliography-output-${profile}`).value = generateBibliographyText(profile);
}
function generateBibliographyText(profile) {
    let biblioText = '';
    document.querySelectorAll(`#ai-tools-container-${profile} .ai-tool-entry`).forEach(entry => {
        const creator = entry.querySelector(".ai-creator").value.trim() || "[Entité]";
        const date = entry.querySelector(".ai-date").value.trim() || "[Année]";
        const name = entry.querySelector(".ai-name").value.trim() || "[Outil]";
        const url = entry.querySelector(".ai-url").value.trim() || "[URL]";
        if (name) biblioText += `${creator}. (${date}). *${name}* [Grand modèle de langage]. ${url}\n`;
    });
    return biblioText.trim();
}
function getCommonHeaderText(profile) {
    const llmList = Array.from(document.querySelectorAll(`#ai-tools-container-${profile} .ai-name`)).map(i => i.value.trim()).filter(Boolean).join(', ') || "[non spécifié]";
    
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
    }
    else {
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
    
    let text = `\nRÉFLEXION SUR LA DÉMARCHE (FACULTATIF)\n----------------------------------------\n`;
    if (reflectionProcess) text += `Apports de l'IAg au processus:\n${reflectionProcess}\n\n`;
    if (reflectionLimits) text += `Limites identifiées et processus de validation:\n${reflectionLimits}\n\n`;
    if (reflectionSkill) text += `Modélisation d'une pratique éthique:\n${reflectionSkill}\n\n`;
    return text;
}
function getIntegrityText(profile) {
    const text = (profile === 'teacher') ? `l'enseignant(e) confirme avoir respecté sa checklist d'intégrité.`
               : (profile === 'researcher') ? `le chercheur ou la chercheuse confirme avoir respecté sa checklist d'intégrité.`
               : `l'étudiant(e) confirme avoir respecté sa checklist d'intégrité et assume l'entière responsabilité du contenu final.`;
    return `\nENGAGEMENT D'INTÉGRITÉ\n----------------------\nEn générant cette déclaration, ${text}`;
}
function getPredefinedTasksText(profile, containerId){
    let body = '';
    const tasksByCategory = {};
     document.querySelectorAll(`#${containerId} input[type="checkbox"]:checked`).forEach(cb => {
        const category = cb.closest('details').querySelector('summary > span').textContent;
        const taskLabel = cb.dataset.taskName;
        const tool = cb.closest('.task-item-content').querySelector(`.task-tool-selector-${profile}`).value.trim();
        const prompt = cb.closest('.task-item-content').querySelector('.prompt-input').value.trim();
        if (!tasksByCategory[category]) tasksByCategory[category] = [];
        tasksByCategory[category].push({taskLabel, tool, prompt});
    });
    let tasksDeclared = false;
    Object.keys(tasksByCategory).forEach(category => {
        tasksDeclared = true; body += `\n**${category}**\n`;
        tasksByCategory[category].forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
    });
    return { body, tasksDeclared };
}
function getDynamicTasksText(profile, containerId, title) {
    let body = ``;
    const tasks = [];
    document.querySelectorAll(`#${containerId} .dynamic-task-item`).forEach(item => {
        const taskLabel = item.querySelector('.dynamic-task-description').value.trim(); if (!taskLabel) return;
        const tool = item.querySelector(`.task-tool-selector-${profile}`).value.trim();
        const prompt = item.querySelector('.prompt-input').value.trim();
        tasks.push({taskLabel, tool, prompt});
    });
    if (tasks.length > 0) {
         body += `\n**${title}**\n`;
         tasks.forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
    }
    return body;
}
function generateStudentBalisesDeclaration() {
    let header = getCommonHeaderText('balises');
    let body = `DÉTAIL DES USAGES DÉCLARÉS\n--------------------------\n`;
    const tasksByLevel = {};
    document.querySelectorAll('#tasks-section-balises input[type="checkbox"]:checked').forEach(cb => {
        const level = cb.closest('.level-details').querySelector('summary > span').textContent;
        const taskLabel = cb.dataset.taskName;
        const tool = cb.closest('.task-item-content').querySelector('.task-tool-selector-balises').value.trim();
        const prompt = cb.closest('.task-item-content').querySelector('.prompt-input').value.trim();
        if (!tasksByLevel[level]) tasksByLevel[level] = [];
        tasksByLevel[level].push({taskLabel, tool, prompt});
    });
    document.querySelectorAll('#tasks-section-balises .dynamic-task-item').forEach(item => {
        const taskLabel = item.querySelector('.dynamic-task-description').value.trim();
        if (!taskLabel) return;
        const level = "NIVEAU 4 : Utilisation libre";
        const tool = item.querySelector('.task-tool-selector-balises').value.trim();
        const prompt = item.querySelector('.prompt-input').value.trim();
        if (!tasksByLevel[level]) tasksByLevel[level] = [];
        tasksByLevel[level].push({taskLabel, tool, prompt});
    });
    let tasksDeclared = false;
    Object.keys(tasksByLevel).forEach(level => {
        tasksDeclared = true; body += `\n${level.toUpperCase()}:\n`;
        tasksByLevel[level].forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
    });
    if (!tasksDeclared) body += "Aucune tâche spécifique n'a été déclarée.\n";
    return header + body + getReflectionText('balises') + getIntegrityText('balises');
}
function generateStudentSansBalisesDeclaration() {
     let header = getCommonHeaderText('sans-balises');
     let body = "DÉTAIL DES USAGES DÉCLARÉS\n--------------------------\n";
     let dynamicBody = getDynamicTasksText('sans-balises', 'dynamic-tasks-container-sans-balises', 'Usages');
     if(dynamicBody.trim()){ body += dynamicBody; }
     else { body += "Aucun usage spécifique n'a été déclaré.\n"; }
    return header + body + getReflectionText('sans-balises') + getIntegrityText('sans-balises');
}
function generateTeacherDeclaration() {
    let header = getCommonHeaderText('teacher');
    let policyLevel = document.querySelector('#teacher-policy-choice input[name="student-level"]:checked');
    let policyText = `\nCADRE D'UTILISATION POUR LES ÉTUDIANT(E)S\n---------------------------------------------\n`;
    if (policyLevel) {
        policyText += `Le niveau d'utilisation de l'IAg autorisé dans ce cours est le **Niveau ${policyLevel.value}**. Se référer au plan de cours pour les détails.\n\n`;
    } else {
        policyText += `Le cadre d'utilisation de l'IAg pour les étudiant(e)s n'a pas été spécifié via cet outil.\n\n`;
    }
    let body = `USAGES PÉDAGOGIQUES DÉCLARÉS\n-------------------------------\n`;
    const { body: predefinedBody, tasksDeclared: predefinedDeclared } = getPredefinedTasksText('teacher', 'tasks-section-teacher');
    body += predefinedBody;
    const dynamicBody = getDynamicTasksText('teacher', 'dynamic-tasks-container-teacher', "Autres usages (spécifiés par l'enseignant)");
    body += dynamicBody;
    if (!predefinedDeclared && !dynamicBody.trim()) {
        body += "Aucun usage spécifique n'a été déclaré.\n";
    }
    return header + policyText + body + getReflectionText('teacher') + getIntegrityText('teacher');
}
function generateResearcherDeclaration() {
    let header = getCommonHeaderText('researcher');
    let body = `USAGES EN RECHERCHE DÉCLARÉS (selon la taxonomie GAIDeT)\n----------------------------------------------------------\n`;
    const { body: predefinedBody, tasksDeclared: predefinedDeclared } = getPredefinedTasksText('researcher', 'tasks-section-researcher');
    body += predefinedBody;
    const dynamicBody = getDynamicTasksText('researcher', 'dynamic-tasks-container-researcher', "Autres usages (spécifiés par le chercheur)");
    body += dynamicBody;
    if (!predefinedDeclared && !dynamicBody.trim()) {
        body += "Aucun usage spécifique n'a été déclaré.\n";
    }
     return header + body + getReflectionText('researcher') + getIntegrityText('researcher');
}

