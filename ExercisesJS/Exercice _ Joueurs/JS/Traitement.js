var NbreJoueurs, TabJoueur, TabPoint, Moyenne;
NbreJoueurs = 1;
TabJoueur = new Array(4);
TabPoint = new Array(4);
function btnAjouter_onclick()
{
    TabJoueur[NbreJoueurs - 1] = document.getElementById("txtNom").value;
    TabPoint[NbreJoueurs - 1] = parseInt(document.getElementById("txtPoints").value);
    gérerBoutons();
    NbreJoueurs = NbreJoueurs + 1;
    alert("1 joueur ajouté");
    document.getElementById("lblNbreJoueur").innerHTML = "Numéro du joueur "+NbreJoueurs;
}
function gérerBoutons()
{
    if (NbreJoueurs == 4)
    {
        document.getElementById("btnAjouter").disabled = true;
        document.getElementById("btnRechercher").disabled = false;
        document.getElementById("btnTrouverMoy").disabled = false;
        document.getElementById("btnTrouverMeilleur").disabled = false;
        document.getElementById("btnTrouverPire").disabled = false;
    }
}
function btnMoyenne_onclick()
{
    var Total=0, i;
    for (i = 0; i < TabPoint.length; i++)
    {
        Total += TabPoint[i];
    }
    Moyenne = Total/TabPoint.length;
    document.getElementById("lblReponse").innerHTML = "La moyenne de points est de "+Moyenne;
}
function btnMeilleur_onclick()
{
    var Meilleur = TabPoint[0], i;
    for (i = 0; i < TabPoint.length; i++)
    {
        if (TabPoint[i] > Meilleur)
        {
            Meilleur = TabPoint[i];
        }
    }
    document.getElementById("lblReponse").innerHTML = "Le meilleur pointage est "+Meilleur;
}
function btnPire_onclick()
{
    var Pire = TabPoint[0], i;
    for (i = 0; i < TabPoint.length; i++)
    {
        if (TabPoint[i] < Pire)
        {
            Pire = TabPoint[i];
        }
    }
    document.getElementById("lblReponse").innerHTML = "Le pire pointage est "+Pire;
}
