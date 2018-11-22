var Nbre1, Nbre2, Operateur, Nbre3, TabNomId;
TabNomId = new Array("txtNbre1", "txtNbre2", "txtOperateur");


function btnCalculer_onclick()
{
    valideChampsObligatoires();
 	if (valideChampsObligatoires() === true)
    {
        traiteInfos();
    }

}
function valideChampsObligatoires() {

    var Valide;


        if ((valideExiste("txtNbre1") === true) && (valideExiste("txtNbre2") === true) && (valideExiste("txtOperateur") === true))
        {
            Valide = true;
        }
        return Valide;

}

function valideExiste(Id) {
    var Valide, i;
    i=0;

    for (i = 0; i < TabNomId.length; i++)
    {
        if (document.getElementById(Id).value == "")
        {
            document.getElementById(Id).style.backgroundColor = "red";
            Valide = false;
        }
        else
            {
            document.getElementById(Id).style.backgroundColor = "white";
            Valide = true;
        }
        return Valide;
    }
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
