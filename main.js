let numeri = [2, 5, 8, 12, 24, 32];

let somma = numeri.reduce((acc, n)=> acc + n);

console.log(somma);

let media = somma / numeri.length;

media = media.toFixed(2);

console.log(media);

let valoriMinori = numeri.filter((numero)=> numero < media);

let valoriMaggiori = numeri.filter((numero)=> numero > media);

let quantitaValoriMinori = valoriMinori.length;

let quantitaValoriMaggiori = valoriMaggiori.length;

console.log(valoriMinori);

console.log(valoriMaggiori);

console.log(quantitaValoriMinori);

console.log(quantitaValoriMaggiori);

console.log(`La media dei numeri è ${media}, i valori minori della media sono ${quantitaValoriMinori} e sono (${valoriMinori}), i valori maggiori della media sono ${quantitaValoriMaggiori} e sono (${valoriMaggiori}).`);



