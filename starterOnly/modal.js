function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close=document.querySelector(".close");//je viens de creer cette classe afin de la fermer
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

//=========================================================================================================================
// Attachez un événement de clic à la croix de fermeture
close.addEventListener("click", closeModal);
// Fonction pour fermer la fenêtre modale
function closeModal() {
  modalbg.style.display = "none";
}
//=========================================================================================================================
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//=========================================================================================================================
// Sélectionnez le bouton d'inscription
const inscriptionBtn = document.querySelector(".btn-submit");
// Ajoutez un événement de clic au bouton d'inscription
inscriptionBtn.addEventListener("click", afficherMessage);

//========================================= function afficherMessage() ======================================================
// Fonction pour afficher le message "Vous êtes inscrit"
function afficherMessage() {
 inscriptionBtn.addEventListener("click", afficherMessage)
// Sélectionner l'élément div avec la classe "said"
const divResultat = document.querySelector(".resultat");
// Créer un élément de paragraphe
const paragraphe = document.createElement("p");
// Ajouter le texte "Je t'aime" au paragraphe
paragraphe.textContent = "vous etes inscrit (de la fonction AfficherMessage()) ";
// Ajouter le paragraphe à la div avec la classe "said"
divResultat.appendChild(paragraphe);
//return "Vous êtes inscrit"
return "vous etes inscrit"
}
//============================================ function verifierChaine(chaine) =====================================================
function verifierChaine(chaine) {
  // Vérifie si la longueur de la chaîne est supérieure à 2
  if (chaine.length > 2) {
    // Vérifie si la chaîne ne contient que des lettres (pas de chiffres)
    if (/^[a-zA-Z]+$/.test(chaine)) {
      alert("La chaîne est valide !");
    } else {
      alert("La chaîne ne doit contenir que des lettres !");
    }
  } else {
    alert("La chaîne doit avoir plus de deux lettres !");
  }
}
//============================================== function verifierEmail(email) =======================================================
function verifierEmail(email) {
  // Vérifie si l'email contient un "@" et un "."
  if (email.includes("@") && email.includes(".")) {
    alert("L'email est valide !");
  } else {
    alert("L'email n'est pas valide !");
  }
}
//============================================== function verifierChampsVides()  =======================================================
function verifierChampsVides() {
  var champs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
  
  // Parcourt chaque champ
  for (var i = 0; i < champs.length; i++) {
    // Vérifie si le champ est vide
    if (champs[i].value.trim() === '') {
      // Change la couleur de fond du champ pour indiquer qu'il est vide
      champs[i].style.backgroundColor = 'red';
      
      // Affiche un message d'erreur pour cet élément
      alert("Le champ " + champs[i].name + " est vide !");
      
      // Arrête la fonction ici
      return false;
    }
  }
  
  return true;
}
//=================================================== function validate() ===========================================================
function validate(){
  //verifierChampsVides()
  //=================================================================================================
/*    Recuperation de l'ensemble des input et textaera  */
// Au niveau de la fiche d'inscription, récuperation de la donnée prénom : 
  let balisePrenom = document.getElementById("first")
  let prenom= balisePrenom.value
  console.log(prenom) // affiche ce qui est contenu dans la balisePrenom
  //verifierChaine(prenom)
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée nom : 
  let baliseNom = document.getElementById("last")
  let nom= baliseNom.value
  console.log(nom) // affiche ce qui est contenu dans la baliseNom
  // verifierChaine(nom)
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée email : 
  let baliseEmail = document.getElementById("email")
  let email= baliseEmail.value
  console.log(email) // affiche ce qui est contenu dans la baliseEmail
  verifierEmail(email)
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée birtdate : 
  let baliseBirthdate = document.getElementById("birthdate")
  let dateanniverasaire= baliseBirthdate.value
  console.log(dateanniverasaire) // affiche ce qui est contenu dans la baliseBirthDate
  //=================================================================================================
  // Au niveau de la fiche d'inscription, récuperation de la donnée quantité : 
  let baliseQuantity = document.getElementById("quantity")
  let quantite= baliseQuantity.value
  console.log(quantite) // affiche ce qui est contenu dans la baliseQuantity
//=================================================================================================
  /*Recuperation des données concernant les radioButton*/
let baliseVille = document.querySelectorAll('input[name="location"]')//je créee une variable qui recuperera un tableau de radioButton
let ville = ""
for (let i = 0; i < baliseVille.length; i++) {
    if (baliseVille[i].checked) {
        ville = baliseVille[i].value
        break
    }
}
console.log(ville) // affiche la valeur du radio coché
 //=================================================================================================
/* Recuperation des donnees concernant les checkbox */
// Si true, la validation de l'acceptation des conditions est effectuée
let checkbox1 = document.getElementById("checkbox1")
let acceptationConditions = checkbox1.checked
//console.log(acceptationConditions); // affiche true ou false
if(acceptationConditions===true){
  console.log("J'ai lu et accepté les conditions d'utilisation.")
}else{
  console.log("Je n'ai pas lu et accepté les conditions d'utilisation.")
}
// Si true, la validation de l'acceptation pour recevoir des informations sur les nouveaux evenements est effectuée
let checkbox2 = document.getElementById("checkbox2")
let acceptationInformations = checkbox2.checked
//console.log(acceptationInformations);// affiche true ou false
if(acceptationInformations===true){
  console.log("Je souhaite être prévenu des prochains évènements.")
}else{
  console.log("Je ne souhaite pas être prévenu des prochains évènements.")
}
//================================================================================================= 
 // return false // formulaire inavalide
//  console.log("je suis passe par la fin de la fonction validate()")
 // On empêche le comportement par défaut
}


//=====================================================================================================================================
//=====================================================================================================================================
// function said(){
// const divResultat = document.querySelector(".resultat");
// // Créer un élément de paragraphe
// const paragraphe = document.createElement("p");
// // Ajouter le texte "Je t'aime" au paragraphe
// paragraphe.textContent = "vous etes inscrit dans la fonction said";
// // Ajouter le paragraphe à la div avec la classe "said"
// divResultat.appendChild(paragraphe);
// console.log("je suis passé par la fonction said")
// }
//=====================================================================================================================================
// function afficherDiv(div){
//   if (div ==="vous etes inscrit"){
//     console.log("j'ai recupere la variable")
//     const divSaid = document.querySelector(".said");
//     // Créer un élément de paragraphe
//     const paragraphe = document.createElement("p");
//     // Ajouter le texte "Je t'aime" au paragraphe
//     paragraphe.textContent = "vous etes inscrit AFFICHER ";
//     // Ajouter le paragraphe à la div avec la classe "said"
//     divSaid.appendChild(paragraphe);
//     console.log("je suis passé par la fonction afficherDiv")
//     //return "Vous êtes inscrit"
//   }
//   else{
// console.log("je n'ai rien reçu et donc je ne peux rien afficher")
//   }
  
 

// }


//said()
//test()
//console.log(afficherMessage());
//afficherDiv(afficherMessage());
