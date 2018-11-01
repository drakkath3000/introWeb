function btnCalculer_onclick()
{
    var Veterinaire, TypeAnimal, NbreJrs, Tarif, Montant, MontantTaxes, Service;

    NbreJrs = parseInt(document.getElementById("txtNbreJours").value);
    Veterinaire = document.getElementById("lstVeterinaire").value;

    if (document.getElementById("radChien").checked == true)
    {
        TypeAnimal = "Chien";
        Tarif = 18.5;
    }
    else if (document.getElementById("radChat").checked == true)
    {
        TypeAnimal = "Chat";
        Tarif = 16.95;
    }

    Montant = NbreJrs * Tarif;

    if (document.getElementById("chkServ").checked == true)
    {
        Montant = Montant + 5;
    }
    MontantTaxes = Montant + 0.05 * Montant +  0.09975 * Montant;

    if (document.getElementById("chkServ").checked == true)
    {
        Service = "avec";
        console.log("Veterinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+TypeAnimal+" est de "+MontantTaxes.toFixed(2)+" pour "+NbreJrs+" jours, "+Service+" service de toilettage");
    }
    else
    {
        Service = "sans"
        console.log("Veterinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+TypeAnimal+" est de "+MontantTaxes.toFixed(2)+" pour "+NbreJrs+" jours, "+Service+" service de toilettage");
    }
}