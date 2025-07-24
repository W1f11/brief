document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});
// Testez ce code directement dans la console
document.querySelector('.menu-toggle').addEventListener('click', () => {
    console.log('Bouton cliqué!'); // Doit s'afficher au clic
    document.querySelector('.nav-links').classList.toggle('active');
});
// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".title, .welcome-text", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2
});


gsap.utils.toArray(".scroll-container, .espaces, .tarifs, .contact").forEach(element => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const formulaire = document.querySelector("#formulaire-contact");

  formulaire.addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche le rechargement

    const nom = document.getElementById("nom").value.trim();
    const prenom = document.getElementById("prenom").value.trim();
    const email = document.getElementById("email").value.trim();
    const tel = document.getElementById("tel").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nom || !prenom || !email || !tel || !message) {
      alert("Veuillez remplir tous les champs avant d'envoyer le message.");
      return;
    }

    // Si tous les champs sont remplis, appel de la fonction d’envoi
    sendEmail(nom, prenom, email, tel, message);
  });
});

function sendEmail(nom, prenom, email, tel, message) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "essalhiwafaa01@gmail.com",
    Password: "***********", // ⚠️ À retirer en production
    To: "essalhiwafaa01@gmail.com",
    From: "essalhiwafaa01@gmail.com",
    Subject: "Message depuis le formulaire Workly",
    Body: `
      Nom : ${nom}<br>
      Prénom : ${prenom}<br>
      Email : ${email}<br>
      Tél : ${tel}<br>
      Message : ${message}
    `
  }).then(() => {
    alert("Message envoyé avec succès ! ✅");
    document.getElementById("formulaire-contact").reset(); // Reset le formulaire
  }).catch((error) => {
    alert("Erreur lors de l'envoi ❌ : " + error);
  });
}

