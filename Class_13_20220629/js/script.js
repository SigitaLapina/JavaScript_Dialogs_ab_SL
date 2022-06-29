console.log("skripta izpildes sakums:\n" + new Date() )
document.getElementById("manual_count").innerHTML ="1<br>2<br>3<br>4<br>";

let text = "";
for (let i = 1 ; i < 11 ; i++){
    //for ( ; ; ){}
    //for( nosacijums ciklu uzsākot ;nosacījums cikla turpināšanai  ;soļa_u veikšana )
   //sākumā tiek izpildīts sakuma daļā - tad pārbaudīts nosacījums, ja tas ir spēkā -> izpilda darbibas figūriekavās -> soļa izpilde ->nosacījuma izpilde -> utt līdz -> nav spēkā
    text = text + i + "<br>";
}
document.getElementById("automatic_count").innerHTML = text;

let even = "";
for (let i = 1 ; i < 11 ; i++){
    if (i % 2 == 0) {
        even = even + i + "<br>";
        }
    }
document.getElementById("even_numbers").innerHTML = even

let uneven = "";
for (let i = 1 ; i < 11 ; i+=2){
    if (i % 2 > 0) {
        uneven = uneven + i + "<br>";
        }
    }
document.getElementById("uneven_numbers").innerHTML = uneven


let txt = "";

for (let i = 1; i <= 10; i++){
    if(i % 2 == 0)
{
    txt = txt + i + "pāra skaitlis<br>"}
else
 {
       txt = txt + i + "nepāra skaitlis<br>"}

 }
document.getElementById("automatic_count_odd_even_number").innerHTML = txt;

