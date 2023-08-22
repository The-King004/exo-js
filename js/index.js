console.log("********** Debut de l'exo ********");

// addiion de deux nombres
var A, B, S;
 A = 12;
 B = 13;
 S = A + B;
console.log(S);

// moyenne
var c, d, e, f;
c = 5
d = 38
e = 120
f = c + d + e
console.log(f);
var g = f/3;
console.log(g);

// concatenation

var A = ("je suis le roi de toute la citee"), B = (" et nul ne pourra de me detruire"), C;
C = A + B
console.log(A);
console.log(B);
console.log(C);

// parite

var A = 5;
if(A % 2==0){
    console.log("A est un nombre paire");
}
else{
    console.log("A est un nombre impaire");
}

// posi ou nega

var A = 3;
if(A > 0){
    console.log(A+ " est positif");
}
else if(A < 0){
    console.log(A+ " est negatif");
}
else{
    console.log(A+ " est null");
}

// minuscule

var minus = "NO NO NO NO NOOOOOOOOOOOOOOOH";
console.log(minus);
console.log(minus.toLowerCase());

// nombre de caractere

var chaine = "do nothing";
console.log(chaine.length);

// verification

var T = "je suis le roi de toute la citee et nul ne pourra de me detruire",
    verification = T.endsWith("JE");
console.log(T);
console.log(verification);

// aleatoire
 var aleatoire = Math.floor(Math.random() * 100);
 console.log(aleatoire);

//  exo sur les conditions

// comparaison

var A = 14, B = 16;
if(A > B){
    console.log("est le plus grand " + A);
}
else if(A < B){
    console.log("est le plus grand " +B);
}

// divisible par 3

var A = 6;
if(A % 3==0){
    console.log(A + " est un nombre divisible par 3");
}
else{
    console.log(A + " est un nombre non divisible par 3");
}

// multiple de 5

var multi = 645;
if(multi % 5 == 0){
    console.log(multi + " est un multiple de 5");
}
else{
    console.log(multi + " n'est pas un multiple de 5");
}

//programme qui determine si une personne est majeur ou mineur
 var age = 20;
 if(age >= 18){
    console.log("vous ete majeur");
 }else{
    console.log("vous ete mineur");
 }

// nombre croissant
var first = 40, second = 26, third = 33;
if((first < second) && (first < third) && (second< third)){
    console.log(first +' '+ second +' '+ third);
}else if((second < first) && (second < third) && (first < third)){
    console.log(second +' '+ first +' '+ third);
}else if((second < first) && (second < third) && (third < first)){
    console.log(second +' '+ third +' '+ first);
}else if((third < first) && (third < second) && (second < first)){
    console.log(third +' '+ second +' '+ first);
}else if((third < first) && (third < second) && (first < second)){
    console.log(third +' '+ first +' '+ second);
}else {
    false;
}

// determination

var annee = 2015
if((annee % 4 == 0) || (annee % 100 == 0)){
    console.log("annee bissextile");
}

// 





