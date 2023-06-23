let HechizosTotal = 15;
let HechizosJerry = 13;
let HechizosTom = 12;
let HechizosMin = HechizosTotal * 80 / 100;

console.log("Los hechizos minimos requeridos para aprobar son: " + HechizosMin);

if (HechizosJerry >= HechizosMin) {
    console.log ("Jerry puede aprobar")
}
else {
    console.log("Jerry no puede aprobar")
}

if (HechizosTom >= HechizosMin) {
    console.log ("Tom puede aprobar")
}
else {
    console.log("Tom no puede aprobar")
}
