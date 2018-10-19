function btnLivreKg_onclick()
{
    var PoidsLivre, Kg;

    PoidsLivre = parseFloat(document.getElementById("livreKg").value);
    Kg = PoidsLivre/2.2;

    console.log("Votre poids en kg est de" +Kg);
}
function btnTotKm_onclick()
{
    var MoyKmMois, TotKm;

    MoyKmMois = parseFloat(document.getElementById("TotKm").value);
    TotKm = MoyKmMois*60;

    console.log("Votre kilomètrage après 5 ans se situera autour de" +TotKm+" km");
}
function btnCANEuro_onclick()
{
    var ArgentCAN, TauxChangeEuro, Euro;

    ArgentCAN = parseFloat(document.getElementById("CANEurom").value);
    TauxChangeEuro = parseFloat(document.getElementById("CANEuroc").value);
    Euro = ArgentCAN*TauxChangeEuro;

    console.log("Le montant en euro est de "+Euro);
}
function btnCoutEssence_onclick()
{
    var Destination, Distance, Consommation, PrixLitre, Cout;

    Destination = document.getElementById("Destination").value;
    Distance = parseFloat(document.getElementById("Distance").value);
    Consommation = parseFloat(document.getElementById("Consommation").value);
    PrixLitre = parseFloat(document.getElementById("PrixLitre").value);
    Cout = (Distance / 100) * Consommation * PrixLitre;

    console.log("Le coût de l'essence pour se rendre à " + Destination + " est de " +Cout.toFixed(2)+" $");
}
function btnRestePaye_onclick()
{
    var Revenus, Loyer, Nourriture, Deplacements, RestePaye;

    Revenus = parseFloat(document.getElementById("Revenus").value);
    Loyer = parseFloat(document.getElementById("Loyer").value);
    Nourriture = parseFloat(document.getElementById("Nourriture").value);
    Deplacements = parseFloat(document.getElementById("Deplacements").value);
    RestePaye = (Revenus*12)/52-(Loyer*12)/52-(Nourriture*12)/52-(Deplacements*12)/52;

    console.log("L'argent restant par semaine avec ce salaire est de " +RestePaye.toFixed(2)+" $");
}
function btnTotalCT_onclick()
{
    var c1, c5, c10, c25, TotalCT;

    c1 = parseInt(document.getElementById("c1").value);
    c5 = parseInt(document.getElementById("c5").value);
    c10 = parseInt(document.getElementById("c10").value);
    c25 = parseInt(document.getElementById("c25").value);
    TotalCT = c1*0.01+c5*0.05+c10*0.1+c25*0.25

    console.log("Le total d'argent Canadian Tire est de "+TotalCT.toFixed(2)+" $");
}


