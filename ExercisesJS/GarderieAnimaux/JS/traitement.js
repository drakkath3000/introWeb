function btnCalculer_onclick()
{
    var Veterinaire, TypeAnimal, NbreJrs, Tarif, Montant, MontantTaxes, Service,Rabais, Salaire, NbreHeures;

    NbreJrs = parseInt(document.getElementById("txtNbreJours").value);
    Veterinaire = document.getElementById("lstVeterinaire").value;
    NbreHeures = parseInt(document.getElementById("txtNbreHeures").value);

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

    if (NbreJrs >=1 && NbreJrs < 5)
    {
        Rabais = 0;
    }
    else if (NbreJrs >= 5 && NbreJrs < 10)
    {
        Rabais = 0.05;
    }
    else if (NbreJrs >= 10 && NbreJrs < 30)
    {
        Rabais = 0.1;
    }
    else if (NbreJrs >= 30)
    {
        Rabais = 0.15;
    }

    switch(Veterinaire)
    {
        case "Audrey Bouchard": Salaire = 25;
        break;
        case "Stéphane Tremblay": Salaire = 35;
        break;
        case "Maxime Simard": Salaire = 40;
        break;
        case "Mélissa Caron": Salaire = 45;
        break;
    }

    Montant = NbreJrs * Tarif + Salaire * NbreHeures;
    Montant = Montant - Rabais * Montant;

    if (document.getElementById("chkServ").checked == true)
    {
        Montant = Montant + 5;
    }
    MontantTaxes = Montant + 0.05 * Montant +  0.09975 * Montant;

    if (document.getElementById("chkServ").checked == true)
    {
        Service = "avec";
        document.getElementById("lblMessage").innerHTML = "Veterinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+TypeAnimal+" est de "+MontantTaxes.toFixed(2)+" pour "+NbreJrs+" jours, "+Service+" service de toilettage";
    }
    else
    {
        Service = "sans"
        document.getElementById("lblMessage").innerHTML = "Veterinaire responsable est "+Veterinaire+". Le montant pour la garde de votre "+TypeAnimal+" est de "+MontantTaxes.toFixed(2)+" pour "+NbreJrs+" jours, "+Service+" service de toilettage";
    }
}
function radChien_onclick()
{
   document.getElementById("imgMeme").src = "img/dog.jpg";
}
function radChat_onclick()
{
    document.getElementById("imgMeme").src = "img/cat.jpg";
}