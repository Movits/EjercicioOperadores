var HechizosTotal = 15;
var HechizosJerry = 13;
var HechizosTom = 12;
var HechizosMin = HechizosTotal * 80 / 100;

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
