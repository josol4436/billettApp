const navnValidering = /^[A-Za-z]+$/;
const telefonValidering = /^[0-9]+$/;
const epostValidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
//"epostRegex" er hentet fra: https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/
$("#kjop").click(function() {
    const film = $("#film").val();
    const antall = $("#antall").val();
    const fornavn = $("#fornavn").val();
    const etternavn = $("#etternavn").val();
    const telefon = $("#telefon").val();
    const epost = $("#epost").val();
    const billett = {
        film: film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefon: telefon,
        epost: epost
    };

        let feil = true;
        if (antall === "" || !telefonValidering.test(antall)){
            $("#antallError").html("Skriv inn ett heltall");
            feil = false;
        }
        else {
            $("#antallError").html("");
        }
        if (film === ""){
            $("#filmError").html("Feil ved input av film");
            feil = false;    }
        else {
            $("#filmError").html("");
        }
        if (fornavn === "" || !navnValidering.test(fornavn)){
            $("#fornavnError").html("Feil ved input av fornavn");
            feil = false;    }
        else {
            $("#fornavnError").html("");
        }
        if (etternavn === "" || !navnValidering.test(etternavn)){
            $("#etternavnError").html("Feil ved input av etternavn");
            feil = false;    }
        else {
            $("#etternavnError").html("");
        }
        if (telefon === "" || !telefonValidering.test(telefon)){
            $("#telefonError").html("Feil ved input av telefon nummer");
            feil = false;    }
        else {
            $("#telefonError").html("");
        }
        if (epost === "" || !epostValidering.test(epost)){
            $("#epostError").html("Feil ved input av epost");
            feil = false;    }
        else {
            $("#epostError").html("");
        }
        if(feil === false){
            alert("Error ved kjøp av billett, se felter med feilmelding");

        }
        else{
        console.log(billett)
        $.post("/lagre", billett, function (data) {
        });

        $("#film").val("");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefon").val("");
        $("#epost").val("");
    }
});