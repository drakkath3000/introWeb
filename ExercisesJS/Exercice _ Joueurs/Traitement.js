function btnAjouter_onclick()
{
    alert = "1 joueur ajouté";
    var NbreJoueurs = 0;
    if (NbreJoueurs < 4)
    {
        NbreJoueurs = NbreJoueurs + 1;
        document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur "+NbreJoueurs;
    }
    else
    {
        document.getElementById("btnAjouter").disabled = true;
    }
}
