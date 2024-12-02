src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
// Défilement fluide
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Sélection des éléments HTML
const hamburger = document.getElementById('hamburger'); // Icône hamburger
const sidebarMenu = document.getElementById('sidebar-menu'); // Menu latéral
const menuLinks = document.querySelectorAll('#sidebar-menu ul li a'); // Liens dans le menu

// Fonction pour ouvrir ou fermer le menu
hamburger.addEventListener('click', () => {
    sidebarMenu.classList.toggle('show'); // Ajoute/enlève la classe 'show'
});

// Fermer le menu lorsque l'utilisateur clique sur un lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        sidebarMenu.classList.remove('show'); // Ferme le menu
    });
});

// Fermer le menu lorsque l'utilisateur clique à l'extérieur
window.addEventListener('click', (event) => {
    if (!sidebarMenu.contains(event.target) && !hamburger.contains(event.target)) {
        sidebarMenu.classList.remove('show'); // Ferme le menu si on clique ailleurs
    }
});


// Sélectionner le bouton de bascule, le header, le footer et les boutons
const darkModeToggle = document.getElementById('dark-mode-toggle');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const buttons = document.querySelectorAll('.button');
const submitButton = document.querySelector('form button'); // Bouton "Envoyer"

// Vérifie si le mode sombre est activé dans le localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.add('dark-mode');  // Appliquer le mode sombre au body
    header.classList.add('dark-mode');         // Appliquer le mode sombre au header
    footer.classList.add('dark-mode');         // Appliquer le mode sombre au footer
    buttons.forEach(button => button.classList.add('dark-mode')); // Appliquer le mode sombre aux boutons
    submitButton.classList.add('dark-mode');   // Appliquer le mode sombre au bouton "Envoyer"
    darkModeToggle.classList.add('dark-mode'); // Appliquer le mode sombre au bouton de bascule
}

// Basculer entre mode sombre et mode clair
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');  // Basculer la classe dark-mode sur body
    header.classList.toggle('dark-mode');         // Basculer la classe dark-mode sur header
    footer.classList.toggle('dark-mode');         // Basculer la classe dark-mode sur footer
    buttons.forEach(button => button.classList.toggle('dark-mode')); // Basculer la classe dark-mode sur les boutons
    submitButton.classList.toggle('dark-mode');   // Basculer la classe dark-mode sur le bouton "Envoyer"
    darkModeToggle.classList.toggle('dark-mode'); // Basculer la classe dark-mode sur le bouton de bascule
   
    // Sauvegarder l'état dans localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');  // Sauvegarder le mode sombre
    } else {
        localStorage.setItem('dark-mode', 'disabled'); // Sauvegarder le mode clair
    }
});

// Modal Logic
const modal = document.getElementById('modal');
const modalDetails = document.getElementById('modal-details');

