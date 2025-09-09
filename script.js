// DATA | Version 2, Alexandra Lez, 7 septembre 2025
const studentTasksData = {
  "NIVEAU 1 : Utilisation limitée": { domains: { "Domaine disciplinaire": ["S'inspirer", "Générer des idées", "Explorer un sujet pour mieux le comprendre", "Générer du matériel pour son étude"], "Domaine des langues": ["Identifier ses erreurs et se les faire expliquer", "Reformuler un texte", "Générer un plan pour aider à structurer un texte", "Traduire un texte"]}},
  "NIVEAU 2 : Utilisation guidée": { domains: { "": ["Analyser des contenus", "Obtenir une rétroaction", "Évaluer la qualité de son travail à partir de critères", "Demander à être confronté relativement à ses idées, à sa démarche", "Diriger les processus de résolution de problèmes"]}},
  "NIVEAU 3 : Utilisation balisée": { domains: { "": ["Résumer ou rédiger des parties d'un texte", "Générer un texte ou un modèle d'une production et l'adapter", "Réaliser des calculs mathématiques", "Produire du code informatique", "Résoudre des problèmes complexes", "Répondre à une question", "Générer des images, ou contenus multimédias"]}},
  "NIVEAU 4 : Utilisation libre": { domains: { "": [] }}
};

const studentSansBalisesTasksData = {
    "Compréhension et Exploration": ["Explorer un sujet pour mieux le comprendre", "Simplifier un concept complexe", "Générer des questions pour guider mon étude", "Obtenir une définition ou une explication"],
    "Rédaction et Structuration": ["Générer des idées (remue-méninges)", "Créer un plan ou une structure pour un texte", "Reformuler une phrase ou un paragraphe pour plus de clarté", "Trouver des synonymes ou des formulations alternatives"],
    "Révision et Amélioration": ["Corriger l'orthographe et la grammaire", "Améliorer le style ou la fluidité d'un texte", "Traduire un texte ou un passage"],
    "Aide technique et Programmation": ["Expliquer un bloc de code", "Suggérer des manières de déboguer du code", "Générer des exemples de code simples"]
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
    "Revue de littérature": ["Recherche et systématisation de la littérature", "Rédaction de la revue de littérature", "Analyse des tendances du marché  ou des environnements des brevets", "Évaluation de la nouveauté de la recherche et identification des lacunes"],
    "Méthodologie": ["Conception de la recherche", "Développement de protocoles expérimentaux ou de recherche", "Sélection des méthodes de recherche"],
    "Développement logiciel et automatisation": ["Génération de code", "Optimisation du code", "Automatisation des processus", "Conception algorithmes pour analyse de données"],
    "Gestion des données": ["Collecte de données", "Validation (évaluation de la qualité et de la fiabilité des données)", "Nettoyage des données", "Conservation et organisation des données", "Analyse des données", "Visualisation", "Test de reproductibilité"],
    "Rédaction et édition": ["Génération de texte", "Relecture et édition", "Synthèse de texte", "Formulation des conclusions", "Adaptation du ton émotionnel", "Traduction", "Reformatage"],
    "Revue éthique": ["Analyse des biais et des discriminations potentielles", "Analyse des risques éthiques", "Suivi de la conformité aux normes éthiques", "Suivi de la confidentialité des données"],
    "Supervision": ["Évaluation de la qualité", "Identification des tendances", "Recommandations", "Soutien à la publication"]
};

