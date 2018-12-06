function frmMembre_onsubmit()
{
    var Valide = true;
    if (valideTousChampsObligatoires() === true)
    {
       if (valideFormat() === true)
        {
            document.getElementById("lblMessageErreur").innerHTML = "";
            if(confirm("Voulez-vous vraiment vous inscrire?") === false)
            {
                Valide = false;
            }
        }
        else
        {
            document.getElementById("lblMessageErreur").innerHTML = "Le format d'une ou plusieurs saisies est incorrect.";
            Valide = false;
        }

    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML = "Tous les champs ayant une étoile sont obligatoires.";
        Valide = false;
    }
return Valide;
}
function valideTousChampsObligatoires()
{
    var Valide;


    if ((valideExiste("txtNom") === true) && (valideExiste("txtPrenom") === true) && (valideExiste("txtAdresse") === true) && (valideExiste("txtVille") === true))
    {
        Valide = true;
    }
    return Valide;
}
function valideExiste(Id)
{
    var Valide;

    if (document.getElementById(Id).value == "")
    {
        Valide = false;
    }
    else
    {
        Valide = true;
    }
    return Valide;

}
function valideFormat()
{
    var Valide = true;
    if (valideNom(document.getElementById("txtNom").value) === false)
    {
        document.getElementById("txtNom").style.borderColor = "red";
        Valide = false;
    }
    else
        {
        document.getElementById("txtNom").style.borderColor = "";
    }
    if (valideNom(document.getElementById("txtPrenom").value) === false) {
        document.getElementById("txtPrenom").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtPrenom").style.borderColor = "";
    }
    if (valideNom(document.getElementById("txtVille").value) === false) {
        document.getElementById("txtVille").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtVille").style.borderColor = "";
    }
    if (valideCodePostal(document.getElementById("txtCodePostal").value) === false) {
        document.getElementById("txtCodePostal").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtCodePostal").style.borderColor = "";
    }
    if (valideTel(document.getElementById("txtTel").value) === false) {
        document.getElementById("txtTel").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtTel").style.borderColor = "";
    }
    if (valideCodePerm(document.getElementById("txtCodePerm").value) === false) {
        document.getElementById("txtCodePerm").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtCodePerm").style.borderColor = "";
    }

    return Valide;
}

function valideNom(chaine)
{
    return /^\D+-?\D+$/.test(chaine)
}

function valideCodePostal(chaine)
{
    return /^\D\d\D \D\d\D$|^$/.test(chaine)
}

function valideTel(chaine)
{
    return /^\d{3}-\d{3}-\d{4}$|^[(]\d{3}[)] \d{3}-\d{4}$/.test(chaine)
}

function valideCodePerm(chaine)
{
    return /^\D{4}\d{8}$|^$/.test(chaine)
}
function reinitialiser_onsubmit()
{
    var Valide;
    if(confirm("Voulez-vous vraiment réinitialiser?") === false)
    {
        Valide = false;
    }
    else
    {
        Valide = true;
    }
    return Valide;
}