function openModal(project) {
    modal.style.display = 'flex';
    if (project === 'portfolio') {
        modalDetails.innerHTML = `
            <h2>Portfolio Personnel</h2>
            <p>
                Ce projet met en avant un site web personnel entièrement responsive qui présente mes compétences et projets. Conçu pour offrir une navigation fluide et une expérience utilisateur optimale sur tous les appareils (ordinateurs, tablettes et smartphones).
            </p>
            <h3>Objectifs :</h3>
            <ul>
                <li>Créer un site moderne qui reflète mon parcours et mes réalisations.</li>
                <li>Mettre en avant mes compétences en HTML, CSS et JavaScript.
</li>
                <li>Intégrer un formulaire de contact fonctionnel.</li>
            </ul>
            <h3>Outils utilisés :</h3>
            <ul>
                <li>HTML, CSS, JavaScript</li>
                <li>Bootstrap pour la responsivité</li>
                <li>EmailJS pour le formulaire de contact</li>
            </ul>
            <a href="https://github.com/Farah-bldn/Portfolio" target="_blank" class="modal-link">Voir sur GitHub</a>
        `;
    } else if (project === 'automates') {
        modalDetails.innerHTML = `
            <h2>Études des Automates</h2>
            <p>
               Ce projet académique a pour but d’implémenter des algorithmes manipulant des automates finis en Python, en se basant sur les concepts vus en cours et TD.
            </p>
             <h3>Objectifs :</h3>
            <ul>
                <li>Programmer des fonctions pour des automates finis : déterminisation, minimisation, reconnaissance de mots.</li>
                <li>Tester rigoureusement les fonctions via des cas d’utilisation variés.</li>
            </ul>
            <h3>Outils utilisés :</h3>
            <ul>
                <li>Python</li>
                <li>Fichiers et structures fournis par l'université</li>
                <li>Tests unitaires pour valider les fonctions</li>
            </ul>
            <a href="https://github.com/Farah-bldn/Automates" target="_blank" class="modal-link">Voir sur GitHub</a>
        `;
    } else if (project === 'ecosystem') {
        modalDetails.innerHTML = `
            <h2>Simulation Proie-Prédateur</h2>
            <p>
               Cette simulation met en œuvre un modèle écologique simple pour observer les interactions entre les populations de proies et de prédateurs. Réalisé en langage C, ce projet met en avant des compétences en programmation système et visualisation de données.
            </p>
            <h3>Objectifs:</h3>
            <ul>
                <li>Simuler les dynamiques de population en fonction de probabilités prédéfinies (reproduction, prédation).</li>
                <li>Offrir des résultats graphiques grâce à Gnuplot pour analyser les comportements des populations.</li>
                <li>Gestion rigoureuse de la mémoire avec valgrind pour détecter les erreurs et fuites.</li>
            </ul>
            <h3>Outils utilisés :</h3>
            <ul>
                <li>C</li>
                <li>Gnuplot pour la visualisation graphique</li>
                <li>Valgrind pour la gestion de la mémoire</li>
            </ul>
            <a href="https://github.com/Farah-bldn/ecosystem" target="_blank" class="modal-link">Voir sur GitHub</a>
        `;
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Assure-toi que cette ligne est bien présente.
}
// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize EmailJS with your user ID
(function () {
    emailjs.init("RfwTMi8hKfR9ESQeE"); // Replace "YOUR_USER_ID" with your actual EmailJS user ID
})();


// Get the contact form
const contactForm = document.getElementById('contact-form');

// Add an event listener for the form submission
contactForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevents the default form submission (which would reload the page)

    // Log the form data (for testing purposes)
    console.log("Nom:", this.user_name.value);
    console.log("E-mail:", this.user_email.value);
    console.log("Message:", this.user_message.value);

    // Send the form data to EmailJS
    emailjs.sendForm('service_6ptt2zp', 'template_tn7ha5n', this)
        .then(function(response) {
            console.log("Success:", response); // Log success response
            alert("Votre message a été envoyé avec succès !");
            contactForm.reset(); // Reset the form after successful submission
        }, function(error) {
            console.error("Error:", error); // Log error response
            alert("Une erreur s'est produite. Veuillez réessayer.");
        });
});

try {
    // Code susceptible de générer une erreur
    document.querySelector('.project').addEventListener('click', function() {
        openModal('portfolio');
    });
} catch (error) {
    console.error('Erreur JavaScript:', error);
}
// Modal Logic
const modalSkills = document.getElementById('modal-skills');
const modalSkillsDetails = document.getElementById('modal-skills-details');

