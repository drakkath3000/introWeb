var Nbre1, Nbre2, Operateur, Nbre3, TabNomId;
TabNomId = new Array("txtNbre1", "txtNbre2", "txtOperateur");


function btnCalculer_onclick()
{
        if (valideFormats() === true)
        {
            traiteInfos();
        }
}
function valideFormats()
{
    var Valide;
    Valide = true;
    if (valideNo(document.getElementById("txtNbre1").value) === false)
    {
        document.getElementById("txtNbre1").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNbre1").style.backgroundColor = "white";
    }
    if (valideNo(document.getElementById("txtNbre2").value) === false)
    {
        document.getElementById("txtNbre2").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtNbre2").style.backgroundColor = "white";
    }
    if (valideOp(document.getElementById("txtOperateur").value) === false)
    {
        document.getElementById("txtOperateur").style.backgroundColor = "red";
        Valide = false;
    }
    else
    {
        document.getElementById("txtOperateur").style.backgroundColor = "white";
    }
    return Valide;

}
function valideNo(Chaine)
{
    return /^[0-9]+$/.test(Chaine);
}
function valideOp(Chaine)
{
    return /^[+*/-]$/.test(Chaine);
}
function traiteInfos()
{
    Nbre1 = parseFloat(document.getElementById("txtNbre1").value);
    Nbre2 = parseFloat(document.getElementById("txtNbre2").value);
    Operateur = document.getElementById("txtOperateur").value;

    switch(Operateur)
    {
        case "+" : Nbre3 = Nbre1 + Nbre2;
            break;
        case "-" : Nbre3 =Nbre1 - Nbre2;
            break;
        case "/" : Nbre3 = Nbre1 / Nbre2;
            break;
        case "*" : Nbre3 = Nbre1 * Nbre2;
            break;
    }

    document.getElementById("lblMessage").innerHTML = Nbre3;
}
