var x = 60;
document.getElementById("dec").innerHTML = x

var bit number = 7;
var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);

//binars=xo-(2*(xo>>1)),xo=xo>>1

document.getElementById("bin").innerHTML = y;

//Uzrakstīt kodu ar diviem (trīm) mainīgajiem - decimāla skaitļa pārveidošana par bināro secību.