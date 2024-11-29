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

// Menu hamburger
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
// Sélectionne tous les liens du menu
const menuLinks = document.querySelectorAll('nav ul li a');

// Ajoute un gestionnaire d'événements à chaque lien
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('show')) { // Vérifie si le menu est ouvert
            navMenu.classList.remove('show'); // Ferme le menu
        }
    });
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
            <a href="https://github.com/ton-profil/portfolio" target="_blank" class="modal-link">Voir sur GitHub</a>
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
            <a href="https://github.com/ton-profil/automates" target="_blank" class="modal-link">Voir sur GitHub</a>
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
            <a href="https://github.com/ton-profil/ecosystem" target="_blank" class="modal-link">Voir sur GitHub</a>
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
function toggleTools(id) {
    const toolsList = document.getElementById(id);
    if (toolsList.style.display === "none") {
        toolsList.style.display = "block";
    } else {
        toolsList.style.display = "none";
    }
}