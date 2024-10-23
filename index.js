// Fonction pour vérifier l'âge
function verifierAge() {
  
    const majeur = confirm("Avez-vous 18 ans ou plus ?");

    if (!majeur) {
        // Si la personne répond non, retirer la page 'Boissons' du menu
        document.getElementById('cocktail').style.display = 'none';
        alert("Accès refusé. Vous n'avez pas accès aux boissons alcoolisées.");
    }
}

// Appel de la fonction lorsque la page est chargée
window.onload = verifierAge;
