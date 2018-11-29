function frmMembre_onclick()
{
    if (valideFormat() === true)
    {
        document.getElementById("lblMessageErreur").innerHTML = "";
        confirmEnvoi();
    }
    else
    {
        document.getElementById("lblMessageErreur").innerHTML = "Tous les champs ayant une étoile sont obligatoires.";
    }

}
function valideTousChampsObligatoires() {
    if (valideFormat() === true)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function valideFormat() {
    var Valide;
    Valide = true;
    if (valideNom(document.getElementById("txtNom").value) === false) {
        document.getElementById("txtNom").style.borderColor = "red";
        Valide = false;
    }
    else {
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
    if ((document.getElementById("txtAdresse").value) === "") {
        document.getElementById("txtAdresse").style.borderColor = "red";
        Valide = false;
    }
    else {
        document.getElementById("txtAdresse").style.borderColor = "";
    }
    return Valide;
}

function valideNom(chaine)
{
    return /^[A-Z]|[À-Ÿ]([a-z]|[]|(-[A-Z]|[À-Ÿ][a-z]|[à-ÿ]))/.test(chaine)
}

function valideCodePostal(chaine)
{
    return /^\D\d\D \D\d\D$|^$/.test(chaine)
}

function valideTel(chaine)
{
    return /^\d\d\d-\d\d\d-\d\d\d\d$|^[(]\d\d\d[)] \d\d\d-\d\d\d\d$/.test(chaine)
}

function valideCodePerm(chaine)
{
    return /^\D\D\D\D\d\d\d\d\d\d\d\d$|^$/.test(chaine)
}

function confirmEnvoi()
{
    confirm("VOS DONNÉES ONT BIEN ÉTÉ ENVOYÉES");
}
