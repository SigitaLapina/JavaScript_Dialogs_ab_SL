/*
radiusNumber = Riņķa linija
PI
C =  riņķa līnijas garums
*/

var radiusNumber = 6371;
PI = 3.14;
C = 2 * PI * radiusNumber;
var num = C

document.getElementById("radiusNumber").innerHTML = radiusNumber;
document.getElementById("num").innerHTML = C;