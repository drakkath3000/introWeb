function btnCalculer_onclick()
{
    var PrixBase, PrixRabais, Age;

    PrixBase = parseInt(document.getElementById("txtBasePrix").value);
    Age = document.getElementById("txtAge").value;

    if (Age <= 16)
    {
        if (document.getElementById("radMidi").checked == true)
        {
            PrixRabais = PrixBase - 0.6 * PrixBase;
        }
        else if (document.getElementById("radSoir").checked == true)
        {
            PrixRabais = PrixBase - 0.4 * PrixBase;
        }
    }
    else
    {
        if (document.getElementById("radMidi").checked == true)
        {
            PrixRabais = PrixBase - 0.3 * PrixBase;
        }
        else
        {
            PrixRabais = PrixBase;
        }
    }
    console.log("Le prix sera de "+PrixRabais.toFixed(2)+"$");
}