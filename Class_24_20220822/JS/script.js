
var teksts = new Array();
teksts[0] = "1"
teksts[1] = "2"
teksts[2] = "3"

function myFunction() {
  let text = "Apstipriniet citas lapas atvēršanu\n Izvēlieties OK vai Cancel.";
  if (confirm(text) == true) {
    text = prompt ("Izvēlaties 1 - ja velaties pāriet uz citu lapu \n Izvēlieties 2 - ja velaties, lai lapu atver jauna cilnē Izvēlieties \n 3 - ja vēlaties redzēt sekunžu atskaiti līdz atveras lapa")
     
  }
   if (teksts == 0 );    
   window.open("https://www.w3schools.com/jsrEF/tryit.asp?filename=tryjsref_prompt1", "self");

   if (teksts == 1 );
   window.open("https://www.w3schools.com/jsrEF/tryit.asp?filename=tryjsref_prompt1", "_blank");

    }
//} else {
   // let text = "Lapu neatvēra, jo izvēlējāties Cancel";



   
  
 
   document.getElementById("demo").innerHTML = text;
   