// Fonction pour ouvrir le modal avec les informations de la compétence
function openSkillsModal(category, skill) {
    modalSkills.style.display = 'flex';
    let content = '';
    
    if (category === 'langages') {
        if (skill === 'c') {
            content = `
                <h2>C</h2>
                <p>Le langage C est un langage de programmation généraliste et procédural créé en 1972 par Dennis Ritchie. Il est connu pour sa simplicité, sa puissance et son efficacité, offrant un contrôle direct sur le matériel informatique grâce à des concepts comme les pointeurs et la gestion manuelle de la mémoire. Utilisé pour développer des systèmes d'exploitation, des logiciels embarqués et des applications nécessitant de hautes performances, le C reste un langage fondamental en informatique et a influencé de nombreux autres langages modernes comme C++, Java et Python.</p>
            `;
        } else if (skill === 'java') {
            content = `
                <h2>Java</h2>
                <p>Le langage Java est un langage de programmation orienté objet créé par James Gosling et lancé par Sun Microsystems en 1995. Connu pour sa portabilité grâce à la plateforme Java Virtual Machine (JVM), il permet aux développeurs d’écrire du code une fois et de l’exécuter sur différentes plateformes. Java est largement utilisé pour développer des applications web, mobiles (notamment Android), et d'entreprise, grâce à sa robustesse, sa sécurité, et son vaste écosystème de bibliothèques. Sa devise "Write Once, Run Anywhere" illustre sa polyvalence et son adoption mondiale.</p>
            `;
        } else if (skill === 'python') {
            content = `
                <h2>Python</h2>
                <p>
Le langage Python est un langage de programmation interprété, polyvalent et facile à apprendre, créé par Guido van Rossum en 1991. Connu pour sa syntaxe claire et concise, Python favorise une écriture de code lisible, ce qui en fait un choix idéal pour les débutants et les experts. Il est largement utilisé dans des domaines variés tels que le développement web, la science des données, l'intelligence artificielle, l'automatisation, et bien plus encore. Python dispose également d’un vaste écosystème de bibliothèques et frameworks, comme Django, NumPy et TensorFlow, qui renforcent sa puissance et sa popularité.</p>
            `;
        } else if (skill === 'javascript') {
            content = `
                <h2>JavaScript</h2>
                <p>Le JavaScript est un langage de programmation interprété, dynamique et orienté objet, principalement utilisé pour le développement web. Créé en 1995 par Brendan Eich, il est devenu un pilier du web aux côtés de HTML et CSS, permettant d'ajouter de l'interactivité et du dynamisme aux sites web. JavaScript fonctionne directement dans les navigateurs, rendant les pages plus réactives grâce à des fonctionnalités comme les animations, les menus interactifs ou encore les mises à jour en temps réel. Il est également utilisé côté serveur avec des plateformes comme Node.js, étendant ainsi son champ d'application au-delà des sites web.</p>
            `;
        }
    } else if (category === 'dev-web') {
        if (skill === 'html') {
            content = `
                <h2>HTML</h2>
                <p>
Le HTML (HyperText Markup Language) est le langage standard utilisé pour structurer et organiser le contenu des pages web. Il permet de définir la structure de base d'un site en utilisant des balises pour représenter différents éléments, tels que des titres, des paragraphes, des liens, des images ou des vidéos. Créé en 1991 par Tim Berners-Lee, HTML est la pierre angulaire du développement web et travaille en complément avec CSS pour le style et JavaScript pour l'interactivité. Grâce à HTML, les navigateurs peuvent interpréter et afficher des pages accessibles et bien organisées pour les utilisateurs.</p>
            `;
        } else if (skill === 'css') {
            content = `
                <h2>CSS</h2>
                <p>Le CSS (Cascading Style Sheets) est un langage de feuille de style utilisé pour décrire l'apparence et la mise en forme des pages web. Il permet de contrôler des aspects visuels comme les couleurs, les polices, les espacements, la disposition des éléments et les animations. En séparant la structure (HTML) de la présentation (CSS), il favorise un code plus propre et une gestion simplifiée du design. Créé en 1996, le CSS est essentiel pour rendre les sites web attrayants, responsifs et adaptés à différents types d'écrans, comme les ordinateurs, tablettes et smartphones.</p>
            `;
        } else if (skill === 'bootstrap') {
            content = `
                <h2>Bootstrap</h2>
                <p>**Bootstrap** est un framework CSS populaire et open-source conçu pour simplifier le développement de sites web modernes et responsifs. Il offre une collection de composants prédéfinis, tels que des grilles, des boutons, des formulaires, des cartes et des modales, qui permettent de construire rapidement des interfaces utilisateur élégantes et cohérentes. Bootstrap utilise une grille flexible basée sur le système des colonnes pour créer des designs adaptables à toutes les tailles d'écran, des ordinateurs de bureau aux smartphones. Grâce à son intégration de JavaScript, il inclut également des fonctionnalités interactives comme des carrousels et des menus déroulants.</p>
            `;
        }
    } else if (category === 'outils') {
        if (skill === 'git') {
            content = `
                <h2>Git</h2>
                <p>Git est un système de contrôle de version distribué qui permet aux développeurs de suivre et de gérer les modifications apportées au code source d'un projet. Créé par Linus Torvalds, Git est essentiel pour la collaboration en équipe, car il permet à plusieurs développeurs de travailler simultanément sur un projet tout en minimisant les conflits. Avec Git, il est possible de créer des branches pour tester de nouvelles fonctionnalités, de revenir à des versions précédentes en cas de problème, et de fusionner les contributions des membres de l'équipe. Sa rapidité, sa fiabilité et sa flexibilité en font un outil indispensable dans le développement logiciel moderne.</p>
            `;
        } else if (skill === 'linux') {
            content = `
                <h2>Linux</h2>
                <p>**Linux** est un système d'exploitation open source basé sur le noyau Linux, créé par Linus Torvalds en 1991. Reconnu pour sa stabilité, sa sécurité et sa flexibilité, Linux est largement utilisé dans les serveurs, les systèmes embarqués, les superordinateurs et les environnements de développement. Il offre une grande personnalisation grâce à ses nombreuses distributions, comme Ubuntu, Fedora ou Debian, qui répondent à différents besoins. Linux est également très apprécié par les développeurs pour ses outils puissants en ligne de commande et son support robuste pour la programmation. Sa communauté active contribue constamment à son amélioration et à la création de nouvelles fonctionnalités.</p>
            `;
        } else if (skill === 'vscode') {
            content = `
                <h2>VS Code</h2>
                <p>VS Code (Visual Studio Code) est un éditeur de code léger et puissant de Microsoft. Gratuit et open source, il supporte plusieurs langages de programmation comme JavaScript, Python, et HTML. Avec des fonctionnalités comme l'auto-complétion, la coloration syntaxique et un terminal intégré, il est très populaire parmi les développeurs. Il est disponible sur Windows, macOS et Linux, et permet une grande personnalisation grâce aux extensions.</p>
            `;
        }
    } else if (category === 'data-science') {
        if (skill === 'pandas') {
            content = `
                <h2>Pandas</h2>
                <p>**Pandas** est une bibliothèque Python open source, utilisée pour la manipulation et l'analyse de données. Elle offre des structures de données flexibles et performantes, comme les DataFrames, qui permettent de travailler facilement avec des données tabulaires. Pandas facilite des tâches courantes telles que le nettoyage de données, l'agrégation et la manipulation des séries temporelles, et est très populaire dans le domaine de la data science.</p>
            `;
        } else if (skill === 'numpy') {
            content = `
                <h2>NumPy</h2>
                <p>**NumPy** est une bibliothèque Python fondamentale pour le calcul scientifique. Elle fournit un puissant objet array multidimensionnel (tableaux) et offre des fonctions pour effectuer des opérations mathématiques complexes sur ces tableaux, comme des calculs linéaires, des transformations statistiques et des manipulations de matrices. NumPy est largement utilisé dans la science des données, l'apprentissage automatique et l'ingénierie, car il permet de travailler efficacement avec de grandes quantités de données numériques.</p>
            `;
        }
    }

    modalSkillsDetails.innerHTML = content;
}

