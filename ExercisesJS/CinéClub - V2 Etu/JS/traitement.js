function btnCalculer_onclick()
{
    var PrixBase, PrixRabais, Age, Moment, Film;

    PrixBase = parseInt(document.getElementById("txtBasePrix").value);
    Age = document.getElementById("txtAge").value;
    Film = document.getElementById("lstOptions").value;

    if (document.getElementById("chkMiSession").checked == true)
    {
        if (Age <= 16)
        {
            if (document.getElementById("radMidi").checked == true)
            {
                Moment = "midi";
                PrixRabais = PrixBase - 0.6 * PrixBase;
            }
            else if (document.getElementById("radSoir").checked == true)
            {
                Moment = "soir";
                PrixRabais = PrixBase - 0.4 * PrixBase;
            }
        }
        else
        {
            if (document.getElementById("radMidi").checked == true)
            {
                Moment = "midi";
                PrixRabais = PrixBase - 0.3 * PrixBase;
            }
            else
            {
                Moment = "midi";
                PrixRabais = PrixBase;
            }
        }
    }
    else
    {
        if (document.getElementById("radMidi").checked == true)
        {
            Moment = "midi";
            PrixRabais = PrixBase;
        }
        else if (document.getElementById("radSoir").checked == true)
        {
            Moment = "soir";
            PrixRabais = PrixBase;
        }
    }
    console.log("Un billet du "+Moment+" pour un spectateur de "+Age+" ans coûte $"+PrixRabais.toFixed(2)+" pour le film "+Film+".");
}