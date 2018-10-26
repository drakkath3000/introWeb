function btnCalculer_onclick() {
    var NbreEtu, Nbre65, NbreAutre, NbreTotal, Rabais, Prix1, Prix2,Prix3;

    NbreEtu = parseInt(document.getElementById("txtEtu").value);
    Nbre65 = parseInt(document.getElementById("txt65").value);
    NbreAutre = parseInt(document.getElementById("txtAutre").value);
    NbreTotal = NbreEtu + Nbre65 + NbreAutre;
    Prix1 = NbreEtu * 12 + Nbre65 * 15 + NbreAutre * 20;

    if (NbreTotal >= 5) {
        Rabais = 0.1 * Prix1;
    }
    else
    {
        Rabais = 0;
    }

    Prix2 = Prix1-Rabais;
    Prix3 = Prix2+0.05*Prix2+0.09975*Prix2;

    console.log("Le prix final est de "+Prix3.toFixed(2)+" $");
}