function closeSkillsModal() {
    modalSkills.style.display = 'none';
}

// Fermer le modal en cliquant à l'extérieur de la fenêtre du modal
window.addEventListener('click', function(event) {
    // Si l'utilisateur clique à l'extérieur de la fenêtre du modal (et non sur le contenu du modal), fermer le modal
    if (event.target === modalSkills) {
        closeSkillsModal();
    }
});
// Fonction pour ouvrir le modal avec les informations du parcours
function openParcoursModal(etape) {
    const modal = document.getElementById('parcours-modal');
    const modalDetails = document.getElementById('modal-parcours-details');
    
    modal.style.display = 'flex';
    
    let content = '';
    if (etape === 'lycee') {
        content = `
            <h2>Lycée</h2>
            <p>Obtention du Baccalauréat avec mention trés bien avec félicitation de jury, spécialité en sciences expérimentales. Cette étape m'a permis de développer des bases solides en mathématiques et en sciences, qui m'ont aidé à réussir dans mes études universitaires en informatique.</p>
        `;
    } else if (etape === 'universite') {
        content = `
            <h2>Université</h2>
            <li><strong>Licence 2 Informatique :</strong> Actuellement, j'approfondis mes compétences en <em>Java</em>, <em>développement web</em> (HTML, CSS, JavaScript, Bootstrap), et <em>Ocaml</em>. J'ai également travaillé sur des projets comme la création d'applications et la manipulation des automates.</li>
        <li><strong>Licence 1 Informatique :</strong> J'ai acquis des bases solides en <em>Python</em>, <em>C</em>, et <em>data science</em>. J'ai également exploré des thématiques liées aux sciences des données et à la modélisation écologique.</li>
        `;
    }
    
    modalDetails.innerHTML = content;
}

// Fonction pour fermer le modal
function closeParcoursModal() {
    const modal = document.getElementById('parcours-modal');
    modal.style.display = 'none';
}

// Fermer le modal en cliquant à l'extérieur
window.addEventListener('click', function (event) {
    const modal = document.getElementById('parcours-modal');
    if (event.target === modal) {
        closeParcoursModal();
    }
});
