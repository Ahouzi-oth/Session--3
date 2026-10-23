const prompt = require("prompt-sync")();
let notes = [];
let taille = prompt("la taille de tableau :");
let somme = 0;
let compteur = 0;
for (let i = 0; i < taille; i++) {
    notes[i] = Number(prompt("entrer la note " + (i + 1) + " : "));
    somme = somme + notes[i];
    if (notes[i] >= 14) {
        compteur += 1;
    }

}
console.log
let moyen = somme / taille;
console.log("la moyen est : ", moyen);