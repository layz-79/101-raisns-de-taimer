/* ==========================================
   OUVRIR LE SITE
========================================== */

function ouvrirSite() {

    document.getElementById("contenu").scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   RETOUR AU DEBUT
========================================== */

function retourAccueil() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ==========================================
   LES 101 RAISONS
========================================== */

const raisons = [

    "1. Tes yeux que je pourrais regarder pendant des heures sans me lasser.",
    "2. Tes cheveux qui te rendent unique à mes yeux.",
    "3. Tes lèvres qui sont tellement attirante.",
        "4. Parce que tu es si belle au final.",
        "5. T’es gentille.",
        "6. T’es unique.",
        "7. J’aime comment tu m’écoutes moi et mes problèmes.",
        "8. Ta voix.(Omgg!!)",
        "9. La façon dont tu prends soin de moi quand quelque chose ne va pas.",
        "10. Ton rire tellement mignon.",
        "11. J’aime ton cœur.",
        "12. Quand tu me dis je t’aime.",
        "13. Ton humour (même si je suis plus drôle)",
        "14. Quand tu essaies de me remonter le moral.",
        "15. J’aime l’amour que tu me donnes",
        "16. J’aime rêver de toi.",
        "17. Tes outfit !",
        "18. Quand tu m’engueules à chaque fois que je me rabaisse.",
        "19. Quand tu t’inquiètes pour moi.",
        "20. Tu es différente des autres.",
        "21. Tu as un cœur pur.",
        "22. Tu illumines ma vie même quand ça va pas.",
        "23. Parce que tu occupes une place importante dans mon cœur.",
        "24. Parce que tu es la force dont j’ai besoin chaque jour.",
        "25. Parce que je suis le garçon le plus chanceux car je t’ai dans ma vie.",
        "26. Parce que tu me prouves qu’une relation saine existe.",
        "27. Parce que tu es la fille dont j’ai toujours rêvé.",
        "28. Parce que tu m’as fait découvrir le véritable amour.",
        "29. Parce que tu me rends spécial au yeux de tout le monde.",
        "30. Tu m’aides à être un homme meilleur un peu plus de jour en jour.",
        "31. Tu fais de moi l’homme le plus heureux de la Terre.",
        "32. Tu es toujours fière de moi.",
        "33. Tu crois toujours en moi.",
        "34. Tu es tellement gentille même avec les gens qui ne mérite pas.",
        "35. Quand tu me comprends facilement.",
        "36. Ta manière d’être lorsque tu es contente.", 
        "37. Quand tu rigoles pour tout et pour rien.",
        "38. Parce que j’ai découvert de nombreuses choses avec toi.",
        "39. Parce que tu me comprends sans que j’ai à parler.",
        "40. Parce que tu me donnes envie de réussir quoi qu’il arrive.",
        "41. Parce que tu fais ressortir le meilleur de moi.",
        "42. Tes blagues de merde.",
        "43. Ta jalousie.",
        "44. Quand tu me complimentes.",
        "45. Parce que depuis le début t’as toujours été là.",
        "46. Parce que t’es la seule que je veux aimé jusqu’à ma mort.",
        "47. Parce que même si c’est rare t’arrive à me rassurer.",
        "48. Ton côté maman.",
        "49. Ton regard j’en suis tellement amoureux.",
        "50. Parce que tu me manques même après qu’on s’est parlé y’a pas longtemps.",
        "51. Parce que ton bonheur me rend heureux.",
        "52. T’es ma princesse.",
        "53. Ma mère croit en nous.",
        "54. Ma petite rousse à moi.",
        "55. Parce que y’a Vaia !",
        "56. Parce que t’es ma pré femme.",
        "57. Parce que j’aime quand t’es à fond dans quelque chose.",
        "58. Parce que tu t’intéresses à ce que j’aime jusqu’à en devenir fan.",
        "59. Parce que tu me donne le sourire.",
        "60. Parce que mon cœur te choisira toujours.",
        "61. Parce qu’un « je t’aime » ne suffit pas à expliquer ce que je ressens pour toi.",
        "62. Parce que t’es la meilleure chose qui soit arrivée dans ma vie.",
        "63. Parce que j’aime regarder des photos pendant des heures.",
        "64. Parce que t’es mon âme sœur.",
        "65. Parce que je pensais pas un jour que j’allais continuer ma vie.",
        "66. Parce que tu m’as sauvé.",
        "67. Parce que tu veux toujours mon bonheur.",
        "68. Parce que je souris comme un gogole devant tes message.",
        "69. Parce que tu me redonne confiance en moi.",
        "70. Parce que t’es magnifique.",
        "71. T’as un corps de fou.",
        "72. Parce que t’es ma MJ.",
        "73. Parce que t’es tellement canon dans une robe.",
        "74. Parce que depuis que t’es dans ma vie je commence à aimer certains chose que t’aime déjà.",
        "75. Parce que je vois déjà nos enfants.",
        "76. Parce que je tombe amoureux de toi un peu plus chaque jour.",
        "77. La confiance que tu me donnes.",
        "78. Quand tu me dis je t’aime.",
        "79. Tes hauls.",
        "80. Tes surnoms.",
        "81. Parce que tu m’as rendu fou de toi.",
        "82. Parce que t’es la femme que je veux aimer toute ma vie.",
        "83. Quand tu me dis que je suis beau.",
        "84. Parce que mon cœur t’a choisi.",
        "85. T’as rendu toutes les autres filles inintéressantes à mes yeux.",
        "86. Je me sens bien avec toi.",
        "87. Parce que j’aime en apprendre plus sur toi de jour en jour.",
        "88. Parce que j’aime quand t’es direct.",
        "89. Parce que j’aime quand tu parles attentivement de quelque chose que t’aime.",
        "90. Parce que j’aime quand tu prouves que je suis à toi.",
        "91. Parce que j’imagine pas ma vie sans toi.",
        "92. Parce que tu me force jamais à parler.",
        "93. Parce que t’as pris le temps de parler de moi à ta mère (je l’aime trop).",
        "94. Tu fais toujours tout pour rendre notre relation meilleure.",
        "95. Parce que grâce à toi je retrouve mon sourire de petit garçon.",
        "96. Parce que tu me comprends sans que j’ai à parler.",
        "97. Parce que tu prends le temps à chaque fois d’exprimer ce que tu ressens pour moi.",
        "98. Parce que tu as quelque que personne n’a.",
        "99. Parce que tu me fais confiance.",
        "100. Parce que sans toi je ne suis rien.",
        "101. Parce que tout simplement je t’aime plus que tout au monde."
];


/* ==========================================
   AFFICHER LES RAISONS
========================================== */

const container = document.getElementById("raisons");

raisons.forEach((raison, index) => {

    const carte = document.createElement("div");

    carte.classList.add("raison");

    carte.innerHTML = `
        <span class="raison-numero">
            ${String(index + 1).padStart(3, "0")}
        </span>

        <p>${raison}</p>
    `;

    container.appendChild(carte);

});


/* ==========================================
   COEURS FLOTTANTS
========================================== */

const heartsContainer = document.querySelector(".hearts");


function creerCoeur() {

    const coeur = document.createElement("div");

    coeur.classList.add("heart");

    coeur.innerHTML = "♥";

    coeur.style.left = Math.random() * 100 + "vw";

    coeur.style.fontSize =
        (Math.random() * 18 + 10) + "px";

    coeur.style.animationDuration =
        (Math.random() * 6 + 5) + "s";

    heartsContainer.appendChild(coeur);


    setTimeout(() => {

        coeur.remove();

    }, 11000);

}


/* Créer régulièrement des petits cœurs */

setInterval(creerCoeur, 700);


/* Quelques cœurs dès le chargement */

for (let i = 0; i < 10; i++) {

    setTimeout(creerCoeur, i * 300);

}
