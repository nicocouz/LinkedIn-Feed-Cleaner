// Charger l'état du filtre depuis le Local Storage
let isHidingSuggested = JSON.parse(localStorage.getItem('hideSuggested')) || false;

// Fonction pour masquer ou afficher les publications suggérées
function toggleSuggestedPosts() {
    const posts = document.querySelectorAll('[data-sponsored="true"], [data-promoted="true"], .feed-shared-update-v2');

    posts.forEach(post => {
        const isPromotedOrSuggested =
            post.innerText.includes("Suggested") ||
            post.innerText.includes("Recommandé") ||
            post.innerText.includes("Promoted") ||
            post.innerText.includes("Sponsorisé");

        if (isPromotedOrSuggested) {
            // Appliquer la logique selon l'état ON/OFF
            if (isHidingSuggested) {
                post.style.display = "none"; // Cache les publications
            } else {
                post.style.display = ""; // Réinitialise l'affichage
            }
        }
    });
}

// Ajouter une capsule flottante
function addFloatingCapsule() {
    if (document.querySelector('#floating-capsule')) return;

    const capsule = document.createElement('div');
    capsule.id = 'floating-capsule';

    // Initialiser l'état
    updateFloatingCapsule(capsule);

    // Styles modernes et discrets de la capsule
    capsule.style.position = "fixed";
    capsule.style.bottom = "20px";
    capsule.style.left = "20px"; // Position en bas à gauche
    capsule.style.zIndex = "1000";
    capsule.style.padding = "10px 20px";
    capsule.style.borderRadius = "25px";
    capsule.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    capsule.style.fontSize = "14px";
    capsule.style.fontWeight = "500";
    capsule.style.cursor = "pointer";
    capsule.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"; // Limité à transform et box-shadow
    capsule.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    capsule.style.display = "flex";
    capsule.style.alignItems = "center";
    capsule.style.gap = "12px";
    capsule.style.backgroundColor = isHidingSuggested ? "#0e76a8" : "#dfe7f2"; // Couleurs fixes
    capsule.style.color = isHidingSuggested ? "white" : "#34495e"; // Texte adapté aux couleurs

    // Interaction au survol avec effet bounce
    capsule.addEventListener("mouseover", () => {
        capsule.style.transform = "scale(1.1) translateY(-2px)"; // Agrandissement léger + déplacement vers le haut
        capsule.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)"; // Accentuation de l'ombre
    });
    capsule.addEventListener("mouseout", () => {
        capsule.style.transform = "scale(1) translateY(0)"; // Retour à l'état initial
        capsule.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)"; // Retour de l'ombre initiale
    });

    // Interaction au clic
    capsule.addEventListener('click', () => {
        isHidingSuggested = !isHidingSuggested;

        // Mettre à jour l'état dans le Local Storage
        localStorage.setItem('hideSuggested', JSON.stringify(isHidingSuggested));

        // Mettre à jour la capsule visuellement
        updateFloatingCapsule(capsule);

        // Appliquer les changements au feed
        toggleSuggestedPosts();
    });

    document.body.appendChild(capsule);
}

// Met à jour le texte, les icônes et les couleurs de la capsule
function updateFloatingCapsule(capsule) {
    const isOn = isHidingSuggested;

    // Texte, icône et couleur dynamique (sans animation sur background-color)
    capsule.innerHTML = `
        <span style="font-size: 16px; font-weight: bold;">
            ${isOn ? "🙈" : "👁️"}
        </span>
        <span style="font-size: 14px;">
            ${isOn ? "Posts Hidden" : "Posts Visible"}
        </span>
    `;
    capsule.style.backgroundColor = isOn ? "#0e76a8" : "#dfe7f2"; // Bleu foncé et gris doux
    capsule.style.color = isOn ? "white" : "#34495e"; // Texte adapté aux couleurs
}

// Supprimer la capsule si elle existe
function removeFloatingCapsule() {
    const capsule = document.querySelector('#floating-capsule');
    if (capsule) capsule.remove();
}

// Vérifier dynamiquement si l'utilisateur est dans le feed LinkedIn
function isInLinkedInFeed() {
    return window.location.pathname === "/feed/";
}

// Gestion dynamique de la visibilité du bouton
function manageCapsuleVisibility() {
    if (isInLinkedInFeed()) {
        addFloatingCapsule();
        toggleSuggestedPosts(); // Appliquer les changements au chargement du feed
    } else {
        removeFloatingCapsule();
    }
}

// Observer les changements de navigation LinkedIn (SPA dynamique)
const observer = new MutationObserver(() => {
    manageCapsuleVisibility(); // Gérer la visibilité à chaque changement
});

observer.observe(document.body, { childList: true, subtree: true });

// Initialiser au chargement de la page
window.addEventListener('load', () => {
    manageCapsuleVisibility();
});
