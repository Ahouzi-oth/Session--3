let ventes = [110, 75, 150, 180, 90, 130, 100, 160];
let CA = 0;
let maximum = ventes[0];
let minimum = ventes[0];
let ventesEx = 0;
let sommeEx = 0;
console.log("total de vents : ", ventes.length);
for (i = 0; i < ventes.length; i++) {
    CA += ventes[i];

    if (ventes[i] > maximum) {
        maximum = ventes[i];
    }

    if (ventes[i] < minimum) {
        minimum = ventes[i];
    }

    if (ventes[i] >= 130) {
        ventesEx++;
        sommeEx += ventes[i];
    }

}
console.log("le total est : ", CA);
console.log("le maximum est : ", maximum);
console.log("le minimum est : ", minimum);
console.log("les ventes exeptionnelles : ", ventesEx);
console.log("la somme des ventes exceptionnelles est : ", sommeEx);