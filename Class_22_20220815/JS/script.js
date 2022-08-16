//location
console.log(windows.location);
console.log(document.locatin);
console.log(location);

//URL ("pilnā" adrese)
console.log(location.href);

// protokols (http un https - datu plusmai caur tiklu, bet var būt arī lokālo aplikāciju darbināšanai)
console.log(location.protocol);

//host (IP un vārdiska IP adrese )
// majas darbs palasit par DNS 
console.log(local.host);

//port
//~palasīt par portiem un portu pielietošanu un to diapazoniem
console.log(location.host);

//web servisa ceļi
// "/" aiz host'a - web servisa "ceļu sakne"
console.log(location.pathname);

// meklēšanas kritēriji
//aiz jautājuma zīmes "?", tie var būt vairāki - savā starpā atdaliti ar "&" zīmi
console.log(location.search);

// HTML dokumenta apakšsadaļas nosaukums
console.log(location.hash)

// lietotāj avārds un parole 
// pirms hostname pie "@" zīmes
// no - https://developer.mozilla.org/en-US/docs/Web/API/URL/username
/*piemērs const url = new URL('https://anonymous:flabada@developer.mozilla.org/en-US/docs/Web/API/URL/username');
console.log(url.username) // Logs "anonymous"*/



//assign(), replace (), relode()
//svarīgi vai ir vai nav ieraksti iekš History - attiecigi iespēja pāvietoties ar back / next pogām
// vai noteikt lapas satura izgūšana no servera vai pārlūka cach
location.assign()