const contextualTips = {
    // General
    'Usage non spécifié': { title: "Point de vigilance : responsabilité accrue", content: "Pour tout usage non listé, la responsabilité de la justification et du respect de l'intégrité académique vous incombe entièrement. Documentez bien votre processus." },

    // Étudiant (avec balises)
    "S'inspirer": { title: "Bonne pratique : pensée divergente", content: "Utilisez l'IA pour générer un grand volume d'idées brutes (divergence), mais gardez le contrôle total sur le choix, la critique et l'affinage des meilleures pistes (convergence)." },
    "Générer des idées": { title: "Bonne pratique : remue-méninges structuré", content: "Pour de meilleurs résultats, donnez un rôle à l'IA (ex: 'Agis comme un expert en marketing') et un cadre (ex: 'Propose 5 idées d'accroche pour un texte sur ce sujet')." },
    "Explorer un sujet pour mieux le comprendre": { title: "Point de vigilance : validation des faits", content: "L'IA est un excellent point de départ pour explorer, mais elle peut simplifier ou se tromper. Validez toujours les informations importantes avec les sources fiables fournies dans votre cours." },
    "Générer du matériel pour son étude": { title: "Bonne pratique : apprentissage actif", content: "Demandez à l'IA de créer des questions de révision, des quiz ou des cartes-éclair sur un texte que vous lui fournissez. C'est une excellente façon de tester activement vos connaissances." },
    "Identifier ses erreurs et se les faire expliquer": { title: "Bonne pratique : tuteur personnel", content: "Lorsque l'IA corrige une de vos phrases, demandez-lui toujours : 'Pourquoi est-ce une erreur ?' et 'Quelle règle de grammaire s'applique ici ?'. Transformez la correction en leçon." },
    "Reformuler un texte": { title: "Point de vigilance : votre voix d'auteur", content: "La reformulation peut améliorer la clarté, mais assurez-vous que le résultat final correspond toujours à votre style et à votre pensée. Ne copiez-collez jamais sans vous réapproprier le texte." },
    "Générer un plan pour aider à structurer un texte": { title: "Bonne pratique : squelette de travail", content: "Considérez le plan généré comme une suggestion. Votre travail consiste à le réorganiser, le fusionner et l'adapter pour qu'il serve parfaitement votre propre argumentaire." },
    "Traduire un texte": { title: "Point de vigilance : jargon et nuances", content: "Les traducteurs IA sont puissants, mais peuvent échouer sur le jargon technique spécifique à un domaine ou sur les nuances culturelles. Une révision attentive par un humain est essentielle." },
    "Analyser des contenus": { title: "Bonne pratique : seconde lecture", content: "Soumettez un texte et demandez à l'IA d'en identifier les arguments principaux, le ton ou les thèmes. Utilisez sa réponse pour valider ou remettre en question votre propre analyse initiale." },
    "Obtenir une rétroaction": { title: "Point de vigilance : rétroaction générale vs experte", content: "L'IA donne une bonne rétroaction sur la structure et la clarté générale, mais elle ne remplace pas les conseils de votre enseignant(e), qui connaît les objectifs précis du travail et les subtilités du domaine." },
    "Évaluer la qualité de son travail à partir de critères": { title: "Bonne pratique : auto-évaluation formative", content: "Donnez à l'IA la grille d'évaluation de votre travail avec votre production. Demandez-lui de vous évaluer critère par critère. C'est un excellent moyen d'identifier des faiblesses avant la remise." },
    "Demander à être confronté relativement à ses idées, à sa démarche": { title: "Bonne pratique : partenaire de débat", content: "Renforcez votre argumentation en demandant à l'IA de 'jouer l'avocat du diable' ou de 'trouver trois contre-arguments à mon idée principale'. C'est un excellent test de robustesse." },
    "Diriger les processus de résolution de problèmes": { title: "Point de vigilance : rester le pilote", content: "Ne demandez pas la solution finale. Demandez plutôt : 'Quelle serait la première étape ?' ou 'Quelle formule devrais-je utiliser ici ?'. Gardez le contrôle du raisonnement." },
    "Résumer ou rédiger des parties d'un texte": { title: "Point de vigilance : responsabilité totale", content: "Dès que l'IA rédige, votre travail de vérification, de réécriture et d'intégration doit être maximal. Le texte final est le vôtre, et vous en êtes 100% responsable." },
    "Générer un texte ou un modèle d'une production et l'adapter": { title: "Point de vigilance : l'adaptation est cruciale", content: "Un modèle généré par l'IA doit être un squelette, pas le produit fini. Le travail d'adaptation que vous effectuez doit être substantiel et visible." },
    "Réaliser des calculs mathématiques": { title: "Bonne pratique : comprendre les étapes", content: "Utilisez l'IA pour vérifier un résultat ou pour vous montrer les étapes d'une résolution. Assurez-vous de comprendre la logique derrière chaque étape, pas seulement la réponse finale." },
    "Produire du code informatique": { title: "Point de vigilance : fonctionnalité vs qualité", content: "Le code généré peut fonctionner, mais il n'est pas toujours optimisé, sécurisé ou bien commenté. Vous devez comprendre ce que fait chaque ligne avant de l'intégrer." },
    "Résoudre des problèmes complexes": { title: "Point de vigilance : une solution parmi d'autres", content: "La solution proposée par l'IA n'est qu'une des voies possibles. Votre expertise consiste à l'évaluer, la critiquer et, si nécessaire, à chercher des approches alternatives." },
    "Répondre à une question": { title: "Point de vigilance : sources fantômes", content: "Vérifiez systématiquement chaque information factuelle (noms, dates, statistiques). L'IA est connue pour 'halluciner' et inventer des faits ou des références qui n'existent pas." },
    "Générer des images, ou contenus multimédias": { title: "Bonne pratique : l'art du 'prompt'", content: "Plus votre requête (prompt) est détaillée, meilleur sera le résultat. Décrivez le style, les couleurs, l'ambiance et la composition de l'image souhaitée. Pensez à vérifier les droits d'utilisation." },
    
    // Étudiant (sans balises)
    'Simplifier un concept complexe': { title: "Point de vigilance : perte de nuance", content: "La simplification est utile, mais peut faire perdre des nuances importantes. Une fois le concept simplifié compris, demandez à l'IA de vous expliquer les exceptions ou les complexités." },
    'Générer des questions pour guider mon étude': { title: "Bonne pratique", content: "Utilisez l'IA comme un tuteur pour poser des questions. Demandez-lui de 'm'expliquer comme si j'avais 10 ans' ou de 'me donner une analogie' pour solidifier votre compréhension." },
    'Créer un plan ou une structure pour un texte': { title: "Bonne pratique", content: "Un plan généré par l'IA est une excellente base. Assurez-vous de le réorganiser et de l'adapter pour qu'il corresponde à votre propre argumentaire et à la logique de votre pensée." },
    'Corriger l\'orthographe et la grammaire': { title: "Bonne pratique", content: "L'IA est un correcteur très puissant. Profitez-en pour lui demander pourquoi une erreur a été corrigée afin d'améliorer vos propres compétences linguistiques." },
    'Expliquer un bloc de code': { title: "Point de vigilance : exactitude", content: "L'explication peut être très bonne, mais l'IA peut parfois se tromper sur l'intention finale du code. Validez sa logique en testant le code vous-même." },

    // Teacher
    'Générer des plans de cours': { title: "Bonne pratique", content: "Utilisez l'IA pour générer une structure de base, mais assurez-vous de la personnaliser en y intégrant votre expertise, votre expérience, le contexte de votre cours et les besoins spécifiques de vos étudiantes et étudiants." },
    'Créer des exemples ou études de cas': { title: "Point de vigilance : authenticité", content: "Les exemples générés à l’aide d’une IAg peuvent être trop génériques. Adaptez-les pour qu'ils soient authentiques et pertinents pour le champ disciplinaire et le vécu de vos étudiantes et étudiants." },
    'Concevoir des activités pédagogiques': { title: "Bonne pratique", content: "Assurez-vous que chaque activité proposée par l’IAG que vous décidez de mettre en œuvre soit pertinente pour votre contexte et directement liée à un objectif d’apprentissage précis de votre cours." },
    'Rédiger des notes de cours ou synthèses': { title: "Point de vigilance : exactitude et profondeur", content: "Validez chaque information. L'IAg peut résumer, mais c'est votre expertise qui ajoute la profondeur et la perspective critique nécessaires." },
    'Créer des diapositives de présentation': { title: "Bonne pratique", content: "Utilisez l’IAG pour structurer vos idées et suggérer des visuels. Chaque diapositive doit rester concise et servir de support à votre discours, et non le remplacer." },
    'Générer du contenu pour supports visuels': { title: "Point de vigilance : pertinence et clarté", content: " Un bon visuel (schéma, infographie) simplifie une idée complexe. Les logiciels d’IA pour créer des présentations peuvent être très pratiques, mais ils peuvent parfois surcharger les diapositites ou produire des images peu pertinentes. Veillez à ce que le résultat soit clair, non encombré et qu’il reflète fidèlement votre message." },
    'Rédiger des questions pour examen': { title: "Point de vigilance : validité et équité", content: "Assurez-vous que les questions générées évaluent le concept ou la compétence appropriés et qu’elles sont exemptes d’imprécisions ou d’erreurs." },
    'Élaborer des grilles critériées pour évaluation': { title: "Bonne pratique : clarté des critères", content: "Une grille générée par l'IAg est un bon point de départ. Affinez les descripteurs de chaque critère pour qu'ils soient clairs, observables et sans ambiguïté pour vous et vos personnes étudiantes." },
    'Rédaction de messages pour des forums et des courriels': { title: "Point de vigilance : ton et personnalisation", content: "Ajustez toujours le ton du message pour qu'il corresponde à votre style de communication habituel. Certains outils d’IAg peuvent proposer des formulations trop formelles ou impersonnelles." },
    'Assister à la formulation de rétroactions': { title: "Point de vigilance : rétroaction constructive", content: " L’IAG peut détecter des erreurs, mais une rétroaction efficace doit être constructive, personnalisée et humaine. Veillez à ce que vos commentaires se concentrent sur les étapes suivantes et le développement des personnes étudiantes." },
    'Explorer de nouvelles approches pédagogiques': { title: "Bonne pratique : innovation éclairée", content: " Utilisez l’IAG comme un partenaire de remue-méninges pour découvrir des stratégies pédagogiques. Assurez-vous toujours que ces stratégies sont appuyées par la recherche en pédagogie et ajustez-les en fonction de vos besoins spécifiques." },
    'Créer des scénarios ou des simulations': { title: "Point de vigilance : réalisme et objectifs", content: " Les scénarios doivent être plausibles et directement liés aux objectifs d'apprentissage. Les outils d’IAg très souvent doivent être bien encadrés par un contexte spécifique pour éviter les scénarios non pertinents, stéréotypés ou caricaturaux." },
    'Générer des exemples de réponses (bonnes et mauvaises)': { title: "Bonne pratique : outil didactique", content: " Dans certaines situations, fournir des exemples de réponses appropriées ou inappropriées est un moyen efficace de clarifier vos attentes. Par exemple, si vous utilisez une IA pour produire des exemples d’erreurs, assurez-vous qu’ils soient représentatifs d’erreurs fréquentes et qu’ils soient vraiment instructifs." },
    'Créer des exercices de pratique supplémentaires': { title: "Point de vigilance : qualité et cohérence", content: "Vérifiez que la difficulté et le format des exercices sont cohérents avec ceux vus en classe. La qualité prime sur la quantité." },
    'Adapter du matériel pour différents niveaux de compétence': { title: "Bonne pratique : différenciation", content: "Pour différencier efficacement, fournissez à l'IAg le texte original et des instructions claires (par exemple, « Simplifie ce texte pour un niveau débutant », « Ajoute des questions de réflexion pour un niveau avancé », etc.)." },
    'Générer des explications alternatives pour des concepts difficiles': { title: "Bonne pratique : flexibilité", content: "L'IAg peut proposer des analogies ou des métaphores variées pour un même concept. C'est un bon moyen d'aider les personnes étudiantes ayant différentes manières d’apprendre." },
    'Synthétiser des articles pour le développement professionnel': { title: "Point de vigilance : perte de nuance", content: "Un résumé effectué à l’aide d'un outil d’IAg est un point de départ. Toutefois, il demeure indispensable de lire et d’analyser attentivement le texte original afin de bien comprendre le sujet." },
    
    // GAIDET / Researcher
    'Génération idées': { title: "Bonne pratique", content: "Utilisez l'IAg pour la divergence (générer beaucoup d'idées), mais gardez le contrôle de la convergence (choisir, critiquer et affiner les meilleures)." },
    'Définition objectif de recherche': { title: "Point de vigilance", content: "L'IAg peut aider à clarifier un objectif, mais celui-ci doit découler de votre compréhension profonde du domaine et d'une lacune réelle dans les connaissances." },
    'Formulation des questions et hypothèses de recherche': { title: "Bonne pratique", content: "Les outils d’IAg s’avèrent très intéressants pour reformuler ou explorer des angles différents, mais, assurez-vous que l'hypothèse finale est testable, précise et pertinente pour votre projet." },
    'Évaluation de la faisabilité et des risques': { title: "Point de vigilance", content: "L'IAg peut identifier des risques communs, mais ne peut évaluer les contraintes contextuelles (par exemple, accès aux données, budget, temps). Cette évaluation reste une responsabilité humaine." },
    'Test hypothèse préliminaire': { title: "Bonne pratique", content: "L’IAg peut s’avérer très utile pour des simulations ou des modélisations basées sur des données existantes. Considérez ceci comme une exploration, pas une validation formelle." },
    'Recherche et systématisation de la littérature': { title: "Point de vigilance : sources fantômes", content: "Validez chaque référence générée dans des bases de données académiques. L'IAg peut « halluciner » des sources qui n'existent pas." },
    'Rédaction de la revue de littérature': { title: "Point de vigilance : plagiat et synthèse", content: "Le texte généré par une IAg est plutôt une compilation qu’une synthèse critique. Vous devez réécrire, analyser et intégrer les sources pour créer un argumentaire original." },
    'Analyse des tendances du marché  ou des environnements des brevets': { title: "Bonne pratique", content: "L'IAg excelle à analyser de grands volumes de données. Utilisez-la pour identifier des motifs, mais validez les conclusions avec votre expertise du domaine." },
    'Évaluation de la nouveauté de la recherche et identification des lacunes': { title: "Point de vigilance", content: " L’IAg peut identifier des lacunes apparentes, mais l’évaluation de la nouveauté requiert une connaissance fine du domaine, que seule l’expertise humaine peut fournir pour le moment." },
    'Conception de la recherche': { title: "Bonne pratique", content: "L’IAg peut être très utile pour explorer différentes approches méthodologiques. Votre rôle est de choisir et de justifier le devis le plus approprié pour répondre à votre question de recherche." },
    'Développement de protocoles expérimentaux ou de recherche': { title: "Point de vigilance", content: "L'IAg peut générer des protocoles standards. Assurez-vous de les adapter précisément à votre contexte et de détailler chaque étape pour garantir la reproductibilité." },
    'Sélection des méthodes de recherche': { title: "Point de vigilance", content: "L'IAg peut suggérer des méthodes populaires, mais pas toujours les plus pertinentes. Justifiez votre choix en fonction de votre cadre théorique et de vos objectifs." },
    'Génération de code': { title: "Point de vigilance : erreurs subtiles", content: "Le code peut sembler fonctionnel, mais contenir des erreurs logiques. Comprenez chaque ligne et testez-le rigoureusement avant de l'utiliser pour votre analyse." },
    'Optimisation du code': { title: "Bonne pratique", content: "L’IAg peut s’avérer très pratique pour améliorer l'efficacité du code. Vérifiez que l'optimisation ne modifie pas le résultat de l'analyse." },
    'Automatisation des processus': { title: "Bonne pratique", content: "Les outils d’IAg sont très pratiques pour les tâches répétitives. Documentez clairement le processus automatisé pour assurer la transparence et la reproductibilité." },
    'Conception algorithmes pour analyse de données': { title: "Point de vigilance", content: "La conception d'un algorithme pertinent requiert une expertise profonde. Utilisez l'IAg comme un assistant, mais la logique et la validation de l'algorithme doivent être humaines." },
    'Collecte de données': { title: "Point de vigilance : éthique et biais", content: "Si vous utilisez des outils d’IAg pour la collecte (par exemple, web scraping), assurez-vous de respecter les conditions d'utilisation et d'être conscient des biais potentiels dans les données collectées." },
    'Validation (évaluation de la qualité et de la fiabilité des données)': { title: "Point de vigilance", content: "L'IAg peut identifier des anomalies, mais la décision finale sur la validité d'une donnée repose sur votre jugement et votre connaissance du contexte." },
    'Nettoyage des données': { title: "Bonne pratique", content: "Certains outils d’IAg sont très efficaces pour les tâches de nettoyage de base. Conservez une trace de toutes les modifications apportées pour garantir la traçabilité." },
    'Conservation et organisation des données': { title: "Bonne pratique", content: "L'IAg peut aider à structurer et à organiser les données. Assurez-vous que le plan de gestion de données est clair et respecte les normes de votre établissement." },
    'Analyse des données': { title: "Point de vigilance : biais d'interprétation", content: "L'IAg identifie des corrélations, pas des causalités. L'interprétation des résultats et leur mise en contexte exigent votre expertise scientifique." },
    'Visualisation': { title: "Bonne pratique", content: "Utilisez l'IAg pour générer différents types de graphiques, mais choisissez celui qui représente vos données de la manière la plus claire et la plus honnête." },
    'Test de reproductibilité': { title: "Point de vigilance", content: "L'IAg peut aider à réexécuter un code, mais la reproductibilité implique de comprendre et de pouvoir expliquer chaque étape de l'analyse, ce qui reste une tâche humaine pour le moment." },
    'Génération de texte': { title: "Point de vigilance : voix d'auteur", content: "Utilisez le texte généré comme une première ébauche. Votre travail consiste à bien analyser sa pertinence et à l’infuser votre voix, votre style et votre argumentation." },
    'Relecture et édition': { title: "Bonne pratique", content: "L’IAg est un très bon outil pour corriger la grammaire, la syntaxe et améliorer la fluidité. Assurez-vous que les corrections ne changent pas le sens de vos propos." },
    'Synthèse de texte': { title: "Point de vigilance", content: "Le résumé de l'IAg est factuel, pas critique. Il vous appartient d'analyser et de synthétiser les idées principales dans le contexte de votre propre recherche." },
    'Formulation des conclusions': { title: "Point de vigilance", content: "Les conclusions doivent découler directement de vos résultats et de votre analyse. L'IAg peut aider à les formuler, mais ne peut pas les créer." },
    'Adaptation du ton émotionnel': { title: "Bonne pratique", content: "Les outils d’IAG peuvent s’avérer très utiles pour adapter le style d’un texte à divers publics cibles (par exemple, la vulgarisation scientifique, l’enseignement, etc.). Toutefois, il est crucial de rester vigilant quant au choix du ton pour préserver son authenticité." },
    'Traduction': { title: "Point de vigilance : nuances terminologiques", content: "La traduction réalisée à l’aide d’outils d’IAg est souvent de bonne qualité, mais peut manquer des termes techniques précis de votre domaine. Une révision par une personne experte demeure essentielle." },
    'Reformatage': { title: "Bonne pratique", content: "Un outil d’IAg peut être très efficace pour vous aider à adapter un manuscrit aux normes de différentes revues. Vérifiez toujours le résultat final attentivement." },
    'Analyse des biais et des discriminations potentielles': { title: "Point de vigilance", content: "Si vous vous servez d’une IAG pour analyser de biais, il faut considérer que l’outil lui-même peut être biaisé. Considérez-le comme un outil de détection préliminaire, mais assurez-vous de mener une analyse éthique approfondie vous-même." },
    'Analyse des risques éthiques': { title: "Point de vigilance", content: "L'IAg peut lister des risques standards, mais ne peut pas évaluer la complexité d'une situation éthique particulière. Consultez toujours les comités d'éthique compétents." },
    'Suivi de la conformité aux normes éthiques': { title: "Point de vigilance", content: "L'IAg peut vérifier la présence de certains éléments (par exemple, consentement), mais ne peut pas juger de la validité réelle de la conformité éthique." },
    'Suivi de la confidentialité des données': { title: "Point de vigilance : ne soumettez pas de données confidentielles", content: "N'utilisez jamais de données de recherche confidentielles ou personnelles dans une IAg d’accès publique. Dans certaines situations, l’IA est plus appropriée pour élaborer des stratégies de protection que pour analyser les données elles-mêmes." },
    'Évaluation de la qualité': { title: "Point de vigilance", content: "L'IAg peut évaluer la structure ou la clarté, mais pas la validité scientifique ou la pertinence d'un argument. Cette évaluation critique est au cœur du travail de recherche." },
    'Identification des tendances': { title: "Bonne pratique", content: "L'IAg peut identifier des tendances dans de grands ensembles de données (par exemple, résultats de recherche), mais c'est à vous d'interpréter leur signification." },
    'Recommandations': { title: "Point de vigilance", content: "Les recommandations générées par des outils d’IAg sont basées sur des modèles statistiques. Elles doivent être évaluées de manière critique à la lumière de votre expertise et des objectifs de votre recherche." },
    'Soutien à la publication': { title: "Bonne pratique", content: " L’IAg peut être très utile pour rédiger une lettre de présentation ou des réponses aux évaluateurs. Cependant, il est important de toujours personnaliser le contenu pour qu’il soit spécifique et sincère." },
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    ['teacher', 'researcher', 'balises', 'sans-balises'].forEach(p => {
        const container = document.getElementById(`ai-tools-container-${p}`);
        if(container) addAiToolEntry(p, true);
    });

    if(document.getElementById('tasks-section-balises')) buildStudentBalisesTasksHTML();
    if(document.getElementById('tasks-section-sans-balises')) buildStudentSansBalisesTasksHTML();
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
function buildStudentSansBalisesTasksHTML() { buildTasksFromData(document.getElementById('tasks-section-sans-balises'), studentSansBalisesTasksData, 'sans-balises'); }

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
    const placeholder = (type === 'teacher') ? "Par exemple, création d'une vidéo de synthèse..." 
                    : (type === 'researcher') ? " Par exemple, transcription d'entrevues..." 
                    : (profile === 'sans-balises') ? "Par exemple, validation d'une traduction..."
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
    
    let text = `\nRÉFLEXION SUR LA DÉMARCHE (FACULTATIVE)\n----------------------------------------\n`;
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
        tasksByCategory[category].forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
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
         tasks.forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
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
        tasksByLevel[level].forEach(t => { body += `- ${t.taskLabel}`; if (t.tool) body += ` (IAg: ${t.tool})`; if (t.prompt) body += `\n  Requête: "${t.prompt}"`; body += `\n`; });
    });
    if (!tasksDeclared) body += "Aucune tâche spécifique n'a été déclarée.\n";
    return header + body + getReflectionText('balises') + getIntegrityText('balises');
}
function generateStudentSansBalisesDeclaration() {
     let header = getCommonHeaderText('sans-balises');
     let body = "DÉTAIL DES USAGES DÉCLARÉS\n--------------------------\n";
     const { body: predefinedBody, tasksDeclared: predefinedDeclared } = getPredefinedTasksText('sans-balises', 'tasks-section-sans-balises');
     body += predefinedBody;
     const dynamicBody = getDynamicTasksText('sans-balises', 'dynamic-tasks-container-sans-balises', 'Autres usages (spécifiés par l\'étudiant)');
     body += dynamicBody;
     if(!predefinedDeclared && !dynamicBody.trim()){ 
        body += "Aucun usage spécifique n'a été déclaré.\n"; 
     }
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
