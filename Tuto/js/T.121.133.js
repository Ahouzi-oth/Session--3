const prompt = require("prompt-sync")();
let notes = [];
let taille = prompt("la taille de tableau :");
let somme = 0;
for (let i = 0; i < taille; i++) {
    notes[i] = Number(prompt("entrer la note : "));
    somme = somme + notes[i];

}
12
let moyen = somme / taille;
console.log("la moyen est : ", moyen);