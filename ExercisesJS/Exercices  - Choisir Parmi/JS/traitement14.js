function btnCalculer_onclick()
{ 
 	var Nbre1, Nbre2, Operateur, Nbre3;

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