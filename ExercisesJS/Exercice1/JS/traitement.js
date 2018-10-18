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
//hh