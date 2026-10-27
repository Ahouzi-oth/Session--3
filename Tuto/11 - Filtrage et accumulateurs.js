// // 2.1

// let mots = ["chat", "ordinateur", "table", "programmation", "js", "ts"];

// let motsLongs = 0;

// for (let i = 0; i < mots.length; i++) {
//     console.log(mots[i], "=>", mots[i].length);
//     if (mots[i].length > 5) {
//         motsLongs++;
//     }

//     if (mots[i][0] === "t") {

//         console.log(mots[i]);
//     }
// }

// console.log("le nombre des mots long :", motsLongs);


// 2.2

let nombres = [4, 7, 2, 9, 5, 8];

let sommePairs = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] % 2 === 0) {
        sommePairs = sommePairs + nombres[i];
    }
}

console.log("la somme des nombre pairs : ", sommePairs);