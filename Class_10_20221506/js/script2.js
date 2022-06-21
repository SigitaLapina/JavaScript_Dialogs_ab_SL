

var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var peļņa_1 = (nauda * 0.0001) * 1;
var peļņa_2 = (nauda * 0.0002) * 2;
var peļņa_3 = (nauda * 0.0003) * 3;
var peļņa_4 = (nauda * 0.0004) * 4;
var peļņa_5 = (nauda * 0.0005) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = peļņa_1;
document.getElementById("procenti_2").innerHTML = peļņa_2;
document.getElementById("procenti_3").innerHTML = peļņa_3;
document.getElementById("procenti_4").innerHTML = peļņa_4;
document.getElementById("procenti_5").innerHTML = peļņa_5;


const cars = ["Saab", "Volvo", "BMW"]
cars.sort()




//mājas darbs par banku 

//** kods 29 rindiņas */
var userName = "Gita Liepa";
    account = 15000;
    gadi1 = 0.01;
    gadi2 = 0.02;
    gadi3 = 0.03;
    gadi4 = 0.04;
    gadi5 = 0.05;

    x1 = ( account * gadi1 ) * 1;
    x2 = ( account * gadi2 ) * 2;
    x3 = ( account * gadi3 ) * 3;
    x4 = ( account * gadi4 ) * 4;
    x5 = ( account * gadi5 ) * 5;

    //** 2.papilduzdevums: pamatsummas pieaugums

    x1g = ( account * gadi5 ) + account;
    x2g = ( x1g * gadi5 ) + x1g;
    x3g = ( x2g * gadi5 ) + x2g;
    x4g = ( x3g * gadi5 ) + x3g;
    x5g = ( x4g * gadi5 ) + x4g - account;

    //** 1.papilduzdevums: attēlot summas ar diviem simboliem aiz punkta 
    num = x5g;
    roundedString = num.toFixed(2);
    rounded = Number(roundedString);
    document.getElementById("banka").innerHTML = 'Cienījamā, ' + userName;
    document.getElementById("piedavajums").innerHTML = 'Mēs redzam ka, Jūsu, kontā ir ' + account + ' EUR. Uz tā pamata vēlamies, Jums, piedāvāt nogūldīt šo summu mūsu nogūldijuma kontā uz kādu no zemāk norādītajiem termiņiem.';
    document.getElementById("ieguvums1").innerHTML = '- uz vienu gadu, ar jūsu ieguvumu ' + x1 + ' EUR';
    document.getElementById("ieguvums2").innerHTML = '- uz diviem gadiem, ar jūsu ieguvumu ' + x2 + ' EUR';
    document.getElementById("ieguvums3").innerHTML = '- uz trim gadiem, ar jūsu ieguvumu ' + x3 + ' EUR';
    document.getElementById("ieguvums4").innerHTML = '- uz četriem gadiem, ar jūsu ieguvumu ' + x4 + ' EUR';
    document.getElementById("ieguvums5").innerHTML = '- uz pieciem gadiem, ar jūsu ieguvumu ' + x5 + ' EUR'+ ". Ja vēlēsieties saņemt procentus pie pamat summas, termiņā beigās, jūsu kopējais ieguvums būs " + rounded + " EUR ";
    document.getElementById("thnx").innerHTML = 'Ceram uz sadarbību, ' + userName;



     //** 4. uzdevums pāreja no diskrētiem mainīgajiem uz masīvu ( kods 12 rindiņas )

    const gadi = ["0.01", "0.02", "0.03", "0.04", "0.05"]; //** gadi ir domāti procenti gadā . 1.gads ir 1%, 2.gadi ir 2% utt */
    const bUser = [ "Andris Lielais", "15000"];
    var procenti;
    var reuzltats;
    var 
        i = 0 ;
    for ( let i = 1; i < 6; i++) {
        procenti=i; 
        rezultats=(bUser[1]*procenti)/100; 

        document.getElementById('piedavajums2').innerHTML=document.getElementById('piedavajums2').innerHTML + 'Ja jūs iegulīsiest to mūsu bankā uz '+i+' gadu, , tad pec gada Jūs saņemsiet '+rezultats+' EUR.<br>';
    }  