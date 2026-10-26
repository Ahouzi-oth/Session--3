let produits = ["Clavier", "Souris", "Écran", "Casque"];
let prix = [150, 80, 1200, 250];
let stocks = [10, 0, 5, 3];
let produitNul;
let somme = 0;
let PlusCher = prix[0];
let stockInferieur = 5;
let stockIn = [];
let total = 0;

for (i = 0; i < produits.length; i++) {
    console.log(produits[i], "=>", prix[i], "=>", stocks[i], );

    if (stocks[i] === 0) {
        produitNul = produits[i];
    }

    somme = stocks[i] * prix[i];
    console.log(" la valeur totale du stock en multipliant le prix", somme);

    if (prix[i] > PlusCher) {
        PlusCher = produits[i];
    }

    if (stocks[i] < stockInferieur) {
        stockIn[i] = produits[i];



    }

    total = total + somme;



}
console.log(" les noms des produits dont le stock est nul : ", produitNul);
console.log("total des prix", total);
console.log(" le nom du produit le plus cher : ", PlusCher);
console.log("les produits dont le stock est inférieur à 5 : ", stockIn);