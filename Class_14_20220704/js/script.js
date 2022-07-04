console.log("skripta izpildes sakums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let word = "";
for (let i = 1; i < 11; i++) {
  //for ( ; ; ){}
  //for( nosacijums ciklu uzsākot ;nosacījums cikla turpināšanai  ;soļa_u veikšana )
  //sākumā tiek izpildīts sakuma daļā - tad pārbaudīts nosacījums, ja tas ir spēkā -> izpilda darbibas figūriekavās -> soļa izpilde ->nosacījuma izpilde -> utt līdz -> nav spēkā
  word = word + i + "<br>";
}
document.getElementById("automatic_count_classic").innerHTML = word;

let vards = "";
var i = 1;
for (; i < 5; ) {
  vards = vards + i + "<br>";
  i++;
}
document.getElementById("automatic_count_non_classic").innerHTML = vards;

let text = "";
var i = 1;
while (i < 5) {
  text = text + i + "<br>";
  i++;
}
document.getElementById("automatic_count_non_classic_while").innerHTML = text;

let even = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    even = even + i + "<br>";
  }
}
document.getElementById("even_numbers").innerHTML = even;

let uneven = "";
for (let i = 1; i < 11; i += 2) {
  if (i % 2 > 0) {
    uneven = uneven + i + "<br>";
  }
}
document.getElementById("uneven_numbers").innerHTML = uneven;

let txt = "if - else:<br>";

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    txt = txt + i + "pāra skaitlis<br>";
  } else {
    txt = txt + i + "nepāra skaitlis<br>";
  }
}
document.getElementById("automatic_count_odd_even_number").innerHTML = txt;

let words = "break:<br>";
for (let i = 1; i < 11; i++) {
  
  words = words + i + "<br>";
  if (i == 7 ){break}

}
document.getElementById("automatic_count_non_classic_break").innerHTML = words;


vards = "do while:<br>";
var i = 1;
do {
  vards = vards + i + "<br>";
  i++;
} while (i < 5 && i ==2)

document.getElementById("automatic_count_non_classic_do_while").innerHTML = vards;



