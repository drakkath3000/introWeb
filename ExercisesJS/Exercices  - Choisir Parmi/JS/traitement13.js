function btnCalculer_onclick()
{ 
 	var NumSem, NomSem;

    NumSem = parseInt(document.getElementById("txtNumSem").value);

    switch(NumSem)
    {
        case 1 : NomSem = "Dimanche";
            break;
        case 2 : NomSem = "Lundi";
            break;
        case 3 : NomSem = "Mardi";
            break;
        case 4 : NomSem = "Mercredi";
            break;
        case 5 : NomSem = "Jeudi";
            break;
        case 6 : NomSem = "Vendredi";
            break;
        case 7 : NomSem = "Samedi";
            break;
    }

    document.getElementById("lblMessage").innerHTML = NomSem;
}