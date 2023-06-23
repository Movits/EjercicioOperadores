let NuggetsTotal = 43;
let Personas = 3;

let SobraNuggets = NuggetsTotal % Personas;
let NuggetsPorPersona = (NuggetsTotal - SobraNuggets) / Personas;

let NuggetsMufasa = NuggetsPorPersona;
let NuggetsScar = NuggetsPorPersona + SobraNuggets;
let NuggetsSimba = NuggetsPorPersona;

console.log("Mufasa tiene " + NuggetsMufasa + " nuggets");
console.log("Scar tiene " + NuggetsScar + " nuggets");
console.log("Simba tiene " + NuggetsSimba + " nuggets");

NuggetsScar -= SobraNuggets;
NuggetsSimba += SobraNuggets;

console.log("Mufasa termina con " + NuggetsMufasa + " nuggets");
console.log("Scar termina con " + NuggetsScar + " nuggets");
console.log("Simba termina con " + NuggetsSimba + " nuggets");
console.log("En total, comieron " + (NuggetsScar + NuggetsSimba + NuggetsMufasa) + " nuggets.");
